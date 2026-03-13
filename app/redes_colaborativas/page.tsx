"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";

import {
  FaBook,
  FaUsers,
  FaCheckCircle,
  FaGlobe,
  FaTimes
} from "react-icons/fa";

export default function RedcienPage() {

  const [modal, setModal] = useState<any>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  /* CONTADOR PRODUCTOS */
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.floor(latest));

  useEffect(() => {
    animate(count, 69, { duration: 2 });
  }, []);

  const lineas = [
    {
      titulo: "Formación y actualización editorial",
      icon: <FaBook size={28} />,
      texto:
        "Desarrollo de programas certificados (diplomados, talleres, simposios) para potenciar las competencias en gestión editorial."
    },
    {
      titulo: "Cooperación interinstitucional",
      icon: <FaUsers size={28} />,
      texto:
        "Alianzas entre centros de investigación y empresas para optimizar recursos, compartir buenas prácticas y desarrollar proyectos conjuntos."
    },
    {
      titulo: "Mejora de la calidad editorial",
      icon: <FaCheckCircle size={28} />,
      texto:
        "Implementación de normativas y criterios técnicos de publicación alineados con exigencias globales."
    },
    {
      titulo: "Fortalecimiento de visibilidad e indexación",
      icon: <FaGlobe size={28} />,
      texto:
        "Gestión de estrategias para el registro de revistas en plataformas y consorcios científicos de alto reconocimiento mundial."
    }
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#68AB6A] py-30 px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto text-white">

          {/* HERO */}
          <motion.section
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-20 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left"
          >
            {/* FRANJA BLANCA */}
          <div className="bg-[#FFB000] rounded-2xl px-8 py-6 shadow-lg flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left"> 

            <motion.div
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src="/logoredcien.png"
                alt="Logo REDCIEN"
                width={140}
                height={140}
                className="object-contain"
              />
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Red de Editores Científicos
              <br className="hidden sm:block" />
              del Norte de Santander
            </h1>
          </div>
           </motion.section>
        

          {/* PRESENTACIÓN */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#FFB000] text-black rounded-2xl shadow-lg p-6 sm:p-10 mb-12"
          >

            <h2 className="text-2xl font-bold mb-6 text-[#FFFFFF]">
              Que es la REDCIEN
            </h2>

            <p className="mb-4 leading-relaxed">
              <strong>REDCIEN</strong> es una iniciativa interinstitucional pionera en el departamento de Norte de Santander, orientada al fortalecimiento y la excelencia de las publicaciones académicas y científicas.
              Actuamos como un ecosistema de articulación entre <strong>instituciones educativas, empresas y el Estado</strong>, promoviendo la calidad editorial y la visibilidad de la producción investigativa regional
              bajo estándares nacionales e internacionales.

            </p>

            <p className="leading-relaxed">
              <strong>Nuestra Misión:</strong> Consolidar un referente estratégico para editores, investigadores y autores, mejorando los procesos de indexación y
              el impacto de la ciencia en los ámbitos académico, social y económico.
            </p>

          </motion.section>


          {/* LINEAS DE ACCIÓN */}
                  <AnimatePresence>
          {modal && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white text-black max-w-lg w-full rounded-2xl p-8 relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >

                <button
                  onClick={() => setModal(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-black"
                >
                  <FaTimes size={20} />
                </button>

                <div className="text-[#68AB6A] mb-4">
                  {modal.icon}
                </div>

                <h3 className="text-xl font-bold mb-4">
                  {modal.titulo}
                </h3>

                <p className="leading-relaxed">
                  {modal.texto}
                </p>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
          <section className="mb-16">

            <h2 className="text-2xl font-bold mb-10 text-center text-white">
              Ejes Estratégicos: Líneas de Acción
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {lineas.map((item, i) => (

                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  className="bg-[#FFB000] text-black rounded-2xl p-6 shadow-lg flex flex-col justify-between"
                >

                  <div>

                    <div className="text-[#68AB6A] mb-4">
                      {item.icon}
                    </div>

                    <h3 className="font-bold text-lg mb-3 text-black">
                      {item.titulo}
                    </h3>

                    <p className="text-sm text-black-600">
                      Haz clic en ver más para conocer detalles.
                    </p>

                  </div>

                  <button
                    onClick={() => setModal(item)}
                    className="mt-6 bg-[#68AB6A] text-white px-4 py-2 rounded-full font-semibold hover:opacity-90"
                  >
                    Ver más
                  </button>

                </motion.div>

              ))}

            </div>

          </section>

          <h2 className="text-2xl font-bold mb-10 text-center text-white">
              Gobernanza y Estructura
            </h2>
          {/* COMITÉ */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#FFB000] text-black rounded-2xl shadow-lg p-6 sm:p-10 mb-12"
          >

            <h2 className="text-2xl font-bold mb-6 text-white">
              Comité REDCIEN
            </h2>

            <p className="mb-6 leading-relaxed">
              Es el órgano máximo de gobernanza, encargado de la planificación y seguimiento de las acciones estructurales. Su labor asegura que cada decisión
              esté respaldada por la experiencia científica y académica.
            </p>

             <p className="text-2xl font-bold mb-6 text-white">
              Configuración del Comité:
            </p>

            <p className="mb-6 leading-relaxed">
              <strong>•	Presidencia y Vicepresidencia.</strong>
            </p>

            <p className="mb-6 leading-relaxed">
              <strong>•	7 Áreas de Gestión Especializadas: Correspondientes a los ejes estratégicos de la red.</strong>
            </p>

          </motion.section>


          {/* CRITERIOS */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#FFB000] text-black rounded-2xl shadow-lg p-6 sm:p-10 mb-12"
          >

            <h2 className="text-2xl font-bold mb-6 text-white">
              Únete a la Red: Criterios de Inscripción
            </h2>

            <p className="mb-6 leading-relaxed">
              Invitamos a profesionales de instituciones educativas, empresas públicas/privadas e investigadores de Cúcuta 
              y Norte de Santander a sumarse a este ecosistema.
            </p>

            <p className="text-2xl font-bold mb-6 text-white">
              Proceso de Postulación:
            </p>

            <p className="mb-6 leading-relaxed">
              <strong>1. Perfil: </strong>Experiencia demostrable en ámbitos académicos, científicos o editoriales.
            </p>

            <p className="mb-6 leading-relaxed">
              <strong>2. Valores: </strong>Compromiso con el respeto, la ética y el trabajo colaborativo entre pares.
            </p>

            <p className="mb-6 leading-relaxed">
              <strong>3. 	Validación:  </strong>Todas las inscripciones son revisadas y aprobadas por <strong>el Comité Central</strong> para asegurar la alineación con nuestras líneas de acción.
            </p>


            <div className="flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="https://forms.office.com/r/u0jAszNkj3"
                  target="_blank"
                  className="bg-[#68AB6A] text-white px-8 py-3 rounded-full font-bold shadow-lg"
                >
                  Inscribirse en REDCIEN →
                </Link>
              </motion.div>
            </div>

          </motion.section>


          {/* PRODUCTOS */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white p-6 sm:p-10 mb-12 text-center"
          >

            <h2 className="text-2xl font-bold mb-6">
              Centro de Documentación y Contacto
            </h2>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-[#FFB000] text-black px-8 py-6 rounded-xl shadow-lg"
            >
              <motion.p className="text-4xl font-bold">
                {rounded}
              </motion.p>

              <p className="text-sm mt-2">
                divulgaciones científicas para la comunidad Unisimón
              </p>

               
            </motion.div>

          </motion.section>

           <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-[#FFB000] text-black rounded-2xl shadow-lg p-6 sm:p-10 mb-12"
          >
              <p className="text-2xl font-bold mb-6 text-white">
              Nuestra Documentacion
            </p>

            <p className="mb-6 leading-relaxed">
              Ponemos a disposición los documentos fundamentales de nuestra constitución:
            </p>

            <p className="mb-6 leading-relaxed">
              •	📄 <strong>Acta de Constitución</strong>
            </p>

            <p className="mb-6 leading-relaxed">
              •	📄 <strong>Acuerdo de Voluntades</strong>
            </p>

            <p className="mb-6 leading-relaxed">
              •	📄 <strong>Carta de Compromiso</strong>
            </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">

            {/* ACTA */}
            <a
              href="/acta_constitucion.pdf"
              download
              className="bg-[#68AB6A] text-black p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
            >
              <p className="text-lg font-bold mb-2">📄 Acta de Constitución</p>
              <p className="text-sm text-gray-600">
                Documento oficial de creación de la red.
              </p>
              <span className="inline-block mt-4 bg-[#FFB000] text-white px-4 py-2 rounded-full text-sm">
                Descargar PDF
              </span>
            </a>

            {/* ACUERDO */}
            <a
              href="/acuerdo_voluntades.pdf"
              download
              className="bg-[#68AB6A] text-black p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
            >
              <p className="text-lg font-bold mb-2">📄 Acuerdo de Voluntades</p>
              <p className="text-sm text-gray-600">
                Documento de compromiso institucional.
              </p>
              <span className="inline-block mt-4 bg-[#FFB000] text-white px-4 py-2 rounded-full text-sm">
                Descargar PDF
              </span>
            </a>

            

          </div>

            <p className="text-2xl font-bold mb-6 text-white">
              Información de Contacto:
            </p>

            <p className="mb-6 leading-relaxed">
              <strong>•	Entidad Fundadora: Universidad Simón Bolívar</strong>
            </p>

             <p className="mb-6 leading-relaxed">
              <strong>•	📍 Ubicación: Cúcuta, Norte de Santander.</strong>
            </p>

             <p className="mb-6 leading-relaxed">
              <strong>•	📧 Correo: redcien@unisimon.edu.co</strong>
            </p>

            <section className="flex justify-center mt-16 text-white">

                <a
                  href="mailto:redcien@unisimon.edu.co"
                  className="bg-[#68AB6A] text-white px-8 py-3 rounded-full font-bold shadow-lg"
                >
                  Contactar a REDCIEN ✉
                </a>

              </section>
          </motion.section>



          {/* LIDERAZGO REDCIEN */}
            <section className="mb-16">

              <h2 className="text-2xl font-bold mb-10 text-center text-white">
                Liderazgo REDCIEN
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

                {/* LIDER */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#FFB000] text-black rounded-2xl shadow-lg p-8 text-center"
                >

                  <div className="flex justify-center mb-4">
                    <div className="relative w-40 h-40">
                      <Image
                        src="/franklin_nuevo.jpeg"
                        alt="Jhon Franklin Espinosa Castro"
                        fill
                        className="rounded-full object-cover border-4 border-[#68AB6A]"
                      />
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-white">
                    Jhon Franklin Espinosa Castro
                  </h3>

                  <p className="font-semibold mt-2">
                    Líder de REDCIEN
                  </p>

                  <p className="text-sm text-black-600 mt-2">
                    Coordinador de Publicaciones, Unisimón Cúcuta
                  </p>

                </motion.div>



                {/* CO LIDER */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#FFB000] text-black rounded-2xl shadow-lg p-8 text-center"
                >

                  <div className="flex justify-center mb-4">
                    <div className="relative w-40 h-40">
                      <Image
                        src="/manuel_riano.jpeg"
                        alt="Manuel Ernesto Riaño Garzón"
                        fill
                        className="rounded-full object-cover border-4 border-[#68AB6A]"
                      />
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-white">
                    Manuel Ernesto Riaño Garzón
                  </h3>

                  <p className="font-semibold mt-2">
                    Co-líder de REDCIEN
                  </p>

                  <p className="text-sm text-black-600 mt-2">
                    Jefe de Investigación e Innovación, Unisimón Cúcuta
                  </p>

                </motion.div>

              </div>

            </section>

        </div>

      </main>

      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>

    </>
  );
}
