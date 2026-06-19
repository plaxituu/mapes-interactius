window.CONTINENT = {
  i18n: {
    ca: {
      title:   "Mapa interactiu d'Amèrica del Sud",
      sub:     "Passa el ratolí per sobre de cada país per veure'n el nom, la capital i la bandera.",
      reset:   "Veure tot",
      loading: "Carregant el mapa…",
      foot:    "Mapa per a estudi · països, capitals i banderes d'Amèrica del Sud",
      search:  "Cerca un país…",
      cap:     "Capital"
    },
    es: {
      title:   "Mapa interactivo de América del Sur",
      sub:     "Pasa el ratón por encima de cada país para ver su nombre, capital y bandera.",
      reset:   "Ver todo",
      loading: "Cargando el mapa…",
      foot:    "Mapa de estudio · países, capitales y banderas de América del Sur",
      search:  "Busca un país…",
      cap:     "Capital"
    }
  },
  projection: {
    // Marge dret reduït per compensar que el "mugró" est de Brasil desplaça el centre cap a la dreta
    extent: [[20, 20], [930, 680]]
  },
  // clau : [ nom CA, nom ES, capital CA, capital ES, ISO2 ]
  data: {
    "Argentina":  ["Argentina",  "Argentina",  "Buenos Aires", "Buenos Aires", "ar"],
    "Bolivia":    ["Bolívia",    "Bolivia",    "Sucre",        "Sucre",        "bo"],
    "Brazil":     ["Brasil",     "Brasil",     "Brasília",     "Brasilia",     "br"],
    "Chile":      ["Xile",       "Chile",      "Santiago",     "Santiago",     "cl"],
    "Colombia":   ["Colòmbia",   "Colombia",   "Bogotà",       "Bogotá",       "co"],
    "Ecuador":    ["Equador",    "Ecuador",    "Quito",        "Quito",        "ec"],
    "Guyana":     ["Guyana",     "Guyana",     "Georgetown",   "Georgetown",   "gy"],
    "Paraguay":   ["Paraguai",   "Paraguay",   "Asunción",     "Asunción",     "py"],
    "Peru":       ["Perú",       "Perú",       "Lima",         "Lima",         "pe"],
    "Suriname":   ["Surinam",    "Surinam",    "Paramaribo",   "Paramaribo",   "sr"],
    "Uruguay":    ["Uruguai",    "Uruguay",    "Montevideo",   "Montevideo",   "uy"],
    "Venezuela":  ["Veneçuela",  "Venezuela",  "Caracas",      "Caracas",      "ve"]
  },
  alias: {
    "Bolivia (Plurinational State of)":    "Bolivia",
    "Venezuela (Bolivarian Republic of)":  "Venezuela",
    "Plurinational State of Bolivia":      "Bolivia",
    // Territoris no soberans → ignorar
    "Fr. Guiana":     null,
    "Falkland Is.":   null,
    "Falkland Islands (Malvinas)": null
  }
};
