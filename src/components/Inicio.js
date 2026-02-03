export default function Inicio(){
    return (
        <section
        id="inicio"
        className="flex flex-col items-center justify-center h-screen text-center px-6"
      >
        <h1 className="text-5xl font-bold mb-4">Hola, soy Lucas Beltrame 👋</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-md">
          Estudiante dasdae Ingeniería en Computación | Desarrollador web
        </p>
        <a
          href="#sobre-mi"
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
        >
          Conoceme
        </a>
      </section>


    )
}