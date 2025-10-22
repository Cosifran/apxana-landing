import * as z from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(3, {
    message: "El nombre debe tener al menos 3 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingrese un correo electrónico válido.",
  }),
  phone: z.string().min(10, {
    message: "Por favor ingrese un número de teléfono válido.",
  }),
  message: z.string().optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
