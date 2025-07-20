function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.sidebar nav button').forEach(btn => {
    btn.classList.remove('active');
  });
  const btn = document.getElementById('btn-' + id);
  if (btn) btn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  showSection('accueil');
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('serviceworker.js')
      .then(reg => {
        console.log('Service Worker enregistré', reg);
      })
      .catch(err => {
        console.log('Erreur SW', err);
      });
  });
}