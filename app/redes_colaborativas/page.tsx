"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaGlobeAmericas, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

export default function RedesColaborativasPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#68AB6A] text-white">
      <Header />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Redes de Colaboración
          </h1>
          <p className="text-center text-lg text-white/90 mb-12 max-w-2xl mx-auto">
            Redes en las que participa el CIEF para el intercambio de conocimientos y el
            desarrollo de proyectos conjuntos.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* REDCIEN */}
            <Link
              href="/redcien"
              className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center text-black shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex h-32 items-center justify-center">
                <Image
                  src="/logoredcien.png"
                  alt="Logo REDCIEN"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-[#68AB6A]">REDCIEN</h2>
              <p className="mt-2 text-gray-700">
                Red de Editores Científicos del Norte de Santander.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FFB000] px-6 py-2 font-semibold transition group-hover:gap-3">
                Conocer la red <FaArrowRight />
              </span>
            </Link>

            {/* CIVITASS */}
            <a
              href="https://civitass.redes-auip.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center text-black shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="flex h-32 items-center justify-center text-[#68AB6A]">
                <FaGlobeAmericas size={96} />
              </div>
              <h2 className="mt-4 text-2xl font-bold text-[#68AB6A]">RII CIVITASS</h2>
              <span className="mt-2 rounded-full bg-[#F2FAF5] px-3 py-1 text-xs font-semibold text-[#2D7A43]">
                Red de la Asociación Universitaria Iberoamericana de Postgrado (AUIP)
              </span>
              <p className="mt-2 text-gray-700">
                Red Iberoamericana de Investigación sobre Ciudades con Innovación Vecinal e
                Intercambios Transfronterizos y Alternativas Societales Sostenibles.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FFB000] px-6 py-2 font-semibold transition group-hover:gap-3">
                Visitar sitio <FaExternalLinkAlt size={14} />
              </span>
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>
    </div>
  );
}
