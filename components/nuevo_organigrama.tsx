"use client";

import { useRef } from "react";
import Script from "next/script";

export default function NuevoOrganigrama() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const inicializarChart = () => {
    if (!window.OrgChart || !chartRef.current) return;

    // ─── Plantilla personalizada basada en 'ana' ───
    window.OrgChart.templates.ciefTemplate = Object.assign(
      {},
      window.OrgChart.templates.ana
    );

    // Tarjeta con colores institucionales
    window.OrgChart.templates.ciefTemplate.node = `
      <rect x="0" y="0" width="{w}" height="{h}"
             fill="#FFB000"
             stroke="#68AB6A"
             stroke-width="2"
             rx="16" ry="16">
      </rect>`;

    // Nombre (campo superior)
    window.OrgChart.templates.ciefTemplate.field_0 = `
      <text data-width="280" font-size="20" font-weight="bold"
            fill="#000000" x="160" y="58" text-anchor="middle">
        {val}
      </text>`;

    // Cargo (campo inferior)
    window.OrgChart.templates.ciefTemplate.field_1 = `
      <text data-width="280" font-size="15"
            fill="#333333" x="160" y="88" text-anchor="middle">
        {val}
      </text>`;

    // ─── Inicialización ───
    chartInstance.current = new window.OrgChart(chartRef.current, {
      template: "ciefTemplate",
      nodeBinding: {
        field_0: "name",
        field_1: "role",
      },

      // Dimensiones de tarjetas
      nodeWidth: 300,
      nodeHeight: 120,

      // Espaciado entre nodos
      levelSeparation: 100,
      siblingSeparation: 60,
      subtreeSeparation: 80,

      // Grosor de líneas
      link: { width: 3 },

      // ─── Escalado y padding ───
      scaleInitial: window.OrgChart.match.boundary,
      padding: 50,

      // ─── Zoom y navegación ───
      enableZoom: true,
      mouseWheelZoom: false,
      showXScroll: true,
      showYScroll: true,

      // ─── Comportamiento responsive ───
      orientation: window.OrgChart.orientation.top,
      layout: window.OrgChart.layout.normal,
      compact: false,

      // ─── Hover y selección ───
      nodeMouseClick: window.OrgChart.action.edit,
      nodeMouseDbClick: window.OrgChart.action.none,

      // ─── Animación ───
      anim: {
        nodeAnimation: "ease-poly",
        nodeSpeed: 700,
        linesAnimation: "ease-poly",
        linesSpeed: 700,
      },
    });

    // ─── Datos ───
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
      <div className="max-w-[1500px] mx-auto">
        {/* Título con jerarquía semántica correcta */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-12 text-center leading-tight">
          Centro de Investigación en Estudios Fronterizos (CIEF)
        </h2>

        {/* Contenedor del organigrama */}
        <div
          ref={chartRef}
          id="tree"
          className="w-full rounded-lg overflow-hidden"
          style={{
            height: "min(140vh, 1200px)",
            minHeight: "600px",
            background: "#68AB6A",
          }}
          role="img"
          aria-label="Organigrama del Centro de Investigación en Estudios Fronterizos CIEF"
        />
      </div>

      {/* Carga optimizada del script de BALKAN */}
      <Script
        src="https://cdn.balkan.app/orgchart-community.js"
        strategy="afterInteractive"
        onLoad={inicializarChart}
      />
    </section>
  );
}
