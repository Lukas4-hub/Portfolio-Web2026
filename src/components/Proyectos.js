import { proyectos } from "../data/proyectos";


export default function Proyectos(){
    return (
        <section
        id="proyectos"
        className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-6 py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-12">Mis Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {proyectos.map((p) => (
            <div
              key={p.slug}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition"
            >
           
              <h3 className="text-2xl font-semibold mb-2">{p.titulo}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.descripcion}</p>
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {p.tecnologias.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-600/20 text-blue-400 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition inline-block"
                >
                  Ver proyecto
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    )
}