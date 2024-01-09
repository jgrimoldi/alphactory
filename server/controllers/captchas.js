import { validateCaptcha } from '../schema/captcha.js';
import { CaptchaModel } from '../models/captcha.js';

export class CaptchaController {
  static async verifyCaptcha (req, res) {
    const result = validateCaptcha(req.body);

    if (result.error) {
      return res.status(422).json({ error: JSON.parse(result.error.message) });
    }

    const { status, message } = await CaptchaModel.verifyCaptcha({ data: result.data });

    res.status(status).send(message);
  }
}
