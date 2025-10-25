export default function Navbar(){
    return (
<nav className="fixed top-0 left-0 w-full bg-gray-800/80 backdrop-blur-md py-4 z-50">
<div className="flex justify-center gap-8">
  <a href="#inicio" className="hover:text-blue-400 transition">Inicio</a>
  <a href="#sobre-mi" className="hover:text-blue-400 transition">Sobre mí</a>
  <a href="#proyectos" className="hover:text-blue-400 transition">Proyectos</a>
  <a href="#contacto" className="hover:text-blue-400 transition">Contacto</a>
</div>
</nav>
    );
}

