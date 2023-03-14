import { z } from "zod";

export const FormSchema = z.object({
  email: z.string().trim().email({
    message: 'Must provide a valid email'
  }),
  password: z.string().trim()
    .min(8, {
      message: 'Password must be more than 8 characters'
    })
    .max(16, {
      message: 'Password must be less than 16 characters'
    })
}).required();

export type FormSchemaType = z.infer<typeof FormSchema>;