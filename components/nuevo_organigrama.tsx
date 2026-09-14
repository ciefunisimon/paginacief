"use client";

import { motion } from "framer-motion";

export default function Nuevo_organigrama() {

  const nivel2 = [
    {
      nombre: "Gestion de I+D+i",
      cargo: "",
      width: "220px",
      minHeight: "80px",
      top: "180px",
      right: "935px",
    },
    {
      nombre: "Administración y finanzas",
      cargo: "",
      width: "260px",
      minHeight: "90px",
      top: "180px",
      right: "445px",
    },
    {
      nombre: "Servicios de apoyo",
      cargo: "",
      width: "200px",
      minHeight: "80px",
      top: "180px",
      right: "50px",
    },
  ];

  const nivel3 = [
    {
      nombre: "Carolina Ramírez",
      cargo: "Ciencias Sociales",
      width: "170px",
      minHeight: "80px",
      top: "0px",
      left: "-140px",
    },
    {
      nombre: "Mary Carlota Bernal",
      cargo: "TIC'S e IA",
      width: "170px",
      minHeight: "80px",
      top: "0px",
      left: "159px",
    },
    {
      nombre: "Investigador Novel",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "150px",
      left: "12px",
    },
    {
      nombre: "Asistente Administrativo",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "0px",
      left: "380px",
    },
    {
      nombre: "Costos y Operaciones",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "0px",
      left: "620px",
    },
    {
      nombre: "Documentación y Comunicacion",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "0px",
      left: "820px",
    },
    {
      nombre: "Servicios Tecnicos",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "0px",
      left: "1035px",
    },
    {
      nombre: "Hardware y Software",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "145px",
      left: "1035px",
    },
    {
      nombre: "Diseñador Grafico",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "250px",
      left: "710px",
    },
    {
      nombre: "Producciones Multimedia",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "250px",
      left: "950px",
    },
    {
      nombre: "Comunity Manager",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "350px",
      left: "830px",
    },
  ];

  return (
    <section className="relative bg-[#68AB6A] to-b from-white to-white text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">

      <div className="absolute inset-0 bg-[url('/images/pattern-green.svg')] opacity-10 bg-repeat bg-center" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* 🔗 LÍNEAS VECTORIALES AJUSTADAS */}
        <svg
          className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 1050"
        >
          {/* Línea vertical de Neida a la barra horizontal principal */}
          <line x1="600" y1="360" x2="600" y2="400" stroke="black" strokeWidth="2" />
          
          {/* Barra horizontal principal que conecta las 3 áreas */}
          <line x1="110" y1="400" x2="1050" y2="400" stroke="black" strokeWidth="2" />
          
          {/* Bajantes de la barra principal a las 3 cajas del nivel 2 */}
          <line x1="110" y1="400" x2="110" y2="470" stroke="black" strokeWidth="2" />
          <line x1="600" y1="400" x2="600" y2="470" stroke="black" strokeWidth="2" />
          <line x1="1050" y1="400" x2="1050" y2="470" stroke="black" strokeWidth="2" />

          {/* Ramas de Gestión de I+D+i */}
          <line x1="110" y1="550" x2="110" y2="640" stroke="black" strokeWidth="2" />
          <line x1="0" y1="640" x2="220" y2="640" stroke="black" strokeWidth="2" />
          <line x1="0" y1="640" x2="0" y2="700" stroke="black" strokeWidth="2" />
          <line x1="220" y1="640" x2="220" y2="700" stroke="black" strokeWidth="2" />
          <line x1="110" y1="640" x2="110" y2="850" stroke="black" strokeWidth="2" />

          {/* Ramas de Administración y Finanzas */}
          <line x1="600" y1="560" x2="600" y2="640" stroke="black" strokeWidth="2" />
          <line x1="480" y1="640" x2="720" y2="640" stroke="black" strokeWidth="2" />
          <line x1="480" y1="640" x2="480" y2="700" stroke="black" strokeWidth="2" />
          <line x1="720" y1="640" x2="720" y2="700" stroke="black" strokeWidth="2" />

          {/* Ramas de Servicios de Apoyo */}
          <line x1="1050" y1="550" x2="1050" y2="640" stroke="black" strokeWidth="2" />
          <line x1="920" y1="640" x2="1140" y2="640" stroke="black" strokeWidth="2" />
          <line x1="920" y1="640" x2="920" y2="700" stroke="black" strokeWidth="2" />
          <line x1="1140" y1="640" x2="1140" y2="700" stroke="black" strokeWidth="2" />

          {/* Sub-ramas de Servicios Técnicos */}
          <line x1="1140" y1="780" x2="1140" y2="845" stroke="black" strokeWidth="2" />

          {/* Sub-ramas de Documentación y Comunicación */}
          <line x1="920" y1="780" x2="920" y2="850" stroke="black" strokeWidth="2" />
          <line x1="810" y1="850" x2="1030" y2="850" stroke="black" strokeWidth="2" />
          <line x1="810" y1="850" x2="810" y2="950" stroke="black" strokeWidth="2" />
          <line x1="1030" y1="850" x2="1030" y2="950" stroke="black" strokeWidth="2" />
          <line x1="920" y1="850" x2="920" y2="1050" stroke="black" strokeWidth="2" />
        </svg>

        {/* 🔹 Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8"
        >
          Centro de Investigación en Estudios Fronterizos (CIEF)
        </motion.h2>

        {/* 🔹 Nivel Superior (Luis Ortíz) + Nivel 1 (Neida Albornoz) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          {/* Luis Ortíz Ospino */}
          <div
            className="bg-[#FFB000] rounded-2xl shadow-xl p-5 border border-black/10 w-full max-w-[280px]"
            style={{ minHeight: "90px" }}
          >
            <p className="font-bold text-lg">Luis Ortíz Ospino</p>
            <p className="text-xs text-black/80 mt-1">
              Vicerrectoría de Investigación, Innovación y Extensión
            </p>
          </div>

          {/* Línea conectora entre Luis y Neida */}
          <div className="w-[2px] h-8 bg-black"></div>

          {/* Neida Albornoz Arias */}
          <div
            className="bg-[#FFB000] rounded-2xl shadow-xl p-5 border border-black/10 w-full max-w-[280px]"
            style={{ minHeight: "90px" }}
          >
            <p className="font-bold text-lg">Neida Albornoz Arias.</p>
            <p className="text-xs text-black/80 mt-1">
              Centro de Investigación en Estudios Fronterizos - CIEF
            </p>
          </div>
        </motion.div>

        {/* 🔹 Nivel 2 */}
        <div className="relative lg:h-[180px] mb-16 flex flex-col gap-6 items-center lg:block">
          {nivel2.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#FFB000] rounded-2xl shadow-md p-4 border border-black/10 hover:scale-105 transition-transform duration-300 w-full lg:absolute flex flex-col justify-center items-center text-center"
              style={{
                maxWidth: p.width,
                minHeight: p.minHeight,
                top: p.top,
                right: p.right,
              }}
            >
              <p className="font-bold text-sm sm:text-base">{p.nombre}</p>
              {p.cargo && <p className="text-xs text-black/80 mt-1">{p.cargo}</p>}
            </motion.div>
          ))}
        </div>

        {/* 🔹 Nivel 3 y Subniveles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative lg:h-[450px] mt-16 flex flex-col gap-6 items-center lg:block"
        >
          {nivel3.map((p, i) => (
            <div
              key={i}
              className="bg-[#FFB000] rounded-2xl shadow-md p-3 border border-black/10 hover:scale-105 transition-transform duration-300 w-full lg:absolute flex flex-col justify-center items-center text-center"
              style={{
                maxWidth: p.width,
                minHeight: p.minHeight,
                top: p.top,
                left: p.left,
              }}
            >
              <p className="font-bold text-xs sm:text-sm">{p.nombre}</p>
              {p.cargo && <p className="text-[11px] text-black/80 mt-0.5">{p.cargo}</p>}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
