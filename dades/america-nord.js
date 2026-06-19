window.CONTINENT = {
  i18n: {
    ca: {
      title:   "Mapa interactiu d'Amèrica del Nord",
      sub:     "Passa el ratolí per sobre de cada país per veure'n el nom, la capital i la bandera.",
      reset:   "Veure tot",
      loading: "Carregant el mapa…",
      foot:    "Mapa per a estudi · països, capitals i banderes d'Amèrica del Nord",
      search:  "Cerca un país…",
      cap:     "Capital"
    },
    es: {
      title:   "Mapa interactivo de América del Norte",
      sub:     "Pasa el ratón por encima de cada país para ver su nombre, capital y bandera.",
      reset:   "Ver todo",
      loading: "Cargando el mapa…",
      foot:    "Mapa de estudio · países, capitales y banderas de América del Norte",
      search:  "Busca un país…",
      cap:     "Capital"
    }
  },
  projection: {
    rotate: [95, 0],
    // Escala i centre manuals: el Mercator deforma molt Canada/Alaska al nord,
    // per això no usem fitExtent. Centrem a 30°N per mostrar bé Mèxic i Amèrica Central.
    scale:  420,
    center: [0, 30]
  },
  // clau : [ nom CA, nom ES, capital CA, capital ES, ISO2 ]
  data: {
    "Canada":       ["el Canadà",       "Canadá",          "Ottawa",                "Ottawa",                "ca"],
    "United States":["Estats Units",    "Estados Unidos",  "Washington D.C.",       "Washington D.C.",       "us"],
    "Mexico":       ["Mèxic",           "México",          "Ciutat de Mèxic",       "Ciudad de México",      "mx"],
    "Guatemala":    ["Guatemala",       "Guatemala",       "Ciutat de Guatemala",   "Ciudad de Guatemala",   "gt"],
    "Belize":       ["Belize",          "Belice",          "Belmopan",              "Belmopán",              "bz"],
    "Honduras":     ["Hondures",        "Honduras",        "Tegucigalpa",           "Tegucigalpa",           "hn"],
    "El Salvador":  ["El Salvador",     "El Salvador",     "San Salvador",          "San Salvador",          "sv"],
    "Nicaragua":    ["Nicaragua",       "Nicaragua",       "Managua",               "Managua",               "ni"],
    "Costa Rica":   ["Costa Rica",      "Costa Rica",      "San José",              "San José",              "cr"],
    "Panama":       ["Panamà",          "Panamá",          "Panamà",                "Panamá",                "pa"]
  },
  alias: {
    "United States of America": "United States",
    // Territoris no sobirans → ignorar
    "Greenland":        null,
    "Puerto Rico":      null,
    "Cuba":             null,
    "Jamaica":          null,
    "Haiti":            null,
    "Dominican Rep.":   null
  }
};
