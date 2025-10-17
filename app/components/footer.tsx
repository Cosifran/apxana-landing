//  import fuction next/link
import Link from "next/link";
// import icons from lucide-react
import { Copyright } from "lucide-react";
export default function Footer() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="container flex justify-between items-center py-6">
          <span className="text-xl font-bold text-[#271447] tracking-wide flex items-center gap-2">
            APXANA TECH{" "}
            <div className="flex items-center gap-1 ms-3 font-medium text-gray-400">
              <Copyright className="w-4 h-4" /> 2025
            </div>
          </span>
          <div
            className="flex items-center justify-start gap-4 text-gray-400"
            style={{ fontSize: "18px" }}
          >
            <Link href="/#servicios">Servicios</Link>
            <Link href="/#nosotros">Nosotros</Link>
            <Link href="/#contacto">Contacto</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
