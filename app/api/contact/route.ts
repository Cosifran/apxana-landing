// Import db
import { db } from "@/lib/db";
// Import next response
import { NextResponse } from "next/server";
// Import contact form schema
import { contactFormSchema } from "@/lib/validations/contact";
// Import zod error
import { ZodError } from "zod";
// Import send email use case
import { SendEmailUseCase } from "@/application/use-cases/sendEmail.usecase";
// Import resend email service
import { ResendEmailService } from "@/infrastructure/services/resend.service";

export async function POST(req: Request) {
  try {
    const values = await req.formData();

    // Validación de campos
    const validatedFields = contactFormSchema.parse({
      name: values.get("name"),
      email: values.get("email"),
      phone: values.get("phone"),
      message: values.get("message") ? values.get("message") : "",
    });

    // Creación del contacto
    const result = await db.contact.create({
      data: validatedFields,
    });

    // Creación del servicio de envío de email
    const resendService = new ResendEmailService(process.env.RESEND_API_KEY!);

    // Creamos el caso de uso
    const sendEmail = new SendEmailUseCase(resendService);

    // Envío del email
    await sendEmail.execute({
      from: "APXANA TECH <apxantech@apxana.com.co>",
      to: ["apxanatech@gmail.com"],
      subject: "Nuevo contacto",
      html: `
        <p>Nombre: ${validatedFields.name}</p>
        <p>Email: ${validatedFields.email}</p>
        <p>Teléfono: ${validatedFields.phone}</p>
        <p>Mensaje: ${validatedFields.message || "No hay mensaje"}</p>
      `,
    });

    // Respuesta exitosa
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    // Manejo de errores de validación de Zod
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.flatten().fieldErrors as Record<string, string[]>,
        },
        { status: 400 }
      );
    }

    // Manejo de otros errores (por ejemplo, errores de base de datos)
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        error: "Error al enviar el formulario.",
      },
      { status: 500 }
    );
  }
}
