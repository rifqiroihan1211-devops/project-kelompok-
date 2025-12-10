// Data Project untuk Pop-up
const projectData = {
    1: {
        title: "Project 1: Sistem Irigasi Cerdas",
        description: "Deskripsi lengkap Project 1. Menggunakan sensor kelembaban tanah dan mikrokontroler untuk menghemat air di area Green School.",
        image: "assets/projects/project1-full.jpg"
    },
    2: {
        title: "Project 2: Aplikasi Pemetaan Sampah",
        description: "Deskripsi lengkap Project 2. Aplikasi mobile untuk memetakan lokasi tempat sampah daur ulang dan non-daur ulang di sekolah.",
        image: "assets/projects/project2-full.jpg"
    },
    3: {
        title: "Project 3: Monitoring Kualitas Udara",
        description: "Deskripsi lengkap Project 3. Perangkat berbasis IoT untuk memonitor tingkat polusi dan CO2 di lingkungan sekolah secara real-time.",
        image: "assets/projects/project3-full.jpg"
    },
    4: {
        title: "Project 4: Website Informasi Green School",
        description: "Deskripsi lengkap Project 4. Website interaktif yang menyajikan data dan berita terbaru tentang program Green School kami.",
        image: "assets/projects/project4-full.jpg"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Logika Pop-up (Tampilan 3)
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-btn');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            const data = projectData[projectId];

            if (data) {
                document.getElementById('modal-title').textContent = data.title;
                document.getElementById('modal-description').textContent = data.description;
                document.getElementById('modal-image').src = data.image;
                modal.style.display = 'block';
            }
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // 2. Animasi Fade-In On Scroll (Semua Section)
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hanya muncul sekali
            }
        });
    }, {
        threshold: 0.1 // Mulai animasi ketika 10% section terlihat
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
