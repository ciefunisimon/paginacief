"use client";

import { motion } from "framer-motion";

export default function Nuevo_organigrama() {
  return (
    <section className="relative bg-[#68AB6A] text-black py-16 px-4 sm:px-6 lg:px-12 overflow-x-auto">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center min-w-[1000px]">
        
        {/* 🔹 Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-white mb-12 text-center"
        >
          Centro de Investigación en Estudios Fronterizos (CIEF)
        </motion.h2>

        {/* 🔹 NIVEL SUPERIOR: Luis Ortíz Ospino */}
        <div className="flex flex-col items-center">
          <div className="bg-[#FFB000] rounded-2xl shadow-lg p-4 w-[260px] text-center border border-black/10">
            <p className="font-bold text-base">Luis Ortíz Ospino</p>
            <p className="text-xs text-black/80 mt-1">
              Vicerrectoría de Investigación, Innovación y Extensión
            </p>
          </div>
          <div className="w-[2px] h-8 bg-black"></div>
        </div>

        {/* 🔹 NIVEL 1: Neida Albornoz */}
        <div className="flex flex-col items-center">
          <div className="bg-[#FFB000] rounded-2xl shadow-lg p-4 w-[260px] text-center border border-black/10">
            <p className="font-bold text-base">Neida Albornoz Arias.</p>
            <p className="text-xs text-black/80 mt-1">
              Centro de Investigación en Estudios Fronterizos - CIEF
            </p>
          </div>
          <div className="w-[2px] h-8 bg-black"></div>
        </div>

        {/* 🔹 LÍNEA HORIZONTAL PRINCIPAL */}
        <div className="w-[78%] h-[2px] bg-black relative mb-8">
          {/* Bajantes vertical a las 3 columnas principales */}
          <div className="absolute left-0 top-0 w-[2px] h-8 bg-black"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-8 bg-black"></div>
          <div className="absolute right-0 top-0 w-[2px] h-8 bg-black"></div>
        </div>

        {/* 🔹 NIVEL 2 Y SUB-NIVELES (3 COLUMNAS) */}
        <div className="grid grid-cols-3 gap-8 w-full items-start">
          
          {/* COLUMNA 1: Gestión de I+D+i */}
          <div className="flex flex-col items-center">
            <div className="bg-[#FFB000] rounded-2xl shadow-md p-4 w-[220px] text-center border border-black/10">
              <p className="font-bold text-sm">Gestión de I+D+i</p>
            </div>
            
            <div className="w-[2px] h-6 bg-black"></div>
            
            {/* Sub-rama 1 */}
            <div className="w-[180px] h-[2px] bg-black relative">
              <div className="absolute left-0 top-0 w-[2px] h-6 bg-black"></div>
              <div className="absolute right-0 top-0 w-[2px] h-6 bg-black"></div>
            </div>

            <div className="flex justify-between w-[240px] mt-6">
              <div className="bg-[#FFB000] rounded-xl shadow p-3 w-[110px] text-center">
                <p className="font-bold text-xs">Carolina Ramírez</p>
                <p className="text-[10px] text-black/80">Ciencias Sociales</p>
              </div>
              <div className="bg-[#FFB000] rounded-xl shadow p-3 w-[110px] text-center">
                <p className="font-bold text-xs">Mary Carlota Bernal</p>
                <p className="text-[10px] text-black/80">TIC'S e IA</p>
              </div>
            </div>

            <div className="w-[2px] h-6 bg-black mt-2"></div>
            <div className="bg-[#FFB000] rounded-xl shadow p-3 w-[140px] text-center">
              <p className="font-bold text-xs">Investigador Novel</p>
            </div>
          </div>

          {/* COLUMNA 2: Administración y Finanzas */}
          <div className="flex flex-col items-center">
            <div className="bg-[#FFB000] rounded-2xl shadow-md p-4 w-[220px] text-center border border-black/10">
              <p className="font-bold text-sm">Administración y finanzas</p>
            </div>

            <div className="w-[2px] h-6 bg-black"></div>

            <div className="w-[180px] h-[2px] bg-black relative">
              <div className="absolute left-0 top-0 w-[2px] h-6 bg-black"></div>
              <div className="absolute right-0 top-0 w-[2px] h-6 bg-black"></div>
            </div>

            <div className="flex justify-between w-[240px] mt-6">
              <div className="bg-[#FFB000] rounded-xl shadow p-3 w-[110px] text-center">
                <p className="font-bold text-xs">Asistente Administrativo</p>
              </div>
              <div className="bg-[#FFB000] rounded-xl shadow p-3 w-[110px] text-center">
                <p className="font-bold text-xs">Costos y Operaciones</p>
              </div>
            </div>
          </div>

          {/* COLUMNA 3: Servicios de Apoyo */}
          <div className="flex flex-col items-center">
            <div className="bg-[#FFB000] rounded-2xl shadow-md p-4 w-[220px] text-center border border-black/10">
              <p className="font-bold text-sm">Servicios de apoyo</p>
            </div>

            <div className="w-[2px] h-6 bg-black"></div>

            <div className="w-[180px] h-[2px] bg-black relative">
              <div className="absolute left-0 top-0 w-[2px] h-6 bg-black"></div>
              <div className="absolute right-0 top-0 w-[2px] h-6 bg-black"></div>
            </div>

            <div className="flex justify-between w-[240px] mt-6">
              {/* Apoyo 1 */}
              <div className="flex flex-col items-center w-[110px]">
                <div className="bg-[#FFB000] rounded-xl shadow p-3 w-full text-center">
                  <p className="font-bold text-xs">Documentación y Comunicación</p>
                </div>
                <div className="w-[2px] h-4 bg-black"></div>
                <div className="bg-[#FFB000] rounded-xl shadow p-2 w-full text-center mb-2">
                  <p className="font-bold text-[11px]">Diseñador Gráfico</p>
                </div>
                <div className="bg-[#FFB000] rounded-xl shadow p-2 w-full text-center mb-2">
                  <p className="font-bold text-[11px]">Producciones Multimedia</p>
                </div>
                <div className="bg-[#FFB000] rounded-xl shadow p-2 w-full text-center">
                  <p className="font-bold text-[11px]">Community Manager</p>
                </div>
              </div>

              {/* Apoyo 2 */}
              <div className="flex flex-col items-center w-[110px]">
                <div className="bg-[#FFB000] rounded-xl shadow p-3 w-full text-center">
                  <p className="font-bold text-xs">Servicios Técnicos</p>
                </div>
                <div className="w-[2px] h-4 bg-black"></div>
                <div className="bg-[#FFB000] rounded-xl shadow p-2 w-full text-center">
                  <p className="font-bold text-[11px]">Hardware y Software</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
