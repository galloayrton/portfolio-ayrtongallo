/* PROJECTS: copy a { ... } block to add one.
   kinds: ["ee"], ["data"] or ["ee", "data"].  link: optional URL ("" for none).
   These are example ideas: replace each with something you really did. */
PF.content.projects = [
  { title: T("Electricity demand forecasting", "Pronóstico de demanda eléctrica"), kinds: ["ee", "data"],
    description: T("Predict electricity load from historical consumption and weather data. Describe the dataset, the model you chose and how accurate it was (e.g. MAPE of X%).",
                   "Predice la carga eléctrica a partir de datos históricos de consumo y clima. Describe los datos, el modelo elegido y su precisión (p. ej. MAPE de X%)."),
    stack: ["Python", "pandas", "scikit-learn"], link: "" },

  { title: T("Dataset exploration and dashboard", "Exploración de datos y panel de control"), kinds: ["data"],
    description: T("What question you asked, which dataset you used and what you found, presented as an interactive dashboard.",
                   "Qué pregunta te hiciste, qué datos usaste y qué encontraste, presentado como un panel interactivo."),
    stack: ["SQL", "Python", "Plotly"], link: "" },

  { title: T("Power flow study of a small grid", "Estudio de flujo de potencia de una red pequeña"), kinds: ["ee"],
    description: T("Model a small network and analyze voltages and losses under different loads. Describe the system, the method and what the results showed.",
                   "Modela una red pequeña y analiza tensiones y pérdidas bajo distintas cargas. Describe el sistema, el método y lo que mostraron los resultados."),
    stack: ["Python", "pandapower", "MATLAB"], link: "" },

  { title: T("Signal analysis", "Análisis de señales"), kinds: ["ee", "data"],
    description: T("Filtering and spectral analysis of a real-world signal (for example grid frequency, vibration or ECG data), and what it revealed.",
                   "Filtrado y análisis espectral de una señal real (por ejemplo frecuencia de la red, vibraciones o ECG) y lo que reveló."),
    stack: ["Python", "SciPy", "MATLAB"], link: "" },

  { title: T("Control system simulation", "Simulación de un sistema de control"), kinds: ["ee"],
    description: T("Model a system and tune a controller in simulation. Include the goal, the approach and the performance you achieved.",
                   "Modela un sistema y ajusta un controlador en simulación. Incluye el objetivo, el enfoque y el desempeño que lograste."),
    stack: ["MATLAB", "Simulink", "Python"], link: "" }
];
