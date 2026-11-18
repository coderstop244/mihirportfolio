// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navbar && !navbar.contains(e.target) && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }
});

// Smooth scroll for nav links
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
        navLinks.classList.remove('active');
      }
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections and project cards
document.querySelectorAll('.section, .project-card').forEach(el => {
  observer.observe(el);
});

// Navbar background on scroll
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.parentElement.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
    navbar.parentElement.style.background = 'rgba(255, 255, 255, 0.95)';
  } else {
    navbar.parentElement.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    navbar.parentElement.style.background = 'rgba(255, 255, 255, 0.85)';
  }
  
  lastScroll = currentScroll;
});

// Add typing effect to home section (optional enhancement)
const typingText = document.querySelector('.home-content h2');
if (typingText) {
  const text = typingText.textContent;
  typingText.textContent = '';
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  
  // Uncomment to enable typing effect
  // setTimeout(typeWriter, 500);
}

// Add parallax effect to profile picture
const profilePic = document.querySelector('.profile-pic');
if (profilePic) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.1;
    if (scrolled < window.innerHeight) {
      profilePic.style.transform = `translateY(${rate}px)`;
    }
  });
} 