# Mapes interactius del món

**Repositori GitHub:** [https://github.com/plaxituu/mapes-interactius](https://github.com/plaxituu/mapes-interactius)

---

## Descripció del projecte

**Mapes interactius del món** és una aplicació web educativa dissenyada per aprendre i repassar la geografia mundial de forma visual i interactiva. L'aplicació permet explorar els països del món continent per continent, consultar les seves capitals i banderes, i posar a prova els coneixements mitjançant un quiz interactiu.

El projecte és completament client-side (HTML + CSS + JavaScript pur), sense necessitat de cap servidor ni base de dades. Funciona directament des del navegador.

---

## Funcionalitats

### Mapes interactius per continent

Cada continent té el seu propi mapa SVG interactiu. En passar el ratolí o clicar sobre un país, es mostra:

- Nom del país
- Capital
- Bandera

| Continent | Països / entrades |
|---|---|
| Àsia | 44 països |
| Europa | 46 països |
| Àfrica | 54 països |
| Amèrica del Nord | 3 països + 3 territoris |
| Amèrica Central i Carib | 20 països |
| Amèrica del Sud | 12 països |
| Oceania | 14 països |

### Quiz interactiu de geografia

L'aplicació inclou un **quiz de geografia** configurable amb les opcions següents:

**Continent:**
- Qualsevol dels 7 continents per separat
- Mode global (15 preguntes aleatòries de tot el món)

**Tipus de pregunta:**
- Capitals (donada la bandera o el nom del país, endevina la capital)
- Banderes (reconèixer la bandera del país)
- Mescla (capitals + banderes combinades)

**Dificultat:**
- Fàcil: 4 opcions de resposta (tipus test)
- Difícil: cal escriure la resposta lliurement (amb validació flexible que admet accents i variants)

**Idioma:**
- L'aplicació és bilingüe: català i castellà

---

## Tecnologies utilitzades

- **HTML5** — estructura i contingut
- **CSS3** — disseny i responsivitat
- **JavaScript vanilla** — lògica dels mapes i del quiz
- **D3.js** — projecció i renderització dels mapes SVG
- **GeoJSON / TopoJSON** — dades geogràfiques dels països
- Banderes servides via CDN

---

## Estructura del projecte

```
mapes-interactius/
├── index.html                  # Pàgina principal amb els continents
├── quiz.html                   # Quiz interactiu
├── continents/
│   ├── asia.html
│   ├── europa.html
│   ├── africa.html
│   ├── america-nord.html
│   ├── america-central.html
│   ├── america-sud.html
│   └── oceania.html
└── css/
    ├── estils.css
    └── quiz.css
```

---

## Evolució del projecte

El projecte s'ha desenvolupat de forma incremental:

1. **Fase 1** — Estructura modular inicial amb el mapa d'Àsia
2. **Fase 2** — Mapes d'Oceania, Àfrica, Amèrica del Sud, Amèrica del Nord i Amèrica Central i Carib
3. **Fase 3** — Mapa d'Europa (46 països)
4. **Fase 4** — Quiz interactiu: mode fàcil (4 opcions), mode difícil (text lliure), mode global (tot el món)

---

## Com executar el projecte

Com que és una aplicació estàtica, n'hi ha prou amb obrir `index.html` directament al navegador, o bé servir-la amb qualsevol servidor HTTP local:

```bash
# Opció 1: Python
python -m http.server 8080

# Opció 2: Node.js (npx)
npx serve .
```

Després, obrir [http://localhost:8080](http://localhost:8080) al navegador.

---

*Projecte desenvolupat amb HTML, CSS i JavaScript · 2025-2026*
