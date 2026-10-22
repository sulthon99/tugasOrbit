document.addEventListener("DOMContentLoaded", function() {
    const faqHeaders = document.querySelectorAll(".faq-header");

    faqHeaders.forEach(header => {
        header.addEventListener("click", function() {
            // GUNAKAN closest() UNTUK MENCARI CARD INDUK TERDEKAT
            const card = this.closest(".faq-card");
            
            // Toggle class aktif HANYA pada card yang diklik
            card.classList.toggle("active");

            const icon = this.querySelector(".faq-icon");
            if (card.classList.contains("active")) {
                icon.textContent = "-";
            } else {
                icon.textContent = "+";
            }
        });
    });
});