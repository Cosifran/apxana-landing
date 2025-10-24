'use client';

import { ExternalLink } from "lucide-react";

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
      {/* Encabezado */}
      <div className="text-center mb-12 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2e1746] mb-4">
          Proyectos
        </h2>
        <p className="text-gray-600 text-lg">
          Estos son algunos de los proyectos en los que hemos trabajado.
        </p>
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#6A4FFF]/40 transition-all duration-300"
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
          </a>
        ))}
      </div>
    </div>
  );
}