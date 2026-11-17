/* PROFILE: your name, logo, intro and about text. */
PF.content.profile = {
  name: "Ayrton Nehuen Gallo Salinas",     // used in the footer
  logo: "AyrtonGallo",                      // top-left of the navbar
  pageTitle: T("Ayrton Gallo – Electrical Engineering & Data Portfolio", "Ayrton Gallo – Portafolio de Ingeniería Eléctrica y Datos"),
  tag: T("// electrical engineering × data", "// ingeniería eléctrica × datos"),

  // The big headline, in pieces. cls "e" = orange, "d" = blue, no cls = normal text.
  headline: [
    { text: T("I analyze ", "Analizo ") },
    { text: T("electrical systems", "sistemas eléctricos"), cls: "e" },
    { text: T(" with ", " con ") },
    { text: T("data", "datos"), cls: "d" },
    { text: T(".", ".") }
  ],

  lead: T("Electrical engineering student who works software-first: power systems, signals and the data they generate. I like turning measurements into models and decisions.",
          "Estudiante de ingeniería eléctrica con enfoque en software: sistemas de potencia, señales y los datos que generan. Me gusta convertir mediciones en modelos y decisiones."),

  about: T("I’m a [year]-year Electrical Engineering student at [University]. What draws me to the field is the theory and the systems behind it: power, energy, signals and control. What I enjoy most is the data: cleaning it, modeling it and finding out what it says. I’m looking for [internship / thesis / role] in [data analytics / energy / power systems].",
           "Soy estudiante de [año] año de Ingeniería Eléctrica en [Universidad]. Lo que me atrae de la carrera es la teoría y los sistemas que hay detrás: potencia, energía, señales y control. Lo que más disfruto son los datos: limpiarlos, modelarlos y descubrir lo que dicen. Busco [pasantía / tesis / puesto] en [análisis de datos / energía / sistemas de potencia]."),

  contact: T("Open to data, analytics and energy-related internships, thesis projects and collaborations.",
             "Abierto a pasantías, tesis y colaboraciones en datos, analítica y energía.")
};
