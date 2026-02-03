"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gray-900/70 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center text-gray-200">
        {/* Logo o nombre */}
        <h1 className="text-xl font-bold text-white tracking-wide">
          Lucas<span className="text-blue-500">Dev</span>
        </h1>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-300 text-3xl md:hidden focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Menú principal */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex items-center justify-center space-y-6 md:space-y-0 md:space-x-14 text-lg tracking-wide transition-all duration-300 ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 md:opacity-100 md:translate-y-0"
          }`}
        >
          <a
            href="#inicio"
            onClick={() => setOpen(false)}
            className="relative block text-center hover:text-white transition-colors duration-300 group"
          >
            Inicio
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#sobre-mi"
            onClick={() => setOpen(false)}
            className="relative block text-center hover:text-white transition-colors duration-300 group"
          >
            Sobre mí
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#proyectos"
            onClick={() => setOpen(false)}
            className="relative block text-center hover:text-white transition-colors duration-300 group"
          >
            Proyectos
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="relative block text-center hover:text-white transition-colors duration-300 group"
          >
            Contacto
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

