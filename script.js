// 1. BACKGROUND SLIDER LOGIC
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function changeSlide() {
    // Hapus class active dari slide sekarang
    slides[currentSlide].classList.remove('active');
    
    // Pindah ke slide berikutnya (looping)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Tambah class active ke slide baru
    slides[currentSlide].classList.add('active');
}

// Ganti gambar setiap 4 detik
setInterval(changeSlide, 4000);

// 2. SCROLL REVEAL ANIMATION
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Jarak trigger animasi

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            // Optional: Hilangkan else ini jika tidak ingin animasi ulang saat scroll up
            reveals[i].classList.remove('active'); 
        }
    }
}

// Panggil fungsi sekali saat load agar elemen yg sudah terlihat langsung muncul
reveal();

// 3. MODAL POPUP LOGIC
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

function openModal(title, desc, imgSrc) {
    modal.style.display = "block";
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    modalImg.src = imgSrc;
}

function closeModal() {
    modal.style.display = "none";
}

// Tutup modal jika klik di luar area konten
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}