document.getElementById('arrow-down').addEventListener('click', function() {
  this.classList.add('fade-out');
  setTimeout(() => {
    this.style.display = 'none';
  }, 1000);
  document.getElementById('two').scrollIntoView({ behavior: 'smooth' });
});
