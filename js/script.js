// Test - JavaScript çalışıyor mu?
console.log('🚀 script.js dosyası yüklendi!');

// Particles.js Konfigürasyonu
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: ['#228B22', '#1a6b1a', '#C68E17', '#a67512']
        },
        shape: {
            type: ['circle', 'triangle'],
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.6,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#C68E17',
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'bounce',
            bounce: true,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
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

// Dil Değiştirme Fonksiyonu
function changeLanguage(lang) {
    const trContent = document.querySelectorAll('.tr-content');
    const enContent = document.querySelectorAll('.en-content');

    if (lang === 'tr') {
        trContent.forEach(el => el.style.display = '');
        enContent.forEach(el => el.style.display = 'none');
    } else if (lang === 'en') {
        trContent.forEach(el => el.style.display = 'none');
        enContent.forEach(el => el.style.display = '');
    }

    // Dil tercihini kaydet
    localStorage.setItem('language', lang);
}

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

// Dil Değiştirme Fonksiyonu
function changeLanguage(lang) {
    const trContent = document.querySelectorAll('.tr-content');
    const enContent = document.querySelectorAll('.en-content');
    const deContent = document.querySelectorAll('.de-content');
    const esContent = document.querySelectorAll('.es-content');

    // Tüm dil içeriklerini gizle
    [trContent, enContent, deContent, esContent].forEach(elements => {
        elements.forEach(el => el.style.display = 'none');
    });

    // Seçilen dili göster
    let selectedContent;
    switch(lang) {
        case 'tr':
            selectedContent = trContent;
            break;
        case 'en':
            selectedContent = enContent;
            break;
        case 'de':
            selectedContent = deContent;
            break;
        case 'es':
            selectedContent = esContent;
            break;
    }
    
    selectedContent.forEach(el => el.style.display = '');

    // Dil tercihini kaydet
    localStorage.setItem('language', lang);
}

// Menü işlevselliği
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM yüklendi, menü başlatılıyor...');
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('.main-nav');
    
    console.log('Menu Toggle:', menuToggle);
    console.log('Nav:', nav);

    if (menuToggle && nav) {
        console.log('Menü elemanları bulundu, event listener ekleniyor...');
        menuToggle.addEventListener('click', function() {
            console.log('Menü butonuna tıklandı!');
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            console.log('Nav active:', nav.classList.contains('active'));
            console.log('Button active:', menuToggle.classList.contains('active'));
        });

        // Menü linklerine tıklandığında menüyü kapat
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Sayfa dışına tıklandığında menüyü kapat
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && event.target !== menuToggle && !menuToggle.contains(event.target) && nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    } else {
        console.log('Menü elemanları bulunamadı!');
    }
});