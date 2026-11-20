"use client";

import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";
import {
  FaFileAlt,
  FaBookOpen,
  FaBook,
  FaClipboardList,
  FaLightbulb,
  FaCode,
  FaCube,
  FaTrademark,
  FaProjectDiagram,
  FaMicrophone,
  FaUsers,
  FaNetworkWired,
  FaHandshake,
  FaChalkboardTeacher,
  FaPlane,
} from "react-icons/fa";

type Cifra = { label: string; value: number; icon: IconType };

type Grupo = {
  titulo: string;
  icono: IconType;
  // Estilos de cada grupo para que se diferencien entre sí
  card: string;
  badge: string;
  numero: string;
  etiqueta: string;
  iconoFondo: string;
  cifras: Cifra[];
};

const grupos: Grupo[] = [
  {
    titulo: "Nuevo conocimiento",
    icono: FaLightbulb,
    card: "bg-gradient-to-br from-[#FFC233] via-[#FFB000] to-[#FF7A00] shadow-[0_10px_30px_-8px_rgba(255,140,0,0.7)]",
    badge: "bg-[#FFB000] text-black",
    numero: "text-black",
    etiqueta: "text-black/80",
    iconoFondo: "text-black/15",
    cifras: [
      { label: "Artículos", value: 125, icon: FaFileAlt },
      { label: "Capítulos de libro", value: 22, icon: FaBookOpen },
      { label: "Libros", value: 9, icon: FaBook },
      { label: "Policy briefs", value: 4, icon: FaClipboardList },
    ],
  },
  {
    titulo: "Desarrollo tecnológico e innovación",
    icono: FaCode,
    card: "bg-gradient-to-br from-[#0F766E] via-[#115E59] to-[#0B3B38] shadow-[0_10px_30px_-8px_rgba(8,60,56,0.8)]",
    badge: "bg-[#0F766E] text-white",
    numero: "text-[#FFC233]",
    etiqueta: "text-white/90",
    iconoFondo: "text-white/10",
    cifras: [
      { label: "Innovaciones", value: 21, icon: FaLightbulb },
      { label: "Softwares", value: 15, icon: FaCode },
      { label: "Prototipos", value: 10, icon: FaCube },
      { label: "Signos distintivos", value: 6, icon: FaTrademark },
    ],
  },
  {
    titulo: "Proyectos y actividades",
    icono: FaProjectDiagram,
    card: "bg-white/15 backdrop-blur-md ring-1 ring-white/40 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]",
    badge: "bg-white text-[#2D7A43]",
    numero: "text-white",
    etiqueta: "text-white/90",
    iconoFondo: "text-white/15",
    cifras: [
      { label: "Proyectos", value: 28, icon: FaProjectDiagram },
      { label: "Eventos científicos", value: 68, icon: FaMicrophone },
      { label: "Apropiación social", value: 29, icon: FaUsers },
      { label: "Redes de conocimiento", value: 20, icon: FaNetworkWired },
      { label: "Consultorías", value: 17, icon: FaHandshake },
      { label: "Tutorías", value: 105, icon: FaChalkboardTeacher },
      { label: "Movilidades", value: 23, icon: FaPlane },
    ],
  },
];

// Número que cuenta desde 0 cuando entra en pantalla
function Contador({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) animate(count, value, { duration: 1.8, ease: "easeOut" });
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function Tarjeta({ cifra, grupo, i }: { cifra: Cifra; grupo: Grupo; i: number }) {
  const Icon = cifra.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ y: -8, scale: 1.04 }}
      className={`group relative overflow-hidden rounded-3xl p-5 text-left ${grupo.card}`}
    >
      {/* Icono grande decorativo de fondo */}
      <Icon
        className={`absolute -right-3 -bottom-3 h-20 w-20 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12 ${grupo.iconoFondo}`}
      />
      <div className="relative">
        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/25 ${grupo.numero}`}>
          <Icon className="h-5 w-5" />
        </span>
        <p className={`mt-3 text-4xl sm:text-5xl font-black tracking-tight tabular-nums ${grupo.numero}`}>
          <Contador value={cifra.value} />
        </p>
        <p className={`mt-1 text-sm font-semibold leading-tight ${grupo.etiqueta}`}>
          {cifra.label}
        </p>
      </div>
    </motion.div>
  );
}

function Encabezado({ grupo }: { grupo: Grupo }) {
  const Icon = grupo.icono;
  return (
    <h3 className="mb-6 flex justify-center">
      <span className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-lg sm:text-xl font-bold shadow-md ${grupo.badge}`}>
        <Icon /> {grupo.titulo}
      </span>
    </h3>
  );
}

export default function CifrasSection() {
  const [conocimiento, desarrollo, actividades] = grupos;

  return (
    <div className="mt-8 space-y-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {[conocimiento, desarrollo].map((g) => (
          <div key={g.titulo}>
            <Encabezado grupo={g} />
            <div className="grid grid-cols-2 gap-4">
              {g.cifras.map((c, i) => (
                <Tarjeta key={c.label} cifra={c} grupo={g} i={i} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <Encabezado grupo={actividades} />
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {actividades.cifras.map((c, i) => (
            <Tarjeta key={c.label} cifra={c} grupo={actividades} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
