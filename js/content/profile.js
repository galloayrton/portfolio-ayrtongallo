/* PROFILE: your name, logo, intro, about text and highlight numbers. */
PF.content.profile = {
  name: "Ayrton Nehuen Gallo Salinas",     // used in the footer
  logo: "AyrtonGallo",                      // top-left of the navbar
  pageTitle: T("Ayrton Gallo – Data & Electrical Engineering Portfolio", "Ayrton Gallo – Portafolio de Datos e Ingeniería Eléctrica"),
  tag: T("// data × electrical engineering", "// datos × ingeniería eléctrica"),
  location: T("Córdoba, Argentina", "Córdoba, Argentina"),

  // The big headline, in pieces. cls "e" = orange, "d" = blue, no cls = normal text.
  headline: [
    { text: T("Where ", "Donde los ") },
    { text: T("data", "datos"), cls: "d" },
    { text: T(" meets ", " se encuentran con la ") },
    { text: T("electrical engineering", "ingeniería eléctrica"), cls: "e" },
    { text: T(".", ".") }
  ],

  lead: T("Data-focused professional with 2+ years in tech, building ETL pipelines, dashboards and automation. Electrical Energy Engineering student at UTN-FRC, with prior computer science studies at UNC-FAMAF. Based in Córdoba, Argentina.",
          "Profesional enfocado en datos con más de 2 años en tecnología, construyendo pipelines ETL, dashboards y automatización. Estudiante de Ingeniería en Energía Eléctrica en la UTN-FRC, con estudios previos de Ciencias de la Computación en la UNC-FAMAF. Radicado en Córdoba, Argentina."),

  // Each item is one paragraph.
  about: [
    T("I turn raw data into something teams can use: ETL pipelines, dashboards and automation. Prediction is what got me into data. Seeing a model anticipate what comes next blew my mind and made me fall for math.",
      "Convierto datos crudos en algo que los equipos pueden usar: pipelines ETL, dashboards y automatización. Lo que me acercó a los datos fue la predicción: ver que un modelo anticipa lo que viene me voló la cabeza y me hizo enamorarme de la matemática."),
    T("That same curiosity about how things work led me to electrical engineering. I’m studying Electrical Energy Engineering at UTN-FRC, drawn to renewable energy, power grids and automatic control, after earlier computer science studies at UNC-FAMAF.",
      "Esa misma curiosidad por entender cómo funcionan las cosas me llevó a la ingeniería eléctrica. Estudio Ingeniería en Energía Eléctrica en la UTN-FRC, atraído por las energías renovables, las redes eléctricas y el control automático, tras mis estudios previos de Ciencias de la Computación en la UNC-FAMAF.")
  ],

  // Numbers shown under the About text. Remove or edit freely.
  highlights: [
    { value: "2+", label: T("years in tech, working with data, automation and CI/CD", "años en tecnología, trabajando con datos, automatización y CI/CD") },
    { value: "~30", label: T("people onboarded with a process I created at EPAM", "personas incorporadas con un proceso que creé en EPAM") },
    { value: "1 mo → 1 wk", label: T("time to productivity for new hires", "tiempo hasta ser productivos al sumarse al equipo") }
  ],

  contact: T("Open to data roles (analytics, engineering, ML/AI) and, over time, energy and power systems work. Let’s talk.",
             "Abierto a roles en datos (análisis, ingeniería, ML/IA) y, con el tiempo, a trabajo en energía y sistemas de potencia. Hablemos.")
};
