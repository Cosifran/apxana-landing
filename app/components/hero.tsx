// Import components
import DotGrid from "@/components/DotGrid";
export default function Hero() {
  return (
    <div className="h-screen">
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
    </div>
  );
}
