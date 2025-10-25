
"use client";
export default function SobreMi(){
   


    return (

        <section
        id="contacto"
        className="flex flex-col items-center justify-center min-h-screen bg-gray-800 px-6 text-center"
      >
<h2 className="text-4xl font-bold mb-16 mt-8">Contacto</h2>
      
        {/* TARJETAS DE INFORMACIÓN */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
            <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
            <p className="text-gray-300">lbeltrame0@gmail.com</p>
          </div>
      
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
            <h3 className="text-xl font-semibold mb-2">💼 LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/lucas-beltrame-817331248/"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              https://www.linkedin.com/in/lucas-beltrame-817331248/
            </a>
          </div>
      
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition">
            <h3 className="text-xl font-semibold mb-2">📱 Teléfono</h3>
            <p className="text-gray-300">099133428</p>
          </div>
        </div>
      







      
        {/* FORMULARIO DE CONTACTO */}
        <form
  action="https://formspree.io/f/mvgvopdv"
  method="POST"
  className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md text-left space-y-4"
>
  <div>
    <label className="block mb-1 text-gray-300">Nombre</label>
    <input
      type="text"
      name="name"
      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 outline-none"
      placeholder="Tu nombre"
      required
    />
  </div>

  <div>
    <label className="block mb-1 text-gray-300">Email</label>
    <input
      type="email"
      name="email"
      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 outline-none"
      placeholder="tunombre@email.com"
      required
    />
  </div>

  <div>
    <label className="block mb-1 text-gray-300">Mensaje</label>
    <textarea
      name="message"
      rows="4"
      className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 outline-none resize-none"
      placeholder="Escribí tu mensaje..."
      required
    />
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
  >
    Enviar mensaje
  </button>
</form>

        
      </section>

    )
}