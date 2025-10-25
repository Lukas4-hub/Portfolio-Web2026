
import Navbar from "@/components/Navbar";
import Inicio from "@/components/Inicio";
import Proyectos from "@/components/Proyectos";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white scroll-smooth">
      {/* NAVBAR */}
    
    <Navbar/>
      {/* SECCIÓN INICIO */}
      <Inicio/>

      {/* SECCIÓN SOBRE MÍ */}
    
      <hr className="border-gray-700 my-12 mx-auto w-3/4" />

      {/* SECCIÓN PROYECTOS (vacía por ahora) */}
    <Proyectos/>

      {/* SECCIÓN CONTACTO (vacía por ahora) */}
      <Contacto/>
    </main>
  );
}
