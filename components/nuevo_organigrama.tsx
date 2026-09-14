"use client";

import { motion } from "framer-motion";

export default function Nuevo_organigrama() {

  const nivel2 = [
    {
      nombre: "Gestion de I+D+i",
      cargo: "",
      width: "220px",
      minHeight: "80px",
      top: "160px",
      right: "935px",
    },
    {
      nombre: "Administración y finanzas",
      cargo: "",
      width: "260px",
      minHeight: "90px",
      top: "160px",
      right: "445px",
    },
    {
      nombre: "Servicios de apoyo",
      cargo: "",
      width: "200px",
      minHeight: "80px",
      top: "160px",
      right: "50px",
    },
  ];

  const nivel3 = [
    {
      nombre: "Carolina Ramírez",
      cargo: "Ciencias Sociales",
      width: "170px",
      minHeight: "80px",
      top: "-40px",
      left: "-140px",
    },
    {
      nombre: "Mary Carlota Bernal",
      cargo: "TIC'S e IA",
      width: "170px",
      minHeight: "80px",
      top: "-40px",
      left: "159px",
    },
    {
      nombre: "Investigador Novel",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "110px",
      left: "12px",
    },
    {
      nombre: "Asistente Administrativo",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "-40px",
      left: "380px",
    },
    {
      nombre: "Costos y Operaciones",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "-40px",
      left: "620px",
    },
    {
      nombre: "Documentación y Comunicacion",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "-40px",
      left: "820px",
    },
    {
      nombre: "Servicios Tecnicos",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "-40px",
      left: "1035px",
    },
    {
      nombre: "Hardware y Software",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "120px", // 🟢 Bajado un poco para evitar que la línea lo atraviese
      left: "1035px",
    },
    {
      nombre: "Diseñador Grafico",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "230px", // 🟢 Ajustado más abajo
      left: "710px",
    },
    {
      nombre: "Producciones Multimedia",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "230px", // 🟢 Ajustado más abajo
      left: "950px",
    },
    {
      nombre: "Comunity Manager",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "340px", // 🟢 Ajustado más abajo
      left: "830px",
    },
  ];

  return (
    <section className="relative bg-[#68AB6A] text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">

      <div className="absolute inset-0 bg-[url('/images/pattern-green.svg')] opacity-10 bg-repeat bg-center" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* 🔗 LÍNEAS VECTORIALES REVISADAS Y CORREGIDAS */}
        <svg
          className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 1000"
        >
          {/* Línea vertical de Neida alargada hasta tocar la barra horizontal exactamente (y2 de 400 a 460) */}
          <line x1="600" y1="310" x2="600" y2="460" stroke="black" strokeWidth="2" />

          {/* Barra horizontal principal que distribuye a los 3 bloques principales */}
          <line x1="110" y1="460" x2="1050" y2="460" stroke="black" strokeWidth="2" />

          {/* Bajantes hacia Nivel 2 */}
          <line x1="110" y1="460" x2="110" y2="600" stroke="black" strokeWidth="2" />
          <line x1="600" y1="460" x2="600" y2="600" stroke="black" strokeWidth="2" />
          <line x1="1050" y1="460" x2="1050" y2="600" stroke="black" strokeWidth="2" />

          {/* Sub-lineas Gestión de I+D+i */}
          <line x1="0" y1="600" x2="220" y2="600" stroke="black" strokeWidth="2" />
          <line x1="0" y1="600" x2="0" y2="660" stroke="black" strokeWidth="2" />
          <line x1="220" y1="600" x2="220" y2="660" stroke="black" strokeWidth="2" />
          <line x1="110" y1="600" x2="110" y2="810" stroke="black" strokeWidth="2" />

          {/* Sub-lineas Administración y Finanzas */}
          <line x1="480" y1="600" x2="730" y2="600" stroke="black" strokeWidth="2" />
          <line x1="480" y1="600" x2="480" y2="660" stroke="black" strokeWidth="2" />
          <line x1="730" y1="600" x2="730" y2="660" stroke="black" strokeWidth="2" />

          {/* Sub-lineas Servicios de Apoyo */}
          <line x1="950" y1="600" x2="1149" y2="600" stroke="black" strokeWidth="2" />
          <line x1="950" y1="600" x2="950" y2="660" stroke="black" strokeWidth="2" />
          <line x1="1149" y1="600" x2="1149" y2="660" stroke="black" strokeWidth="2" />

          {/* Sub-lineas Hardware y Software (detenida exactamente antes de la caja) */}
          <line x1="1149" y1="710" x2="1149" y2="820" stroke="black" strokeWidth="2" />

          {/* Sub-lineas Comunicación / Diseñador / Multimedia / Community Manager */}
          <line x1="950" y1="710" x2="950" y2="830" stroke="black" strokeWidth="2" />
          <line x1="870" y1="830" x2="1030" y2="830" stroke="black" strokeWidth="2" />
          <line x1="870" y1="830" x2="870" y2="930" stroke="black" strokeWidth="2" />
          <line x1="1030" y1="830" x2="1030" y2="930" stroke="black" strokeWidth="2" />
          
          {/* Bajante a Community Manager (detenida antes de entrar al cuadro) */}
          <line x1="950" y1="830" x2="950" y2="1040" stroke="black" strokeWidth="2" />
        </svg>

        {/* 🔹 Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-10"
        >
          Centro de Investigación en Estudios Fronterizos (CIEF)
        </motion.h2>

        {/* 🔹 Nivel Superior (Luis Ortíz Ospino) + Nivel 1 (Neida Albornoz) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-10"
        >
          {/* Luis Ortíz Ospino */}
          <div
            className="bg-[#FFB000] rounded-2xl shadow-xl p-4 border border-black/10 w-full max-w-[280px]"
            style={{ minHeight: "90px" }}
          >
            <p className="font-bold text-base sm:text-lg">Luis Ortíz Ospino</p>
            <p className="text-xs text-black/80 mt-1">
              Vicerrectoría de Investigación, Innovación y Extensión
            </p>
          </div>

          {/* Línea de unión entre Luis y Neida */}
          <div className="w-[2px] h-6 bg-black"></div>

          {/* Neida Albornoz Arias */}
          <div
            className="bg-[#FFB000] rounded-2xl shadow-xl p-4 border border-black/10 w-full max-w-[280px]"
            style={{ minHeight: "90px" }}
          >
            <p className="font-bold text-base sm:text-lg">Neida Albornoz Arias.</p>
            <p className="text-xs text-black/80 mt-1">
              Centro de Investigación en Estudios Fronterizos - CIEF
            </p>
          </div>
        </motion.div>

        {/* 🔹 Nivel 2 */}
        <div className="relative lg:h-[260px] mb-12 flex flex-col gap-6 items-center lg:block">
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

        {/* 🔹 Nivel 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative lg:h-[450px] mt-12 flex flex-col gap-6 items-center lg:block"
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
