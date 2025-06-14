// -----------------------
// ΣΗΜΕΙΩΣΕΙΣ ΤΟΠΙΚΗΣ ΑΠΟΘΗΚΕΥΣΗΣ
// -----------------------
function saveNotes() {
  const notes = document.getElementById('user-notes').value;
  localStorage.setItem('corfu_notes', notes);
  document.getElementById('save-message').classList.remove('hidden');
}

window.onload = () => {
  const saved = localStorage.getItem('corfu_notes');
  if (saved) document.getElementById('user-notes').value = saved;

  loadBeaches();
};

// -----------------------
// ΔΥΝΑΜΙΚΗ ΦΟΡΤΩΣΗ ΠΑΡΑΛΙΩΝ
// -----------------------
async function loadBeaches() {
  try {
    const response = await fetch('data/recommendations.json');
    const data = await response.json();

    const beaches = data.beaches;
    const container = document.getElementById('beaches-section');

    if (!container) return;

    beaches.forEach(beach => {
      const card = document.createElement('div');
      card.className = 'beach-card';
      card.style.marginBottom = '1.5rem';

      const img = document.createElement('img');
      img.src = beach.image;
      img.alt = beach.name;
      img.style.borderRadius = '8px';
      img.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
      img.style.maxWidth = '100%';

      const title = document.createElement('h3');
      title.textContent = beach.name;
      title.style.margin = '0.5rem 0 0.2rem';

      const desc = document.createElement('p');
      desc.textContent = beach.description;
      desc.style.margin = '0';

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(desc);

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Σφάλμα κατά τη φόρτωση των παραλιών:', error);
  }
}
