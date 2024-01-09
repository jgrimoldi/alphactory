import z from 'zod';

const emailSchema = z.object({
  name: z.string({
    required_error: 'Name is Required'
  }).min(4, { message: 'Name must be at least 4 characters long' }),
  email: z.string({
    required_error: 'Email is Required'
  }).email({ message: 'You must enter a valid email address' }),
  subject: z.string({
    required_error: 'Subject is Required'
  }).min(1, { message: 'Subject must have at least 1 character' }),
  message: z.string({
    required_error: 'Message is Required'
  }).min(2, { message: 'The message must have at least 2 characters' }),
  document: z.object({
    originalname: z.string(),
    path: z.string()
  }).optional()
});

export function validateEmail (object) {
  return emailSchema.safeParseAsync(object);
}
