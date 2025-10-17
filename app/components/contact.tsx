// Import components
import InputComponent from "./ui/InputComponent";
export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-300">
      <div className="container">
        <div>
          <h2 className="text-4xl font-light mb-2">Contacto</h2>
          <p className="mb-4">
            Cuentanos sobre tu proyecto. Nuestro equipo responderá en menos de
            24 horas.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-2">
            <div className="bg-white p-4 rounded-xl w-full">
              <InputComponent placeholder="Nombre y empresa" />
              <div className="grid grid-cols-2 gap-4 mt-5">
                <InputComponent placeholder="Email" />
                <InputComponent placeholder="Teléfono" />
              </div>
              <textarea
                id="message"
                placeholder="Mensaje"
                rows={5}
                className="w-full pl-5 pr-4 py-3 rounded-lg mt-5 bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary border-2 border-border hover:border-primary/50 transition-all duration-200 text-base resize-none"
                aria-label="Mensaje"
              ></textarea>
            </div>
          </div>
          <div className="col-span-3">
            <div className="bg-white p-4 rounded-xl w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
