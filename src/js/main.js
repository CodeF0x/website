document
  .getElementById('mobile-header-expand')
  .addEventListener('click', () => {
    const links = document.getElementById('mobile-header-links');
    const style = window.getComputedStyle(links).display;
    links.style.display = style === 'none' ? 'block' : 'none';
  });
