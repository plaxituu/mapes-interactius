(function () {
  'use strict';

  const FLAG_CDN       = 'https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/flags/4x3/';
  const ALL_CONTINENTS = ['europa','asia','africa','america-nord','america-central','america-sud','oceania'];
  const MAX_ROWS       = 6;
  const MIN_LEN        = 4;
  const MAX_LEN        = 11;

  let LANG         = 'ca';
  let word         = '';   // target normalized (uppercase, no accents, no spaces)
  let displayWord  = '';   // original Catalan name with accents
  let displayWordEs = '';  // Spanish name
  let wordIso      = '';
  let wordLocalFlag = null;
  let wordLen      = 0;
  let currentRow   = 0;
  let currentGuess = [];
  let gameOver     = false;
  let letterState  = {};   // letter → 'correct'|'present'|'absent'

  // ── Translations ─────────────────────────────────────────
  const T = {
    ca: {
      title:    'Wordle de Països',
      sub:      'Endevina el nom del país en 6 intents.',
      back:     '← Jocs',
      hint:     n => `Paraula de ${n} lletres`,
      loading:  'Carregant…',
      win:      tries => tries === 1 ? '🎉 Increïble! A la primera!' : `🎉 Enhorabona! En ${tries} intents.`,
      lose:     name => `😞 La resposta era: ${name}`,
      again:    'Jugar de nou',
      ci_label: 'El país era:',
    },
    es: {
      title:    'Wordle de Países',
      sub:      'Adivina el nombre del país en 6 intentos.',
      back:     '← Juegos',
      hint:     n => `Palabra de ${n} letras`,
      loading:  'Cargando…',
      win:      tries => tries === 1 ? '🎉 ¡Increíble! ¡A la primera!' : `🎉 ¡Enhorabuena! En ${tries} intentos.`,
      lose:     name => `😞 La respuesta era: ${name}`,
      again:    'Jugar de nuevo',
      ci_label: 'El país era:',
    }
  };
  const t = () => T[LANG];

  // ── DOM ───────────────────────────────────────────────────
  const $ = id => document.getElementById(id);

  // ── Language ─────────────────────────────────────────────
  $('lang-ca').addEventListener('click', () => setLang('ca'));
  $('lang-es').addEventListener('click', () => setLang('es'));

  function setLang(l) {
    LANG = l;
    $('lang-ca').classList.toggle('active', l === 'ca');
    $('lang-es').classList.toggle('active', l === 'es');
    document.documentElement.lang = l;
    applyI18n();
  }

  function applyI18n() {
    const s = t();
    $('w-title').textContent    = s.title;
    $('w-sub').textContent      = s.sub;
    $('back-link').textContent  = s.back;
    $('loading-msg').textContent = s.loading;
    if ($('play-again-btn')) $('play-again-btn').textContent = s.again;
    if (wordLen) $('w-hint').textContent = s.hint(wordLen);
    const ciLabel = $('ci-label');
    if (ciLabel) ciLabel.textContent = s.ci_label;
  }

  // ── Normalize: uppercase, remove accents ─────────────────
  function norm(str) {
    return str.toUpperCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^A-Z]/g, '');
  }

  // ── Load all continents, pick random country ──────────────
  function loadGame() {
    const pool = [];
    let i = 0;

    function next() {
      if (i >= ALL_CONTINENTS.length) {
        const filtered = pool.filter(c => {
          const n = norm(c.nameCa);
          return n.length >= MIN_LEN && n.length <= MAX_LEN;
        });
        const chosen = filtered[Math.floor(Math.random() * filtered.length)];
        word          = norm(chosen.nameCa);
        displayWord   = chosen.nameCa;
        displayWordEs = chosen.nameEs;
        wordIso       = chosen.iso;
        wordLocalFlag = chosen.localFlag || null;
        wordLen       = word.length;
        initGame();
        return;
      }
      const s = document.createElement('script');
      s.src = 'dades/' + ALL_CONTINENTS[i] + '.js';
      s.onload = () => {
        Object.entries(window.CONTINENT.data).forEach(([key, v]) => {
          pool.push({ key, nameCa: v[0], nameEs: v[1], iso: v[4], localFlag: v[5] || null });
        });
        i++;
        next();
      };
      s.onerror = () => { i++; next(); };
      document.head.appendChild(s);
    }

    next();
  }

  // ── Init game UI ──────────────────────────────────────────
  function initGame() {
    $('loading-msg').classList.add('hidden');
    $('game-area').classList.remove('hidden');
    $('w-hint').textContent = t().hint(wordLen);
    buildGrid();
    buildKeyboard();
  }

  // ── Build grid ────────────────────────────────────────────
  function buildGrid() {
    const grid = $('wordle-grid');
    grid.innerHTML = '';

    const vw = Math.min(window.innerWidth - 48, 500);
    const gap = 5;
    const cellSize = Math.min(58, Math.floor((vw - gap * (wordLen - 1)) / wordLen));
    const fontSize = Math.round(cellSize * 0.42);

    for (let r = 0; r < MAX_ROWS; r++) {
      const row = document.createElement('div');
      row.className = 'wordle-row';
      row.id = 'row-' + r;
      for (let c = 0; c < wordLen; c++) {
        const cell = document.createElement('div');
        cell.className = 'wordle-cell';
        cell.id = `cell-${r}-${c}`;
        cell.style.width    = cellSize + 'px';
        cell.style.height   = cellSize + 'px';
        cell.style.fontSize = fontSize + 'px';
        row.appendChild(cell);
      }
      grid.appendChild(row);
    }
  }

  // ── Build keyboard ────────────────────────────────────────
  function buildKeyboard() {
    const rows = [
      ['Q','W','E','R','T','Y','U','I','O','P'],
      ['A','S','D','F','G','H','J','K','L'],
      ['ENTER','Z','X','C','V','B','N','M','⌫']
    ];
    const kb = $('wordle-keyboard');
    kb.innerHTML = '';
    rows.forEach(keys => {
      const row = document.createElement('div');
      row.className = 'kb-row';
      keys.forEach(k => {
        const btn = document.createElement('button');
        btn.className   = 'kb-key';
        btn.textContent = k;
        btn.dataset.key = k;
        if (k === 'ENTER' || k === '⌫') btn.classList.add('kb-wide');
        btn.addEventListener('click', () => handleKey(k));
        row.appendChild(btn);
      });
      kb.appendChild(row);
    });
  }

  // ── Handle key input ──────────────────────────────────────
  function handleKey(key) {
    if (gameOver) return;

    if (key === '⌫' || key === 'Backspace') {
      if (currentGuess.length > 0) {
        currentGuess.pop();
        refreshRow();
      }
    } else if (key === 'ENTER' || key === 'Enter') {
      if (currentGuess.length < wordLen) {
        shakeRow();
      } else {
        submitGuess();
      }
    } else if (/^[A-Z]$/.test(key)) {
      if (currentGuess.length < wordLen) {
        currentGuess.push(key);
        refreshRow();
      }
    }
  }

  function refreshRow() {
    for (let c = 0; c < wordLen; c++) {
      const cell = $(`cell-${currentRow}-${c}`);
      const letter = currentGuess[c] || '';
      cell.textContent = letter;
      cell.classList.toggle('filled', !!letter);
    }
  }

  // ── Submit guess ──────────────────────────────────────────
  function submitGuess() {
    const guess  = currentGuess.join('');
    const result = computeResult(guess);
    revealRow(currentRow, guess, result, () => {
      updateLetterState(guess, result);
      updateKeyboard();

      const won = result.every(r => r === 'correct');
      if (won) {
        gameOver = true;
        const tries = currentRow + 1;
        showMsg(t().win(tries), 'msg-win');
        showCountryInfo();
        $('play-again-btn').classList.remove('hidden');
        $('play-again-btn').textContent = t().again;
      } else {
        currentRow++;
        currentGuess = [];
        if (currentRow >= MAX_ROWS) {
          gameOver = true;
          const name = LANG === 'ca' ? displayWord : displayWordEs;
          showMsg(t().lose(name.toUpperCase()), 'msg-lose');
          showCountryInfo();
          $('play-again-btn').classList.remove('hidden');
          $('play-again-btn').textContent = t().again;
        }
      }
    });
  }

  // ── Compute result (standard Wordle algorithm) ────────────
  function computeResult(guess) {
    const result  = Array(wordLen).fill('absent');
    const wArr    = word.split('');
    const gArr    = guess.split('');
    const usedW   = Array(wordLen).fill(false);
    const usedG   = Array(wordLen).fill(false);

    // Pass 1: correct
    for (let i = 0; i < wordLen; i++) {
      if (gArr[i] === wArr[i]) {
        result[i] = 'correct';
        usedW[i] = usedG[i] = true;
      }
    }
    // Pass 2: present
    for (let i = 0; i < wordLen; i++) {
      if (usedG[i]) continue;
      for (let j = 0; j < wordLen; j++) {
        if (!usedW[j] && gArr[i] === wArr[j]) {
          result[i] = 'present';
          usedW[j] = true;
          break;
        }
      }
    }
    return result;
  }

  // ── Reveal row with staggered animation ───────────────────
  function revealRow(rowIdx, guess, result, cb) {
    const STEP = 320;
    for (let c = 0; c < wordLen; c++) {
      setTimeout(() => {
        const cell = $(`cell-${rowIdx}-${c}`);
        cell.classList.add('reveal', result[c]);
      }, c * STEP);
    }
    setTimeout(cb, wordLen * STEP + 100);
  }

  // ── Update letter → state map ─────────────────────────────
  function updateLetterState(guess, result) {
    const priority = { correct: 3, present: 2, absent: 1 };
    for (let i = 0; i < wordLen; i++) {
      const l = guess[i];
      const s = result[i];
      if ((priority[s] || 0) > (priority[letterState[l]] || 0)) {
        letterState[l] = s;
      }
    }
  }

  function updateKeyboard() {
    document.querySelectorAll('.kb-key').forEach(btn => {
      const k = btn.dataset.key;
      if (k && k.length === 1 && letterState[k]) {
        btn.classList.remove('correct', 'present', 'absent');
        btn.classList.add(letterState[k]);
      }
    });
  }

  // ── Shake current row ─────────────────────────────────────
  function shakeRow() {
    const row = $('row-' + currentRow);
    row.classList.add('shake');
    setTimeout(() => row.classList.remove('shake'), 500);
  }

  // ── Message banner ────────────────────────────────────────
  function showMsg(text, cls) {
    const el = $('w-msg');
    el.textContent = text;
    el.className = 'w-msg ' + cls;
  }

  // ── Country info after game ends ──────────────────────────
  function showCountryInfo() {
    const flagSrc = wordLocalFlag
      ? wordLocalFlag.replace(/^\.\.\//, '')
      : FLAG_CDN + wordIso + '.svg';
    $('country-flag').src = flagSrc;
    $('country-flag').alt = displayWord;
    $('ci-label').textContent = t().ci_label;
    $('ci-name').textContent  = LANG === 'ca' ? displayWord : displayWordEs;
    $('country-info').classList.remove('hidden');
  }

  // ── Physical keyboard ─────────────────────────────────────
  document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key;
    if (k === 'Backspace') { e.preventDefault(); handleKey('⌫'); }
    else if (k === 'Enter') { e.preventDefault(); handleKey('ENTER'); }
    else if (/^[a-zA-Z]$/.test(k)) handleKey(k.toUpperCase());
  });

  // ── Boot ──────────────────────────────────────────────────
  applyI18n();
  loadGame();
})();
