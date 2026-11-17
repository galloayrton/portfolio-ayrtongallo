/* SKILLS: one card per group. category: "data" or "ee".
   Items can be plain strings (same in both languages) or T("English", "Español"). */
PF.content.skills = [
  { category: "data", title: T("Data, analytics & engineering", "Datos, analítica e ingeniería"), items: [
    "SQL Server", "PostgreSQL", "Power BI", "Tableau", "Excel", "Python", "ETL", "AWS",
    T("Log parsing & visualization", "Procesamiento y visualización de logs"),
    T("Python automation", "Automatización con Python"),
    "CI/CD (TeamCity, Horde)", "Playwright"
  ] },
  { category: "ee", title: T("Electrical engineering", "Ingeniería eléctrica"), items: [
    T("Renewable energy", "Energías renovables"),
    T("Power systems", "Sistemas de potencia"),
    T("Automatic control", "Control automático"),
    T("Math and physics", "Matemática y física")
  ] }
];
