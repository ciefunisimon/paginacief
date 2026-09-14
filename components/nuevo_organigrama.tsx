"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function NuevoOrganigrama() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const inicializarChart = () => {
    if (!window.OrgChart || !chartRef.current) return;

    // 1. Plantilla personalizada basada en 'ana'
    window.OrgChart.templates.ciefTemplate = Object.assign(
      {},
      window.OrgChart.templates.ana
    );

    // 2. Tarjeta con tus colores
    window.OrgChart.templates.ciefTemplate.node = `
      <rect x="0" y="0" width="{w}" height="{h}"
             fill="#FFB000"
             stroke="#68AB6A"
             stroke-width="2"
             rx="14" ry="14">
      </rect>`;

    // 3. Nombre
    window.OrgChart.templates.ciefTemplate.field_0 = `
      <text data-width="200" font-size="16" font-weight="bold"
            fill="#000000" x="125" y="40" text-anchor="middle">
        {val}
      </text>`;

    // 4. Cargo
    window.OrgChart.templates.ciefTemplate.field_1 = `
      <text data-width="200" font-size="13"
            fill="#333333" x="125" y="62" text-anchor="middle">
        {val}
      </text>`;

    // 5. Inicializar
    chartInstance.current = new window.OrgChart(chartRef.current, {
      template: "ciefTemplate",
      nodeBinding: {
        field_0: "name",
        field_1: "role",
      },
      nodeWidth: 220,
      nodeHeight: 90,
      levelSeparation: 60,
      siblingSeparation: 40,
      subtreeSeparation: 50,
      link: { width: 3 },
    });

    // 6. Cargar datos
    chartInstance.current.load([
      { id: 1,  name: "Luis Ortiz Ospino",       role: "Vicerrector de Investigación" },
      { id: 2,  pid: 1, name: "Neida Albornoz Arias", role: "Director CIEF" },
      { id: 3,  pid: 2, name: "Gestión de I+D+i",     role: "" },
      { id: 4,  pid: 2, name: "Administración y finanzas", role: "" },
      { id: 5,  pid: 2, name: "Servicios de apoyo",   role: "" },
      { id: 6,  pid: 3, name: "Carolina Ramírez",      role: "Ciencias Sociales" },
      { id: 7,  pid: 3, name: "Mary Carlota Bernal",   role: "TIC'S e IA" },
      { id: 8,  pid: 3, name: "Investigador Novel",    role: "" },
      { id: 9,  pid: 4, name: "Asistente Administrativo", role: "" },
      { id: 10, pid: 4, name: "Costos y Operaciones",  role: "" },
      { id: 11, pid: 5, name: "Documentación y Comunicación", role: "" },
      { id: 12, pid: 5, name: "Servicios Técnicos",    role: "" },
      { id: 13, pid: 11, name: "Diseñador Gráfico",    role: "" },
      { id: 14, pid: 11, name: "Comunity Manager",     role: "" },
      { id: 15, pid: 11, name: "Producciones Multimedia", role: "" },
      { id: 16, pid: 12, name: "Hardware y Software",  role: "" },
    ]);
  };

  return (
    <section className="relative bg-[#68AB6A] text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-12 text-center">
          Centro de Investigación en Estudios Fronterizos (CIEF)
        </h2>

        {/* Contenedor del organigrama */}
        <div
          ref={chartRef}
          id="tree"
          style={{ width: "100%", height: "80vh", background: "#68AB6A" }}
        />
      </div>

      {/* Cargar BALKAN desde CDN */}
      <Script
        src="https://cdn.balkan.app/orgchart-community.js"
        strategy="afterInteractive"
        onLoad={inicializarChart}
      />
    </section>
  );
}
