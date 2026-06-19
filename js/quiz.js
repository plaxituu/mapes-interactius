(function () {
  'use strict';

  const FLAG_CDN = 'https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/flags/4x3/';

  // ── State ────────────────────────────────────────────────
  let LANG              = 'ca';
  let selectedContinent = null;
  let selectedType      = 'capital';
  let selectedDiff      = 'easy';   // 'easy' | 'hard'
  let loadedContinent   = null;
  let countries         = [];
  let questions         = [];
  let currentIdx        = 0;
  let score             = 0;
  let errors            = [];
  let answered          = false;

  // ── Translations ─────────────────────────────────────────
  const T = {
    ca: {
      title:    'Quiz de Geografia',
      sub:      'Posa a prova els teus coneixements sobre països, capitals i banderes.',
      lbl_cont: 'Tria el continent',
      lbl_type: 'Tipus de pregunta',
      lbl_diff: 'Dificultat',
      start:    'Comença!',
      loading:  'Carregant…',
      back:     '← Inici',
      t_cap:    '🏛️ Capitals',
      t_flag:   '🚩 Banderes',
      t_mix:    '🎲 Mescla',
      d_easy:   '🟢 Fàcil — 4 opcions',
      d_hard:   '🔴 Difícil — Escriu la resposta',
      q_cap:    'Quina és la capital de…',
      q_flag:   'De quin país és aquesta bandera?',
      next:     'Següent →',
      finish:   'Veure resultats',
      counter:  (i, n) => `${i} / ${n}`,
      correct:  n => `${n} correcte${n !== 1 ? 's' : ''}`,
      hard_ph:  'Escriu la resposta…',
      hard_chk: 'Comprova',
      hard_ok:  '✅ Correcte!',
      hard_ko:  ans => `❌ Incorrecte · Resposta: ${ans}`,
      res_tit:  'Resultat final',
      replay:   'Torna a jugar',
      change:   'Canvia continent',
      err_tit:  'Respostes incorrectes:',
      no_err:   '✅ Cap error! Perfecte!',
      pct: p => {
        if (p === 100) return '100% · 🏆 Perfecte!';
        if (p >= 90)  return `${p}% · 🎉 Excel·lent!`;
        if (p >= 75)  return `${p}% · 👍 Molt bé!`;
        if (p >= 60)  return `${p}% · 📖 Bé, però pots millorar!`;
        return `${p}% · 📚 Segueix estudiant!`;
      }
    },
    es: {
      title:    'Quiz de Geografía',
      sub:      'Pon a prueba tus conocimientos sobre países, capitales y banderas.',
      lbl_cont: 'Elige el continente',
      lbl_type: 'Tipo de pregunta',
      lbl_diff: 'Dificultad',
      start:    '¡Empezar!',
      loading:  'Cargando…',
      back:     '← Inicio',
      t_cap:    '🏛️ Capitales',
      t_flag:   '🚩 Banderas',
      t_mix:    '🎲 Mezcla',
      d_easy:   '🟢 Fácil — 4 opciones',
      d_hard:   '🔴 Difícil — Escribe la respuesta',
      q_cap:    '¿Cuál es la capital de…',
      q_flag:   '¿De qué país es esta bandera?',
      next:     'Siguiente →',
      finish:   'Ver resultados',
      counter:  (i, n) => `${i} / ${n}`,
      correct:  n => `${n} correcta${n !== 1 ? 's' : ''}`,
      hard_ph:  'Escribe la respuesta…',
      hard_chk: 'Comprobar',
      hard_ok:  '✅ ¡Correcto!',
      hard_ko:  ans => `❌ Incorrecto · Respuesta: ${ans}`,
      res_tit:  'Resultado final',
      replay:   'Volver a jugar',
      change:   'Cambiar continente',
      err_tit:  'Respuestas incorrectas:',
      no_err:   '✅ ¡Sin errores! ¡Perfecto!',
      pct: p => {
        if (p === 100) return '100% · 🏆 ¡Perfecto!';
        if (p >= 90)  return `${p}% · 🎉 ¡Excelente!`;
        if (p >= 75)  return `${p}% · 👍 ¡Muy bien!`;
        if (p >= 60)  return `${p}% · 📖 ¡Bien, pero puedes mejorar!`;
        return `${p}% · 📚 ¡Sigue estudiando!`;
      }
    }
  };
  function t() { return T[LANG]; }

  // ── DOM shortcut ─────────────────────────────────────────
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
    showScreen('setup');
  }

  function applyI18n() {
    const s = t();
    $('quiz-title').textContent    = s.title;
    $('quiz-sub').textContent      = s.sub;
    $('lbl-continent').textContent = s.lbl_cont;
    $('lbl-type').textContent      = s.lbl_type;
    $('lbl-diff').textContent      = s.lbl_diff;
    $('back-link').textContent     = s.back;
    $('type-capital').textContent  = s.t_cap;
    $('type-flag').textContent     = s.t_flag;
    $('type-mix').textContent      = s.t_mix;
    $('diff-easy').textContent     = s.d_easy;
    $('diff-hard').textContent     = s.d_hard;
    $('start-btn').textContent     = s.start;
    $('results-title').textContent = s.res_tit;
    $('replay-btn').textContent    = s.replay;
    $('change-btn').textContent    = s.change;
  }

  // ── Setup: continent ──────────────────────────────────────
  document.querySelectorAll('.continent-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.continent-btn').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      selectedContinent = this.dataset.c;
      $('start-btn').disabled = false;
    });
  });

  // ── Setup: type ───────────────────────────────────────────
  document.querySelectorAll('.type-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      selectedType = this.dataset.t;
    });
  });

  // ── Setup: difficulty ─────────────────────────────────────
  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      selectedDiff = this.dataset.d;
    });
  });

  $('start-btn').addEventListener('click', startQuiz);

  // ── Load continent data ───────────────────────────────────
  function loadContinent(name, cb) {
    if (loadedContinent === name && window.CONTINENT) { cb(); return; }
    const old = document.querySelector('script[data-quiz-c]');
    if (old) old.remove();
    const s = document.createElement('script');
    s.src = 'dades/' + name + '.js';
    s.dataset.quizC = name;
    s.onload  = () => { loadedContinent = name; cb(); };
    s.onerror = () => alert('Error carregant les dades del continent.');
    document.head.appendChild(s);
  }

  // ── Start quiz ────────────────────────────────────────────
  function startQuiz() {
    const btn = $('start-btn');
    btn.textContent = t().loading;
    btn.disabled = true;

    loadContinent(selectedContinent, function () {
      btn.textContent = t().start;
      btn.disabled = false;

      countries = Object.entries(window.CONTINENT.data).map(([key, v]) => ({
        key,
        nameCa:    v[0],
        nameEs:    v[1],
        capitalCa: v[2],
        capitalEs: v[3],
        iso:       v[4],
        localFlag: v[5] || null
      }));

      score = 0; errors = []; currentIdx = 0; answered = false;
      buildQuestions();
      showScreen('question');
      renderQuestion();
    });
  }

  // ── Build question list ───────────────────────────────────
  function buildQuestions() {
    questions = shuffle([...countries]).map(c => ({
      type: selectedType === 'mix'
        ? (Math.random() < 0.5 ? 'capital' : 'flag')
        : selectedType,
      country: c
    }));
  }

  // ── Render current question ───────────────────────────────
  function renderQuestion() {
    const q     = questions[currentIdx];
    const c     = q.country;
    const total = questions.length;

    $('progress-fill').style.width = Math.round((currentIdx / total) * 100) + '%';
    $('q-counter').textContent     = t().counter(currentIdx + 1, total);
    $('q-score').textContent       = t().correct(score);
    $('q-label').textContent       = q.type === 'capital' ? t().q_cap : t().q_flag;

    // Subject (country name + small flag, or big flag)
    const subj = $('q-subject');
    subj.innerHTML = '';
    if (q.type === 'capital') {
      const name = document.createElement('div');
      name.className   = 'q-country-name';
      name.textContent = nameOf(c);
      const img = document.createElement('img');
      img.className = 'q-flag-small';
      img.src = flagUrl(c);
      img.alt = nameOf(c);
      subj.appendChild(name);
      subj.appendChild(img);
    } else {
      const img = document.createElement('img');
      img.className = 'q-flag-big';
      img.src = flagUrl(c);
      img.alt = '?';
      subj.appendChild(img);
    }

    $('next-btn').classList.add('hidden');
    answered = false;

    if (selectedDiff === 'easy') {
      // ── Easy: 4 option buttons ────────────────────────────
      $('options-grid').classList.remove('hidden');
      $('hard-area').classList.add('hidden');

      const grid = $('options-grid');
      grid.innerHTML = '';
      getOptions(q).forEach(opt => {
        const btn = document.createElement('button');
        btn.className   = 'option-btn';
        btn.textContent = q.type === 'capital' ? capitalOf(opt) : nameOf(opt);
        btn.dataset.key = opt.key;
        btn.addEventListener('click', () => selectOption(btn, q, opt));
        grid.appendChild(btn);
      });
    } else {
      // ── Hard: text input ──────────────────────────────────
      $('options-grid').classList.add('hidden');
      $('hard-area').classList.remove('hidden');
      const inp = $('hard-input');
      inp.value       = '';
      inp.disabled    = false;
      inp.placeholder = t().hard_ph;
      $('hard-submit').disabled  = false;
      $('hard-submit').textContent = t().hard_chk;
      $('hard-feedback').className   = 'hard-feedback hidden';
      $('hard-feedback').textContent = '';
      setTimeout(() => inp.focus(), 50);
    }
  }

  // ── Easy: select an option ────────────────────────────────
  function selectOption(btn, q, chosen) {
    if (answered) return;
    answered = true;
    const correct   = q.country;
    const isCorrect = chosen.key === correct.key;
    if (isCorrect) {
      score++;
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
      errors.push(correct);
      document.querySelectorAll('.option-btn').forEach(b => {
        if (b.dataset.key === correct.key) b.classList.add('correct');
      });
    }
    document.querySelectorAll('.option-btn').forEach(b => { b.disabled = true; });
    $('q-score').textContent = t().correct(score);
    showNextBtn();
  }

  // ── Hard: check typed answer ──────────────────────────────
  function checkHardAnswer() {
    if (answered) return;
    const raw = $('hard-input').value.trim();
    if (!raw) return;

    answered = true;
    $('hard-input').disabled  = true;
    $('hard-submit').disabled = true;

    const q  = questions[currentIdx];
    const c  = q.country;
    const ok = isAnswerCorrect(raw, c, q.type);
    const fb = $('hard-feedback');

    if (ok) {
      score++;
      fb.textContent = t().hard_ok;
      fb.className   = 'hard-feedback correct';
    } else {
      errors.push(c);
      // Show the accepted forms (CA / ES) only if they differ
      const ca  = q.type === 'capital' ? c.capitalCa : c.nameCa;
      const es  = q.type === 'capital' ? c.capitalEs : c.nameEs;
      const ans = normalize(ca) === normalize(es) ? ca : `${ca} / ${es}`;
      fb.textContent = t().hard_ko(ans);
      fb.className   = 'hard-feedback wrong';
    }

    $('q-score').textContent = t().correct(score);
    showNextBtn();
  }

  function showNextBtn() {
    const nb = $('next-btn');
    nb.textContent = (currentIdx < questions.length - 1) ? t().next : t().finish;
    nb.classList.remove('hidden');
  }

  $('hard-submit').addEventListener('click', checkHardAnswer);
  $('hard-input').addEventListener('keydown', e => { if (e.key === 'Enter') checkHardAnswer(); });

  $('next-btn').addEventListener('click', function () {
    currentIdx++;
    if (currentIdx < questions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  });

  // ── Results ───────────────────────────────────────────────
  function showResults() {
    showScreen('results');
    const total = questions.length;
    const pct   = Math.round((score / total) * 100);
    $('score-num').textContent = score;
    $('total-num').textContent = total;
    $('score-msg').textContent = t().pct(pct);

    const errSec = $('errors-section');
    errSec.innerHTML = '';
    const seen = new Set();
    const uniq = errors.filter(c => !seen.has(c.key) && seen.add(c.key));

    if (uniq.length === 0) {
      const p = document.createElement('p');
      p.className   = 'no-errors';
      p.textContent = t().no_err;
      errSec.appendChild(p);
    } else {
      const title = document.createElement('p');
      title.className   = 'errors-title';
      title.textContent = t().err_tit;
      errSec.appendChild(title);
      uniq.forEach(c => {
        const row  = document.createElement('div');
        row.className = 'error-row';
        const img  = document.createElement('img');
        img.src       = flagUrl(c);
        img.className = 'error-flag';
        img.alt       = nameOf(c);
        const span = document.createElement('span');
        span.textContent = nameOf(c) + ' · ' + capitalOf(c);
        row.append(img, span);
        errSec.appendChild(row);
      });
    }
  }

  $('replay-btn').addEventListener('click', function () {
    score = 0; errors = []; currentIdx = 0; answered = false;
    buildQuestions();
    showScreen('question');
    renderQuestion();
  });

  $('change-btn').addEventListener('click', () => showScreen('setup'));

  // ── Normalise: lowercase, strip accents + punctuation, hyphens→space ──
  function normalize(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')  // remove diacritics (é→e, ü→u, etc.)
      .replace(/-/g, ' ')               // hyphens to spaces (Port-au-Prince → port au prince)
      .replace(/[^a-z0-9\s]/g, '')      // drop remaining punctuation (apostrophes, dots…)
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Accept CA or ES name, with or without accents/punctuation
  function isAnswerCorrect(input, country, type) {
    const ni = normalize(input);
    if (type === 'capital') {
      return ni === normalize(country.capitalCa) || ni === normalize(country.capitalEs);
    }
    return ni === normalize(country.nameCa) || ni === normalize(country.nameEs);
  }

  function nameOf(c)    { return LANG === 'ca' ? c.nameCa    : c.nameEs;    }
  function capitalOf(c) { return LANG === 'ca' ? c.capitalCa : c.capitalEs; }

  function flagUrl(c) {
    if (c.localFlag) return c.localFlag.replace(/^\.\.\//, '');
    return FLAG_CDN + c.iso + '.svg';
  }

  function getOptions(q) {
    const correct = q.country;
    const pool    = countries.filter(c => c.key !== correct.key);
    return shuffle([correct, ...shuffle(pool).slice(0, 3)]);
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(name) {
    $('screen-setup').classList.add('hidden');
    $('screen-question').classList.add('hidden');
    $('screen-results').classList.add('hidden');
    $('screen-' + name).classList.remove('hidden');
  }

  // ── Init ─────────────────────────────────────────────────
  applyI18n();
})();
