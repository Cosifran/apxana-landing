"use client";
import axios from "axios";
import { toast } from "sonner";
// Import components
import InputComponent from "./ui/InputComponent";
//Import react hooks
import { useState } from "react";
//Import form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
// Import motion
import { motion } from "motion/react";
import { fadeInUp, fadeInLeft, fadeInRight, viewportConfig } from "./animations/motion-variants";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      setIsLoading(true);
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      const result = await axios.post("/api/contact", formData);

      if (result.status === 201) {
        toast.success(`Solicitud enviada, te contactaremos pronto.`);
        setIsLoading(false);
        reset();
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("No se pudo enviar la solicitud.");
      console.error(error);
    }
  }
  return (
    <div
      id="contacto"
      className="py-20 bg-gradient-to-b from-[#f4f2fc] to-[#eae6f7]"
    >
      <div className="container mx-auto px-4 md:px-16 lg:px-12 max-w-7xl">
        {/* Encabezado animado */}
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2e1746] mb-4">
            Contacto
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Cuentanos sobre tu proyecto. Nuestro equipo responderá en menos de
            24 horas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Formulario - entrada desde izquierda */}
          {!isLoading && (
            <motion.form 
              onSubmit={handleSubmit(onSubmit)}
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                <div className="space-y-5">
                  <div>
                    <InputComponent
                      placeholder="Nombre y empresa"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <InputComponent
                        placeholder="Email"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <InputComponent
                        placeholder="Teléfono"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <textarea
                    {...register("message")}
                    id="message"
                    placeholder="Cuentanos tu idea..."
                    rows={5}
                    className="w-full pl-5 pr-4 py-3 rounded-lg bg-background 
                  text-foreground placeholder-muted-foreground focus:outline-none 
                  focus:ring-2 focus:ring-primary border-2 border-border hover:border-primary/50 
                  transition-all duration-200 text-base resize-none"
                    aria-label="Mensaje"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-[#2e1746] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#5639d6] transition"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </div>
            </motion.form>
          )}
          {isLoading && (
            <motion.div 
              className="flex justify-center items-center h-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="animate-spin rounded-full h-15 w-15 border-t-2 border-b-2 border-primary"></div>
            </motion.div>
          )}
          
          {/* Card derecho - entrada desde derecha */}
          <motion.div 
            className="relative flex flex-col justify-center bg-gradient-to-br from-[#f8f6ff] to-[#ece9f9] rounded-2xl p-10 shadow-md border border-gray-100 text-center"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg text-[#2e1746] font-medium leading-relaxed mb-6">
              En <span className="font-bold text-[#6A4FFF]">APXANA TECH</span>{" "}
              creemos que la tecnología no solo transforma empresas, sino
              también las oportunidades de las personas detrás de ellas.
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#2e1746] tracking-widest leading-snug">
              ¿LISTOS PARA TRANSFORMAR
              <br />
              SU EMPRESA CON NOSOTROS?
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
