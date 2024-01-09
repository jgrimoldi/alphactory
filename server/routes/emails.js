import multer from 'multer';
import { Router } from 'express';
import { EmailController } from '../controllers/emails.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';

export const emailRouter = Router();
const upload = multer({ dest: 'uploads/' });

emailRouter.post('/', upload.single('document'), asyncHandler(EmailController.sendEmail));
