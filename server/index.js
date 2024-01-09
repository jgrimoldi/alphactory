import express from 'express';
import { corsOptions } from './middlewares/cors.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { emailRouter } from './routes/emails.js';
import { captchaRouter } from './routes/captchas.js';

const app = express();

app.use(corsOptions());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.disable('x-powered-by');

app.use('/api/captcha', captchaRouter);
app.use('/api/email', emailRouter);

app.use((req, res, next) => {
  const err = new Error('This parameter does not exist');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

// PORT
const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}/api/`);
});
