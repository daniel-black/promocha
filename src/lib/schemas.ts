import { z } from "zod";

// Auth form
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


// New promocode form
export const NewPromocodeFormSchema = z.object({
  code: z.string().trim().toUpperCase()
    .min(1, {
      message: 'Code must be at least one character'
    })
    .max(60, {
      message: 'Code must be less than 60 characters'
    }),
  type: z.string(),
  discount: z.number()
    .min(0.01, {
      message: 'Discount must be at least 0.01'
    }),
  maxDiscount: z.number().min(0.01, {
      message: 'Discount must be at least 0.01'
    }).nullish(),
  start: z.date().nullish(),
  end: z.date().nullish()
}).required();

export type NewPromocodeFormSchemaType = z.infer<typeof NewPromocodeFormSchema>;