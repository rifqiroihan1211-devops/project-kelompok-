document.addEventListener('DOMContentLoaded', function() {
    // --- Smooth Scrolling untuk Navigasi ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Animasi On Scroll (Intersection Observer) ---
    // Fungsi untuk mengamati elemen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Jika elemen terlihat di viewport
            if (entry.isIntersecting) {
                // Tambahkan class 'visible' untuk mengaktifkan animasi CSS
                entry.target.classList.add('visible');
                // Hentikan pengamatan setelah animasi diaktifkan
                observer.unobserve(entry.target);
            }
        });
    }, {
        // threshold 0.1 berarti, animasi akan mulai saat 10% elemen terlihat
        threshold: 0.1 
    });

    // Amati semua elemen dengan class 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // --- Efek Parallax Ringan pada Hero (Opsional) ---
    const heroSection = document.getElementById('home');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', function() {
        // Hitung seberapa jauh user sudah scroll
        let scrollPosition = window.pageYOffset;
        
        // Terapkan translasi ke konten Hero
        if (heroContent) {
            // Konten bergerak sedikit ke atas saat scroll (efek 30% dari scroll)
            heroContent.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
        }

        // Efek zoom out atau translasi untuk latar belakang animasi (opsional)
        // const animatedBg = document.querySelector('.animated-bg');
        // if (animatedBg) {
        //    animatedBg.style.transform = 'scale(' + (1 + scrollPosition * 0.0005) + ')';
        // }
    });
});