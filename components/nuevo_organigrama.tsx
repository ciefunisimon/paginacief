"use client";

import { motion } from "framer-motion";

export default function Nuevo_organigrama() {

  const nivel2 = [
    {
      nombre: "Gestion de I+D+i",
      cargo: "",
      width: "220px",
      minHeight: "80px",
      top: "50px",
      right: "935px",
    },
    {
      nombre: "Administración y finanzas",
      cargo: "",
      width: "260px",
      minHeight: "90px",
      top: "50px",
      right: "445px",
    },
    {
      nombre: "Servicios de apoyo",
      cargo: "",
      width: "200px",
      minHeight: "80px",
      top: "50px",
      right: "50px",
    },
  ];

  const nivel3 = [
    {
      nombre: "Carolina Ramírez",
      cargo: "Ciencias Sociales",
      width: "170px",
      minHeight: "80px",
      top: "-150px",
      left: "-140px",
    },
    {
      nombre: "Mary Carlota Bernal",
      cargo: "TIC'S e IA",
      width: "170px",
      minHeight: "80px",
      top: "-150px",
      left: "159px",
    },
    {
      nombre: "Investigador Novel",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "0px",
      left: "12px",
    },
    {
      nombre: "Asistente Administrativo",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "-150px",
      left: "380px",
    },
    {
      nombre: "Costos y Operaciones",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "-150px",
      left: "620px",
    },
    {
      nombre: "Documentación y Comunicacion",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "-150px",
      left: "820px",
    },
    {
      nombre: "Servicios Tecnicos",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "-150px",
      left: "1035px",
    },
    {
      nombre: "Hardware y Software",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "-5px",
      left: "1035px",
    },
    {
      nombre: "Diseñador Grafico",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "100px",
      left: "710px",
    },
    {
      nombre: "Producciones Multimedia",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "100px",
      left: "950px",
    },
    {
      nombre: "Comunity Manager",
      cargo: "",
      width: "170px",
      minHeight: "80px",
      top: "200px",
      left: "830px",
    },
  ];

  return (
    <section className="relative bg-[#68AB6A] to-b from-white to-white text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">

      <div className="absolute inset-0 bg-[url('/images/pattern-green.svg')] opacity-10 bg-repeat bg-center" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* 🔗 LÍNEAS ORIGINALES */}
        <svg
          className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 900"
        >
          
          <line x1="600" y1="490" x2="600" y2="213" stroke="black" strokeWidth="2" />
          <line x1="1000" y1="350" x2="0" y2="350" stroke="black" strokeWidth="2" />
          <line x1="110" y1="490" x2="110" y2="320" stroke="black" strokeWidth="2" />
          <line x1="1050" y1="490" x2="1050" y2="320" stroke="black" strokeWidth="2" />
          <line x1="0" y1="490" x2="220" y2="490" stroke="black" strokeWidth="2" />
          <line x1="1" y1="550" x2="1" y2="490" stroke="black" strokeWidth="2" />
          <line x1="110" y1="750" x2="110" y2="490" stroke="black" strokeWidth="2" />
          <line x1="219" y1="550" x2="219" y2="490" stroke="black" strokeWidth="2" />
          <line x1="480" y1="490" x2="730" y2="490" stroke="black" strokeWidth="2" />
          <line x1="480" y1="550" x2="480" y2="490" stroke="black" strokeWidth="2" />
          <line x1="730" y1="550" x2="730" y2="490" stroke="black" strokeWidth="2" />
          <line x1="950" y1="490" x2="1149" y2="490" stroke="black" strokeWidth="2" />
          <line x1="950" y1="550" x2="950" y2="490" stroke="black" strokeWidth="2" />
          <line x1="1149" y1="550" x2="1149" y2="490" stroke="black" strokeWidth="2" />
          <line x1="950" y1="600" x2="950" y2="700" stroke="black" strokeWidth="2" />
          <line x1="1149" y1="600" x2="1149" y2="700" stroke="black" strokeWidth="2" />
          <line x1="870" y1="700" x2="1030" y2="700" stroke="black" strokeWidth="2" />
          <line x1="870" y1="700" x2="870" y2="800" stroke="black" strokeWidth="2" />
          <line x1="1030" y1="700" x2="1030" y2="800" stroke="black" strokeWidth="2" />
          <line x1="950" y1="700" x2="950" y2="920" stroke="black" strokeWidth="2" />
        </svg>

        {/* 🔹 Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-12"
        >
          Centro de Investigación en Estudios Fronterizos (CIEF)
        </motion.h2>

        {/* 🔹 Nivel 1 */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <div
            className="bg-[#FFB000] rounded-2xl shadow-xl p-6 border border-[#68AB6A]/30 w-full max-w-[280px]"
            style={{ minHeight: "100px" }}
          >
            <p className="font-bold text-lg">Neida Albornoz Arias.</p>
            <p className="text-sm text-black/80 mt-1">
              Centro de Investigación en Estudios Fronterizos - CIEF
            </p>
          </div>
        </motion.div>

        {/* 🔹 Nivel 2 */}
        <div className="relative lg:h-[350px] mb-16 flex flex-col gap-6 items-center lg:block">
          {nivel2.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#FFB000] rounded-2xl shadow-md p-4 border border-[#68AB6A]/30 hover:scale-105 transition-transform duration-300 w-full lg:absolute"
              style={{
                maxWidth: p.width,
                minHeight: p.minHeight,
                top: p.top,
                right: p.right,
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
          className="relative lg:h-[260px] mt-16 flex flex-col gap-6 items-center lg:block"
        >
          {nivel3.map((p, i) => (
            <div
              key={i}
              className="bg-[#FFB000] rounded-2xl shadow-md p-4 border border-[#68AB6A]/30 hover:scale-105 transition-transform duration-300 w-full lg:absolute"
              style={{
                maxWidth: p.width,
                minHeight: p.minHeight,
                top: p.top,
                left: p.left,
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
