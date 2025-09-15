// 必要に応じて拡張
const Y_I18N = {
  ja: {
    chooseChar: "いっしょに歩く仲間をえらんでください",
    toMenu: "メニューに戻る"
  },
  en: {
    chooseChar: "Choose your travel buddy",
    toMenu: "Back to Menu"
  }
};

function applyTexts(lang = localStorage.getItem('yorimichi.lang') || (navigator.language.startsWith('ja')?'ja':'en')){
  const t = Y_I18N[lang] || Y_I18N.ja;
  document.querySelectorAll('[data-t]').forEach(el=>{
    const key = el.dataset.t;
    if (t[key]) el.textContent = t[key];
  });
  localStorage.setItem('yorimichi.lang', lang);
}
