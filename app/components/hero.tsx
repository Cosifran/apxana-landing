// Import components
import Image from "next/image";
import DotGrid from "@/components/DotGrid";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#d4cce8] to-[#ffffff]">
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
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-55">
        <div className="grid grid-cols-2 gap-4 container">
          <div className="flex flex-col gap-10">
            <h1 className="text-6xl font-extrabold text-[#271447]">Impulsamos tu negocio con tecnologia</h1>
            <p className="text-gray-600 text-lg">
              Somos una firma de consultoría IT que diseña, implementa y
              optimiza soluciones modernas para acelerar resultados y crear
              ventajas competitivas.
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-primary text-white px-4 py-2 rounded-md">
                Agenda una demo
              </button>
              <button className="bg-gray-400 text-primary px-4 py-2 rounded-md">
                Conoce mas
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end mt-10 md:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500">
              <Image src="/assets/page-hero.png"
                   alt="Dashboard tecnológico Apxana"
                   width={600}
                   height={400}
                   className="drop-shadow-2xl rounded-xl"
                   priority
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
