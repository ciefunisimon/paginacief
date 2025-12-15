import React from "react";

interface Links {
  cvlac?: string;
  scopus?: string;
  orcid?: string;
  researchgate?: string;
  scholar?: string;
}

interface ProfesorCardProps {
  foto: string;
  nombre: string;
  correo: string;
  categoria: string;
  links?: Links;
  temas: string[];
}

const ProfesorCard: React.FC<ProfesorCardProps> = ({
  foto,
  nombre,
  correo,
  links,
  temas,
}) => {
  return (
    <div
      className="
        bg-[#FFB000] shadow-lg rounded-2xl p-6 text-center
        w-[280px] sm:w-[300px] md:w-[340px] lg:w-[360px]
        h-[500px]
        flex flex-col
      "
    >
      {/* FOTO */}
      <div
        className="
          mx-auto mb-4 rounded-xl overflow-hidden bg-gray-200
          w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44
        "
      >
        <img src={foto} alt={nombre} className="w-full h-full object-cover" />
      </div>

      {/* NOMBRE */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
        {nombre}
      </h2>

      {/* CORREO */}
      <p className="text-gray-600 mt-1 text-sm sm:text-base">
        Correo:{" "}
        <a href={`mailto:${correo}`} className="text-blue-700 underline">
          {correo}
        </a>
      </p>

      {/* CONTENIDO SCROLLEABLE (SIN BARRA) */}
      <div
        className="
          mt-4 text-left overflow-y-scroll
          scrollbar-hide
          flex-1
        "
        style={{
          msOverflowStyle: "none", // IE
          scrollbarWidth: "none", // Firefox
        }}
      >
        {/* HIDE SCROLL FOR CHROME/EDGE/SAFARI */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* ÍCONOS */}
        <div className="flex items-center justify-center gap-4 my-4">
          {links?.cvlac && (
            <a href={links.cvlac} target="_blank">
              <img src="/CvLAC.png" className="w-8 sm:w-9 md:w-10" />
            </a>
          )}
          {links?.scopus && (
            <a href={links.scopus} target="_blank">
              <img src="/Scopus.png" className="w-8 sm:w-9 md:w-10" />
            </a>
          )}
          {links?.orcid && (
            <a href={links.orcid} target="_blank">
              <img src="/orcidd.png" className="w-8 sm:w-9 md:w-10" />
            </a>
          )}
          {links?.researchgate && (
            <a href={links.researchgate} target="_blank">
              <img src="/ResearchGate.png" className="w-8 sm:w-9 md:w-10" />
            </a>
          )}
          {links?.scholar && (
            <a href={links.scholar} target="_blank">
              <img src="/Google_Scholar.png" className="w-8 sm:w-9 md:w-10" />
            </a>
          )}
        </div>

        {/* TEMAS */}
        <h3 className="font-semibold text-gray-800 mb-2">
          Temas de investigación
        </h3>

        <ul className="list-disc px-6 text-gray-700 text-sm sm:text-base">
          {temas.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfesorCard;

