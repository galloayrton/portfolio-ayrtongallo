/* PROFILE: your name, logo, intro and about text. */
PF.content.profile = {
  name: "Ayrton Nehuen Gallo Salinas",     // used in the footer
  logo: "AyrtonGallo",                      // top-left of the navbar
  pageTitle: T("Ayrton Gallo – Electrical Engineering & Data Portfolio", "Ayrton Gallo – Portafolio de Ingeniería Eléctrica y Datos"),
  tag: T("// electrical engineering × data", "// ingeniería eléctrica × datos"),

  // The big headline, in pieces. cls "e" = orange, "d" = blue, no cls = normal text.
  headline: [
    { text: T("I design ", "Diseño ") },
    { text: T("circuits", "circuitos"), cls: "e" },
    { text: T(" and find the ", " y encuentro la ") },
    { text: T("signal", "señal"), cls: "d" },
    { text: T(" in data.", " en los datos.") }
  ],

  lead: T("Electrical engineering student building at the intersection of hardware, signals and data science. Replace this line with your name, university and what you’re looking for.",
          "Estudiante de ingeniería eléctrica que trabaja entre el hardware, las señales y la ciencia de datos. Reemplaza esta línea con tu nombre, universidad y lo que buscas."),

  about: T("I’m a [year]-year Electrical Engineering student at [University]. I enjoy the full path from sensor to insight: designing the hardware that captures a signal, then using data analysis and machine learning to make sense of it. Add two or three sentences about what drives you.",
           "Soy estudiante de [año] año de Ingeniería Eléctrica en [Universidad]. Disfruto todo el recorrido del sensor al conocimiento: diseñar el hardware que captura una señal y luego usar análisis de datos y aprendizaje automático para darle sentido. Agrega dos o tres frases sobre lo que te motiva."),

  contact: T("Open to internships, collaborations and conversations about hardware and data.",
             "Abierto a pasantías, colaboraciones y conversaciones sobre hardware y datos.")
};
