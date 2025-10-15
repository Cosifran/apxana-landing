// Import components
import DotGrid from "@/components/DotGrid";
export default function Hero() {
  return (
    <div className="h-screen relative">
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
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 container">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Impulsamos tu negocio con tecnologia</h1>
            <p>
              Somos una firma de consultoría IT que diseña, implementa y
              optimiza soluciones modernas para acelerar resultados y crear
              ventajas competitivas.
            </p>
            <div className="flex items-center gap-2">
              <button className="bg-primary text-white px-4 py-2 rounded-md">
                Agenda una demo
              </button>
              <button className="bg-gray-400 text-primary px-4 py-2 rounded-md">
                Conoce mas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
