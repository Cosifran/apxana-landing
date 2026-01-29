"use client";

import Image from "next/image";
import { ShieldCheck, Users, Target } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewportConfig } from "./animations/motion-variants";

export default function We() {
  const values = [
    {
      icon: <Target className="w-5 h-5 text-[#664270]" />,
      title: "Excelencia",
      desc: "Nos comprometemos con la calidad, precisión y cumplimiento en cada proyecto.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#664270]" />,
      title: "Confianza",
      desc: "Creemos en relaciones claras, éticas y de confianza con nuestros clientes.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#664270]" />,
      title: "Compromiso",
      desc: "Tu éxito es nuestro propósito.",
    },
  ];

  const team = [
    {
      name: "Francisco Estrada Flores",
      role: "Fundador",
      img: "/assets/fran_img.png",
    },
    {
      name: "Andres Ospino Mejía",
      role: "Fundador",
      img: "/assets/team-andres.jpeg",
    },
    {
      name: "Jan Ospino",
      role: "Fundador",
      img: "/assets/jan_img.jpeg",
    },
  ];

  return (
    <div
      id="nosotros"
      className="relative py-24 bg-gradient-to-b from-[#d9d6e8] to-[#c9c7da]"
    >
      <div className="container mx-auto px-4 md:px-16 lg:px-12 max-w-7xl">
        {/* Encabezado animado */}
        <motion.div 
          className="text-center mb-16 max-w-2xl mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2e1746] mb-4">
            Nosotros
          </h2>
          <p className="text-gray-600 text-lg">
            APXANA TECH nace para conectar estrategia y ejecución. Nuestro
            equipo combina experiencia empresarial con dominio técnico para
            impulsar la innovación.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Misión y valores - entrada desde izquierda */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="text-xl font-semibold text-[#664270]">Misión</h3>
            <p className="text-gray-600 mb-6">
              En APXANA TECH, ayudamos a las empresas a potenciar su
              transformación digital mediante soluciones tecnológicas
              personalizadas. Con nuestras soluciones en consultoría de
              transformación digital, desarrollo de software a la medida y
              diseño digital, ofreciendo innovación, eficiencia y soporte de
              calidad para impulsar la competitividad empresarial.
            </p>

            <motion.div 
              className="grid gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {values.map((val, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-[#f6f4fb] text-center hover:shadow-md transition"
                  variants={staggerItem}
                >
                  <div className="flex justify-center mb-2">{val.icon}</div>
                  <h4 className="font-semibold text-sm text-gray-900">
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-500">{val.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Equipo - entrada desde derecha */}
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-md border border-gray-100"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="text-xl font-semibold text-[#664270] mb-4">
              Equipo
            </h3>
            <motion.div 
              className="flex flex-wrap gap-12 md:gap-20 justify-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center w-28"
                  variants={staggerItem}
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={90}
                    height={90}
                    className="rounded-full object-cover w-28 h-28 shadow-md"
                  />
                  <h4 className="mt-2 text-sm font-semibold text-gray-900 text-center">
                    {member.name}
                  </h4>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
