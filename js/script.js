// Particles.js Konfigürasyonu
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#228B22'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#C68E17',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Dil Değiştirme Fonksiyonu
function changeLanguage(lang) {
    // Dil içeriklerini değiştir
    document.querySelectorAll('.tr-content').forEach(el => {
        el.style.display = lang === 'tr' ? 'block' : 'none';
    });
    document.querySelectorAll('.en-content').forEach(el => {
        el.style.display = lang === 'en' ? 'block' : 'none';
    });

    const translations = {
        tr: {
            about: 'Hakkımda',
            projects: 'Projelerim',
            skills: 'Yeteneklerim',
            contact: 'İletişim',
            advice: 'Benden Sana Bir Tavsiye',
            sendMessage: 'Mesaj Gönder',
            name: 'Adınız',
            email: 'E-posta Adresiniz',
            message: 'Mesajınız'
        },
        en: {
            about: 'About Me',
            projects: 'My Projects',
            skills: 'My Skills',
            contact: 'Contact',
            advice: 'A Piece of Advice from Me',
            sendMessage: 'Send Message',
            name: 'Your Name',
            email: 'Your Email',
            message: 'Your Message'
        }
    };

    // DOM elementlerini seç ve çeviriyi uygula
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Dil tercihini localStorage'a kaydet
    localStorage.setItem('language', lang);
}

// Tema Değiştirme Fonksiyonu
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// İletişim Formu Gönderimi
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    try {
        const response = await fetch('/backend/send_email', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            alert('Mesajınız başarıyla gönderildi!');
            e.target.reset();
        } else {
            alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
        }
    } catch (error) {
        console.error('Hata:', error);
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
});

// Sayfa Yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Kaydedilmiş dil tercihini kontrol et
    const savedLanguage = localStorage.getItem('language') || 'tr';
    changeLanguage(savedLanguage);
    
    // Kaydedilmiş tema tercihini kontrol et
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
