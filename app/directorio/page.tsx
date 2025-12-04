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
            Consulta la información de cada profesor vinculado al CIEF (redes académicas y temas de investigación).
          </p>
        </section>

        {/* GRID DE PROFESORES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <ProfesorCard
            foto="/Neida_Albornozz.jpeg"
            nombre="Neida Albornoz Arias"
            correo="neida.albornoz@unisimon.edu.co"
            links={{
              cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001630101",
              scopus: "https://www.scopus.com/authid/detail.uri?authorId=57194446275",
              orcid: "https://orcid.org/0000-0001-7851-5985",
              researchgate: "https://www.researchgate.net/profile/Neida-Albornoz-Arias",
              scholar: "https://scholar.google.es/citations?user=MkJ72HsAAAAJ&hl=es&oi=ao"
            }}
            temas={[
              "Construcción de paz territorial",
              "Desarrollo territorial sostenible",
              "Economías populares solidarias",
              "Equidad de género ",
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

