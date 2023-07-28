// Ambil semua elemen section pada halaman
const sections = document.querySelectorAll('section');

// Fungsi untuk mengecek apakah elemen ada dalam viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fungsi untuk menambahkan class "show" pada elemen yang ada dalam viewport
function showSections() {
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('show');
    }
  });
}

// Panggil fungsi showSections() saat halaman dimuat dan saat halaman digulir
window.addEventListener('load', showSections);
window.addEventListener('scroll', showSections);
