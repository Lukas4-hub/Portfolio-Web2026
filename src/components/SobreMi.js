export default function SobreMi(){
    return(
        <section
        id="sobre"
        className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-800 text-gray-200 px-8 py-24 gap-16"
      >
        {/* Imagen de perfil */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
          <img
            src="\foto_inicio.jpeg"
            alt="Foto de Lucas Beltrame"
            className="w-full h-full object-cover"
          />
        </div>
      
        {/* Texto descriptivo */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-6">Sobre mí</h2>
      
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Soy <span className="text-blue-400 font-semibold">Lucas Beltrame</span>,
            estudiante de <span className="text-blue-400 font-semibold">Ingeniería en Computación</span> en la
            Facultad de Ingeniería de la Universidad de la República (UDELAR).
            Egresé del bachillerato tecnológico en informática en la UTU Arias Balparda,
            especializado en <span className="text-blue-400 font-semibold">desarrollo web</span>.
          </p>
      
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Tengo experiencia en el uso de tecnologías como
            <span className="text-blue-400"> HTML, CSS, JavaScript, PHP, Java, Bootstrap y TypeScript</span>.
            Disfruto crear soluciones funcionales y limpias, tanto desde el diseño de la interfaz
            como desde la lógica de programación, siempre buscando mejorar la experiencia del usuario.
          </p>
      
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            Soy una persona responsable, curiosa y con muchas ganas de aprender.
            Busco mi primera oportunidad laboral para seguir creciendo profesionalmente,
            aportar mis conocimientos y ser parte de un equipo donde pueda desarrollar
            mi potencial como <span className="text-blue-400 font-semibold">desarrollador web</span>.
          </p>
      
          <a
            href="#proyectos"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            Ver mis proyectos
          </a>
        </div>
      </section>

    )
}