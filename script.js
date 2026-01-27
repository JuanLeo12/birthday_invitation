// ===== Countdown Timer =====
function updateCountdown() {
    // Fecha del evento: 23 de Mayo de 2026 a las 7:00 PM
    const eventDate = new Date('2026-05-23T19:00:00').getTime();
    
    function update() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        // Cálculos de tiempo
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Actualizar elementos del DOM
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        // Si el evento ha pasado
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-message').textContent = '¡La fiesta ha comenzado!';
            document.querySelectorAll('.countdown-number').forEach(el => {
                el.textContent = '00';
            });
        }
    }
    
    // Actualizar inmediatamente
    update();
    
    // Actualizar cada segundo
    const countdownInterval = setInterval(update, 1000);
}

// ===== Smooth Scroll Effects =====
function initScrollEffects() {
    // Observador de intersección para animaciones al hacer scroll
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
    
    // Observar elementos que deben animarse
    const animatedElements = document.querySelectorAll(
        '.detail-card, .photo-card, .countdown-item'
    );
    
    animatedElements.forEach(el => observer.observe(el));
}

// ===== Parallax Effect for Hero =====
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            
            hero.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
}

// ===== Smooth Scrolling for Links =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== Loading Animation =====
function initLoadingAnimation() {
    // Añadir clase cuando la página está cargada
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}

// ===== Button Ripple Effect =====
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// ===== Floating Animation for Decorations =====
function initFloatingAnimations() {
    const decorations = document.querySelectorAll('.floral-decoration');
    
    decorations.forEach((decoration, index) => {
        decoration.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
    });
}

// Añadir keyframes para la animación flotante dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(-20px) rotate(5deg);
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    body.loaded .hero-content {
        animation: fadeInScale 1s ease-out;
    }
    
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    initScrollEffects();
    initParallaxEffect();
    initSmoothScrolling();
    initLoadingAnimation();
    initButtonEffects();
    initFloatingAnimations();
    
    // Log de confirmación (solo para desarrollo)
    console.log('✨ Invitación de 15 años cargada correctamente ✨');
});

// ===== Prevent Right Click on Images (opcional) =====
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// ===== Optimización de rendimiento =====
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Aquí puedes agregar efectos adicionales al hacer scroll
            ticking = false;
        });
        ticking = true;
    }
});
