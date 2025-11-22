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
    <div className="bg-[#FFB000] shadow-lg rounded-2xl p-6 w-full max-w-sm text-center">

      {/* Foto */}
      <div className="w-40 h-40 mx-auto mb-4 rounded-xl overflow-hidden bg-gray-200">
        <img
          src={foto}
          alt={nombre}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nombre */}
      <h2 className="text-xl font-semibold text-gray-800">{nombre}</h2>

      {/* Correo */}
      <p className="text-gray-600 mt-1">
        Correo:{" "}
        <a href={`mailto:${correo}`} className="text-blue-600 underline">
          {correo}
        </a>
      </p>

      {/* Íconos */}
      <div className="flex items-center justify-center gap-4 my-4">
        {links?.cvlac && (
          <a href={links.cvlac} target="_blank">
            <img src="/icons/cvlac.png" className="w-10" />
          </a>
        )}
        {links?.scopus && (
          <a href={links.scopus} target="_blank">
            <img src="/icons/scopus.png" className="w-10" />
          </a>
        )}
        {links?.orcid && (
          <a href={links.orcid} target="_blank">
            <img src="/icons/orcid.png" className="w-10" />
          </a>
        )}
        {links?.researchgate && (
          <a href={links.researchgate} target="_blank">
            <img src="/icons/rg.png" className="w-10" />
          </a>
        )}
        {links?.scholar && (
          <a href={links.scholar} target="_blank">
            <img src="/icons/scholar.png" className="w-10" />
          </a>
        )}
      </div>

      {/* Temas */}
      <div className="text-left mt-4">
        <h3 className="font-semibold text-gray-800 mb-2">
          Temas de investigación
        </h3>

        <ul className="list-disc px-6 text-gray-700">
          {temas.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfesorCard;
