"use client";

import { motion } from "framer-motion";

export default function OrganigramaCucuta() {
  const nivel2 = [
    { nombre: "Miembros del comité", cargo: "Comité Científico - Cúcuta" },
    { nombre: "Neida Albornoz A.", cargo: "Centro de Investigación en Estudios Fronterizos - CIEF" },
    { nombre: "Carolina Ramírez M.", cargo: "Unidad de Proyectos" },
  ];

  const nivel3 = [
    { nombre: "José María Rincón", cargo: "Coordinación de Formación para la Investigación - Proyecto" },
    { nombre: "Jovany Gómez V.", cargo: "Coordinación de Formación para la Investigación - Pedagogía" },
    { nombre: "Nidia Bonilla", cargo: "Coordinación del Programa Institucional de Semilleros" },
    { nombre: "Jhon F. Espinosa", cargo: "Coordinación de Publicaciones" },
    { nombre: "Jessica Leal", cargo: "Coordinación de Emprendimiento e Innovación" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-white text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/images/pattern-green.svg')] opacity-10 bg-repeat bg-center" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* 🟢 Título */}
        {/* 🔗 Líneas conectoras */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 900"
        >
          {/* 🔹 Nivel 1 → línea vertical */}
          <line
            x1="600"
            y1="220"
            x2="600"
            y2="300"
            stroke="black"
            strokeWidth="2"
          />

          {/* 🔹 Nivel 2 → línea horizontal */}
          <line
            x1="200"
            y1="300"
            x2="1000"
            y2="300"
            stroke="black"
            strokeWidth="2"
          />

          {/* 🔹 Bajadas hacia Nivel 2 */}
          <line x1="200" y1="300" x2="200" y2="360" stroke="black" strokeWidth="2" />
          <line x1="600" y1="300" x2="600" y2="360" stroke="black" strokeWidth="2" />
          <line x1="1000" y1="300" x2="1000" y2="360" stroke="black" strokeWidth="2" />

          <line
            x1="300"
            y1="580"
            x2="600"
            y2="580"
            stroke="black"
            strokeWidth="2"
          />


          {/* 🔹 Bajada central hacia Nivel 3 */}
          <line
            x1="600"
            y1="360"
            x2="600"
            y2="650"
            stroke="black"
            strokeWidth="2"
          />

          {/* 🔹 Línea horizontal Nivel 3 */}
          <line
            x1="5"
            y1="650"
            x2="1210"
            y2="650"
            stroke="black"
            strokeWidth="2"
          />

          {/* 🔹 Conectores a cada card del Nivel 3 */}
          <line x1="6" y1="650" x2="6" y2="700" stroke="black" strokeWidth="2" />
          <line x1="300" y1="650" x2="300" y2="700" stroke="black" strokeWidth="2" />
          <line x1="600" y1="650" x2="600" y2="700" stroke="black" strokeWidth="2" />
          <line x1="900" y1="650" x2="900" y2="700" stroke="black" strokeWidth="2" />
          <line x1="1199" y1="650" x2="1199" y2="700" stroke="black" strokeWidth="2" />
        </svg>


        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#68AB6A] mb-12"
        >
          Departamento de Investigación e Innovación – Cúcuta
        </motion.h2>

        {/* 🔹 Nivel 1 */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <div className="bg-[#FFB000] text-black rounded-2xl shadow-xl p-6 w-full sm:w-80 max-w-xs border border-[#68AB6A]/30">
            <p className="font-bold text-lg">Manuel Riaño G.</p>
            <p className="text-sm text-black/80 mt-1">
              Jefe del Departamento de Investigación e Innovación – Cúcuta
            </p>
          </div>
        </motion.div>

        {/* 🔹 Nivel 2 */}
       
        <div className="relative h-[350px] mb-16">
          {nivel2.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`
                absolute bg-[#FFB000] rounded-2xl shadow-md p-5
                border border-[#68AB6A]/30 hover:scale-105 
                transition-transform duration-300 w-64
              `}
              style={{
                top:
                  i === 0 ? "0px" :
                  i === 1 ? "0px" :
                  i === 2 ? "240px" : "0px",
                right:
                  i === 0 ? "800px" :
                  i === 1 ? "120px" :
                  i === 2 ? "800px" : "0px",
              }}
            >
              <p className="font-bold text-sm sm:text-base">{p.nombre}</p>
              <p className="text-xs sm:text-sm text-black/80 mt-1">{p.cargo}</p>
            </motion.div>
          ))}
        </div>


       

        {/* 🔹 Nivel 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[260px] mt-16"
        >
          {nivel3.map((p, i) => (
            <div
              key={i}
              className="
                absolute bg-[#FFB000] rounded-2xl shadow-md p-5
                border border-[#68AB6A]/30 w-64
                hover:scale-105 transition-transform duration-300
              "
              style={{
                top: "0px", // 🔥 misma altura = misma línea
                left:
                  i === 0 ? "-130px" :
                  i === 1 ? "159px" :
                  i === 2 ? "450px" :
                  i === 3 ? "740px" :
                  i === 4 ? "1040px" : "0px",
              }}
            >
              <p className="font-bold text-sm sm:text-base">{p.nombre}</p>
              <p className="text-xs sm:text-sm text-black/80 mt-1">{p.cargo}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
