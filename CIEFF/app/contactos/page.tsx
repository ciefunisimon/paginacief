"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("enviando");

    try {
      await emailjs.send(
        "TU_SERVICE_ID", // 🔹 Reemplaza con tu Service ID
        "TU_TEMPLATE_ID", // 🔹 Reemplaza con tu Template ID
        {
          nombre: formData.nombre,
          apellido: formData.apellido,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
        },
        "TU_PUBLIC_KEY" // 🔹 Reemplaza con tu Public Key de EmailJS
      );
      setStatus("exito");
      setFormData({ nombre: "", apellido: "", telefono: "", mensaje: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#68AB6A] text-black flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
            Contáctanos
          </h1>

          <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-2xl">
            <p className="text-gray-700 text-center mb-8 text-lg">
              Déjanos tu mensaje y nos pondremos en contacto contigo lo antes posible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB000] focus:outline-none"
                  placeholder="Ingresa tu nombre"
                />
              </div>

              {/* Apellido */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Apellido</label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB000] focus:outline-none"
                  placeholder="Ingresa tu apellido"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB000] focus:outline-none"
                  placeholder="Ejemplo: +57 300 123 4567"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB000] focus:outline-none resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              {/* Botón */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === "enviando"}
                  className="bg-[#FFB000] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#ff9900] transition disabled:opacity-70"
                >
                  {status === "enviando" ? "Enviando..." : "Enviar mensaje"}
                </button>
              </div>
            </form>

            {/* Mensaje de estado */}
            {status === "exito" && (
              <p className="text-green-700 text-center font-semibold mt-6">
                ✅ ¡Mensaje enviado con éxito!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center font-semibold mt-6">
                ❌ Ocurrió un error al enviar el mensaje. Intenta nuevamente.
              </p>
            )}
          </div>
        </div>
      </main>

       <footer className="bg-[#FFB000] text-black py-10 mt-10">
              <Footer />
            </footer>
    </div>
  );
}
