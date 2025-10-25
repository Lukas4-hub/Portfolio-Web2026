export default function Navbar(){
    return (
<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-900/70 shadow-lg">
  <div className="max-w-6xl mx-auto px-8 py-5 flex justify-center space-x-14 text-gray-200  text-lg tracking-wide">
    <a
      href="#inicio"
      className="relative hover:text-white transition-colors duration-300 group"
    >
      Inicio
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </a>

    <a
      href="#sobre"
      className="relative hover:text-white transition-colors duration-300 group"
    >
      Sobre mí
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </a>

    <a
      href="#proyectos"
      className="relative hover:text-white transition-colors duration-300 group"
    >
      Proyectos
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </a>

    <a
      href="#contacto"
      className="relative hover:text-white transition-colors duration-300 group"
    >
      Contacto
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </div>
</nav>

    );
}

