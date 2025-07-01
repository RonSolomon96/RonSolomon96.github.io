document.addEventListener('DOMContentLoaded', () => {
  const fadeElems = document.querySelectorAll('.fade-in');
  const projectCards = document.querySelectorAll('.project-card');

  // Reveal elements on scroll
  const appear = () => {
    fadeElems.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.9) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', appear);
  appear(); // Run once on load

  // Add click animation to project cards
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.remove('animated'); // restart animation if clicked again
      void card.offsetWidth; // trigger reflow
      card.classList.add('animated');
    });
  });
});
