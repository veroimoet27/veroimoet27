// --- Navbar scroll effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Hamburger menu ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- Appointment form submission ---
const appointmentForm = document.getElementById('appointmentForm');
const successMessage = document.getElementById('successMessage');

appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const nama = document.getElementById('nama').value.trim();
    const nomor = document.getElementById('nomor').value.trim();
    const occasion = document.getElementById('occasion').value;
    const catatan = document.getElementById('catatan').value.trim();

    // Simple validation
    if (!nama || !nomor || !occasion) {
        alert('Mohon isi semua kolom yang wajib diisi (Nama, Nomor, dan Occasion).');
        return;
    }

    // Simulate submission
    const submitBtn = appointmentForm.querySelector('.submit-btn');
    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    setTimeout(() => {
        // Show success message
        successMessage.style.display = 'block';
        appointmentForm.reset();
        submitBtn.textContent = 'Kirim & Jadwalkan';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';

        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Hide success message after 6 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 6000);
    }, 1200);
});

// --- Smooth scroll for all anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

console.log('✨ ioolotalier — Website siap! Selamat datang di atelier kami.');
console.log('📞 WA: 0812-3456-7890 | 📸 IG: @ioolotalier | 👍 FB: ioolotalier');