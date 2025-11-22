"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ProfesorCard from "@/components/profesorcard";

export default function DirectorioProfesores() {
  return (
    <div className="min-h-screen flex flex-col bg-[#68AB6A]">
      <Header />

      <main className="flex-grow px-4 sm:px-6 lg:px-8 pt-30 pb-16">
        
        {/* TÍTULO Y DESCRIPCIÓN AL ESTILO DE PUBLICACIONES */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            Directorio de Profesores
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed text-white">
            Consulta la información académica, enlaces profesionales y líneas de
            investigación de cada profesor vinculado a nuestro grupo.
          </p>
        </section>

        {/* GRID DE PROFESORES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <ProfesorCard
            foto="/profesores/neida.jpg"
            nombre="Neida Albornoz Arias"
            correo="neida.albornoz@unismon.edu.co"
            links={{
              cvlac: "https://...",
              scopus: "https://...",
              orcid: "https://...",
              researchgate: "https://...",
              scholar: "https://..."
            }}
            temas={[
              "Construcción de paz territorial",
              "Desarrollo territorial sostenible",
              "Economías populares solidarias",
              "Equidad de género",
              "Movilidad humana y fronteras"
            ]}
          />
        </div>

      </main>

      {/* FOOTER AMARILLO */}
      <div className="bg-[#FFB000]">
        <Footer />
      </div>
    </div>
  );
}

