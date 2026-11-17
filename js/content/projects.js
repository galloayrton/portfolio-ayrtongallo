/* PROJECTS: copy a { ... } block to add one.
   kinds: ["ee"], ["data"] or ["ee", "data"].  link: optional URL ("" for none).
   These two are placeholders: replace them when you have real projects. */
PF.content.projects = [
  { title: T("[Data project title]", "[Título del proyecto de datos]"), kinds: ["data"],
    description: T("[Describe the question you asked, the data you used, what you built and the result.]",
                   "[Describe la pregunta que te hiciste, los datos que usaste, lo que construiste y el resultado.]"),
    stack: ["[Tools]"], link: "" },

  { title: T("[Electrical engineering project title]", "[Título del proyecto de ingeniería eléctrica]"), kinds: ["ee"],
    description: T("[Describe the system you studied, the method and what you found.]",
                   "[Describe el sistema que estudiaste, el método y lo que encontraste.]"),
    stack: ["[Tools]"], link: "" }
];
