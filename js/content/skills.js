/* SKILLS: one card per group. category: "ee" or "data".
   Items can be plain strings (same in both languages) or T("English", "Español"). */
PF.content.skills = [
  { category: "ee", title: T("Hardware & signals", "Hardware y señales"), items: [
    T("Analog circuits", "Circuitos analógicos"),
    T("Digital logic", "Lógica digital"),
    T("Microcontrollers", "Microcontroladores"),
    T("Signal processing", "Procesamiento de señales"),
    T("Control systems", "Sistemas de control"),
    T("PCB design", "Diseño de PCB"),
    "MATLAB / Simulink", "SPICE", "Verilog / VHDL"
  ] },
  { category: "data", title: T("Analysis & ML", "Análisis y ML"), items: [
    "Python", "pandas / NumPy", "SQL", "scikit-learn",
    T("Data visualization", "Visualización de datos"),
    T("Statistics", "Estadística"),
    "Jupyter", "Git"
  ] }
];
