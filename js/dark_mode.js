const checkbox = document.querySelector('#switch-shadow');

checkbox.addEventListener('change', (e) => {
  document.body.classList.toggle('dark');
  if (e.target.checked) {
    document.querySelector('.dark-mode-text').innerHTML = `Turn lights on`;
  } else {
    document.querySelector('.dark-mode-text').innerHTML = `Turn lights off`;
  }
});
