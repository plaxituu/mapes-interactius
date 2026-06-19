window.CONTINENT = {
  i18n: {
    ca: {
      title:   "Mapa interactiu d'Amèrica Central i el Carib",
      sub:     "Passa el ratolí per sobre de cada país per veure'n el nom, la capital i la bandera.",
      reset:   "Veure tot",
      loading: "Carregant el mapa…",
      foot:    "Mapa per a estudi · països d'Amèrica Central i el Carib",
      search:  "Cerca un país…",
      cap:     "Capital"
    },
    es: {
      title:   "Mapa interactivo de América Central y el Caribe",
      sub:     "Pasa el ratón por encima de cada país para ver su nombre, capital y bandera.",
      reset:   "Ver todo",
      loading: "Cargando el mapa…",
      foot:    "Mapa de estudio · países de América Central y el Caribe",
      search:  "Busca un país…",
      cap:     "Capital"
    }
  },
  // Noms exactes del TopoJSON (Natural Earth) per al fons gris no interactiu
  background: ["Mexico", "United States of America"],
  projection: {
    rotate: [76, 0],
    scale:  900,
    center: [0, 17]
  },
  // clau : [ nom CA, nom ES, capital CA, capital ES, ISO2 ]
  data: {
    // Amèrica Central (istme)
    "Guatemala":                    ["Guatemala",                    "Guatemala",                    "Ciutat de Guatemala",  "Ciudad de Guatemala",  "gt"],
    "Belize":                       ["Belize",                       "Belice",                       "Belmopan",             "Belmopán",             "bz"],
    "Honduras":                     ["Hondures",                     "Honduras",                     "Tegucigalpa",          "Tegucigalpa",          "hn"],
    "El Salvador":                  ["El Salvador",                  "El Salvador",                  "San Salvador",         "San Salvador",         "sv"],
    "Nicaragua":                    ["Nicaragua",                    "Nicaragua",                    "Managua",              "Managua",              "ni"],
    "Costa Rica":                   ["Costa Rica",                   "Costa Rica",                   "San José",             "San José",             "cr"],
    "Panama":                       ["Panamà",                       "Panamá",                       "Panamà",               "Ciudad de Panamá",     "pa"],
    // Carib — illes grans (polígons al TopoJSON)
    "Cuba":                         ["Cuba",                         "Cuba",                         "L'Havana",             "La Habana",            "cu"],
    "Jamaica":                      ["Jamaica",                      "Jamaica",                      "Kingston",             "Kingston",             "jm"],
    "Haiti":                        ["Haití",                        "Haití",                        "Port-au-Prince",       "Puerto Príncipe",       "ht"],
    "Dominican Republic":           ["República Dominicana",         "República Dominicana",         "Santo Domingo",        "Santo Domingo",        "do"],
    "Bahamas":                      ["les Bahames",                  "Bahamas",                      "Nassau",               "Nassau",               "bs"],
    // Carib — illes petites (punts)
    "Trinidad and Tobago":          ["Trinidad i Tobago",            "Trinidad y Tobago",            "Port of Spain",        "Puerto España",        "tt"],
    "Barbados":                     ["Barbados",                     "Barbados",                     "Bridgetown",           "Bridgetown",           "bb"],
    "Saint Lucia":                  ["Santa Llúcia",                 "Santa Lucía",                  "Castries",             "Castries",             "lc"],
    "Saint Vincent":                ["Sant Vicent i les Grenadines", "San Vicente y las Granadinas", "Kingstown",            "Kingstown",            "vc"],
    "Grenada":                      ["Granada",                      "Granada",                      "Saint George's",       "Saint George's",       "gd"],
    "Antigua and Barbuda":          ["Antigua i Barbuda",            "Antigua y Barbuda",            "Saint John's",         "Saint John's",         "ag"],
    "Dominica":                     ["Dominica",                     "Dominica",                     "Roseau",               "Roseau",               "dm"],
    "Saint Kitts and Nevis":        ["Saint Kitts i Nevis",          "San Cristóbal y Nieves",       "Basseterre",           "Basseterre",           "kn"]
  },
  alias: {
    "Dominican Rep.":               "Dominican Republic",
    "The Bahamas":                  "Bahamas",
    "Saint Vincent and the Grenadines": "Saint Vincent",
    // Territoris no sobirans → ignorar
    "Puerto Rico":                  null,
    "Guadeloupe":                   null,
    "Martinique":                   null,
    "U.S. Virgin Is.":              null,
    "Cayman Is.":                   null,
    "Turks and Caicos Is.":         null,
    "British Virgin Is.":           null,
    "Aruba":                        null,
    "Curaçao":                      null,
    "Sint Maarten":                 null
  },
  // Illes petites del Carib mostrades com a punts
  points: [
    { key: "Trinidad and Tobago",  coords: [-61.2,  10.7] },
    { key: "Barbados",             coords: [-59.5,  13.2] },
    { key: "Saint Lucia",          coords: [-60.9,  13.9] },
    { key: "Saint Vincent",        coords: [-61.2,  13.2] },
    { key: "Grenada",              coords: [-61.7,  12.1] },
    { key: "Antigua and Barbuda",  coords: [-61.8,  17.1] },
    { key: "Dominica",             coords: [-61.4,  15.3] },
    { key: "Saint Kitts and Nevis",coords: [-62.7,  17.3] }
  ]
};
