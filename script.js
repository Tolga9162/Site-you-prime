document.addEventListener('DOMContentLoaded', () => {
  const themes = {
    money: [
      'wealthy','prosperous','affluent','opulent','abundant','lucrative','flourishing','comfortable','rich','profitable',
      'well-off','cash-rich','remunerative','generous','bountiful','thriving','ample','substantial','rewarding','premium',
      'valuable','elevated','blessed','enviable','stable','robust','secure','plentiful','lavish','richly'
    ],
    success: [
      'triumphant','victorious','accomplished','brilliant','remarkable','thriving','glorious','flourishing','conquering','dazzling',
      'successful','achieving','excellent','winning','outstanding','eminent','stellar','shining','consummate','notable',
      'illustrious','famed','renowned','celebrated','supreme','apex','top-flight','prolific','masterful','progressive'
    ],
    confidence: [
      'confident','assured','secure','courageous','bold','fearless','steady','determined','daring','proud',
      'self-reliant','poised','assertive','resolute','intrepid','unshakable','steadfast','undeterred','empowered','self-assured',
      'valiant','dauntless','composed','unwavering','self-confident','strong-willed','positive','trusting','capable','brave'
    ],
    relationship: [
      'connected','supportive','intimate','harmonious','trusting','empathetic','loyal','devoted','caring','nurturing',
      'affectionate','respectful','understanding','committed','secure','reciprocal','balanced','open','honest','kind',
      'attentive','appreciative','cooperative','considerate','sympathetic','faithful','reliable','generous','compassionate','united'
    ],
    intelligence: [
      'bright','clever','insightful','astute','perceptive','shrewd','analytic','inquisitive','creative','innovative',
      'knowledgeable','wise','informed','erudite','literate','thoughtful','curious','rational','logical','savvy',
      'quick-witted','resourceful','intellectual','reflective','sage','thought-provoking','discern ing','strategic','enlightened','apt'
    ],
    sport: [
      'athletic','vigorous','energetic','agile','resilient','enduring','competitive','driven','strong','fast',
      'powerful','skillful','coordinated','active','fit','nimble','robust','tough','stamina-driven','tenacious',
      'flexible','focused','disciplined','balanced','dynamic','steady','unyielding','determined','spirited','motivated'
    ]
  };
  
  let selectedTheme = null;
  const controls = document.getElementById('controls');
  const howLink = document.getElementById('how-link-container');
  const primeBtn = document.getElementById('prime-btn');
  const wordDisplay = document.getElementById('word-display');
  const stepBox = document.getElementById('steps-box');
  document.querySelectorAll('.theme-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.theme-buttons button')
              .forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedTheme = btn.getAttribute('data-theme');
    });
  });
  
  primeBtn.addEventListener('click', () => {
    if (!selectedTheme) return;
  
    controls.style.display = 'none';
    howLink.style.display = 'none';
    primeBtn.style.display = 'none';
    stepBox.style.display = 'none';
    wordDisplay.style.display = 'block';
  
    const pool = [...themes[selectedTheme]];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
  
    let idx = 0;
    const interval = setInterval(() => {
      if (idx >= 10) {
        clearInterval(interval);
        wordDisplay.textContent = '';
        controls.style.display = 'flex';
        howLink.style.display = 'block';
        primeBtn.style.display = 'block';
        stepBox.style.display = 'block';
        wordDisplay.style.display = 'none';
        return;
      }
      wordDisplay.textContent = pool[idx++];
    }, 200);
  });
});