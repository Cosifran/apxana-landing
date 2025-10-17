import Image from "next/image";
import { ShieldCheck, Users, Target, RollerCoaster } from "lucide-react";
import { title } from "process";

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
      desc: "Tu éxito es nuestro propósito."
    },
  ];

  const team = [
    {
      name: "Francisco Estrada Flores", 
      role: "Fundador",
      img: "",
    },
    {
      name: "Andres Ospino Mejía",
      role: "Fundador",
      img: "/assets/team-andres.jpeg",
    },
    {
      name: "Jan Ospino",
      role: "Fundador",
      img: "",
    },
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-[#aaa9ab] to-[#f4f2fc]">
      <div className="container mx-auto px-6 md:px-16">
        {/* Encabezado */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Nosotros
          </h2>
          <p className="text-gray-600 text-lg">
            APXANA TECH nace para conectar estrategia y ejecución. Nuestro
            equipo combina experiencia empresarial con dominio técnico para
            impulsar la innovación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Misión y valores */}
          <div className="bg-white p-8 rounded-2xl shadow-mb border border-gray-100">
            <h3 className="text-xl font-semibold text-[#664270]">
              Misión
            </h3>
            <p className="text-gray-600">
              En APXANA TECH, ayudamos a las empresas a potenciar su transformación digital mediante
              soluciones tecnológicas personalizadas. Con nuestras soluciones en consultoría de 
              transformación digital, desarrollo de software a la medida y diseño digital, ofreciendo
              innovación, eficiencia y soporte de calidad para impulsar la competitividad empresarial.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {values.map((val, index) => (
                <div key={index} className="p-4 rounded-xl bg-[#f6f4fb] text-center hover:shadow-md transition">
                  <div className="flex justify-center mb-2">
                    {val.icon}
                  </div>
                  <h4 className="font-semibold text-2sm text-gray-900">
                    {val.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

            {/*equipo*/}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold text-[#664270] mb-4">
              Equipo
            </h3>
            <div className="flex flex-wrap gap-20">
              {team.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-cente w-28">
                  <Image src={member.img} 
                        alt={member.name} 
                        width={90} 
                        height={90} 
                        className="rounded-full object-cover shadow-md"
                  />
                  <h4 className="mt-2 text-5sm font-semibold text-gray-900 text-center">
                    {member.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}