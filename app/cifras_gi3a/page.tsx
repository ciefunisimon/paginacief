"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

// 🔹 Datos de GI3A
const data = [
  [
    { value: 30, label: "Artículos científicos de alto impacto" },
    { value: 4, label: "Capítulos de libro de resultados de investigación" },
    { value: 14, label: "Eventos científicos" },
    { value: 3, label: "Redes de conocimiento especializado" },
    { value: 2, label: "Innovaciones en procesos, procedimientos y servicios" },
    { value: 2, label: "Innovaciones generadas de la gestión empresarial / organizacional" },
    { value: 2, label: "Prototipos industriales" },
  ],
  [
    { value: 5, label: "Prototipos - servicios" },
    { value: 2, label: "Software" },
    { value: 3, label: "Tutorías y asesorías de trabajos de maestría" },
    { value: 1, label: "Tutorías y asesorías de trabajos de especialización" },
    { value: 3, label: "Tutorías y asesorías de otro tipo" },
    { value: 4, label: "Proyectos" },
  ],
];

export default function CifrasGI3A() {
  return (
    <div className="min-h-screen flex flex-col bg-[#68AB6A] text-white">
      {/* 🟢 Header */}
      <Header />

      {/* 🟢 Contenido principal */}
      <main className="flex-grow pt-30 pb-16">
        {/* 🔹 Sección de título */}
        <section className="text-center mb-12 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Grupo de investigación GI3A
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Producción científica, innovación y formación desde 2021.
          </p>
        </section>

        {/* 🔸 Enlace al grupo GI3A */}
        <section className="flex justify-center mb-12 px-4">
          <div className="bg-[#FFB000] rounded-2xl shadow-lg p-6 sm:p-8 text-center max-w-md">
            <h3 className="text-2xl font-bold text-black mb-2">
              Grupo de Investigación GI3A
            </h3>
            <p className="text-sm text-black/80 mb-4">
              Accede a más información del grupo en la plataforma oficial.
            </p>
            <Link
              href="https://scienti.minciencias.gov.co/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000005362"
              target="_blank"
              className="inline-block px-6 py-2 bg-[#68AB6A] text-white rounded-lg font-semibold 
                         hover:bg-[#68AB6A]-100 transition"
            >
              Ir al grupo GI3A
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
                  {/* Número */}
                  <span className="text-4xl font-extrabold text-white mb-3">
                    {item.value}
                  </span>

                  {/* Texto */}
                  <p className="text-sm text-black font-medium">{item.label}</p>
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

