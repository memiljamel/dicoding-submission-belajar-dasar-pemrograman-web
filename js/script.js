document.addEventListener('DOMContentLoaded', () => {
  const progress = document.querySelectorAll('.progress');

  progress.forEach((element) => {
    const width = element.getAttribute('data-width');
    element.style.width = width;
    element.style.transition = 'width 2s, opacity 1s';
    element.style.opacity = 1;
  });
});
