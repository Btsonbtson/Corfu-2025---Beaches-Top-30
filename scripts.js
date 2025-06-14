function saveNotes() {
  const notes = document.getElementById('user-notes').value;
  localStorage.setItem('corfu_notes', notes);
  document.getElementById('save-message').classList.remove('hidden');
}

window.onload = () => {
  const saved = localStorage.getItem('corfu_notes');
  if (saved) document.getElementById('user-notes').value = saved;
};
