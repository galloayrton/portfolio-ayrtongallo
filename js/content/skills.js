/* SKILLS: one card per group. category: "ee" or "data".
   Items can be plain strings (same in both languages) or T("English", "Español").
   The first group is shown first. Replace these with the skills you really have. */
PF.content.skills = [
  { category: "data", title: T("Data & analysis", "Datos y análisis"), items: [
    "Python", "pandas / NumPy", "SQL", "scikit-learn",
    T("Machine learning", "Aprendizaje automático"),
    T("Time series analysis", "Análisis de series temporales"),
    T("Statistics", "Estadística"),
    T("Data visualization", "Visualización de datos"),
    "Jupyter", "Git"
  ] },
  { category: "ee", title: T("Electrical engineering", "Ingeniería eléctrica"), items: [
    T("Power systems analysis", "Análisis de sistemas de potencia"),
    T("Circuit analysis", "Análisis de circuitos"),
    T("Signals and systems", "Señales y sistemas"),
    T("Control theory", "Teoría de control"),
    "MATLAB / Simulink"
  ] }
];
