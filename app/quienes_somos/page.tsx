"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";

// ✅ Importamos las secciones (actualizado)
import ObjetiveSection from "@/components/objectives-section"; // Nuevo Hero tipo “Historia”
import MisionSection from "@/components/MisionSection";
import VisionSection from "@/components/VisionSection";
import ObjetivosSection from "@/components/ObjetivosSection";
import ValoresSection from "@/components/ValoresSection";
import EurekaSection from "@/components/EurekaSection";
import FeaturesSection from "@/components/features-section";
import DepartamentoInvestigacionCucuta from "@/components/departamento_investigacion_cucuta";
import CentroInvestigacionCief from "@/components/Centro_investigacion_cief";
import Nuevo_organigrama from "@/components/nuevo_organigrama";

export default function QuienesSomosPage() {
  return (
    <>
      {/* 🟢 Header */}
      <Header/>

      <main className="pt-28 sm:pt-32">
        {/* 🔹 Nueva sección tipo HISTORIA */}
        <ObjetiveSection
          title="Historia"
          textLeft={`El Centro de Investigación en Estudios Fronterizos (CIEF) fue creado el 4 de agosto de 2021, mediante la Resolución No. 21 de la Sala General y está adscrito al Distrito de Conocimiento de la Universidad Simón Bolívar. 
          
Su fundación responde a la necesidad de comprender y aportar soluciones a las realidades sociales, culturales, económicas, ambientales y jurídicas propias de los territorios fronterizos, especialmente en el departamento de Norte de Santander, donde la Universidad tiene presencia activa.`}
          textRight={`Desde sus inicios, el CIEF se consolidó como un espacio académico y científico que busca generar conocimiento de alto impacto, contribuir a la formación de talento humano y transformar la investigación en mecanismos útiles para la planeación local, regional y nacional, así como para el diseño de políticas públicas que fortalezcan el desarrollo de la región y del país.`}
          backgroundImage="/simon.jpg" // 👉 pon tu imagen en /public
        />

        {/* 🔹 Secciones adicionales */}
        <MisionSection />
        <VisionSection /> 
        <ObjetivosSection />
        <ValoresSection />
        <EurekaSection />
        {/* <FeaturesSection /> */}
        <DepartamentoInvestigacionCucuta />
        {/* <CentroInvestigacionCief /> */}
        <Nuevo_organigrama/>
      </main>

      {/* 🟡 Footer */}
      <footer className="bg-[#FFB000] text-black py-10 mt-10">
        <Footer />
      </footer>
    </>
  );
}
