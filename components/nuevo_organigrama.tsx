type Unidad = {
  nombre: string;
  items?: string[];
};

type Area = {
  nombre: string;
  miembros: { nombre: string; rol?: string }[];
  unidades?: Unidad[];
};

const areas: Area[] = [
  {
    nombre: "Gestión de I+D+i",
    miembros: [
      { nombre: "Carolina Ramírez", rol: "Ciencias Sociales" },
      { nombre: "Mary Carlota Bernal", rol: "TIC'S e IA" },
      { nombre: "Investigador Novel" },
    ],
  },
  {
    nombre: "Administración y finanzas",
    miembros: [{ nombre: "Asistente Administrativo" }, { nombre: "Costos y Operaciones" }],
  },
  {
    nombre: "Servicios de apoyo",
    miembros: [],
    unidades: [
      {
        nombre: "Documentación y Comunicación",
        items: ["Diseñador Gráfico", "Community Manager", "Producciones Multimedia"],
      },
      { nombre: "Servicios Técnicos", items: ["Hardware y Software"] },
    ],
  },
];

function Conector() {
  return <div className="mx-auto h-8 w-[3px] bg-white/80" />;
}

function CargoCard({ nombre, rol }: { nombre: string; rol: string }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border-2 border-white bg-[#FFB000] px-6 py-5 text-center shadow-lg">
      <p className="text-lg font-bold text-black sm:text-xl">{nombre}</p>
      <p className="mt-1 text-sm font-medium text-black/75 sm:text-base">{rol}</p>
    </div>
  );
}

export default function NuevoOrganigrama() {
  return (
    <section className="relative bg-[#68AB6A] px-4 py-16 text-black sm:px-6 sm:py-20 md:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Centro de Investigación en Estudios Fronterizos (CIEF)
        </h2>

        <CargoCard nombre="Luis Ortiz Ospino" rol="Vicerrector de Investigación" />
        <Conector />
        <CargoCard nombre="Neida Albornoz Arias" rol="Directora CIEF" />
        <Conector />

        {/* Barra horizontal que une las tres áreas (solo en pantallas anchas) */}
        <div className="relative hidden md:block">
          <div className="mx-auto h-[3px] w-2/3 bg-white/80" />
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {areas.map((area) => (
            <div key={area.nombre} className="flex flex-col">
              <div className="mx-auto hidden h-6 w-[3px] bg-white/80 md:block" />
              <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
                <h3 className="bg-[#FFB000] px-4 py-4 text-center text-lg font-bold">
                  {area.nombre}
                </h3>
                <div className="flex flex-1 flex-col gap-3 p-4">
                  {area.miembros.map((m) => (
                    <div
                      key={m.nombre}
                      className="rounded-xl border-l-4 border-[#68AB6A] bg-[#F2FAF5] px-4 py-3"
                    >
                      <p className="font-semibold">{m.nombre}</p>
                      {m.rol && <p className="text-sm text-black/70">{m.rol}</p>}
                    </div>
                  ))}
                  {area.unidades?.map((u) => (
                    <div key={u.nombre} className="rounded-xl border border-[#68AB6A]/40 p-3">
                      <p className="mb-2 font-semibold text-[#2D7A43]">{u.nombre}</p>
                      <ul className="space-y-2">
                        {u.items?.map((item) => (
                          <li
                            key={item}
                            className="rounded-lg border-l-4 border-[#FFB000] bg-[#FFF7E8] px-3 py-2 text-sm"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
