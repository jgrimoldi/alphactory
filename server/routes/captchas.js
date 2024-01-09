import { Router } from 'express';
import { CaptchaController } from '../controllers/captchas.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';

export const captchaRouter = Router();

captchaRouter.post('/', asyncHandler(CaptchaController.verifyCaptcha));
