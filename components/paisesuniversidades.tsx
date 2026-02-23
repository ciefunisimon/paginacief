"use client";

import { memo } from "react";
import { motion } from "framer-motion";

const countries = [
  {
    name: "España",
    flag: "https://flagcdn.com/w320/es.png",
    universities: [
      { name: "Universidad de Córdoba", url: "https://www.uco.es/" },
      { name: "Universidad de Sevilla", url: "https://www.us.es/" },
      { name: "Universidad de Loyola", url: "https://www.uloyola.es/" },
      { name: "Universidad de Cadiz", url: "https://www.uca.es/" },
      { name: "La Fundación ETEA para el Desarrollo y la Cooperación", url: "https://fundacionetea.org/" },
    ],
  },
  {
    name: "Reino Unido",
    flag: "https://flagcdn.com/w320/gb.png",
    universities: [
      { name: " University of Oxford", url: "https://www.ox.ac.uk/" },
      { name: "King´s College London", url: "https://www.kcl.ac.uk/index" },
      { name: "Cardiff University", url: "https://www.cardiff.ac.uk/" },
    ],
  },
  {
    name: "Italia",
    flag: "https://flagcdn.com/w320/it.png",
    universities: [
      { name: "Universita Degli Studi Di Foggia", url: "https://www.unifg.it/it" },
      { name: "Università degli Studi dell'Insubria", url: "https://www.uninsubria.it/" },
    ],
  },
  {
    name: "Bulgaria",
    flag: "https://flagcdn.com/w320/bg.png",
    universities: [
      { name: "University Of National And World Economy", url: "https://www.unwe.bg/en/" },
    ],
  },
  {
    name: "México",
    flag: "https://flagcdn.com/w320/mx.png",
    universities: [
      {
        name: "Colegio de la Frontera Norte ",
        url: "https://www.colef.mx/",
      },
      {
        name: "Colegio de la Frontera Sur",
        url: "https://www.ecosur.mx/",
      },
      {
        name: "Colegio de Michoacán",
        url: "https://www.colmich.edu.mx/",
      },
      {
        name: "Colegio de México ",
        url: "https://www.colmex.mx/",
      },
      {
        name: "Universidad Nacional Autónoma de México",
        url: "https://www.unam.mx/",
      },
      {
        name: "Universidad Autónoma de Chiapas ",
        url: "https://www.unach.mx/",
      },
      {
        name: "Universidad Autónoma de Nuevo León ",
        url: "https://www.uanl.mx/",
      },
      {
        name: "Universidad de Colima ",
        url: "https://www.ucol.mx/",
      },
      {
        name: "Universidad Autónoma de Ciudad Juárez ",
        url: "https://www.uacj.mx/",
      },
      {
        name: "Universidad Autónoma de Querétaro ",
        url: "https://www.uaq.mx/",
      },
      {
        name: "Centro de Investigaciones Multidisciplinarias sobre Chiapas y la Frontera Sur ",
        url: "https://www.cimsur.unam.mx/index.php/inicio",
      },
    ],
  },
  {
    name: "Estados Unidos",
    flag: "https://flagcdn.com/w320/us.png",
    universities: [
      { name: "University of Arizona", url: "https://www.arizona.edu/" },
      { name: "The Ohio State University", url: "https://www.osu.edu/" },
      
    ],
  },
  {
    name: "Costa Rica",
    flag: "https://flagcdn.com/w320/cr.png",
    universities: [
      { name: "Universidad Nacional de Costa Rica", url: "https://www.una.ac.cr/" },
      { name: "Universidad Estadal a Distancia", url: "https://www.uned.ac.cr/" },
      
    ],
  },
  {
    name: "República Dominicana",
    flag: "https://flagcdn.com/w320/do.png",
    universities: [
      { name: "Universidad Autónoma de Santo Domingo ", url: "https://uasd.edu.do/" },
    ],
  },
  {
    name: "Panamá",
    flag: "https://flagcdn.com/w320/pa.png",
    universities: [
      { name: "Universidad de Panamá ", url: "https://www.up.ac.pa/" },
    ],
  },
  {
    name: "Venezuela",
    flag: "https://flagcdn.com/w320/ve.png",
    universities: [
      { name: "Universidad Católica del Táchira", url: "https://www.ucat.edu.ve/web/" },
      { name: "Universidad Metropolitana", url: "https://www.unimet.edu.ve/" },
      { name: "Universidad Central de Venezuela ", url: "http://www.ucv.ve/" },
      { name: "Universidad de Los Andes ", url: "http://web.ula.ve/ofae/" },
      { name: "Universidad del Zulia ", url: "https://wde.secretarialuz.org/wde/index.html" },
      { name: "Universidad Pedagógica Experimental Libertador", url: "https://upel.edu.ve/" },
      { name: "Instituto Pedagógico Rural “Gervasio Rubio” ", url: "https://upel.edu.ve/instituto-pedagogico-rural-gervasio-rubio/" },
    ],
  },
  {
    name: "Ecuador",
    flag: "https://flagcdn.com/w320/ec.png",
    universities: [
      { name: "Universidad Técnica de Ambato", url: "https://uta.edu.ec/" },
    ],
  },
  {
    name: "Peru",
    flag: "https://flagcdn.com/w320/pe.png",
    universities: [
      { name: "Universidad César Vallejo", url: "https://www.ucv.edu.pe/" },
    ],
  },
  {
    name: "brasil",
    flag: "https://flagcdn.com/w320/br.png",
    universities: [
      { name: "Universidade Federal de Campina Grande", url: "https://portal.ufcg.edu.br/" },
      { name: "Universidade Estadual do Oeste do Paraná", url: "https://www.unioeste.br/portal/" },
      { name: "Universidade Federal de Roraima", url: "https://ufrr.br/" },
      { name: "Universidade Federal de Pelotas ", url: "https://portal.ufpel.edu.br/" },

    ],
  },
  {
    name: "Bolivia",
    flag: "https://flagcdn.com/w320/bo.png",
    universities: [
      { name: "Universidad Tecnológica Privada de Santa Cruz", url: "https://v3.utepsa.edu/" },
    ],
  },
   {
    name: "Argentina",
    flag: "https://flagcdn.com/w320/ar.png",
    universities: [
      { name: "-Universidad Nacional del Sur", url: "https://www.uns.edu.ar/" },
    ],
  },
];

function PaisesUniversidades() {
  const CountryCard = ({
    name,
    flag,
    universities,
  }: {
    name: string;
    flag: string;
    universities: { name: string; url: string }[];
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        bg-white/10
        backdrop-blur-md
        rounded-2xl
        shadow-xl
        p-6
        border border-white/20
        flex flex-col
        h-[420px]
      "
    >
      {/* Bandera */}
      <div className="flex justify-center mb-4">
        <img
          src={flag}
          alt={name}
          className="w-32 h-20 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Nombre */}
      <h2 className="text-xl font-bold text-white text-center mb-4">
        {name}
      </h2>

      {/* Lista con scroll */}
      <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
        <ul className="space-y-2">
          {universities.map((uni, i) => (
            <li key={i}>
              <a
                href={uni.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#FFB000] text-gray-800 rounded-lg px-3 py-2 text-sm shadow-sm hover:bg-[#FFB000]/80 transition"
              >
                {uni.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <div className="py-12 px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {countries.map((country, index) => (
          <CountryCard
            key={index}
            name={country.name}
            flag={country.flag}
            universities={country.universities}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(PaisesUniversidades);


