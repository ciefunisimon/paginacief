"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ProfesorCard from "@/components/profesorcard";

export default function DirectorioProfesores() {
  
  // 🔹 Orden de categorías
  const categoriaOrden: Record<string, number> = {
    emerito: 1,
    senior: 2,
    asociado: 3,
    junior: 4,
    sin_categoria: 5
  };

  // 🔹 Lista de profesores (agrega todos los tuyos acá)
  const profesores = [
      {
        foto: "/Maria_Antonia_Cuberos.jpg",
        nombre: "María Antonia Cuberos de Quintero",
        correo: "maria.cuberos@unisimon.edu.co",
        categoria: "emerito", 
        links: {
          cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001621770",
          scopus: "https://www.scopus.com/authid/detail.uri?authorId=57196280109",
          orcid: "https://orcid.org/0000-0002-5235-552X",
          researchgate:"https://www.researchgate.net/profile/Maria-Quintero-27",
          scholar: "https://scholar.google.es/citations?user=I_pEiQ0AAAAJ&hl=es&oi=ao"
        },
        temas: [
          "Estudios socioeconómicos de la frontera colombo venezolana",
          "Derechos humanos",
          "Violencia y desplazamiento",
          "Educación para el desarrollo sostenible",
          "Gerencia, tecnología y sociedad",
          
        ],
        fotoPosicion:"object-[50%_50%]"
        
      },
     {
      foto: "/manuel_riano.jpeg",
      nombre: " Manuel Ernesto Riaño Garzón  ",
      correo: " manuel.riano@unisimon.edu.co ",
      categoria: "senior", 
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001506384",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57201665047",
        orcid: "https://orcid.org/0000-0002-4476-9538",
        researchgate:"https://www.researchgate.net/profile/Manuel-Riano-Garzon",
        scholar: "https://scholar.google.es/citations?user=I5af2EMAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Enfermedades crónico-degenerativas",
        "Fisiología de los procesos psicológicos y neurocognitivos",
        "Neurociencias del desarrollo",
        
      ]
    },
    {
      foto: "/Neida_Albornoz2.png",
      nombre: "Neida Albornoz Arias",
      correo: "neida.albornoz@unisimon.edu.co",
      categoria: "senior", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001630101",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57194446275",
        orcid: "https://orcid.org/0000-0001-7851-5985",
        researchgate: "https://www.researchgate.net/profile/Neida-Albornoz-Arias",
        scholar: "https://scholar.google.es/citations?user=MkJ72HsAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Construcción de paz territorial",
        "Desarrollo territorial sostenible",
        "Economías populares solidarias",
        "Equidad de género",
        "Movilidad humana y fronteras"
      ]
    },
    {
      foto: "/johel_rodriguez.jpg",
      nombre: " Johel Enrique Rodríguez Fernández  ",
      correo: " johel.rodriguez@unisimon.edu.co ",
      categoria: "senior", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001352338",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57199093207",
        orcid: "https://orcid.org/0000-0002-8353-2736",
        researchgate: "https://www.researchgate.net/profile/Johel-Rodriguez",
        scholar: "https://scholar.google.es/citations?user=ozB9PkwAAAAJ&hl=es"
      },
      temas: [
        "Biomedicina ",
        "Ingeniería de software",
        "Inteligencia Artificial",
        "TIC en educación y salud",
      ]
    },
    {
      foto: "/carolina_martinez.jpeg",
      nombre: " Carolina Ramírez Martínez ",
      correo: " carolina.ramirez@unisimon.edu.co ",
      categoria: "senior", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001347874",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57193402864",
        orcid: "https://orcid.org/0000-0003-2627-159X",
        researchgate: "https://www.researchgate.net/profile/Carolina-Ramirez-Martinez-4",
        scholar: "https://scholar.google.es/citations?hl=es&user=P-J7XLoAAAAJ"
      },
      temas: [
        "Género ",
        "Desarrollo social ",
        "Estudios de frontera",
        "Pedagogía crítica",

      ]
    },
    {
      foto: "/nidia_bonilla.jpeg",
      nombre: " Nidia Johanna Bonilla Cruz ",
      correo: " nidia.bonilla@unisimon.edu.co ",
      categoria: "senior", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001394209",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57201681589",
        orcid: "https://orcid.org/0000-0003-3375-4303",
        researchgate:"https://www.researchgate.net/profile/Nidia-Johanna-Bonilla-Cruz",
        scholar: "https://scholar.google.es/citations?user=UA0nmlwAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Salud mental y bienestar psicosocial",
        "Suicidología",
       
      ]
    },
    {
      foto: "/juandiego_hernandez.jpg",
      nombre: " Juan Diego Hernández Albarracín",
      correo: " juan.hernandeza@unisimon.edu.co ",
      categoria: "senior", 
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001549960",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57211803366",
        orcid: "https://orcid.org/0000-0003-2517-8393",
        researchgate:"https://www.researchgate.net/profile/Juan-Hernandez-Albarracin",
        scholar: "https://scholar.google.es/citations?user=DECmTOjjVVQC&hl=es&oi=ao"
        
      },
      temas: [  
        "Filosofía de la educación",
        "Comunicación, territorio y desarrollo social",
        "Innovación, educación y tecnología social",
        "Gobernanza y desarrollo territorial",
        
       
      ],
      fotoPosicion: "object-[50%_30%]"

    
    },
    {
      foto: "/yurley_hernandez.jpg",
      nombre: " Yurley Karime Hernández Peña  ",
      correo: " yurley.hernandez@unisimon.edu.co ",
      categoria: "senior", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000606570",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57200562089",
        orcid: "https://orcid.org/0000-0003-3738-5410",
        researchgate:"https://www.researchgate.net/profile/Yurley-Karime-Hernandez",
        scholar: "https://scholar.google.es/citations?user=ZVNjGsMAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Pedagogía crítica",
        "Didáctica de las ciencias experimentales",
        "Educación, tecnología y sociedad del conocimiento",
        "Educación para la paz y convivencia ciudadana",
      ]
    },
    {
      foto: "/marcela_florez.jpeg",
      nombre: " Marcela Leonor Flórez Romero   ",
      correo: " marcela.florez@unisimon.edu.co ",
      categoria: "senior", 
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001401134",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=36652628100",
        orcid: "https://orcid.org/0000-0002-1341-1779",
        researchgate:"https://www.researchgate.net/profile/Marcela-Florez-Romero",
        scholar: "https://scholar.google.es/citations?user=kff_A4gAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Responsabilidad Social",
        "Calidad del Servicio",
        
      ]
    },
    {
      foto: "/edgar_camargo.png",
      nombre: " Edgar Alexis Díaz Camargo  ",
      correo: " edgara.diaz@unisimon.edu.co ",
      categoria: "senior", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001432904",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57204199021",
        orcid: "https://orcid.org/0000-0002-7349-3059",
        researchgate: "https://www.researchgate.net/profile/Edgar-Diaz-19",
        scholar: "https://scholar.google.es/citations?hl=es&user=LOlkipkAAAAJ"
      },
      temas: [
        "Neuropsicología ",
        "Psicología clínica ",
        

      ]
    },
    {
      foto: "/jovany_gomez.jpeg",
      nombre: " Jovany Gómez Vahos  ",
      correo: " jovany.gomez@unisimon.edu.co ",
      categoria: "senior", 
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000338664",
        scopus: "",
        orcid: "https://orcid.org/0000-0003-1958-7107",
        researchgate:"https://www.researchgate.net/profile/Jovany-Gomez-Vahos-2",
        scholar: "https://scholar.google.es/citations?user=QQ_m2a8AAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Práctica pedagógica",
        "Didácticas específicas",
        "Pedagogía",
        "Saber pedagógico",
        
       
      ]
    },
    {
      foto: "/jesus_oreste.jpeg",
      nombre: " Jesús Oreste Forgiony Santos  ",
      correo: " jesus.forgiony@unisimon.edu.co ",
      categoria: "senior", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001578467",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57201692457",
        orcid: "https://orcid.org/0000-0002-2686-7679",
        researchgate: "https://www.researchgate.net/profile/Jesus-Forgiony-Santos",
        scholar: "https://scholar.google.es/citations?user=Ixg12AYAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Salud mental y bienestar psicosocial  ",
        "Prevención del suicidio ⁠  ",
        "Impulsividad, agresión y autorregulación emocional  ",
        "Apoyo social y redes de protección ",
      ]
    },
    {
      foto: "/franklin_nuevo.jpeg",
      nombre: " Jhon Franklin Espinosa Castro ",
      correo: " jhon.espinosa@unisimon.edu.co ",
      categoria: "senior", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001381388",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57209463629",
        orcid: "https://orcid.org/0000-0003-2186-3000",
        researchgate: "https://www.researchgate.net/profile/Jhon-Franklin-Espinosa-Castro",
        scholar: "https://scholar.google.es/citations?user=N5eWMSIAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Bibliometría",
      ],
      fotoPosicion:"object-[50%_40%]"
    },
    {
      foto: "/oscar_medina.JPG",
      nombre: "  Óscar Darío Medina Ortiz  ",
      correo: " oscar.medina@unisimon.edu.co ",
      categoria: "senior", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001696024",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57221305571",
        orcid: "",
        researchgate:"https://www.researchgate.net/profile/Oscar-Medina-Ortiz",
        scholar: "https://scholar.google.es/citations?hl=es&user=j1yYdCsAAAAJ"
      },
      temas: [
        "Insomnio ",
        "Trastornos del sueño",
        "Transtornos mentales ",
        "Educación médica",
        "Arte, sueño y medicina",
        "Actitud de los estudiantes de medicina hacia la psiquiatría",
        
      ]
    },
    {
      foto: "/mary_bernal.png",
      nombre: " Mary Carlota Bernal Jiménez ",
      correo: " mary.bernal@unisimon.edu.co ",
      categoria: "asociado", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000058716",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57205115182",
        orcid: "https://orcid.org/0000-0001-7565-2909",
        researchgate:"https://www.researchgate.net/profile/Mary-Bernal-3",
        scholar: "https://scholar.google.es/citations?user=V0apEjsAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Tecnologías Inteligentes",
        "Salud Inteligente",
        "Inteligencia Artificial",
        
      ]
    },
    {
      foto: "/myriam_carreno.jpg",
      nombre: " Myriam Teresa Carreño Paredes",
      correo: " myriam.carreno@unisimon.edu.co ",
      categoria: "asociado", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000028870",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57201688290",
        orcid: "https://orcid.org/0000-0002-7572-5618",
        researchgate:"https://www.researchgate.net/profile/Myriam-Teresa-Carreno-Paredes",
        scholar: "https://scholar.google.es/citations?user=Q9e1pqIAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Bienestar en la niñez y adolescencia",
        "Envejecimiento, familia y ciclo vital",
        "Género y derechos humanos",
        "Salud mental y bienestar psicosocial",
       
      ]
    },
    {
      foto: "/doris_palma.jpeg",
      nombre: " Doris Rocío Palma Suárez ",
      correo: " rocio.palma@unisimon.edu.co ",
      categoria: "asociado", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001453243",
        scopus: "",
        orcid: "https://orcid.org/0000-0001-7496-5866",
        researchgate: "https://www.researchgate.net/profile/Doris-Palma-Suarez",
        scholar: "https://scholar.google.es/citations?user=bFq3Iy0AAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Gestión Organizacional ",
        "Liderazgo transformacional y cultura organizacional ",
        "Marketing",
        "Talento humano, emprendimiento e innovación",

      ]
    },
    {
      foto: "/beatriz_mendoza.jpg",
      nombre: " Beatriz Milagros Mendoza Rincón ",
      correo: " beatriz.mendoza@unisimon.edu.co",
      categoria: "asociado", 
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001561711",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57218268331",
        orcid: "https://orcid.org/0000-0003-0450-0267",
        researchgate: "https://www.researchgate.net/profile/Beatriz-Mendoza-Rincon",
        scholar: "https://scholar.google.es/citations?user=z3kYt-oAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Gobernanza y desarrollo territorial",
        "Emociones positivas y salud",
        "Neurociencia aplicada",
      ]
    },
    {
      foto: "/franlet_araque.png",
      nombre: " Franlet Rocío Araque Castellanos",
      correo: " franlet.araque@unisimon.edu.co ",
      categoria: "asociado", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001337490",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57221306312",
        orcid: "https://orcid.org/0000-0002-2382-3777",
        researchgate: "https://www.researchgate.net/profile/Franlet-Araque-Castellanos",
        scholar: "https://scholar.google.es/citations?user=X6sGdf8AAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Construcción de paz, reconciliación y DDHH  ",
        "⁠Educación e inclusión  ",
        "Migración y frontera",
        "Género y cuidados ",
        "Salud mental y bienestar psicosocial ",

      ]
    },
    {
      foto: "/maria_martinez.jpeg",
      nombre: " María Carolina Martínez Santana  ",
      correo: " mariac.martinez@unisimon.edu.co ",
      categoria: "asociado", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000041373",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57208208653",
        orcid: "https://orcid.org/0000-0002-0170-6799",
        researchgate:"https://www.researchgate.net/profile/Maria-Martinez-Santana",
        scholar: "https://scholar.google.es/citations?user=LtLOfI8AAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Construcción de paz y posconflicto",
        "Estereotipos, prejuicios y discriminación",
        "Representaciones sociales",
        "Salud mental y bienestar psicosocial",
        
      ]
    },
    {
      foto: "/leonardo_diaz.jpg",
      nombre: " Leonardo Yotuhel Díaz Guecha  ",
      correo: " leonardo.diaz@unisimon.edu.co ",
      categoria: "asociado", 
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001434250",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=59233211100",
        orcid: "https://orcid.org/0000-0003-2619-5742",
        researchgate:"https://www.researchgate.net/profile/Leonardo-Diaz-Guecha",
        scholar: "https://scholar.google.com/citations?user=ffzAlBcAAAAJ&hl=es&authuser=1"
      },
      temas: [
        "Derechos humanos y frontera",
        "Educación, estado y sociedad",
        "Estudios sociales, ambientales y culturales de frontera",
        "Gestión tecnológica e innovación",
       
      ]
    }, 
    {
      foto: "/Sheyla_Herrera.jpg",
      nombre: " Sheyla Vanessa Herrera Martínez  ",
      correo: " sheyla.herrera@unisimon.edu.co ",
      categoria: "asociado", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001486285",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57200414062",
        orcid: "https://orcid.org/0000-0003-1897-3364",
        researchgate:"https://www.researchgate.net/profile/Sheyla-Herrera-Martinez",
        scholar: "https://scholar.google.es/citations?hl=es&user=8NM_5f8AAAAJ"
      },
      temas: [
        "Planeación estratégica empresarial",
        "Comportamiento del consumidor",
        "Innovación emprendimiento",
      ]
    },
    {
      foto: "/nohora_alvarez.jpg",
      nombre: " Nohora Elizabeth Álvarez Rey ",
      correo: " nohora.alvarezr@unisimon.edu.co ",
      categoria: "asociado", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000064353",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57218765247",
        orcid: "https://orcid.org/0000-0001-6864-5989",
        researchgate:"https://www.researchgate.net/scientific-contributions/Nohora-Elizabeth-Alvarez-Rey-2172899749",
        scholar: "https://scholar.google.com/citations?user=O1uyVKcAAAAJ&hl=es"
      },
      temas: [
        "Salud y cuidado",
        "Actividad Física",
        "Biomecánica",
        "Inclusión ",
        "Salud mental",
      ]
    },
    {
      foto: "/anderson_florez.jpg",
      nombre: " Anderson Smith Flórez Fuentes  ",
      correo: " anderson.florez@unisimon.edu.co ",
      categoria: "asociado", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001320300",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57210844937",
        orcid: "https://orcid.org/0000-0001-6176-1071",
        researchgate:"https://www.researchgate.net/profile/Anderson-Florez-Fuentes",
        scholar: "https://scholar.google.es/citations?user=6EjX4fgAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Inteligencia artificial",
        "Educación",
        "Deep Learning",
      ]
    },
    {
      foto: "/Sandra_vargas.jpg",
      nombre: "Sandra Milena Vargas Angulo",
      correo: "sandra.vargas@unisimon.edu.co",
      categoria: "asociado", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001452144",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57200414062",
        orcid: "https://orcid.org/0000-0001-7091-4092",
        researchgate:"https://www.researchgate.net/profile/Sandra-Vargas-6",
        scholar: "https://scholar.google.es/citations?user=GuEi9bYAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Innovación",
        "Educación y tecnología social",
        "Formacion de profesores",
        "Educacion virtual",
        "Gestion curricular",
        "Ciencias de la Educacions",
      
      ]
    },
    {
      foto: "/julieth_acevedo.jpg",
      nombre: " Julieth Paola Acevedo Meneses    ",
      correo: " julieth.acevedom@unisimon.edu.co ",
      categoria: "junior", 
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001490799",
        scopus: "",
        orcid: "https://orcid.org/0000-0002-2350-635X",
        researchgate:"https://www.researchgate.net/profile/Julieth-Paola",
        scholar: "https://scholar.google.es/citations?user=Qgmi4IQAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Internacionalización de los emprendimientos",
        "Orientación exportadora",
        "Culturas internacionales en los negocios",
       
      ]
    },
    {
      foto: "/enmanuel_navas.jpeg",
      nombre: " Enmanuel Omar Nava Sarmiento   ",
      correo: " enmanuel.nava@unisimon.edu.co ",
      categoria: "junior", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001497076",
        scopus: "",
        orcid: "https://orcid.org/0000-0003-2311-8354",
        researchgate: "https://www.researchgate.net/profile/Enmanuel-Omar-Nava-Sarmiento",
        scholar: "https://scholar.google.es/citations?hl=es&user=R8xUk_QAAAAJ"
      },
      temas: [
        "Competitividad e Innovación Empresarial ",
        "Gestión de Empresas Familiares ",
        "Fortalecimiento de modelos de negocio",

      ]
    },
    {
      foto: "/jose_tamara.jpeg",
      nombre: " Jose Albeiro Tamara Uribe ",
      correo: " jose.uribet@unisimon.edu.co ",
      categoria: "junior", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000176477",
        scopus: "",
        orcid: "https://orcid.org/0000-0002-8353-2736",
        researchgate:"",
        scholar: "https://scholar.google.es/citations?user=xA78cR0AAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Planeación estratégica ",
        "Gerencia",
        "Liderazgo",
        "Competitividad",
      ]
    },
    {
      foto: "/luis_suarez2.jpeg",
      nombre: " Luis Arnulfo Suárez Espitia  ",
      correo: " luis.suareze@unisimon.edu.co ",
      categoria: "junior", 
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001740948",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57198250222&origin=recordpage",
        orcid: "https://orcid.org/0000-0003-1667-8935",
        researchgate:"https://www.researchgate.net/profile/Luis-Suarez-Espitia",
        scholar: "https://scholar.google.es/citations?user=gBac6GQAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Política Fiscal",
        "Normas Internacionales de Información Financiera-NIIF",
        "Emprendimiento",
        "Formalización Empresarial",
       
      ]
    },
    {
      foto: "/Raquel_Rivera.jpg",
      nombre: " Raquel Rivera Ortega  ",
      correo: " raquel.rivera@unisimon.edu.co ",
      categoria: "junior", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000647640",
        scopus: "",
        orcid: "https://orcid.org/0000-0003-0331-5035",
        researchgate:"https://www.researchgate.net/profile/Raquel-Rivera-Ortega",
        scholar: "https://scholar.google.es/citations?hl=es&user=YsDCZroAAAAJ"
      },
      temas: [
        "Liderazgo ",
        "Emprendimiento",
        "Perdurabilidad empresarial ",
        "Desarrollo organizacional",
      
      ]
    },
    {
      foto: "/frank_stewars2.jpeg",
      nombre: " Frank Steward Orduz Gualdrón  ",
      correo: " frank.orduz@unisimon.edu.co ",
      categoria: "junior", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001382669",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57402522000",
        orcid: "https://orcid.org/0000-0002-5400-124X",
        researchgate: "https://www.researchgate.net/profile/Frank-Steward-Orduz-Gualdron",
        scholar: "https://scholar.google.es/citations?hl=es&user=I2PCOA4AAAAJ"
      },
      temas: [
        "Psicología jurídica y violencia ",
        

      ]
    },
    {
      foto: "/gerson_jaimes.jpg",
      nombre: " Gerson Yesith Jaimes Parada  ",
      correo: " gerson.jaimes@unisimon.edu.co ",
      categoria: "junior", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000011099",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57218569856",
        orcid: "https://orcid.org/0000-0003-2416-8564",
        researchgate: "https://www.researchgate.net/profile/Gerson-Jaimes-Parada",
        scholar: "https://scholar.google.es/citations?user=cQ8UP9IAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Construcción de paz y posconflicto  ",
        "⁠Seguridad humana construcción de paz en zonas limítrofes  ",
        "Salud mental y bienestar psicosocial",
      ]
    },
    {
      foto: "/maria_bautista.jpeg",
      nombre: " María Judith Bautista Sandoval   ",
      correo: " mariaj.bautista@unisimon.edu.co ",
      categoria: "junior", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001640901",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57194549551",
        orcid: "https://orcid.org/0000-0001-6259-2812",
        researchgate:"https://www.researchgate.net/profile/Maria-Bautista-Sandoval",
        scholar: "https://scholar.google.es/citations?user=HylsRgcAAAAJ&hl=es"
      },
      temas: [
        "Bienestar psicológico y social",
        "Construcción de Paz",
        "Fenómenos de violencia",
        "Florecimiento",
        "Inclusión social",
        
      ]
    },
    {
      foto: "/Orlando_Gonzalez.jpeg",
      nombre: " Orlando González Gutiérrez  ",
      correo: " orlando.gonzalezg@unisimon.edu.co ",
      categoria: "junior", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000384356",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57208860942",
        orcid: "https://orcid.org/0000-0002-1123-7412",
        researchgate:"https://www.researchgate.net/profile/Orlando-Gonzalez-Gutierrez",
        scholar: "https://scholar.google.es/citations?user=GbDRjAQAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Factores de riesgo, protección y resiliencia en la salud y bienestar familiar. ",
        "Ajuste psicosocial y desempeños psicosociales en adolescentes y estudiantes universitarios.",
        "Prevención y promoción en salud en poblaciones y problemáticas diversas.",
        
      ]
    },
    {
      foto: "/magali_nino.jpg",
      nombre: " Magali Alba Niño   ",
      correo: " magali.alba@unisimon.edu.co ",
      categoria: "junior", 
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001381105",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=58149091700",
        orcid: "https://orcid.org/0000-0003-4246-0876",
        researchgate:"https://www.researchgate.net/profile/Magali_Alba_Nino",
        scholar: "https://scholar.google.es/citations?user=VrFrmyQAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Comunidad, territorio y desarrollo social",
        "Construcción de paz y posconflicto",
        "Género y derechos humanos",
        "Gobernanza y desarrollo territorial",
        "Salud mental ",
       
      ]
    },
    {
      foto: "/onoefre2.jpeg",
      nombre: " Onofre Vargas Clavijo  ",
      correo: " onofre.vargas@unisimon.edu.co ",
      categoria: "junior", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000028872",
        scopus: "",
        orcid: "https://orcid.org/0000-0002-4960-7511",
        researchgate:"https://www.researchgate.net/profile/Onofre_Vargas-Clavijo",
        scholar: "https://scholar.google.es/citations?user=f3VuOCgAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Conflicto armado ",
        "Medio ambiente",
        "Migración",
        "Trabajo Infantil",
        "Trabajo Informal",
        "Transporte público",
      ]
    },
    {
      foto: "/nahin_sanjuan.jpg",
      nombre: " Nahin Numa Sanjuan ",
      correo: " nahin.numa@unisimon.edu.co ",
      categoria: "junior", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000028875",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57214291419",
        orcid: "https://orcid.org/0000-0003-2134-6230",
        researchgate:"https://www.researchgate.net/profile/Nahin-Numa-Sanjuan",
        scholar: "https://scholar.google.es/citations?user=fUiU4IgAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Educación para el desarrollo sostenible",
        "Género, diversidad y derechos humanos",
       
      ]
    },
    {
      foto: "/hector_vanegas.jpg",
      nombre: "Héctor Daniel Vanegas Sáenz ",
      correo: " hector.vanegass@unisimon.edu.co ",
      categoria: "junior", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000064350",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57219195352",
        orcid: "https://orcid.org/0000-0002-6799-7146",
        researchgate:"https://www.researchgate.net/scientific-contributions/Hector-Daniel-Vanegas-Saenz-2226271367",
        scholar: "https://scholar.google.com/citations?user=JUKylrcAAAAJ&hl=es"
      },
      temas: [
        "Inclusión",
        "Neurodesarrollo",
        "Aprendizaje motor",
        "Biomecánica",
        "Actividad física ",
        "Salud mental",
      ]
    },
    {
      foto: "/jose_hernandez.jpeg",
      nombre: " José Antonio Hernández Ramírez  ",
      correo: " jose.hernandezr@unisimon.edu.co ",
      categoria: "junior", 
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001635463",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=36860091300",
        orcid: "https://orcid.org/0009-0007-4532-0939",
        researchgate:"",
        scholar: "https://scholar.google.es/citations?hl=es&user=NtJcrDUAAAAJ"
      },
      temas: [
        "Design management ",
        "Design thinking",
        "Ecosistemas de innovación",
        "Emprendimiento",
        "Gestión de la innovación",
        "Gestión estratégica",
        "Strategic design",
      ]
    },
    {
      foto: "/Jose_Maria_Rincon.jpeg",
      nombre: " José María Rincón Ramón ",
      correo: " jose.rincon@unisimon.edu.co ",
      categoria: "junior", 
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000037139",
        scopus: "",
        orcid: "https://orcid.org/0000-0002-1992-5172",
        researchgate:"https://www.researchgate.net/profile/Jose-Rincon-17",
        scholar: "https://scholar.google.es/citations?user=G6c28SsAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Construcción de paz y desarrollo humano",
        
        
      ],
      fotoPosicion:"object-[50%_50%]"
      
    },
     
    {
      foto: "/Diana_Marcela_Pantaleon.jpg",
      nombre: "Diana Marcela Pantaleón Pinto",
      correo: "diana.pantaleon@unisimon.edu.co",
      categoria: "junior", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000102502",
        scopus: "",
        orcid: "https://orcid.org/0000-0002-4622-7759",
        researchgate:"https://www.researchgate.net/profile/Diana-Pantaleon",
        scholar: "https://scholar.google.es/citations?hl=es&user=Y-s-jicAAAAJ"
      },
      temas: [
        "Bienestar en la niñez y en la adolescencia",
        "Género, diversidad y derechos humanos",
        "Uso ético y legal de la IA",
        "Inclusión",
        "Educacion",
        "Derecho de Familia ",
      
      ]
    },

    {
      foto: "/carlos_valderrama.jpg",
      nombre: " Carlos Valderrama Carrillo ",
      correo: " carlos.valderramac@unisimon.edu.co",
      categoria: "sin_categoria", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001651588",
        scopus: "",
        orcid: "https://orcid.org/0000-0001-7331-9336",
        researchgate: "",
        scholar: "https://scholar.google.com.mx/citations?hl=es&user=j3cvAdsAAAAJ"
      },
      temas: [
        "Turismo y desarrollo sostenible",
      ]
    },
    
    {
      foto: "/cindy_rosales.jpg",
      nombre: " Cindy Johanna Rosales Ruiz ",
      correo: " cindy.rosales@unisimon.edu.co ",
      categoria: "sin_categoria", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001593003",
        scopus: "",
        orcid: "https://orcid.org/0000-0001-9572-3583",
        researchgate: "",
        scholar: "https://scholar.google.es/citations?hl=es&user=ACrwBP0AAAAJ"
      },
      temas: [
        "Salud mental y bienestar psicosocial ",
        "Significados y desafíos del duelo en sobrevivientes del conflicto armado  ",

      ]
    },
    
    
    
    {
      foto: "/fabian_cubillos.jpeg",
      nombre: " Fabián Enrique Cubillos Álvarez   ",
      correo: " fabian.cubillos@unisimon.edu.co ",
      categoria: "sin_categoria", // <<--- AGREGA LA CATEGORÍA AQUÍ
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001359320",
        scopus: "",
        orcid: "https://orcid.org/0000-0002-9763-5592",
        researchgate: "https://www.researchgate.net/profile/Fabian-Cubillos-Alvarez",
        scholar: "https://scholar.google.es/citations?user=jP0yA-EAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Comportamiento humano, conducta punible y ordenamiento jurídico penal ",
        "⁠Tendencia del Derecho Sustancial y Procesal ",
        "Derechos humanos y frontera",

      ]
    },
    {
      foto: "/jover_cabrales.jpg",
      nombre: " Jover Alonso Cabrales Pineda     ",
      correo: " jover.cabrales@unisimon.edu.co ",
      categoria: "sin_categoria", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000062873",
        scopus: "",
        orcid: "https://orcid.org/0000-0002-7805-7782",
        researchgate:"https://www.researchgate.net/profile/Jover-Cabrales",
        scholar: ""
      },
      temas: [
        "Arquitectura de software",
        "Automatización inteligente de procesos",
        "Desarrollo de software",
        "Gestión estratégica de TI",
        "Seguridad de la información",
        "Transformación digital",
        
      ]
    },
      
    {
      foto: "/juanpablo_villamizar.jpeg",
      nombre: " Juan Pablo Jaimes Villamizar    ",
      correo: " juan.jaimes@unisimon.edu.co ",
      categoria: "sin_categoria", 
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001535312",
        scopus: "",
        orcid: "https://orcid.org/0000-0002-4856-3238",
        researchgate:"https://www.researchgate.net/profile/Juan-Pablo-Jaimes-Villamizar",
        scholar: "https://scholar.google.es/citations?user=cpYfFQ8AAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Derechos Humanos y Garantías",
        "Derecho Ambiental, Desplazamiento Forzado",
        "Migración",
        "Derechos de Réplica y Rectificación",
        
       
      ]
    },
     {
      foto: "/yaritza_martinez.jpeg",
      nombre: " Leydi Yaritza Martínez Pardo   ",
      correo: " leydi.martinezb@unisimon.edu.co ",
      categoria: "sin_categoria", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0002094508",
        scopus: "",
        orcid: "https://orcid.org/0009-0000-8441-3651",
        researchgate:"",
        scholar: "https://scholar.google.com/citations?hl=es&user=5wjrUmwAAAAJ"
      },
      temas: [
        "Innovación, educación y tecnología social",
        
        
      ]
    },
    {
      foto: "/manuela_guette.png",
      nombre: " Manuela Isabel Guette Torres  ",
      correo: " manuela.guettet@unisimon.edu.co ",
      categoria: "sin_categoria", 
      links: {
        cvlac: "https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001648722",
        scopus: "https://www.scopus.com/authid/detail.uri?authorId=57214290427&origin=recordpage",
        orcid: "https://orcid.org/0000-0001-7203-0354",
        researchgate:"",
        scholar: "https://scholar.google.es/citations?hl=es&user=AU20sGQAAAAJ"
      },
      temas: [
        "Salud mental",
        "Prevención de violencias",
        "Violencia intrafamiliar y de pareja",
        
      ]
    },
     
    {
      foto: "/omaira_bernal.jpg",
      nombre: " Omaira Suárez Bernal ",
      correo: " omaira.suarezb@unisimon.edu.co ",
      categoria: "sin_categoria", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001755777",
        scopus: "",
        orcid: "https://orcid.org/0000-0002-2060-9417",
        researchgate:"https://www.researchgate.net/profile/Omaira-Suarez",
        scholar: "https://scholar.google.es/citations?hl=es&user=e0vCjScAAAAJ"
      },
      temas: [
        "Innovación, educación y tecnología social",
        "Gobierno corporativo",
        "Teoría contable",
      ]
    },
    {
      foto: "/omar_rozo.jpeg",
      nombre: " Omar Rozo Pérez  ",
      correo: " omar.rozo@unisimon.edu.co ",
      categoria: "sin_categoria", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001508180",
        scopus: "",
        orcid: "https://orcid.org/0000-0002-2348-2810",
        researchgate:"https://www.researchgate.net/profile/Omar-Rozo-Perez",
        scholar: "https://scholar.google.es/citations?user=VlP1-vcAAAAJ&hl=es&oi=ao"
      },
      temas: [
        "Ciudadanía,, frontera y migración",
        "Comunidad, territorio y desarrollo social",
        "Innovación, educación y tecnología social",
      ]
    },
    {
      foto: "/oswaldo_laguado.jpg",
      nombre: " Oswaldo Enrique Laguado Aguilar      ",
      correo: " oswaldo.laguado@unisimon.edu.co ",
      categoria: "sin_categoria", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001348511",
        scopus: "",
        orcid: "https://orcid.org/0009-0009-9380-4836",
        researchgate:"https://www.researchgate.net/profile/Oswaldo-Laguado",
        scholar: "https://scholar.google.es/citations?hl=es&user=6dp_73IAAAAJ"
      },
      temas: [
        "Arquitectura de Tecnologías de información",
        "Técnicas de Machine Learning",
        
        
      ]
    },
    
    {
      foto: "/sandra_duran.jpeg",
      nombre: " Sandra Johanna Durán Rondón   ",
      correo: " sandra.duranr@unisimon.edu.co ",
      categoria: "sin_categoria", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0002047119",
        scopus: "",
        orcid: "https://orcid.org/0000-0001-6158-2057",
        researchgate:"https://www.researchgate.net/profile/Sandra-Duran-Rondon",
        scholar: "https://scholar.google.com/citations?user=ZsGq3y0AAAAJ&hl=es"
      },
      temas: [
        "Eficacia y efectividad de intervenciones psicológicas ",
        "Estilos de crianza y desarrollo ",
        "Factores de riesgo y protección del ciclo vital ",
        "Salud mental ",
      
      ]
    },
     
    {
      foto: "/zuleima_bitar2.jpeg",
      nombre: " Zuleima Esther Bitar Yidi  ",
      correo: " zuleima.bitar@unisimon.edu.co ",
      categoria: "sin_categoria", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001508198",
        scopus: "",
        orcid: "https://orcid.org/0009-0005-6290-8369",
        researchgate:"https://www.researchgate.net/profile/Zuleima-Bitar-Yidi",
        scholar: "https://scholar.google.com/citations?hl=en&user=WyGO090AAAAJ"
      },
      temas: [
        "Bienestar en la niñez y adolescencia",
        "Género y derechos humanos",
        "Salud mental y bienestar psicosocial",
        "Educación sexual integral y desarrollo humano",
        "Relaciones afectivas ",
      ],
      fotoPosicion:"object-[50%_30%]"
    },
    {
      foto: "/miguel_perez.jpeg",
      nombre: " Miguel Ángel Pérez Villamizar  ",
      correo: " miguel.perezv@unisimon.edu.co ",
      categoria: "sin_categoria", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000457949",
        scopus: "",
        orcid: "http://orcid.org/0000-0002-5234-9568%E2%80%9D",
        researchgate:"https://www.researchgate.net/profile/Miguel-Perez-Villamizar?ev=hdr_xprf",
        scholar: "https://scholar.google.com/citations?view_op=list_works&hl=es&user=5LmXaiMAAAAJ&gmla=AEk_c1sNrq91eFJud4Xw-KKUkHytDkaUPxZbGwVj4S3SvlM_H-idFWDwM1KyCo3xpaUALUKGAi6WJgQtrGpY24t2Q7fqCN9Ff0h8u-mQd_0KQo93vUbpUeQN1CG1zW7Y9rP0Ph6uZLvs8i1UTwiN"
      },
      temas: [
        "Desarrollo de software",
        "Analitica de Datos",
        "Gestión de Proyectos",
        "Gestión de Infraestructura y Servicios de TI",
        "Inteligencia Artificial",
      
      ]
      
    },
    {
      foto: "/Camila_Andrea_Rojas_Sanguino.jpg",
      nombre: "Camila Andrea Rojas Sanguino",
      correo: "c_rojas11@unisimon.edu.co",
      categoria: "sin_categoria", 
      links: {
        cvlac:"https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001731408",
        scopus: "",
        orcid: "https://orcid.org/0000-0003-4436-2073",
        researchgate:"https://www.researchgate.net/profile/Camila-Rojas-Sanguino",
        scholar: "https://scholar.google.com/citations?hl=en&user=LV4lFBAAAAAJ"
      },
      temas: [
        "Feminismos y estudios de género ",
        "Memorias colectivas en contextos de conflicto",
        "Economía del cuidado",
        "Cambio social y del comportamiento",
        "Salud mental y bienestar psicosocial ",
        "Liderazgo e integración comunitaria ",
        "Procesos territoriales de construcción de paz",
      
      ],
      fotoPosicion:"object-[50%_50%]"
    },
     
    
    
      // Agrega más profesores aquí...
  ];

  // Crear copia con índice original
  const profesoresConIndex = profesores.map((prof, index) => ({
  ...prof,
  _originalIndex: index
  }));

// Ordenar por categoría sin alterar el orden original dentro de cada grupo
  profesoresConIndex.sort((a, b) => {
  const rankA = categoriaOrden[a.categoria] ?? 99;
  const rankB = categoriaOrden[b.categoria] ?? 99;

  if (rankA !== rankB) return rankA - rankB;
  return a._originalIndex - b._originalIndex;
  });


  return (
    <div className="min-h-screen flex flex-col bg-[#68AB6A]">
      <Header />

      <main className="flex-grow px-4 sm:px-6 lg:px-8 pt-30 pb-16">
        
        {/* TÍTULO */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">
            Directorio de Investigadores
          </h1>

          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed text-white">
            Consulta la información de cada investigador vinculado al CIEF (redes académicas y temas de investigación).
          </p>
        </section>

        {/* GRID ORDENADO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {profesores.map((prof, index) => (
            <ProfesorCard key={index} {...prof} />
          ))}
        </div>

      </main>

      <div className="bg-[#FFB000]">
        <Footer />
      </div>
    </div>
  );
}


