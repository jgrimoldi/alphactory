import { EmailModel } from '../models/email.js';
import { validateEmail } from '../schema/email.js';

export class EmailController {
  static async sendEmail (req, res) {
    const result = await validateEmail({ ...req.body, document: req.file });

    if (result.error) {
      return res.status(422).json({ error: JSON.parse(result.error.message) });
    }

    const { status, message } = await EmailModel.sendEmail({ data: result.data });

    res.status(status).send(message);
  }
}
