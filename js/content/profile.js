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

  lead: T("Data-focused professional with 2+ years working in tech, building data pipelines, dashboards and automation. Electrical Engineering student at UTN-FRC (Córdoba, Argentina), with a focus on renewable energy, power grids and automatic control.",
          "Profesional enfocado en datos con más de 2 años de experiencia en tecnología, construyendo pipelines de datos, dashboards y automatización. Estudiante de Ingeniería Eléctrica en la UTN-FRC (Córdoba, Argentina), con foco en energías renovables, redes eléctricas y control automático."),

  about: T("I’ve spent the last two years working with engineering teams in the software and games industry, and what I enjoy most is the data: building pipelines, parsing logs and turning them into dashboards. What got me into data was prediction. Seeing that a model can anticipate what comes next blew my mind and made me start liking math. I also like having information and being in control, and I don’t like uncertainty. I’m studying Electrical Engineering at UTN-FRC, driven by a lifelong curiosity about how things work. I’m open to opportunities in data (analytics, engineering, ML/AI) and, as I progress through my degree, in renewable energy, power systems and automatic control.",
           "Pasé los últimos dos años trabajando con equipos de ingeniería de la industria del software y los videojuegos, y lo que más disfruto son los datos: construir pipelines, procesar logs y convertirlos en dashboards. Lo que me acercó a los datos fue la predicción. Ver que un modelo puede anticipar lo que viene me voló la cabeza y me hizo empezar a disfrutar la matemática. También me gusta tener información y tener el control, y no me gusta la incertidumbre. Estudio Ingeniería Eléctrica en la UTN-FRC, movido por una curiosidad de toda la vida por entender cómo funcionan las cosas. Estoy abierto a oportunidades en datos (análisis, ingeniería, ML/IA) y, a medida que avance en la carrera, en energías renovables, sistemas de potencia y control automático."),

  // Numbers shown under the About text. Remove or edit freely.
  highlights: [
    { value: "2+", label: T("years working in tech with data, automation and CI/CD", "años en tecnología trabajando con datos, automatización y CI/CD") },
    { value: "~30", label: T("newcomers onboarded at EPAM", "personas incorporadas en EPAM") },
    { value: "1 → 1", label: T("month to week: time to productivity with the onboarding process I created", "mes a semana: tiempo hasta ser productivos con el proceso de onboarding que creé") }
  ],

  contact: T("Open to opportunities in data (analytics, engineering, ML/AI) and, over time, renewable energy, power systems and control. Let’s talk.",
             "Abierto a oportunidades en datos (análisis, ingeniería, ML/IA) y, con el tiempo, en energías renovables, sistemas de potencia y control. Hablemos.")
};
