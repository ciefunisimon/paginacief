"use client";

import { useRef } from "react";
import Script from "next/script";

export default function NuevoOrganigrama() {
  const chartRef = useRef(null);

  const inicializarChart = () => {
    if (!window.OrgChart || !chartRef.current) return;

    // 1. Plantilla personalizada basada en 'ana'
    window.OrgChart.templates.ciefTemplate = Object.assign(
      {},
      window.OrgChart.templates.ana
    );

    // 2. Tamaño real de la tarjeta (esto es lo que de verdad controla
    //    el tamaño del nodo cuando se usa una plantilla personalizada;
    //    nodeWidth/nodeHeight de la config general NO aplica aquí)
    window.OrgChart.templates.ciefTemplate.size = [320, 130];

    // 3. Tarjeta con tus colores
    window.OrgChart.templates.ciefTemplate.node = `
      <rect x="0" y="0" width="320" height="130"
             fill="#FFB000"
             stroke="#68AB6A"
             stroke-width="2"
             rx="16" ry="16">
      </rect>`;

    // 4. Nombre (coordenadas fijas acordes al tamaño 320x130 de arriba)
    window.OrgChart.templates.ciefTemplate.field_0 = `
      <text data-width="290" font-size="16" font-weight="bold"
            fill="#000000" x="160" y="50" text-anchor="middle">
        {val}
      </text>`;

    // 5. Cargo
    window.OrgChart.templates.ciefTemplate.field_1 = `
      <text data-width="290" font-size="13"
            fill="#333333" x="160" y="90" text-anchor="middle">
        {val}
      </text>`;

    // 6. Inicializar con TODO más grande
    const chart = new window.OrgChart(chartRef.current, {
      template: "ciefTemplate",
      nodeBinding: {
        field_0: "name",
        field_1: "role",
      },
      // --- Tamaños grandes ---
      levelSeparation: 90,      // espacio vertical entre niveles
      siblingSeparation: 50,    // espacio horizontal entre hermanos
      subtreeSeparation: 70,    // espacio entre subárboles
      link: { width: 3 },       // líneas gruesas

      // --- Ajustes para que ocupe el ancho disponible ---
      scaleInitial: 0.9,        // empieza un poco más grande
      enableZoom: true,         // permitir zoom con rueda/pinch
      mouseWheelZoom: true,
      padding: 40,
    });

    // 7. Cargar datos
    chart.load([
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

    // 8. Ajustar al ancho del contenedor tras renderizar
    setTimeout(() => {
      try {
        if (chart.fit) chart.fit();
      } catch (e) {
        // Si no existe fit() en la Community, ignorar
      }
    }, 300);
  };

  return (
    <section className="relative bg-[#68AB6A] text-black py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-12 text-center">
          Centro de Investigación en Estudios Fronterizos (CIEF)
        </h2>

        {/* Contenedor más alto y sin límite de ancho pequeño */}
        <div
          ref={chartRef}
          id="tree"
          style={{
            width: "100%",
            height: "120vh",          // antes 80vh → ahora más alto
            background: "#68AB6A",
          }}
        />
      </div>

      <Script
        src="https://cdn.balkan.app/orgchart-community.js"
        strategy="afterInteractive"
        onLoad={inicializarChart}
      />
    </section>
  );
}
