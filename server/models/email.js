import * as fs from 'node:fs';
import { sendEmail } from '../services/sendEmail.js';

export class EmailModel {
  static async sendEmail ({ data }) {
    try {
      const info = await sendEmail(data);

      if (data?.document) {
        fs.unlink(data?.document?.path, (err) => {
          if (err) console.error(err);
        });
      }

      return { status: 200, message: { info } };
    } catch (error) {
      return { status: 500, message: error };
    }
  }
}
