window.CONTINENT = {
  i18n: {
    ca: {
      title:   "Mapa interactiu d'Amèrica del Nord",
      sub:     "Passa el ratolí per sobre de cada país o territori per veure'n el nom, la capital i la bandera.",
      reset:   "Veure tot",
      loading: "Carregant el mapa…",
      foot:    "Mapa per a estudi · països i territoris d'Amèrica del Nord",
      search:  "Cerca un país…",
      cap:     "Capital"
    },
    es: {
      title:   "Mapa interactivo de América del Norte",
      sub:     "Pasa el ratón por encima de cada país o territorio para ver su nombre, capital y bandera.",
      reset:   "Ver todo",
      loading: "Cargando el mapa…",
      foot:    "Mapa de estudio · países y territorios de América del Norte",
      search:  "Busca un país…",
      cap:     "Capital"
    }
  },
  projection: {
    rotate: [80, 0],
    scale:  300,
    center: [0, 52]
  },
  // clau : [ nom CA, nom ES, capital CA, capital ES, ISO2 ]
  data: {
    "Canada":        ["el Canadà",                          "Canadá",                          "Ottawa",        "Ottawa",        "ca"],
    "United States": ["Estats Units",                       "Estados Unidos",                  "Washington D.C.", "Washington D.C.", "us"],
    "Mexico":        ["Mèxic",                              "México",                          "Ciutat de Mèxic", "Ciudad de México", "mx"],
    "Greenland":     ["Groenlàndia (Dinamarca)",            "Groenlandia (Dinamarca)",         "Nuuk",          "Nuuk",          "gl"],
    "Bermuda":       ["Bermudes (Regne Unit)",              "Bermudas (Reino Unido)",          "Hamilton",      "Hamilton",      "bm"],
    "Saint Pierre":  ["Saint-Pierre i Miquelon (França)",  "San Pedro y Miquelón (Francia)",  "Saint-Pierre",  "Saint-Pierre",  "pm"]
  },
  alias: {
    "United States of America": "United States"
  },
  // Territoris mostrats com a punts (massa petits per al polígon o distorsió Mercator excessiva)
  points: [
    { key: "Greenland",    coords: [-42.0,  71.7] },
    { key: "Bermuda",      coords: [-64.8,  32.3] },
    { key: "Saint Pierre", coords: [-56.3,  46.8] }
  ]
};
