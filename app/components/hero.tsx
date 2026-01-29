"use client";
// Import components
import Image from "next/image";
import DotGrid from "@/components/DotGrid";
// Import motion
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
// Import variants
import {  staggerContainer, staggerItem } from "./animations/motion-variants";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for the hero image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      id="inicio"
      className="relative h-[978px] lg:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#d4cce8] to-[#ffffff] pt-24 md:pt-0"
    >
      <DotGrid
        dotSize={4}
        gap={15}
        baseColor="#bec1c9"
        activeColor="#3f214f"
        proximity={150}
        shockRadius={200}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl">
          {/* Left content with stagger animations */}
          <motion.div 
            className="flex flex-col gap-8 max-w-2xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#271447] leading-tight"
              variants={staggerItem}
            >
              Impulsamos tu negocio con tecnologia
            </motion.h1>
            <motion.p 
              className="text-gray-700 text-base sm:text-lg"
              variants={staggerItem}
            >
              Somos una empresa dedicada a ayudar a otras empresas y
              emprendedores a convertir sus ideas en soluciones digitales.
              Ofrecemos consultoría tecnológica, desarrollo de software a la
              medida y diseño digital con un enfoque innovador y escalable.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={staggerItem}
            >
              <button
                className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition"
                onClick={() => scrollToSection("#contacto")}
              >
                Contactanos
              </button>
              <button
                className="bg-gray-200 text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition"
                onClick={() => scrollToSection("#nosotros")}
              >
                Conoce mas
              </button>
            </motion.div>
          </motion.div>

          {/* Right image with parallax */}
          <div className="flex justify-center md:justify-end mt-10 md:mt-0">
            <motion.div 
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              style={{ y: imageY, scale: imageScale }}
            >
              <Image
                src="/assets/page-hero.png"
                alt="Dashboard tecnológico Apxana"
                width={800}
                height={500}
                className="rounded-xl object-contain md:object-cover w-[85vw] sm:w-[500px] md:w-[600px] h-auto"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
