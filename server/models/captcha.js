import 'dotenv/config';
import axios from 'axios';

export class CaptchaModel {
  static verifyCaptcha = async ({ data }) => {
    const googleVerifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.VITE_RECAPTCHA_SECRET}&response=${data.token}`;

    try {
      const response = await axios.post(googleVerifyURL);
      const { success } = response.data;

      return { status: 200, message: { success } };
    } catch (error) {
      return { status: 500, message: error };
    }
  };
}
