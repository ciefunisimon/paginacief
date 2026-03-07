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
        "Desarrollo de eventos certificados como diplomados, talleres, seminarios, simposios y encuentros para mejorar las competencias en procesos y gestión editorial."
    },
    {
      titulo: "Cooperación interinstitucional",
      icon: <FaUsers size={28} />,
      texto:
        "Creación de mecanismos de colaboración entre autores, editores, compiladores de instituciones educativas, empresas, centros y grupos de investigación, para optimizar recursos, desarrollar proyectos, eventos y compartir buenas prácticas editoriales."
    },
    {
      titulo: "Mejora de la calidad editorial",
      icon: <FaCheckCircle size={28} />,
      texto:
        "Implementación de normas y criterios de publicación alineados con estándares nacionales e internacionales."
    },
    {
      titulo: "Fortalecimiento de visibilidad e indexación",
      icon: <FaGlobe size={28} />,
      texto:
        "Gestión de estrategias para el registro de revistas en diferentes plataformas o consorcios científicos de alto reconocimiento."
    }
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#28A59F] py-30 px-4 sm:px-6 lg:px-8">

        <div className="max-w-6xl mx-auto text-white">

          {/* HERO */}
          <motion.section
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-20 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left"
          >

            <motion.div
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src="/LogoREDCIEN-Negro.png"
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

          </motion.section>


          {/* PRESENTACIÓN */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white text-black rounded-2xl shadow-lg p-6 sm:p-10 mb-12"
          >

            <h2 className="text-2xl font-bold mb-6 text-[#28A59F]">
              Que es la REDCIEN
            </h2>

            <p className="mb-4 leading-relaxed">
              <strong>La Red de Editores Científicos del Norte de Santander - REDCIEN</strong>
              iniciativa interinstitucional orientada al fortalecimiento de las publicaciones académicas y científicas en diferentes ámbitos. 
              El propósito es promover la calidad editorial, la visibilidad de la producción investigativa y la cooperación entre instituciones educativas, empresas y el estado. 
              A través de espacios de formación, intercambio de ideas, gestión y prácticas editoriales, articulación regional desde <strong>REDCIEN</strong>.
            </p>

            <p className="leading-relaxed">
              Tiene por objetivo principal la consolidación de un espacio de articulación entre las instituciones educativas,
              empresas, entes gubernamentales, investigadores, centros y grupos de investigación, promoviendo estándares de calidad editorial y fomentando la visibilidad de las publicaciones académicas y científicas.
            </p>

          </motion.section>


          {/* LINEAS DE ACCIÓN */}
          <section className="mb-16">

            <h2 className="text-2xl font-bold mb-10 text-center text-white">
              Líneas de Acción
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {lineas.map((item, i) => (

                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  className="bg-white text-black rounded-2xl p-6 shadow-lg flex flex-col justify-between"
                >

                  <div>

                    <div className="text-[#28A59F] mb-4">
                      {item.icon}
                    </div>

                    <h3 className="font-bold text-lg mb-3 text-[#28A59F]">
                      {item.titulo}
                    </h3>

                    <p className="text-sm text-gray-600">
                      Haz clic en ver más para conocer detalles.
                    </p>

                  </div>

                  <button
                    onClick={() => setModal(item)}
                    className="mt-6 bg-black text-white px-4 py-2 rounded-full font-semibold hover:opacity-90"
                  >
                    Ver más
                  </button>

                </motion.div>

              ))}

            </div>

          </section>


          {/* COMITÉ */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white text-black rounded-2xl shadow-lg p-6 sm:p-10 mb-12"
          >

            <h2 className="text-2xl font-bold mb-6 text-[#28A59F]">
              Comité REDCIEN
            </h2>

            <p className="mb-6 leading-relaxed">
              El Comité Central de la Red de Editores Científicos de la Región Norte (<strong>REDCIEN</strong>) es el órgano de dirección estratégica encargado de la planificación,
              coordinación y seguimiento de las acciones estructurales de la red. Además, para garantizar la operatividad de las actividades, articulación estrategias o propuestas,
              y toma de decisiones, en concordancia con las líneas de acción de REDCIEN, debido a la experiencia desde lo académico, investigativo, científico y ético, que es fundamental en procesos editoriales. 
              Este comité establece lineamientos, define prioridades y actúa como instancia de gobernanza, asegurando la sostenibilidad, apropiación y divulgación de la red.
            </p>

          </motion.section>


          {/* CRITERIOS */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white text-black rounded-2xl shadow-lg p-6 sm:p-10 mb-12"
          >

            <h2 className="text-2xl font-bold mb-6 text-[#28A59F]">
              Criterios de Inscripción
            </h2>

            <p className="mb-6 leading-relaxed">
              es fundamental cumplir con ciertos criterios e información personal, académica, investigativa o científica, asegurando que quienes se integren compartan un compromiso desde el respeto, la ética y el trabajo colaborativo entre pares.
              Estos criterios están pensados para reunir a personas con experiencia en el ámbito académico, investigativo, científico y editorial, que deseen aportar activamente al crecimiento de la red. La inscripción se realiza mediante la postulación, 
              que será revisada por el Comité, con el fin de asegurar que cada nuevo integrante se ajuste a las líneas de acción de <strong>REDCIEN</strong>. Es decir, la inscripción será validada y aprobada por el Comité.
            </p>

            <div className="flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="https://forms.office.com/r/u0jAszNkj3"
                  target="_blank"
                  className="bg-black text-white px-8 py-3 rounded-full font-bold shadow-lg"
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
              Productos
            </h2>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-white text-[#28A59F] px-8 py-6 rounded-xl shadow-lg"
            >
              <motion.p className="text-4xl font-bold">
                {rounded}
              </motion.p>

              <p className="text-sm mt-2">
                divulgaciones científicas para la comunidad Unisimón
              </p>
            </motion.div>

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
                className="bg-white text-black rounded-2xl shadow-lg p-8 text-center"
              >

                <div className="flex justify-center mb-4">
                  <Image
                    src="/franklin_espinosa.jpg"
                    alt="Jhon Franklin Espinosa Castro"
                    width={120}
                    height={120}
                    className="rounded-full object-cover border-4 border-[#28A59F]"
                  />
                </div>

                <h3 className="font-bold text-lg text-[#28A59F]">
                  Jhon Franklin Espinosa Castro
                </h3>

                <p className="font-semibold mt-2">
                  Líder de REDCIEN
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  Coordinador de Publicaciones,
                  Universidad Simón Bolívar – sede Cúcuta
                </p>

              </motion.div>



              {/* CO LIDER */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white text-black rounded-2xl shadow-lg p-8 text-center"
              >

                <div className="flex justify-center mb-4">
                  <Image
                    src="/manuel_riano.jpeg"
                    alt="Manuel Ernesto Riaño Garzón"
                    width={120}
                    height={120}
                    className="rounded-full object-cover border-4 border-[#28A59F]"
                  />
                </div>

                <h3 className="font-bold text-lg text-[#28A59F]">
                  Manuel Ernesto Riaño Garzón
                </h3>

                <p className="font-semibold mt-2">
                  Co-líder de REDCIEN
                </p>

                <p className="text-sm text-gray-600 mt-2">
                  Jefe de Investigación e Innovación,
                  Universidad Simón Bolívar – sede Cúcuta
                </p>

              </motion.div>

             

            </div>
             <section className="flex justify-center mt-16 text-white">

                <a
                  href="mailto:redcien@unisimon.edu.co"
                  className="bg-black text-white px-8 py-3 rounded-full font-bold shadow-lg"
                >
                  Contactar a REDCIEN ✉
                </a>

              </section>

          </section>

        </div>

      </main>

      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>

    </>
  );
}
