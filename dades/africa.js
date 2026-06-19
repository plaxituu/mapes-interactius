window.CONTINENT = {
  i18n: {
    ca: {
      title:   "Mapa interactiu d'Àfrica",
      sub:     "Passa el ratolí per sobre de cada país per veure'n el nom, la capital i la bandera.",
      reset:   "Veure tot",
      loading: "Carregant el mapa…",
      foot:    "Mapa per a estudi · països, capitals i banderes d'Àfrica",
      search:  "Cerca un país…",
      cap:     "Capital"
    },
    es: {
      title:   "Mapa interactivo de África",
      sub:     "Pasa el ratón por encima de cada país para ver su nombre, capital y bandera.",
      reset:   "Ver todo",
      loading: "Cargando el mapa…",
      foot:    "Mapa de estudio · países, capitales y banderas de África",
      search:  "Busca un país…",
      cap:     "Capital"
    }
  },
  projection: {
    // Marge dret extra (880px en lloc de 980px) perquè Seychelles i Maurici
    // apareguin al costat dret sense estirar el zoom del continent
    extent: [[20, 20], [880, 680]]
  },
  // clau : [ nom CA, nom ES, capital CA, capital ES, ISO2 ]
  data: {
    "Algeria":                  ["Algèria",                    "Argelia",                      "Alger",          "Argel",          "dz"],
    "Angola":                   ["Angola",                     "Angola",                       "Luanda",         "Luanda",         "ao"],
    "Benin":                    ["Benín",                      "Benín",                        "Porto-Novo",     "Porto Novo",     "bj"],
    "Botswana":                 ["Botswana",                   "Botsuana",                     "Gaborone",       "Gaborona",       "bw"],
    "Burkina Faso":             ["Burkina Faso",               "Burkina Faso",                 "Ouagadougou",    "Uagadugú",       "bf"],
    "Burundi":                  ["Burundi",                    "Burundi",                      "Gitega",         "Gitega",         "bi"],
    "Cabo Verde":               ["Cabo Verde",                 "Cabo Verde",                   "Praia",          "Praia",          "cv"],
    "Cameroon":                 ["Camerun",                    "Camerún",                      "Yaoundé",        "Yaundé",         "cm"],
    "Central African Republic": ["República Centreafricana",   "República Centroafricana",     "Bangui",         "Bangui",         "cf"],
    "Chad":                     ["Txad",                       "Chad",                         "N'Djamena",      "Yamena",         "td"],
    "Comoros":                  ["Comoros",                    "Comoras",                      "Moroni",         "Moroni",         "km"],
    "DR Congo":                 ["República Dem. del Congo",   "República Dem. del Congo",     "Kinshasa",       "Kinshasa",       "cd"],
    "Republic of Congo":        ["República del Congo",        "República del Congo",          "Brazzaville",    "Brazaville",     "cg"],
    "Côte d'Ivoire":            ["Costa d'Ivori",              "Costa de Marfil",              "Yamoussoukro",   "Yamusukro",      "ci"],
    "Djibouti":                 ["Djibouti",                   "Yibuti",                       "Djibouti",       "Yibuti",         "dj"],
    "Egypt":                    ["Egipte",                     "Egipto",                       "El Caire",       "El Cairo",       "eg"],
    "Equatorial Guinea":        ["Guinea Equatorial",          "Guinea Ecuatorial",            "Malabo",         "Malabo",         "gq"],
    "Eritrea":                  ["Eritrea",                    "Eritrea",                      "Asmara",         "Asmara",         "er"],
    "Eswatini":                 ["Eswatini",                   "Suazilandia",                  "Mbabane",        "Mbabane",        "sz"],
    "Ethiopia":                 ["Etiòpia",                    "Etiopía",                      "Addis Abeba",    "Adís Abeba",     "et"],
    "Gabon":                    ["Gabon",                      "Gabón",                        "Libreville",     "Libreville",     "ga"],
    "Gambia":                   ["Gàmbia",                     "Gambia",                       "Banjul",         "Banjul",         "gm"],
    "Ghana":                    ["Ghana",                      "Ghana",                        "Accra",          "Acra",           "gh"],
    "Guinea":                   ["Guinea",                     "Guinea",                       "Conakry",        "Conakri",        "gn"],
    "Guinea-Bissau":            ["Guinea Bissau",              "Guinea-Bisáu",                 "Bissau",         "Bisáu",          "gw"],
    "Kenya":                    ["Kenya",                      "Kenia",                        "Nairobi",        "Nairobi",        "ke"],
    "Lesotho":                  ["Lesotho",                    "Lesoto",                       "Maseru",         "Maseru",         "ls"],
    "Liberia":                  ["Libèria",                    "Liberia",                      "Monrovia",       "Monrovia",       "lr"],
    "Libya":                    ["Líbia",                      "Libia",                        "Trípoli",        "Trípoli",        "ly"],
    "Madagascar":               ["Madagascar",                 "Madagascar",                   "Antananarivo",   "Antananarivo",   "mg"],
    "Malawi":                   ["Malawi",                     "Malaui",                       "Lilongwe",       "Lilongüe",       "mw"],
    "Mali":                     ["Mali",                       "Malí",                         "Bamako",         "Bamako",         "ml"],
    "Mauritania":               ["Mauritània",                 "Mauritania",                   "Nuakchott",      "Nuakchot",       "mr"],
    "Mauritius":                ["Maurici",                    "Mauricio",                     "Port Louis",     "Port Louis",     "mu"],
    "Morocco":                  ["Marroc",                     "Marruecos",                    "Rabat",          "Rabat",          "ma"],
    "Mozambique":               ["Moçambic",                   "Mozambique",                   "Maputo",         "Maputo",         "mz"],
    "Namibia":                  ["Namíbia",                    "Namibia",                      "Windhoek",       "Windhoek",       "na"],
    "Niger":                    ["Níger",                      "Níger",                        "Niamey",         "Niamey",         "ne"],
    "Nigeria":                  ["Nigèria",                    "Nigeria",                      "Abuja",          "Abuya",          "ng"],
    "Rwanda":                   ["Ruanda",                     "Ruanda",                       "Kigali",         "Kigali",         "rw"],
    "São Tomé and Príncipe":    ["São Tomé i Príncep",         "Santo Tomé y Príncipe",        "São Tomé",       "Santo Tomé",     "st"],
    "Senegal":                  ["Senegal",                    "Senegal",                      "Dakar",          "Dakar",          "sn"],
    "Seychelles":               ["Seychelles",                 "Seychelles",                   "Victoria",       "Victoria",       "sc"],
    "Sierra Leone":             ["Sierra Leone",               "Sierra Leona",                 "Freetown",       "Freetown",       "sl"],
    "Somalia":                  ["Somàlia",                    "Somalia",                      "Mogadiscio",     "Mogadiscio",     "so"],
    "South Africa":             ["Sud-àfrica",                 "Sudáfrica",                    "Pretòria",       "Pretoria",       "za"],
    "South Sudan":              ["Sudan del Sud",              "Sudán del Sur",                "Juba",           "Yuba",           "ss"],
    "Sudan":                    ["Sudan",                      "Sudán",                        "Khartum",        "Jartum",         "sd"],
    "Tanzania":                 ["Tanzània",                   "Tanzania",                     "Dodoma",         "Dodoma",         "tz"],
    "Togo":                     ["Togo",                       "Togo",                         "Lomé",           "Lomé",           "tg"],
    "Tunisia":                  ["Tunísia",                    "Túnez",                        "Tunis",          "Túnez",          "tn"],
    "Uganda":                   ["Uganda",                     "Uganda",                       "Kampala",        "Kampala",        "ug"],
    "Zambia":                   ["Zàmbia",                     "Zambia",                       "Lusaka",         "Lusaka",         "zm"],
    "Zimbabwe":                 ["Zimbabwe",                   "Zimbabue",                     "Harare",         "Harare",         "zw"]
  },
  alias: {
    // Noms del world-atlas (Natural Earth) → clau del data
    "Cape Verde":                             "Cabo Verde",
    "Ivory Coast":                            "Côte d'Ivoire",
    "Cote d'Ivoire":                          "Côte d'Ivoire",
    "Dem. Rep. Congo":                        "DR Congo",
    "Democratic Republic of the Congo":       "DR Congo",
    "Congo, Dem. Rep.":                       "DR Congo",
    "Congo, the Democratic Republic of the":  "DR Congo",
    "Congo":                                  "Republic of Congo",
    "Congo, Rep.":                            "Republic of Congo",
    "Republic of the Congo":                  "Republic of Congo",
    "Swaziland":                              "Eswatini",
    "Central African Rep.":                   "Central African Republic",
    "Eq. Guinea":                             "Equatorial Guinea",
    "S. Sudan":                               "South Sudan",
    "Sao Tome and Principe":                  "São Tomé and Príncipe",
    "United Rep. of Tanzania":                "Tanzania",
    "The Gambia":                             "Gambia",
    // Territoris no reconeguts → ignorar
    "W. Sahara":                              null,
    "Somaliland":                             null
  },
  // Petits estats insulars representats com a punts [lon, lat]
  points: [
    { key: "Comoros",              coords: [43.4,   -11.7] },
    { key: "Mauritius",            coords: [57.6,   -20.2] },
    { key: "Seychelles",           coords: [55.5,    -4.7] },
    { key: "São Tomé and Príncipe",coords: [6.7,      0.2] }
  ]
};
