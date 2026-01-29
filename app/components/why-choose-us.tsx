"use client";

import { Award, TrendingUp, Clock, Headphones, Rocket, Workflow, Users } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewportConfig } from "./animations/motion-variants";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Parallax for logos section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const logosY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const metric = [
    {
      icon: <Award className="mx-auto w-6 h-6 text-[#6A4FFF]" />,
      num: "10+",
      desc: "Proyectos",
    },
    {
      icon: <TrendingUp className="mx-auto w-6 h-6 text-[#6A4FFF]" />,
      num: "30%+",
      desc: "Mejora en productividad",
    },
    {
      icon: <Headphones className="mx-auto w-6 h-6 text-[#6A4FFF]" />,
      num: "24/7",
      desc: "Soporte y monitoreo",
    },
  ];

  const logos = [
    { src: "/assets/logos/google-cloud.svg", alt: "Google Cloud" },
    { src: "/assets/logos/angularjs.svg", alt: "Angular" },
    { src: "/assets/logos/react.svg", alt: "React" },
    { src: "/assets/logos/sap_logo_icon_170763.svg", alt: "SAP" },
    { src: "/assets/logos/node-js.svg", alt: "NodeJS" },
    { src: "/assets/logos/python.svg", alt: "Python" },
  ];

  return (
    <div ref={sectionRef} className="relative py-24 bg-gradient-to-b from-white to-[#f4f2fc]">
      <div className="container mx-auto px-4 md:px-16 lg:px-12 max-w-7xl">
        {/* Encabezado animado */}
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2e1746] mb-4">
            ¿Por qué Elegirnos?
          </h2>
          <p className="text-gray-600 text-lg">
            En APXANA TECH creemos que la tecnología debe adaptarse a las personas y no al revés.
            Nuestro modelo combina consultoría estratégica, desarrollo ágil y acompañamiento continuo,
            garantizando resultados medibles y escalables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - métricas y diferenciadores */}
          <motion.div 
            className="space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Métricas con stagger */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {metric.map((met, index) => (
                <motion.div 
                  key={index} 
                  className="rounded-2xl border border-gray-200 p-6 text-center bg-white shadow-sm hover:shadow-md transition"
                  variants={staggerItem}
                >
                  <div className="flex justify-center mb-2">
                    {met.icon}
                  </div>
                  <h3 className="text-2xl font-bold mt-2 text-gray-900">
                    {met.num}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {met.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Card diferenciadores */}
            <motion.div 
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <h4 className="text-lg font-semibold text-[#664270] mb-2">
                Lo que nos diferencia.
              </h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Nuestra propuesta combina visión estratégica + desarrollo ágil + innovación tecnológica,
                con un enfoque humano y adaptable.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="bg-[#6A4FFF]/10 text-[#664270] text-xs font-medium px-3 py-1 rounded-full">
                  Acompañamiento continuo
                </span>
                <span className="bg-[#6A4FFF]/10 text-[#664270] text-xs font-medium px-3 py-1 rounded-full">
                  Metodologia Agile
                </span>
                <span className="bg-[#6A4FFF]/10 text-[#664270] text-xs font-medium px-3 py-1 rounded-full">
                  Resultados rapido y adpatables
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna derecha - tecnologías con parallax */}
          <motion.div 
            className="bg-white rounded-2xl border shadow-md p-8 flex flex-col justify-center"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h3 className="text-xl font-semibold text-[#664270] mb-4">
              Algunas de Nuestras Tecnologías
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Colaboramos con las principales plataformas del mercado y trabajamos
              bajo metodologías ágiles (Scrum) para ofrecer resultados
              medibles y escalables.
            </p>

            {/* Logos con parallax sutil */}
            <motion.div 
              className="grid grid-cols-3 gap-6 items-center justify-items-center"
              style={{ y: logosY }}
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image src={logo.src} alt={logo.alt} width={60} height={60} />
                </motion.div>
              ))}
            </motion.div>

            {/* Metodologías con stagger */}
            <motion.div 
              className="mt-8 flex items-center justify-around text-center text-gray-700 text-sm"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.div className="flex flex-col items-center" variants={staggerItem}>
                <Workflow className="w-6 h-6 text-[#664270] mb-1" />
                <span>Agile</span>
              </motion.div>
              <motion.div className="flex flex-col items-center" variants={staggerItem}>
                <Clock className="w-6 h-6 text-[#664270] mb-1" />
                <span>Entrega continua</span>
              </motion.div>
              <motion.div className="flex flex-col items-center" variants={staggerItem}>
                <Users className="w-6 h-6 text-[#664270] mb-1" />
                <span>Colaboración</span>
              </motion.div>
              <motion.div className="flex flex-col items-center" variants={staggerItem}>
                <Rocket className="w-6 h-6 text-[#664270] mb-1" />
                <span>Innovación</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
