"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

const data = [
  [
    { value: 95, label: "Artículos científicos de alto impacto" },
    { value: 6, label: "Libros de resultados de investigación" },
    { value: 18, label: "Capítulos de libro de resultados de investigación" },
    { value: 3, label: "Libros de divulgación" },
    { value: 6, label: "Procesos de Apropiación Social del Conocimiento (PASC)" },
    { value: 7, label: "Consultorías científico tecnológicas" },
    { value: 54, label: "Eventos científicos" },
  ],
  [
    { value: 17, label: "Redes de conocimiento especializado" },
    { value: 23, label: "Producciones de contenido digital" },
    { value: 1, label: "Innovaciones en procesos, procedimientos y servicios" },
    { value: 16, label: "Innovaciones generadas de la gestión empresarial / organizacional" },
    { value: 3, label: "Prototipos" },
    { value: 5, label: "Signos distintivos" },
    { value: 4, label: "Policy’s brief", href: "/policy" },
  ],
  [
    { value: 3, label: "Tutorías y asesorías de trabajos de doctorado" },
    { value: 45, label: "Tutorías y asesorías de trabajos de maestría" },
    { value: 39, label: "Tutorías y asesorías de trabajos de pregrado" },
    { value: 2, label: "Estancias doctorales o de investigación entrantes" },
    { value: 3, label: "Jóvenes investigadores" },
    { value: 20, label: "Proyectos" },
  ],
];

export default function CifrasCIEF() {
  return (
    <div className="min-h-screen flex flex-col bg-[#68AB6A] text-white">
      {/* 🟢 Header */}
      <Header />

      <main className="flex-grow pt-24 pb-16">
        {/* 🔹 Sección de título */}
        <section className="text-center mb-12 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Grupo de investigación ALEF
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Producción científica, innovación y formación desde 2021.
          </p>
        </section>

        {/* 🔸 Enlace destacado al grupo ALEF */}
        <section className="flex justify-center mb-12 px-4">
          <div className="bg-[#FFB000] rounded-2xl shadow-lg p-6 sm:p-8 text-center max-w-md">
            <h3 className="text-2xl font-bold text-black mb-2">
              Grupo de Investigación ALEF
            </h3>
            <p className="text-sm text-black/80 mb-4">
              Accede a más información del grupo en la plataforma oficial.
            </p>
            <Link
              href="https://scienti.minciencias.gov.co/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000005408"
              target="_blank"
              className="inline-block px-6 py-2 bg-white text-black rounded-lg font-semibold 
                         hover:bg-gray-100 transition"
            >
              Ir al grupo ALEF
            </Link>
          </div>
        </section>

        {/* 🔹 Sección de cifras */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {data.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6"
            >
              {row.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#FFB000] rounded-xl shadow-md text-center p-6 
                             hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between"
                >
                  <span className="text-4xl font-extrabold text-white mb-3">
                    {item.value}
                  </span>

                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm text-black font-semibold hover:underline"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <p className="text-sm text-black font-medium">{item.label}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </section>
      </main>

      {/* 🟠 Footer */}
      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>
    </div>
  );
}
