# Pla de projecte — Mapes interactius per aprendre països, capitals i banderes

> Document de partida per construir la web amb Claude Code.
> Donar aquest fitxer a Claude Code al començar el projecte.

---

## 1. Què volem construir

Una web interactiva i educativa per estudiar els països del món: mapes per continent on, en passar el ratolí per sobre d'un país, s'il·lumina i mostra el nom, la capital i la bandera; en clicar, la bandera es veu gran. Inclou cerca, idioma català/castellà i, més endavant, un mode quiz amb progrés.

**Objectiu final:** web pública, publicada en un domini, utilitzable per joves com a eina d'aprenentatge.

---

## 2. Principi de treball (important)

Construir **una peça a la vegada, sempre amb alguna cosa que funcioni i estigui publicada** abans de passar a la següent. Res de voler-ho tot de cop. Aquest ordre evita la paràlisi quan el projecte creix.

---

## 3. Material que ja tenim (reaprofitable)

- Mapa d'Àsia complet: hover amb targeta (nom + capital + bandera), clic per veure la bandera gran, cerca i selector CAT/CAST. Fitxer `mapa-asia-interactiu.html`.
- Mapa d'Oceania amb zoom, siluetes grans interactives + illes petites com a punts.
- Estructura de dades per país: `[nom CA, nom ES, capital CA, capital ES, codi ISO2]`.
- Fonts externes que funcionen: mapa mundial (world-atlas via jsDelivr) i banderes (flag-icons via jsDelivr).

Tot això es pot reutilitzar com a base; no es comença de zero.

---

## 4. Configuració de l'entorn (els dos ordinadors)

Cal instal·lar el mateix a PC (Windows) i al portàtil:

1. **Node.js** (entorn per executar el projecte i les eines).
2. **Git** (control de versions).
3. **Claude Code** (eina principal de desenvolupament).
4. Compte de **GitHub** (repositori al núvol, gratuït).

### Per treballar des de dos dispositius: Git + GitHub

El projecte viu en un repositori a GitHub. Cada ordinador en té una còpia local.

**Regla d'or:** `pull` en COMENÇAR a treballar, `push` en ACABAR.

Flux típic:
1. Comences a treballar → `git pull` (baixes l'última versió).
2. Treballes amb Claude Code.
3. En acabar → `git commit` + `git push` (puges els canvis).
4. A l'altre ordinador, abans de res → `git pull`.

> No fer servir Dropbox/Google Drive per sincronitzar la carpeta de codi: corrompen fitxers a mig treball. Git està fet per a això i Claude Code t'ajuda amb tots els comandaments.

---

## 5. Arquitectura tècnica

**Tipus de web:** estàtica (HTML + CSS + JavaScript). Ideal per a mapes interactius, ràpida i fàcil de publicar gratis. (Si més endavant cal, es pot migrar a un framework lleuger.)

**Llibreries clau:**
- `d3` + `topojson` — dibuixar els mapes a partir de fronteres reals.
- `world-atlas` — dades de fronteres dels països.
- `flag-icons` — banderes en SVG.

**Estructura de carpetes proposada:**

```
mapes-interactius/
├── index.html              # pàgina d'inici (tria de continent)
├── css/
│   └── estils.css          # estils compartits
├── js/
│   ├── mapa.js             # lògica del mapa (reutilitzable per continent)
│   ├── idioma.js           # gestió CAT/CAST
│   └── quiz.js             # mode quiz (fase posterior)
├── dades/
│   ├── asia.js             # dades dels països d'Àsia
│   ├── oceania.js          # dades d'Oceania
│   ├── europa.js           # ...
│   └── ...
├── continents/
│   ├── asia.html
│   ├── oceania.html
│   └── ...
└── README.md
```

> Separar **dades** (països, capitals, banderes) de la **lògica** (com es dibuixa i es comporta el mapa). Així afegir un continent nou és només crear un fitxer de dades, sense tocar la lògica.

---

## 6. Fases del projecte

### Fase 1 — Base sòlida i publicada
- [ ] Configurar entorn als dos ordinadors (Node, Git, Claude Code, GitHub).
- [ ] Crear el repositori i l'estructura de carpetes.
- [ ] Migrar el mapa d'Àsia que ja tenim a aquesta estructura (dades separades de la lògica).
- [ ] Publicar-lo en línia (Netlify / Vercel / GitHub Pages).
- **Fita:** Àsia funcionant en un domini públic.

### Fase 2 — La resta de continents
- [ ] Afegir Oceania (ja gairebé fet), després Europa, Àfrica, Amèrica del Nord, Amèrica del Sud.
- [ ] Pàgina d'inici per triar continent.
- [ ] Resoldre els casos especials (illes minúscules, estats associats com Niue / Illes Cook).
- **Fita:** tots els continents navegables des d'una mateixa web.

### Fase 3 — Mode quiz
- [ ] Mostrar bandera o capital i endevinar el país clicant al mapa.
- [ ] Puntuació, ratxa, resultats.
- [ ] Variants: "endevina la capital", "endevina la bandera", per regió.
- **Fita:** es pot estudiar de manera activa, no només consultar.

### Fase 4 — Progrés i millores
- [ ] Guardar el progrés (localment al navegador per començar).
- [ ] Nivells o reptes.
- [ ] Polir disseny, accessibilitat i mòbil.
- **Fita:** eina d'aprenentatge completa.

---

## 7. Publicació

Opcions gratuïtes que es connecten directament a GitHub: **Netlify**, **Vercel** o **GitHub Pages**. En fer `push`, la web s'actualitza sola. Resultat: treballes des de qualsevol ordinador → push → web actualitzada automàticament.

Si en algun moment es vol domini propi o integrar-ho amb Setdedisseny, és possible.

---

## 8. Notes i decisions pendents

- **15è país d'Oceania:** confirmar quin és (probablement Niue o les Illes Cook, estats en lliure associació amb Nova Zelanda).
- **Banderes/mapa offline:** ara es carreguen de jsDelivr (cal connexió). Si es vol independència total, descarregar els fitxers al projecte.
- **Nonms en dos idiomes:** ja tenim el patró de dades bilingüe; mantenir-lo per a tots els continents.

---

## 9. Primer encàrrec per a Claude Code

Quan tinguis l'entorn llest, pots començar amb una instrucció com aquesta:

> "Tinc un fitxer `mapa-asia-interactiu.html` amb un mapa interactiu d'Àsia funcionant. Vull muntar un projecte web estàtic amb l'estructura de carpetes del pla adjunt, separant les dades dels països de la lògica del mapa, començant per migrar Àsia. Després el publicarem a Netlify. Comencem per la Fase 1."
