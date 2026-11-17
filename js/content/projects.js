/* PROJECTS: copy a { ... } block to add one.
   kinds: ["ee"], ["data"] or ["ee", "data"].  link: optional URL ("" for none). */
PF.content.projects = [
  { title: T("Project title", "Título del proyecto"), kinds: ["ee"],
    description: T("One or two sentences: the problem, what you built, and the result (e.g. a 12 V buck converter with 92% efficiency).",
                   "Una o dos frases: el problema, lo que construiste y el resultado (p. ej. un convertidor reductor de 12 V con 92% de eficiencia)."),
    stack: ["KiCad", "STM32", "C"], link: "" },

  { title: T("Project title", "Título del proyecto"), kinds: ["data"],
    description: T("What question you asked, which dataset you used, and what you found (e.g. a model that predicts X with Y% accuracy).",
                   "Qué pregunta te hiciste, qué datos usaste y qué encontraste (p. ej. un modelo que predice X con Y% de precisión)."),
    stack: ["Python", "pandas", "scikit-learn"], link: "" },

  { title: T("Project title", "Título del proyecto"), kinds: ["ee"],
    description: T("Describe a lab, course or personal build: an amplifier, FPGA design, motor controller or similar.",
                   "Describe un laboratorio, curso o proyecto personal: un amplificador, un diseño en FPGA, un controlador de motor o similar."),
    stack: ["Verilog", "Vivado", "MATLAB"], link: "" },

  { title: T("Project title", "Título del proyecto"), kinds: ["data"],
    description: T("An analysis or dashboard, with the insight it produced and the tools you used.",
                   "Un análisis o panel de control, con la conclusión que produjo y las herramientas que usaste."),
    stack: ["SQL", "Python", "Plotly"], link: "" },

  { title: T("Sensor data pipeline", "Pipeline de datos de sensores"), kinds: ["ee", "data"],
    description: T("Your crossover project: collect sensor readings with a microcontroller, then clean, analyze and visualize them.",
                   "Tu proyecto combinado: recolecta lecturas de sensores con un microcontrolador, luego límpialas, analízalas y visualízalas."),
    stack: ["Arduino", "Python", "SciPy"], link: "" }
];
