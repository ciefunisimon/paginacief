"use client";

import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

const noticias = [
  {
    id: 1,
    titulo: "noticia 1",
    fecha: "10 Oct 2025",
    descripcion:
      "noticia 1",
    imagen: "/img/noticia1.jpg",
  },
  {
    id: 2,
    titulo: "noticia 2",
    fecha: "5 Oct 2025",
    descripcion:
      "noticia 2",
    imagen: "/img/noticia2.jpg",
  },
  {
    id: 3,
    titulo: "noticia 3",
    fecha: "28 Sep 2025",
    descripcion:
      "noticia 3",
    imagen: "/img/noticia3.jpg",
  },
  {
    id: 4,
    titulo: "noticia 4",
    fecha: "15 Ago 2025",
    descripcion:
      "noticia 4",
    imagen: "/img/noticia4.jpg",
  },
  {
    id: 5,
    titulo: "noticia 5",
    fecha: "2 Jul 2025",
    descripcion:
      "noticia 5",
    imagen: "/img/noticia5.jpg",
  },
  {
    id: 6,
    titulo: "noticia 6",
    fecha: "10 Jun 2025",
    descripcion:
      "noticia 6.",
    imagen: "/img/noticia6.jpg",
  },
];

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

        {/* 🔸 Grid de noticias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              className="bg-[#FFB000] rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Imagen */}
              <div className="w-full h-52 sm:h-56 lg:h-60 overflow-hidden">
                <Image
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Contenido */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-sm sm:text-base text-black mb-2 flex items-center gap-2">
                    <FaCalendarAlt className="text-[#68AB6A]" />
                    {noticia.fecha}
                  </p>

                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
                    {noticia.titulo}
                  </h3>

                  <p className="text-sm sm:text-base text-black/90 leading-relaxed">
                    {noticia.descripcion}
                  </p>
                </div>

                {/* Botón “Leer más” */}
                <div className="mt-4">
                  <Link
                    href="#"
                    className="text-[#68AB6A] font-semibold hover:underline text-sm sm:text-base"
                  >
                    Leer más →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
