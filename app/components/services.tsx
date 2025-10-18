import { Cloud, Settings, Code2, MonitorSmartphone } from "lucide-react";
import { title } from "process";

export default function Services() {

  const services = [
    {
      title: "Consultoría tecnológica y transformación digital",
      description: "Guiamos a las empresas en su evolución digital, optimizando procesos, infraestructura y estrategias tecnológicas para impulsar la innovación y la eficiencia.",
      icon: <MonitorSmartphone className="w-12 h-12 text-[#9c3fe8]" />
    },
    {
      title: "Desarrollo web y software a la medida",
      description: "Guiamos a las empresas en su evolución digital, optimizando procesos, infraestructura y estrategias tecnológicas para impulsar la innovación y la eficiencia.",
      icon: <Code2 className="w-12 h-12 text-[#9c3fe8]" />
    },
    {
      title: "Automatización & DevOps",
      description: "Implementamos prácticas ágiles, CI/CD, infraestructura como código y entornos automatizados para acelerar entregas y mejorar la calidad del software.",
      icon: <Settings className="w-12 h-12 text-[#9c3fe8]" />
    },
    {
      title: "Integración APIs y soluciones cloud",
      description: "Conectamos sistemas y servicios mediante APIs escalables y seguras, integrando soluciones cloud para mayor rendimiento, seguridad y flexibilidad.",
      icon: <Cloud className="w-12 h-12 text-[#9c3fe8]" />
    },
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-white to-[#f4f2fc]">
      <div className="container mx-auto px-6 md:px-16">
        {/* Encabezado */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2e1746] mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 text-lg">
            Soluciones diseñadas para transformar, optimizar y acelerar el
            crecimiento de tu empresa mediante la tecnología.
          </p>
        </div>

        {/* Servicios */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-1 border border-gray-100 text-center">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#9c3fe8] transition">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}