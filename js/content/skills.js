/* SKILLS: one card per group. category: "data", "cs" or "ee".
   Items can be plain strings (same in both languages) or T("English", "Español"). */
PF.content.skills = [
  { category: "data", title: T("Data, analytics & engineering", "Datos, analítica e ingeniería"), items: [
    "SQL Server", "PostgreSQL", "Python", "Power BI", "Tableau", "Excel", "Google Data Studio", "ETL", "AWS",
    T("Data wrangling", "Preparación y transformación de datos"),
    T("Data visualization", "Visualización de datos"),
    T("Python automation", "Automatización con Python"),
    "CI/CD (TeamCity, Horde)"
  ] },
  { category: "cs", title: T("Computer science foundations", "Fundamentos de ciencias de la computación"), items: [
    T("Algorithms", "Algoritmos"),
    T("Data structures", "Estructuras de datos"),
    T("Software engineering", "Ingeniería de software")
  ] },
  { category: "ee", title: T("Electrical energy engineering", "Ingeniería en energía eléctrica"), items: [
    T("Renewable energy", "Energías renovables"),
    T("Power systems", "Sistemas de potencia"),
    T("Automatic control", "Control automático"),
    T("Math and physics", "Matemática y física")
  ] }
];
