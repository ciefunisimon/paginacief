<script src="https://cdn.balkan.app/orgchart-community.js"></script>

    <script>
        // 1. Plantilla personalizada basada en 'ana'
        OrgChart.templates.ciefTemplate = Object.assign({}, OrgChart.templates.ana);

        // 2. Tarjeta con tus colores
        OrgChart.templates.ciefTemplate.node =
            `<rect x="0" y="0" width="{w}" height="{h}"
                   fill="#FFB000"
                   stroke="#68AB6A"
                   stroke-width="2"
                   rx="14" ry="14">
            </rect>`;

        // 3. Nombre (field_0)
        OrgChart.templates.ciefTemplate.field_0 =
            `<text data-width="200"
                   font-size="14"
                   font-weight="bold"
                   fill="#000000"
                   x="125" y="35"
                   text-anchor="middle">
               {val}
            </text>`;

        // 4. Cargo (field_1)
        OrgChart.templates.ciefTemplate.field_1 =
            `<text data-width="200"
                   font-size="11"
                   fill="#333333"
                   x="125" y="55"
                   text-anchor="middle">
               {val}
            </text>`;

        // 5. Inicializamos con ambos campos
        var chart = new OrgChart(document.getElementById("tree"), {
            template: "ciefTemplate",
            nodeBinding: {
                field_0: "name",  // Nombre
                field_1: "role"   // Cargo
            }
        });

        // 6. Datos: nombre + cargo
        chart.load([
            { id: 1,  name: "Luis Ortiz Ospino",        role: "Vicerrector de Investigación" },
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
            { id: 16, pid: 12, name: "Hardware y Software",  role: "" }
        ]);
    </script>
</body>
</html> este fue el original todo blanco y despues apunta de style y cosas llego a ese color
