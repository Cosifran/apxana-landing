'use client';
// Import components
import Image from "next/image";
import DotGrid from "@/components/DotGrid";

export default function Hero() {

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if(section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="inicio" className="relative h-[978px] lg:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#d4cce8] to-[#ffffff] pt-24 md:pt-0">
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
          <div className="flex flex-col gap-8 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#271447] leading-tight">
              Impulsamos tu negocio con tecnologia
            </h1>
            <p className="text-gray-700 text-base sm:text-lg ">
              Somos una empresa dedicada a ayudar a otras empresas y emprendedores a convertir sus ideas en 
              soluciones digitales. Ofrecemos consultoría tecnológica, desarrollo de software a la medida 
              y diseño digital con un enfoque innovador y escalable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition" 
                onClick={() => scrollToSection('#contacto')}>
                Contactanos
              </button>
              <button className="bg-gray-200 text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition"
                onClick={() => scrollToSection('#nosotros')}>
                Conoce mas
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end mt-10 md:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500">
              <Image
                src="/assets/page-hero.png"
                alt="Dashboard tecnológico Apxana"
                width={800}
                height={500}
                className="rounded-xl object-contain md:object-cover w-[85vw] sm:w-[500px] md:w-[600px] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
