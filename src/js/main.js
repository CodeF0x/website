function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

document.getElementById('arrow-down').addEventListener('click', function() {
  this.classList.add('fade-out');
  setTimeout(() => {
    this.style.display = 'none';
  }, 1000);
  document.getElementById('two').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('scroll', () => {
  const two = document.getElementById('two');
  if (checkVisible(two)) {
    const arrow = document.getElementById('arrow-down');
    arrow.classList.add('fade-out');
    setTimeout(() => {
      arrow.style.display = 'none';
    }, 1000);
  }
});
