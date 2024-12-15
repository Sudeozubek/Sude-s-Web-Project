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
  revealSection(); // Sayfa yüklendiğinde çalıştır
});


// Form Gönderimi İşlevselliği
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Formun varsayılan yenileme davranışını engelle
    alert('Mesajınız başarıyla gönderildi!'); // Başarı mesajı
    form.reset(); // Form alanlarını sıfırla
  });
}

// Parallax Efekti (Opsiyonel)
const heroContent = document.querySelector('.hero-content');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrollY * 0.2}px)`; // Hafif yukarı hareket
  }
});

// Navbar bağlantılarına dinamik kaydırma ekle
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Varsayılan tıklama davranışını engelle

    const targetId = this.getAttribute('href').substring(1); // Bağlantının hedef ID'sini al
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight; // Navbar yüksekliği
      const targetPosition = targetSection.offsetTop - navbarHeight; // Offset ekle

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // Yumuşak kaydırma
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
    cookieBanner.style.display = 'flex'; // Banner'ı görünür yap
  }

  // Çerez Ayarları butonuna tıklayınca modal açılır
  cookieSettingsButton.addEventListener('click', () => {
    cookieModal.classList.remove('hidden'); // Modalı görünür yap
  });

  // Modal Kapatma
  closeModalButton.addEventListener('click', () => {
    cookieModal.classList.add('hidden'); // Modalı gizle
  });

  // Tüm Çerezleri Kabul Et
  acceptAllButton.addEventListener('click', () => {
    const allPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(allPreferences));
    cookieBanner.style.display = 'none'; // Banner'ı tamamen gizle
    alert('Tüm çerezler kabul edildi.');
  });

  // Çerez Ayarlarını Kaydetme
  saveCookiesButton.addEventListener('click', () => {
    const preferences = {
      essential: true, // Her zaman zorunlu
      analytics: cookieForm.analytics.checked,
      marketing: cookieForm.marketing.checked,
    };

    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    cookieModal.classList.add('hidden'); // Modalı gizle
    cookieBanner.style.display = 'none'; // Banner'ı tamamen gizle
    alert('Çerez ayarlarınız kaydedildi.');
  });
});
