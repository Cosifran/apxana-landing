'use client';

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer, staggerItem, viewportConfig } from "./animations/motion-variants";

export default function Projects() {
  const projects = [
    {
      name: "Cybercard",
      description:
        "Page with a unique design using more artistic functionalities.",
      url: "https://reservas.cybercard.com.co/",
    },
    {
      name: "913estudio",
      description:
        "Landing page with registration form",
      url: "https://www.the913studio.com/",
    },
    {
      name: "Coibox",
      description:
        "LEMP Accounting Platform",
      url: "https://www.coibox.com/es",
    },
  ];

  return (
    <div
      id="proyectos"
      className="py-24 bg-gradient-to-b from-[#d9d6e8] to-[#c9c7da] flex flex-col items-center"
    >
      {/* Encabezado animado */}
      <motion.div 
        className="text-center mb-12 max-w-2xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2e1746] mb-4">
          Proyectos
        </h2>
        <p className="text-gray-600 text-lg">
          Estos son algunos de los proyectos en los que hemos trabajado.
        </p>
      </motion.div>

      {/* Grid de proyectos con stagger */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#6A4FFF]/40 transition-all duration-300"
            variants={staggerItem}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-[#271447]">
                  {project.name}
                </h3>
                <ExternalLink className="w-5 h-5 text-[#6A4FFF] opacity-0 group-hover:opacity-100 transition" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6">
              <span className="inline-block text-[#6A4FFF] font-medium text-sm group-hover:translate-x-1 transition-transform">
                Ver proyecto →
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
