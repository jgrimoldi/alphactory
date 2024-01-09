import z from 'zod';

const captchaSchema = z.object({
  token: z.string()
});

export function validateCaptcha (object) {
  return captchaSchema.safeParse(object);
}
