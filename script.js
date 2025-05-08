function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
  document.querySelector(".main").classList.toggle("shift");
}

function showContent(id) {
  const contents = document.querySelectorAll('.content');
  contents.forEach(c => c.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
