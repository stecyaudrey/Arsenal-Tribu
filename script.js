const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.player-card');

  searchInput.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    
    cards.forEach(card => {
      const name = card.querySelector('h3').textContent.toLowerCase();
      if (name.includes(term)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

