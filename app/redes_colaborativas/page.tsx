"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function RedcienPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#FFFFFF] py-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-white">

          {/* 🔹 HERO CON LOGO */}
          <section className="text-center mb-20 flex flex-col items-center">


            {/* Título */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-[#28A59F] text-white px-6 py-4 rounded-full shadow-lg mb-8">
              Red de Editores Científicos
              <br className="hidden sm:block" />
              del Norte de Santander
            </h1>

            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/logoredcien.png"
                alt="Logo REDCIEN"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>

          </section>

          {/* 🔹 PRESENTACIÓN */}
          <section className="bg-[#28A59F] text-black rounded-2xl shadow-lg p-6 sm:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#FFFFFF]">
              Presentación
            </h2>

            <p className="mb-4 leading-relaxed">
              <strong>La Red de Editores Científicos del Norte de Santander - REDCIEN  </strong> ,
              es una iniciativa interinstitucional orientada al fortalecimiento de las publicaciones académicas y científicas en diferentes ámbitos. 
              El propósito es promover la calidad editorial, la visibilidad de la producción investigativa y la cooperación entre instituciones educativas,
              empresas y el estado. A través de espacios de formación, intercambio de ideas, gestión y prácticas editoriales, articulación regional desde <strong>REDCIEN</strong>.
            </p>

            <p className="leading-relaxed">
              Tiene por objetivo principal la consolidación de un espacio de articulación entre las instituciones educativas, empresas,
              entes gubernamentales, investigadores, centros y grupos de investigación, promoviendo estándares de calidad editorial y 
              fomentando la visibilidad de las publicaciones académicas y científicas.
            </p>


             <p className="leading-relaxed">
                 <br />
                <strong>La REDCIEN </strong> se constituye en un referente para editores, compiladores, investigadores, autores y gestores de publicaciones sin importar la naturaleza.
                A través, de estrategias de capacitación, cooperación y asesoría, la red busca mejorar los procesos editoriales y fortalecer la indexación e impacto de las revistas científicas de la región 
                y otros productos editoriales de divulgación y apropiación de conocimiento.
             </p>
          </section>

          {/* 🔹 LÍNEAS DE ACCIÓN */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-[#28A59F]">
              Líneas de Acción
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-[#28A59F] text-black rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-[#FFFFFF]">
                  Formación y actualización editorial
                </h3>
                <p>
                  Desarrollo de eventos certificados como diplomados, talleres, seminarios, simposios y
                  encuentros para mejorar las competencias en procesos y gestión editorial.
                </p>
              </div>

              <div className="bg-[#28A59F] text-black rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-[#FFFFFF]">
                  Cooperación interinstitucional
                </h3>
                <p>
                 Creación de mecanismos de colaboración entre autores, editores, compiladores de instituciones educativas, empresas, centros y 
                 grupos de investigación, para optimizar recursos, desarrollar proyectos, eventos y compartir buenas prácticas editoriales.
                </p>
              </div>

              <div className="bg-[#28A59F] text-black rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-[#FFFFFF]">
                  Mejora de la calidad editorial
                </h3>
                <p>
                  Implementación de normas y criterios de publicación alineados 
                  con estándares nacionales e internacionales.
                </p>
              </div>

              <div className="bg-[#28A59F] text-black rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-3 text-[#FFFFFF]">
                  Fortalecimiento de la visibilidad e indexación
                </h3>
                <p>
                  Gestión de estrategias para el registro de revistas en 
                  diferentes plataformas o consorcios científicos de alto reconocimiento.
                </p>
              </div>

            </div>
          </section>

          <section className="bg-[#28A59F] text-black rounded-2xl shadow-lg p-6 sm:p-10 mb-12">

            <p className="mb-4 leading-relaxed">
              La <strong>REDCIEN</strong>, extiende la invitación a los diferentes profesionales de las instituciones educativas, empresas del sector público y privado,
              investigadores, centros y grupos de investigación, quienes se desempeñen en lo académico, investigativo, científico, comercial, social, 
              cultural y empresarial, así como a demás interesados en sumarse a esta iniciativa pertinente para la ciudad de Cúcuta, área metropolitana y departamento de Norte de Santander, 
              con el propósito de consolidar un ecosistema editorial con conocimiento consolidado, rigurosidad y alineado con los estándares y exigencias del ámbito científico nacional e internacional.
            </p>


          </section>

          {/* 🔹 COMITÉ */}
          <section className="bg-[#28A59F] text-black rounded-2xl shadow-lg p-6 sm:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#FFFFFF]">
              Comité REDCIEN
            </h2>

            <p className="leading-relaxed">
              El Comité Central de la Red de Editores Científicos de la Región Norte (REDCIEN) es el órgano de dirección estratégica encargado de la planificación, 
              coordinación y seguimiento de las acciones estructurales de la red. Además, para garantizar la operatividad de las actividades, articulación estrategias o propuestas, 
              y toma de decisiones, en concordancia con las líneas de acción de <strong>REDCIEN</strong>, debido a la experiencia desde lo académico, investigativo, científico y ético, que es fundamental en procesos editoriales.
            </p>
          </section>

          {/* 🔹 CRITERIOS */}
          <section className="bg-[#28A59F] text-black rounded-2xl shadow-lg p-6 sm:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#FFFFFF]">
              Criterios de Inscripción
            </h2>

            <p className="mb-6 leading-relaxed">
              Para hacer parte de la Red de Editores Científicos de la Región Norte (REDCIEN), es fundamental cumplir con ciertos criterios e información personal,
              académica, investigativa o científica, asegurando que quienes se integren compartan un compromiso desde el respeto, la ética y el trabajo colaborativo entre pares. 
              Estos criterios están pensados para reunir a personas con experiencia en el ámbito académico, investigativo, científico y editorial, que deseen aportar activamente al crecimiento de la red. 
              
            </p>

            <div className="flex justify-center">
              <Link
                href="https://forms.office.com/r/u0jAszNkj3"
                target="_blank"
                className="bg-[#000000] text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all duration-300 shadow-lg"
              >
                Inscribirse en REDCIEN →
              </Link>
            </div>
          </section>

          {/* 🔹 CONTACTO */}
          <section className="text-center mt-16 text-[#28A59F]">

            <p className="font-semibold text-lg mb-6">
                Fundadores: Universidad Simón Bolívar – Sede Cúcuta

                <br />
                Correo: redcien@unisimon.edu.co

            </p>

            <div className="flex justify-center">
                <a
                href="mailto:redcien@unisimon.edu.co?subject=Contacto%20REDCIEN&body=Hola,%20me%20gustaría%20recibir%20más%20información%20sobre%20la%20Red."
                className="bg-[#28A59F] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-black transition-all duration-300"
                >
                Contactar a REDCIEN ✉
                </a>
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