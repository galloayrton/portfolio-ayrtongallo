/* PROFILE: your name, logo, intro, about text and highlight numbers. */
PF.content.profile = {
  name: "Ayrton Nehuen Gallo Salinas",     // used in the footer
  logo: "AyrtonGallo",                      // top-left of the navbar
  pageTitle: T("Ayrton Gallo – Data & Electrical Engineering Portfolio", "Ayrton Gallo – Portafolio de Datos e Ingeniería Eléctrica"),
  tag: T("// data × electrical engineering", "// datos × ingeniería eléctrica"),

  // The big headline, in pieces. cls "e" = orange, "d" = blue, no cls = normal text.
  headline: [
    { text: T("Where ", "Donde los ") },
    { text: T("data", "datos"), cls: "d" },
    { text: T(" meets ", " se encuentran con la ") },
    { text: T("electrical engineering", "ingeniería eléctrica"), cls: "e" },
    { text: T(".", ".") }
  ],

  lead: T("Data-focused professional with 2+ years in tech, building ETL pipelines, dashboards and automation. Electrical Engineering student at UTN-FRC (Córdoba, Argentina), focused on renewable energy, power grids and automatic control.",
      "Profesional enfocado en datos con más de 2 años en tecnología, construyendo pipelines ETL, dashboards y automatización. Estudiante de Ingeniería Eléctrica en la UTN-FRC (Córdoba, Argentina), con foco en energías renovables, redes eléctricas y control automático."),

  about: T("I build data pipelines and dashboards, turning raw data into something teams can use. Prediction is what got me into data: seeing a model anticipate what comes next blew my mind and made me fall for math. I like having information and being in control, and I don’t like uncertainty. That same curiosity about how things work is why I study electrical engineering, where I’m drawn to renewable energy, power grids and automatic control. I’m open to roles in data (analytics, engineering, ML/AI) and, as my degree advances, in energy and power systems.",
      "Construyo pipelines de datos y dashboards, y convierto datos crudos en información que los equipos pueden usar. Lo que me acercó a los datos fue la predicción: ver que un modelo anticipa lo que viene me voló la cabeza y me hizo enamorarme de la matemática. Me gusta tener información y tener el control, y no me gusta la incertidumbre. Esa misma curiosidad por entender cómo funcionan las cosas es la razón por la que estudio ingeniería eléctrica, donde me atraen las energías renovables, las redes eléctricas y el control automático. Estoy abierto a roles en datos (análisis, ingeniería, ML/IA) y, a medida que avance en la carrera, en energía y sistemas de potencia."),

  // Numbers shown under the About text. Remove or edit freely.
  highlights: [
    { value: "2+", label: T("years in tech, working with data, automation and CI/CD", "años en tecnología, trabajando con datos, automatización y CI/CD") },
    { value: "~30", label: T("people onboarded with a process I created at EPAM", "personas incorporadas con un proceso que creé en EPAM") },
    { value: "1 mo → 1 wk", label: T("time to productivity for new hires", "tiempo hasta ser productivos al sumarse al equipo") }
  ],

  contact: T("Open to data roles (analytics, engineering, ML/AI) and, over time, energy and power systems work. Let’s talk.",
      "Abierto a roles en datos (análisis, ingeniería, ML/IA) y, con el tiempo, a trabajo en energía y sistemas de potencia. Hablemos.")
};