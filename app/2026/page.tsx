"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Videos2026Page() {
  const videos = [
    {
      title:
        
        "1.er Encuentro de la RII CIVITASS. Panel 1. Movilidad Humana, Cuidado y Salud. Panel inaugural con los profesores Neida Albornoz Arias, Manuel Ernesto Riaño y Carolina Ramírez, y la moderación de la profesora María Antonia Cuberos, todos de la Unisimon, campus Cúcuta.",
      url: "https://www.youtube.com/embed/_irMSoO9McQ?start=16",
    },
    {
      title:
        "1.er Encuentro de la RII CIVITASS. Panel 2. Derechos Humanos, Trabajo Decente y Movilidad Humana. Reunió a Dhayana Fernández Matos, de la Universidade Federal de Pelotas (Brasil); Nahin Numa Sanjuan, de la Unisimon, campus Cúcuta, y Ramiro Alfredo Torrico Irahola, de la UTEPSA (Bolivia), con la moderación de Alex Dávila Romero, de la Universidad Nacional de Costa Rica.",
      url: "https://www.youtube.com/embed/xwHnXsp58vE",
    },
    {
      title:
        "1.er Encuentro de la RII CIVITASS. Plenaria 3. Economías de Frontera, Emprendimiento y Turismo. Con Marcelo Roger Meneghatti y Luciana Oliveira de Farina, de la Universidade Estadual do Oeste do Paraná (Brasil), y Alex Dávila Romero, de la Universidad Nacional de Costa Rica, moderado por Juliet Paola Acevedo, de la Unisimon, campus Cúcuta.",
      url: "https://www.youtube.com/embed/zV-7Pw3BahQ?start=5306",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#68AB6A] text-white">
      {/* 🟢 Header */}
      <Header />

      <main className="flex-grow pt-24 pb-16">
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* 🔹 Título principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
              Eventos 2026
            </h1>

            {/* 🔸 Grid responsive de videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {videos.map((video, i) => (
                <div
                  key={i}
                  className="bg-[#FFB000] rounded-2xl shadow-lg overflow-hidden 
                             hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] 
                             flex flex-col"
                >
                  {/* 🎥 Video embebido */}
                  <div className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[400px]">
                    <iframe
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>

                  {/* 📝 Descripción */}
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-black whitespace-pre-line">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 🟠 Footer */}
      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>
    </div>
  );
}

