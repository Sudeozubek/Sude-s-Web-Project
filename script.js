document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.page');

  const revealSection = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', revealSection);
  revealSection(); 
});

// Hero section için scroll animasyonu
document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero');
  if (heroSection) { // Null check eklendi
    const revealHero = () => {
      const sectionTop = heroSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        heroSection.classList.add('show');
      }
    };
    window.addEventListener('scroll', revealHero);
    revealHero();
  }
});

// About section için scroll animasyonu
document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('#about');
  if (aboutSection) { // Null check eklendi
    const revealAbout = () => {
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        aboutSection.classList.add('show');
      }
    };
    window.addEventListener('scroll', revealAbout);
    revealAbout();
  }
});

// Carousel işlemleri
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  
  if (track && prevButton && nextButton) { // Null check eklendi
    const items = Array.from(track.children);
    if (items.length > 0) { // items array'inin boş olmadığından emin oluyoruz
      let currentIndex = 0;

      const updateTrackPosition = () => {
        const itemWidth = items[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      };

      prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateTrackPosition();
        }
      });

      nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
          currentIndex++;
          updateTrackPosition();
        }
      });

      // İlk yüklemede pozisyonu ayarla
      updateTrackPosition();
    }
  }
});



// Form Gönderimi İşlevselliği
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    alert('Mesajınız başarıyla gönderildi!'); 
    form.reset(); 
  });
}

// Parallax Efekti (Opsiyonel)
const heroContent = document.querySelector('.hero-content');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
  }
});

// Navbar bağlantılarına dinamik kaydırma ekle
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetSection.offsetTop - navbarHeight; 

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' 
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cookieSettingsButton = document.getElementById('cookie-settings');
  const cookieModal = document.getElementById('cookie-modal');
  const closeModalButton = document.getElementById('close-modal');
  const saveCookiesButton = document.getElementById('save-cookies');
  const cookieForm = document.getElementById('cookie-form');
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptAllButton = document.getElementById('accept-all');

  // Kullanıcı tercihlerini kontrol et ve uygula
  const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences'));

  // Eğer kullanıcı tercihi yoksa banner'ı açık tut
  if (!savedPreferences) {
    cookieBanner.style.display = 'flex'; 
  }

  // Çerez Ayarları butonuna tıklayınca modal açılır
  cookieSettingsButton.addEventListener('click', () => {
    cookieModal.classList.remove('hidden'); 
  });

  // Modal Kapatma
  closeModalButton.addEventListener('click', () => {
    cookieModal.classList.add('hidden'); 
  });

  // Tüm Çerezleri Kabul Et
  acceptAllButton.addEventListener('click', () => {
    const allPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(allPreferences));
    cookieBanner.style.display = 'none'; 
    alert('Tüm çerezler kabul edildi.');
  });

  // Çerez Ayarlarını Kaydetme
  saveCookiesButton.addEventListener('click', () => {
    const preferences = {
      essential: true, 
      analytics: cookieForm.analytics.checked,
      marketing: cookieForm.marketing.checked,
    };

    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    cookieModal.classList.add('hidden'); 
    cookieBanner.style.display = 'none'; 
    alert('Çerez ayarlarınız kaydedildi.');
  });
});
