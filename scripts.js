// scripts.js

function saveNotes() {
  const notes = document.getElementById('user-notes').value;
  localStorage.setItem('corfu_notes', notes);
  document.getElementById('save-message').classList.remove('hidden');
}

window.onload = () => {
  // 🔹 Φόρτωση αποθηκευμένων σημειώσεων
  const saved = localStorage.getItem('corfu_notes');
  if (saved) document.getElementById('user-notes').value = saved;

  // 🔹 Φόρτωση προτάσεων από JSON
  fetch('data/recommendations.json')
    .then(res => res.json())
    .then(data => {
      renderBeaches(data.beaches);
    })
    .catch(err => {
      console.error('Σφάλμα φόρτωσης δεδομένων:', err);
    });
};

function renderBeaches(beaches) {
  const container = document.getElementById('beaches-section');
  container.innerHTML = '';

  beaches.forEach(beach => {
    const card = document.createElement('div');
    card.className = 'beach-card';
    card.style.border = '1px solid #ccc';
    card.style.borderRadius = '10px';
    card.style.padding = '10px';
    card.style.marginBottom = '15px';
    card.style.backgroundColor = '#fff';

    const img = document.createElement('img');
    img.src = beach.image;
    img.alt = beach.name;
    img.style.width = '100%';
    img.style.borderRadius = '8px';

    const title = document.createElement('h3');
    title.textContent = beach.name;

    const desc = document.createElement('p');
    desc.textContent = beach.description;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(desc);

    container.appendChild(card);
  });
}
