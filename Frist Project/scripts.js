document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi EmailJS
    emailjs.init('sHFLzuKstvw6p99Wm'); // Ganti dengan user ID dari EmailJS

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah reload halaman

        // Kirim email menggunakan EmailJS
        emailjs.sendForm('service_oqk77fv', 'template_c3ljli5', form)
            .then(function(response) {
                alert('Message sent successfully!');
                form.reset(); // Reset form
            }, function(error) {
                alert('Failed to send message. Please try again.');
            });
    });
});
