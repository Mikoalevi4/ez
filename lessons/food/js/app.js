/* ══════════════════════════════════════
   ENGLISHzONE — app.js
   Урок: Їжа та кулінарія
   ══════════════════════════════════════ */

// ── СТАН ──
let learnedWords  = new Set();
let quizScore     = 0;
let quizTotal     = 0;
let quizIndex     = 0;
let quizAnswered  = false;
let quizQuestions = [];

// ── НАВІГАЦІЯ ──
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.header-nav button').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  const order = ['home', 'vocab', 'quiz', 'phrases', 'recipes', 'progress'];
  const idx   = order.indexOf(id);
  const btns  = document.querySelectorAll('.header-nav button');
  if (btns[idx]) btns[idx].classList.add('active');

  if (id === 'vocab')    renderVocab('all');
  if (id === 'quiz')     startQuiz();
  if (id === 'phrases')  renderPhrases();
  if (id === 'recipes')  renderRecipes();
  if (id === 'progress') renderProgress();
}

function showVocabTopic(topic) {
  showSection('vocab');
  const btn = document.querySelector(`[onclick="filterVocab('${topic}', this)"]`);
  filterVocab(topic, btn);
}

// ── СЛОВНИК ──
function renderVocab(filter) {
  const grid  = document.getElementById('vocab-grid');
  const words = filter === 'all' ? vocabulary : vocabulary.filter(w => w.tag === filter);
  grid.innerHTML = words.map(w => `
    <div class="word-card ${learnedWords.has(w.en) ? 'learned' : ''}" onclick="flipCard(this, '${w.en}')">
      <div class="word-en">${w.en}</div>
      <div class="word-transcription">${w.tr}</div>
      <div class="word-ua">🇺🇦 ${w.ua}</div>
      <div class="word-example">"${w.example}"</div>
      <span class="word-tag">${w.tag.replace('-', ' ')}</span>
      <div class="flip-hint">натисни, щоб відкрити ↓</div>
    </div>
  `).join('');
}

function flipCard(el, word) {
  el.classList.toggle('flipped');
  if (el.classList.contains('flipped') && !learnedWords.has(word)) {
    learnedWords.add(word);
    el.classList.add('learned');
  }
}

function filterVocab(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderVocab(filter);

  const labels = {
    all:               'Весь словник',
    vegetables:        'Овочі 🥦',
    fruits:            'Фрукти 🍓',
    'cooking-methods': 'Методи готування 🔥',
    utensils:          'Посуд та інструменти 🍴',
    taste:             'Смак та текстура 👅',
    meals:             'Страви та прийоми їжі 🍽️',
  };
  document.getElementById('vocab-title').textContent = labels[filter] || 'Словник';
}

// ── КВІЗ ──
function buildQuestions() {
  const pool = [...vocabulary].sort(() => Math.random() - 0.5).slice(0, 12);
  return pool.map((w, i) => {
    const type = i % 4;
    if (type === 0) return { kind: 'mc-en-ua',   word: w };
    if (type === 1) return { kind: 'mc-ua-en',   word: w };
    if (type === 2) return { kind: 'type-en',    word: w };
    return              { kind: 'emoji-hint', word: w };
  });
}

function startQuiz() {
  quizQuestions = buildQuestions();
  quizIndex     = 0;
  quizScore     = 0;
  quizTotal     = quizQuestions.length;
  renderQuestion();
}

function renderQuestion() {
  const prog = document.getElementById('quiz-progress');
  prog.style.width = (quizIndex / quizTotal * 100) + '%';

  if (quizIndex >= quizTotal) { showScore(); return; }

  const q       = quizQuestions[quizIndex];
  const content = document.getElementById('quiz-content');
  quizAnswered  = false;

  if (q.kind === 'mc-en-ua' || q.kind === 'mc-ua-en') renderMC(q, content);
  else if (q.kind === 'type-en')  renderTypeIn(q, content);
  else                            renderEmojiHint(q, content);
}

function renderMC(q, content) {
  const isEnUa  = q.kind === 'mc-en-ua';
  const correct = isEnUa ? q.word.ua : q.word.en;
  const pool    = vocabulary.filter(w => w.en !== q.word.en);
  const wrongs  = pool.sort(() => Math.random() - 0.5).slice(0, 3).map(w => isEnUa ? w.ua : w.en);
  const opts    = [...wrongs, correct].sort(() => Math.random() - 0.5);

  content.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-type-label">Multiple Choice</div>
      <div class="quiz-question">${isEnUa ? q.word.en : q.word.ua}</div>
      <div class="quiz-hint">${isEnUa ? q.word.tr + ' — оберіть переклад українською' : 'оберіть англійське слово'}</div>
      <div class="quiz-options">
        ${opts.map(o => `<button class="quiz-opt" onclick="checkMC(this,'${o}','${correct}')">${o}</button>`).join('')}
      </div>
      <div class="quiz-feedback" id="feedback"></div>
      <div class="quiz-nav"><button class="next-btn" id="next-btn" onclick="nextQ()">Далі →</button></div>
    </div>`;
}

function checkMC(btn, chosen, correct) {
  if (quizAnswered) return;
  quizAnswered = true;
  document.querySelectorAll('.quiz-opt').forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add('correct');
  });
  const fb = document.getElementById('feedback');
  if (chosen === correct) {
    quizScore++;
    btn.classList.add('correct');
    fb.textContent  = '✓ Правильно!';
    fb.className    = 'quiz-feedback show ok';
  } else {
    btn.classList.add('wrong');
    fb.textContent  = `✗ Правильна відповідь: "${correct}"`;
    fb.className    = 'quiz-feedback show err';
  }
  document.getElementById('next-btn').classList.add('show');
}

function renderTypeIn(q, content) {
  content.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-type-label">Введіть відповідь</div>
      <div class="quiz-question">Перекладіть англійською:</div>
      <div class="quiz-hint">"${q.word.ua}" — ${q.word.tr}</div>
      <div class="quiz-input-wrap">
        <input class="quiz-input" id="type-inp" placeholder="Введіть англійське слово..." onkeydown="if(event.key==='Enter')checkType('${q.word.en}')">
        <button class="check-btn" onclick="checkType('${q.word.en}')">Перевірити</button>
      </div>
      <div class="quiz-feedback" id="feedback"></div>
      <div class="quiz-nav"><button class="next-btn" id="next-btn" onclick="nextQ()">Далі →</button></div>
    </div>`;
  document.getElementById('type-inp').focus();
}

function checkType(correct) {
  if (quizAnswered) return;
  quizAnswered = true;
  const inp = document.getElementById('type-inp');
  const val = inp.value.trim().toLowerCase();
  const fb  = document.getElementById('feedback');
  inp.disabled = true;
  if (val === correct.toLowerCase()) {
    quizScore++;
    inp.classList.add('correct');
    fb.textContent = '✓ Чудово!';
    fb.className   = 'quiz-feedback show ok';
  } else {
    inp.classList.add('wrong');
    fb.textContent = `✗ Правильна відповідь: "${correct}"`;
    fb.className   = 'quiz-feedback show err';
  }
  document.getElementById('next-btn').classList.add('show');
}

function renderEmojiHint(q, content) {
  const emojiMap = {
    vegetables:       '🥦',
    fruits:           '🍓',
    'cooking-methods':'🔥',
    utensils:         '🍴',
    taste:            '😋',
    meals:            '🍽️',
  };
  content.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-type-label">Заповніть пропуск</div>
      <span class="quiz-emoji">${emojiMap[q.word.tag] || '🍴'}</span>
      <div class="quiz-question">Доповніть речення:</div>
      <div class="quiz-hint">"${q.word.example.replace(q.word.en, '___')}"</div>
      <div class="quiz-input-wrap">
        <input class="quiz-input" id="type-inp" placeholder="Введіть пропущене слово..." onkeydown="if(event.key==='Enter')checkType('${q.word.en}')">
        <button class="check-btn" onclick="checkType('${q.word.en}')">Перевірити</button>
      </div>
      <div class="quiz-feedback" id="feedback"></div>
      <div class="quiz-nav"><button class="next-btn" id="next-btn" onclick="nextQ()">Далі →</button></div>
    </div>`;
  document.getElementById('type-inp').focus();
}

function nextQ() { quizIndex++; renderQuestion(); }

function showScore() {
  const pct = Math.round(quizScore / quizTotal * 100);
  const msg = pct >= 80 ? '🎉 Чудовий результат!' : pct >= 50 ? '👍 Непогано, продовжуй практикуватись!' : '📚 Не зупиняйся — все вийде!';
  document.getElementById('quiz-content').innerHTML = `
    <div class="score-card">
      <span class="score-emoji">${pct >= 80 ? '🏆' : pct >= 50 ? '🌟' : '📖'}</span>
      <div class="score-title">Квіз завершено!</div>
      <div class="score-num">${quizScore}/${quizTotal}</div>
      <div class="score-msg">${msg}</div>
      <button class="btn-primary" onclick="startQuiz()">Спробувати ще раз</button>
    </div>`;
  document.getElementById('quiz-progress').style.width = '100%';
}

// ── ФРАЗИ ──
function renderPhrases() {
  const c = document.getElementById('phrases-content');
  c.innerHTML = phrases.map(group => `
    <div class="phrase-group">
      <div class="phrase-group-title">${group.group}</div>
      <div class="phrase-list">
        ${group.items.map(p => `
          <div class="phrase-item" onclick="this.classList.toggle('open')">
            <div>
              <div class="phrase-en">${p.en}</div>
              <div class="phrase-ua">🇺🇦 ${p.ua}</div>
            </div>
            <span class="phrase-arrow">›</span>
          </div>`).join('')}
      </div>
    </div>`).join('');
}

// ── РЕЦЕПТИ ──
function renderRecipes() {
  const list   = document.getElementById('recipe-list');
  const detail = document.getElementById('recipe-detail');
  detail.classList.remove('show');
  list.style.display = 'grid';
  list.innerHTML = recipes.map(r => `
    <div class="recipe-card" onclick="showRecipe(${r.id})">
      <div class="recipe-img">${r.emoji}</div>
      <div class="recipe-body">
        <div class="recipe-name">${r.name}</div>
        <span class="recipe-level level-${r.level}">${r.level}</span>
        <div class="recipe-desc">${r.desc}</div>
      </div>
    </div>`).join('');
}

function showRecipe(id) {
  const r    = recipes.find(x => x.id === id);
  const list = document.getElementById('recipe-list');
  list.style.display = 'none';
  const detail = document.getElementById('recipe-detail');
  detail.classList.add('show');
  detail.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
      <button class="back-btn" onclick="renderRecipes()">←</button>
      <h2 style="font-family:'Syne',sans-serif;font-size:1.6rem;font-weight:800;color:var(--purple);letter-spacing:-0.5px;">${r.emoji} ${r.name}</h2>
      <span class="recipe-level level-${r.level}">${r.level}</span>
    </div>
    <p style="color:var(--text-muted);margin-bottom:20px;font-size:0.9rem;line-height:1.6;">${r.desc}</p>
    <h3 style="font-family:'Syne',sans-serif;font-size:0.95rem;font-weight:700;color:var(--purple);margin-bottom:12px;">Інгредієнти:</h3>
    <div class="ingredients-list">${r.ingredients.map(i => `<span class="ingredient-chip">🥄 ${i}</span>`).join('')}</div>
    <h3 style="font-family:'Syne',sans-serif;font-size:0.95rem;font-weight:700;color:var(--purple);margin-bottom:14px;">Інструкції:</h3>
    <ol class="recipe-steps">
      ${r.steps.map(s => `
        <li class="recipe-step">
          <span class="step-num">${s.n}</span>
          <span class="step-text">${s.text}</span>
        </li>`).join('')}
    </ol>
    <p style="margin-top:18px;font-size:0.78rem;color:var(--text-muted);">💡 Наведи курсор на виділені слова, щоб побачити переклад.</p>`;
}

// ── ПРОГРЕС ──
const achievements = [
  { icon:'🌱', name:'Перші кроки',      desc:'Вивчи 5 слів',       req: 5 },
  { icon:'📚', name:'Колекціонер слів', desc:'Вивчи 20 слів',      req: 20 },
  { icon:'🏆', name:'Майстер словника', desc:'Вивчи 40 слів',      req: 40 },
  { icon:'🔥', name:'У вогні',          desc:'100% у квізі',        req: 'quiz100' },
  { icon:'👨‍🍳', name:'Кухар-початківець',desc:'Відкрий 3 рецепти', req: 'recipe' },
  { icon:'💬', name:'Майстер фраз',     desc:'Прочитай усі фрази', req: 'phrases' },
];

function renderProgress() {
  const learned = learnedWords.size;
  document.getElementById('pg-learned').textContent = learned;
  document.getElementById('pg-quiz').textContent    = quizTotal > 0 ? Math.round(quizScore / quizTotal * 100) + '%' : '—';

  const vegTotal    = vocabulary.filter(w => w.tag === 'vegetables').length;
  const fruitTotal  = vocabulary.filter(w => w.tag === 'fruits').length;
  const methodTotal = vocabulary.filter(w => w.tag === 'cooking-methods').length;

  const vegLearned    = [...learnedWords].filter(w => vocabulary.find(v => v.en === w && v.tag === 'vegetables')).length;
  const fruitLearned  = [...learnedWords].filter(w => vocabulary.find(v => v.en === w && v.tag === 'fruits')).length;
  const methodLearned = [...learnedWords].filter(w => vocabulary.find(v => v.en === w && v.tag === 'cooking-methods')).length;

  const pv = Math.round(vegLearned    / vegTotal    * 100);
  const pf = Math.round(fruitLearned  / fruitTotal  * 100);
  const pm = Math.round(methodLearned / methodTotal * 100);

  document.getElementById('pct-veg').textContent    = pv + '%';
  document.getElementById('pct-fruit').textContent  = pf + '%';
  document.getElementById('pct-method').textContent = pm + '%';

  setTimeout(() => {
    document.getElementById('bar-veg').style.width    = pv + '%';
    document.getElementById('bar-fruit').style.width  = pf + '%';
    document.getElementById('bar-method').style.width = pm + '%';
  }, 100);

  const grid = document.getElementById('achievements-grid');
  grid.innerHTML = achievements.map(a => {
    const unlocked = typeof a.req === 'number' ? learned >= a.req : false;
    return `<div class="achievement ${unlocked ? 'unlocked' : ''}">
      <div class="ach-icon">${a.icon}</div>
      <div class="ach-name">${a.name}</div>
      <div class="ach-desc">${a.desc}</div>
    </div>`;
  }).join('');
}
