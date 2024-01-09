export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send({ error: err.message || 'Hubo un error en el servidor.' });
};
