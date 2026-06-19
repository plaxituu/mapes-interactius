window.CONTINENT = {
  i18n: {
    ca: {
      title:   "Mapa interactiu d'Oceania",
      sub:     "Passa el ratolí per sobre de cada país per veure'n el nom, la capital i la bandera.",
      reset:   "Veure tot",
      loading: "Carregant el mapa…",
      foot:    "Mapa per a estudi · països, capitals i banderes d'Oceania",
      search:  "Cerca un país…",
      cap:     "Capital"
    },
    es: {
      title:   "Mapa interactivo de Oceanía",
      sub:     "Pasa el ratón por encima de cada país para ver su nombre, capital y bandera.",
      reset:   "Ver todo",
      loading: "Cargando el mapa…",
      foot:    "Mapa de estudio · países, capitales y banderas de Oceanía",
      search:  "Busca un país…",
      cap:     "Capital"
    }
  },
  projection: {
    rotate: [-155, 0],
    // Només aquestes tres per calcular el zoom (Fiji creua l'antimeridià i deforma el càlcul)
    fitFeatures: ["Australia", "New Zealand", "Papua New Guinea"],
    // Marge superior extra per als punts insulars del Pacífic nord (Palau, Micronèsia, etc.)
    extent: [[40, 120], [960, 640]]
  },
  // clau : [ nom CA, nom ES, capital CA, capital ES, ISO2 ]
  data: {
    "Australia":        ["Austràlia",          "Australia",          "Canberra",       "Canberra",       "au"],
    "Papua New Guinea": ["Papua Nova Guinea",   "Papúa Nueva Guinea", "Port Moresby",   "Port Moresby",   "pg"],
    "New Zealand":      ["Nova Zelanda",        "Nueva Zelanda",      "Wellington",     "Wellington",     "nz"],
    "Fiji":             ["Fiji",                "Fiyi",               "Suva",           "Suva",           "fj"],
    "Solomon Islands":  ["Illes Salomó",        "Islas Salomón",      "Honiara",        "Honiara",        "sb"],
    "Vanuatu":          ["Vanuatu",             "Vanuatu",            "Port Vila",      "Port Vila",      "vu"],
    "Samoa":            ["Samoa",               "Samoa",              "Apia",           "Apia",           "ws"],
    "Kiribati":         ["Kiribati",            "Kiribati",           "Tarawa del Sud", "Tarawa del Sur", "ki"],
    "Tonga":            ["Tonga",               "Tonga",              "Nukualofa",      "Nukualofa",      "to"],
    "Micronesia":       ["Micronèsia",          "Micronesia",         "Palikir",        "Palikir",        "fm"],
    "Palau":            ["Palau",               "Palaos",             "Ngerulmud",      "Ngerulmud",      "pw"],
    "Marshall Islands": ["Illes Marshall",      "Islas Marshall",     "Majuro",         "Majuro",         "mh"],
    "Tuvalu":           ["Tuvalu",              "Tuvalu",             "Funafuti",       "Funafuti",       "tv"],
    "Nauru":            ["Nauru",               "Nauru",              "Yaren",          "Yaren",          "nr"]
  },
  alias: {
    "Solomon Is.":                        "Solomon Islands",
    "W. Samoa":                           "Samoa",
    "Fed. Sts. Micronesia":               "Micronesia",
    "Federated States of Micronesia":     "Micronesia",
    "Marshall Is.":                       "Marshall Islands",
    "N. Mariana Is.":                     null
  },
  // Països amb territori massa petit per al topojson → es mostren com a punts [lon, lat]
  points: [
    { key: "Kiribati",         coords: [173.0,   1.4] },
    { key: "Tonga",            coords: [-175.2, -21.2] },
    { key: "Micronesia",       coords: [158.2,   6.9] },
    { key: "Palau",            coords: [134.5,   7.5] },
    { key: "Marshall Islands", coords: [171.2,   7.1] },
    { key: "Tuvalu",           coords: [179.2,  -8.5] },
    { key: "Nauru",            coords: [166.9,  -0.5] }
  ]
};
