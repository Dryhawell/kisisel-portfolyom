document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    let isScrolling;

    // Scroll olayını kontrol et
    window.addEventListener('scroll', function() {
        // Mevcut scroll pozisyonunu al
        const currentScroll = window.pageYOffset;

        // Scroll yönünü kontrol et
        if (currentScroll > lastScroll && currentScroll > 50) {
            // Aşağı scroll
            navbar.classList.add('hidden');
        } else {
            // Yukarı scroll veya sayfanın başı
            navbar.classList.remove('hidden');
        }

        // Son scroll pozisyonunu güncelle
        lastScroll = currentScroll;

        // Scroll durduğunda menüyü göster
        clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            navbar.classList.remove('hidden');
        }, 150);
    });

    // Menü linklerine tıklandığında yumuşak kaydırma
    const links = navbar.getElementsByTagName('a');
    Array.from(links).forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
        });
    }
});
});
