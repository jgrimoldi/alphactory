import axios from 'axios';

export async function reCaptcha ({ recaptcha }) {
  try {
    const token = await recaptcha.current.executeAsync();
    const response = await axios.post(import.meta.env.VITE_RECAPTCHA_SERVER, { token });
    return response.data;
  } catch (error) {
    throw new Error({ error: 'An error occurred while verifying the captcha' });
  }
}
