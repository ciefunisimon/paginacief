"use client";

import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

/* 📖 ARRAY DE BOLETINES */
const boletines = [
  {
    id: 1,
    titulo: "Boletín Informativo CIEF 2025-2",
    subtitulo: "CREA · CONECTA · TRASCIENDE",
    archivo: "/boletin_cief20252.pdf",
  },
  
];

/* 📰 NOTICIAS */
//const noticias = [
  /*{
    id: 1,
    titulo: "noticia 1",
    fecha: "10 Oct 2025",
    descripcion: "noticia 1",
    imagen: "/img/noticia1.jpg",
  },
  {
    id: 2,
    titulo: "noticia 2",
    fecha: "5 Oct 2025",
    descripcion: "noticia 2",
    imagen: "/img/noticia2.jpg",
  },
  {
    id: 3,
    titulo: "noticia 3",
    fecha: "28 Sep 2025",
    descripcion: "noticia 3",
    imagen: "/img/noticia3.jpg",
  },
  {
    id: 4,
    titulo: "noticia 4",
    fecha: "15 Ago 2025",
    descripcion: "noticia 4",
    imagen: "/img/noticia4.jpg",
  },
  {
    id: 5,
    titulo: "noticia 5",
    fecha: "2 Jul 2025",
    descripcion: "noticia 5",
    imagen: "/img/noticia5.jpg",
  },
  {
    id: 6,
    titulo: "noticia 6",
    fecha: "10 Jun 2025",
    descripcion: "noticia 6.",
    imagen: "/img/noticia6.jpg",
  },

];*/

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-[#68AB6A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* 🔹 Encabezado */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
          Noticias y Prensa
        </h1>

        <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Mantente informado sobre los proyectos, alianzas, publicaciones y
          avances del Centro de Investigación y Estudios Fronterizos (CIEF).
        </p>

        {/* 📖 BOLETINES DINÁMICOS */}
        {boletines.map((boletin) => (
          <div
            key={boletin.id}
            className="bg-[#FFB000] rounded-2xl shadow-lg overflow-hidden mb-12 hover:shadow-2xl transition-all duration-300"
          >
            {/* Encabezado */}
            <div className="p-6 bg-gradient-to-r from-[#FFB000] to-[#FFD86B]">
              <h3 className="text-2xl font-bold text-black">
                {boletin.titulo}
              </h3>
              <p className="text-black/80 text-sm">
                {boletin.subtitulo}
              </p>
            </div>

            {/* Vista previa PDF */}
            <div className="w-full h-[600px] bg-white">
              <iframe
                src={boletin.archivo}
                className="w-full h-full"
              />
            </div>

            {/* Botón */}
            <div className="p-6 flex justify-center">
              <Link
                href={boletin.archivo}
                target="_blank"
                className="bg-[#68AB6A] text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all duration-300 shadow-lg"
              >
                Abrir en pantalla completa →
              </Link>
            </div>
          </div>
        ))}

        

      </div>
    </main>
  );
}
