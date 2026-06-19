window.CONTINENT = {
  i18n: {
    ca: {
      title:   "Mapa interactiu d'Europa",
      sub:     "Passa el ratolí per sobre de cada país per veure'n el nom, la capital i la bandera.",
      reset:   "Veure tot",
      loading: "Carregant el mapa…",
      foot:    "Mapa per a estudi · països d'Europa",
      search:  "Cerca un país…",
      cap:     "Capital"
    },
    es: {
      title:   "Mapa interactivo de Europa",
      sub:     "Pasa el ratón por encima de cada país para ver su nombre, capital y bandera.",
      reset:   "Ver todo",
      loading: "Cargando el mapa…",
      foot:    "Mapa de estudio · países de Europa",
      search:  "Busca un país…",
      cap:     "Capital"
    }
  },
  projection: {
    scale:  480,
    center: [10, 58]
  },
  // clau : [ nom CA, nom ES, capital CA, capital ES, ISO2 ]
  data: {
    "Albania":                ["Albània",               "Albania",              "Tirana",            "Tirana",              "al"],
    "Andorra":                ["Andorra",                "Andorra",              "Andorra la Vella",  "Andorra la Vella",    "ad"],
    "Austria":                ["Àustria",                "Austria",              "Viena",             "Viena",               "at"],
    "Belarus":                ["Bielorússia",            "Bielorrusia",          "Minsk",             "Minsk",               "by"],
    "Belgium":                ["Bèlgica",                "Bélgica",              "Brussel·les",       "Bruselas",            "be"],
    "Bosnia and Herzegovina": ["Bòsnia i Hercegovina",   "Bosnia y Herzegovina", "Sarajevo",          "Sarajevo",            "ba"],
    "Bulgaria":               ["Bulgària",               "Bulgaria",             "Sofia",             "Sofía",               "bg"],
    "Croatia":                ["Croàcia",                "Croacia",              "Zagreb",            "Zagreb",              "hr"],
    "Cyprus":                 ["Xipre",                  "Chipre",               "Nicòsia",           "Nicosia",             "cy"],
    "Czech Republic":         ["República Txeca",        "República Checa",      "Praga",             "Praga",               "cz"],
    "Denmark":                ["Dinamarca",              "Dinamarca",            "Copenhaguen",       "Copenhague",          "dk"],
    "Estonia":                ["Estònia",                "Estonia",              "Tallinn",           "Tallin",              "ee"],
    "Finland":                ["Finlàndia",              "Finlandia",            "Hèlsinki",          "Helsinki",            "fi"],
    "France":                 ["França",                 "Francia",              "París",             "París",               "fr"],
    "Germany":                ["Alemanya",               "Alemania",             "Berlín",            "Berlín",              "de"],
    "Greece":                 ["Grècia",                 "Grecia",               "Atenes",            "Atenas",              "gr"],
    "Hungary":                ["Hongria",                "Hungría",              "Budapest",          "Budapest",            "hu"],
    "Iceland":                ["Islàndia",               "Islandia",             "Reykjavík",         "Reikiavik",           "is"],
    "Ireland":                ["Irlanda",                "Irlanda",              "Dublín",            "Dublín",              "ie"],
    "Italy":                  ["Itàlia",                 "Italia",               "Roma",              "Roma",                "it"],
    "Kosovo":                 ["Kosovo",                 "Kosovo",               "Pristina",          "Pristina",            "xk"],
    "Latvia":                 ["Letònia",                "Letonia",              "Riga",              "Riga",                "lv"],
    "Liechtenstein":          ["Liechtenstein",          "Liechtenstein",        "Vaduz",             "Vaduz",               "li"],
    "Lithuania":              ["Lituània",               "Lituania",             "Vílnius",           "Vilna",               "lt"],
    "Luxembourg":             ["Luxemburg",              "Luxemburgo",           "Luxemburg",         "Luxemburgo",          "lu"],
    "Malta":                  ["Malta",                  "Malta",                "La Valletta",       "La Valeta",           "mt"],
    "Moldova":                ["Moldàvia",               "Moldavia",             "Chișinău",          "Chisinau",            "md"],
    "Monaco":                 ["Mònaco",                 "Mónaco",               "Mònaco",            "Mónaco",              "mc"],
    "Montenegro":             ["Montenegro",             "Montenegro",           "Podgorica",         "Podgorica",           "me"],
    "Netherlands":            ["Països Baixos",          "Países Bajos",         "Amsterdam",         "Ámsterdam",           "nl"],
    "North Macedonia":        ["Macedònia del Nord",     "Macedonia del Norte",  "Skopje",            "Skopie",              "mk"],
    "Norway":                 ["Noruega",                "Noruega",              "Oslo",              "Oslo",                "no"],
    "Poland":                 ["Polònia",                "Polonia",              "Varsòvia",          "Varsovia",            "pl"],
    "Portugal":               ["Portugal",               "Portugal",             "Lisboa",            "Lisboa",              "pt"],
    "Romania":                ["Romania",                "Rumanía",              "Bucarest",          "Bucarest",            "ro"],
    "Russia":                 ["Rússia",                 "Rusia",                "Moscou",            "Moscú",               "ru"],
    "San Marino":             ["San Marino",             "San Marino",           "San Marino",        "San Marino",          "sm"],
    "Serbia":                 ["Sèrbia",                 "Serbia",               "Belgrad",           "Belgrado",            "rs"],
    "Slovakia":               ["Eslovàquia",             "Eslovaquia",           "Bratislava",        "Bratislava",          "sk"],
    "Slovenia":               ["Eslovènia",              "Eslovenia",            "Ljubljana",         "Liubliana",           "si"],
    "Spain":                  ["Espanya",                "España",               "Madrid",            "Madrid",              "es"],
    "Sweden":                 ["Suècia",                 "Suecia",               "Estocolm",          "Estocolmo",           "se"],
    "Switzerland":            ["Suïssa",                 "Suiza",                "Berna",             "Berna",               "ch"],
    "Ukraine":                ["Ucraïna",                "Ucrania",              "Kyiv",              "Kyiv",                "ua"],
    "United Kingdom":         ["Regne Unit",             "Reino Unido",          "Londres",           "Londres",             "gb"],
    "Vatican City":           ["Vaticà",                 "Ciudad del Vaticano",  "Vaticà",            "Ciudad del Vaticano", "va"]
  },
  alias: {
    // Natural Earth 50m usa aquests noms alternatius
    "Czechia":           "Czech Republic",
    "Czech Rep.":        "Czech Republic",
    "Bosnia and Herz.":  "Bosnia and Herzegovina",
    "N. Macedonia":      "North Macedonia",
    "Macedonia":         "North Macedonia",
    "Vatican":           "Vatican City"
  },
  // Microestats massa petits per al polígon → punts
  points: [
    { key: "Andorra",       coords: [1.5,   42.5] },
    { key: "Liechtenstein", coords: [9.5,   47.2] },
    { key: "Malta",         coords: [14.4,  35.9] },
    { key: "Monaco",        coords: [7.4,   43.7] },
    { key: "San Marino",    coords: [12.4,  43.9] },
    { key: "Vatican City",  coords: [12.45, 41.9] }
  ]
};
