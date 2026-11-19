// one page, two languages: html[lang] decides which [lang] blocks are shown
(function () {
  var saved = localStorage.getItem('lang');
  var lang = saved || ((navigator.language || '').toLowerCase().indexOf('ja') === 0 ? 'ja' : 'en');
  function set(l) {
    document.documentElement.lang = l;
    localStorage.setItem('lang', l);
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === l)); });
  }
  set(lang);
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.lang button');
    if (b) set(b.dataset.lang);
  });
})();
