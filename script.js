// ===== Countdown =====
function initCountdown() {
    const eventDate = new Date('2026-05-23T19:00:00').getTime();
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    if (!days || !hours || !minutes || !seconds) return;

    const update = () => {
        const now = Date.now();
        const distance = eventDate - now;

        if (distance <= 0) {
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            const msg = document.querySelector('.countdown-message');
            if (msg) msg.textContent = '¡La fiesta ha comenzado!';
            return;
        }

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const m = Math.floor((distance / (1000 * 60)) % 60);
        const s = Math.floor((distance / 1000) % 60);

        days.textContent = String(d).padStart(2, '0');
        hours.textContent = String(h).padStart(2, '0');
        minutes.textContent = String(m).padStart(2, '0');
        seconds.textContent = String(s).padStart(2, '0');
    };

    update();
    setInterval(update, 1000);
}

// ===== Smooth Anchor Scroll =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ===== Reveal on Scroll =====
function initRevealAnimations() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const selectors = [
        '.countdown-section',
        '.parents-section',
        '.event-details',
        '.gift-registry',
        '.rsvp-section',
        '.footer',
        '.countdown-item',
        '.parent-card',
        '.detail-card',
        '.registry-card',
        '.rsvp-warning',
        '.form-container'
    ];

    const items = document.querySelectorAll(selectors.join(','));
    if (!items.length) return;

    if (reducedMotion) {
        items.forEach((el) => {
            el.classList.add('is-visible');
        });
        return;
    }

    items.forEach((el, idx) => {
        el.classList.add('reveal-item');
        el.style.setProperty('--reveal-delay', `${Math.min((idx % 8) * 70, 420)}ms`);
    });

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    items.forEach((el) => observer.observe(el));
}

// ===== Cinematic Section Transitions =====
function initSectionCinemaTransitions() {
    const sections = document.querySelectorAll(
        '.countdown-section, .parents-section, .event-details, .gift-registry, .rsvp-section, .footer'
    );

    if (!sections.length) return;

    sections.forEach((section, index) => {
        section.classList.add('cinema-section');
        section.style.setProperty('--cinema-delay', `${Math.min(index * 90, 360)}ms`);

        if (!section.querySelector('.cinema-glow')) {
            const glow = document.createElement('div');
            glow.className = 'cinema-glow';
            section.appendChild(glow);
        }
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('cinema-visible');
                }
            });
        },
        { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
}

// ===== Scroll Progress Indicator =====
function initScrollProgress() {
    if (document.getElementById('scroll-progress')) return;

    const progress = document.createElement('div');
    progress.id = 'scroll-progress';
    document.body.appendChild(progress);

    const update = () => {
        const doc = document.documentElement;
        const maxScroll = doc.scrollHeight - window.innerHeight;
        const value = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
        progress.style.width = `${Math.min(Math.max(value, 0), 100)}%`;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
}

// ===== Subtle Hero Parallax =====
function initHeroPointerParallax() {
    const canUsePointerParallax = window.matchMedia('(pointer: fine)').matches;
    if (!canUsePointerParallax) return;

    const hero = document.querySelector('.hero');
    const effects = document.querySelector('.hero-effects');
    if (!hero || !effects) return;

    let raf = null;

    const onMove = (e) => {
        if (raf) cancelAnimationFrame(raf);

        raf = requestAnimationFrame(() => {
            const rect = hero.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

            effects.style.setProperty('--mx', `${(x * 8).toFixed(2)}px`);
            effects.style.setProperty('--my', `${(y * 6).toFixed(2)}px`);
        });
    };

    const reset = () => {
        effects.style.setProperty('--mx', '0px');
        effects.style.setProperty('--my', '0px');
    };

    hero.addEventListener('mousemove', onMove, { passive: true });
    hero.addEventListener('mouseleave', reset, { passive: true });
}

// ===== Button Effects =====
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .copy-btn');

    buttons.forEach((button) => {
        button.classList.add('interactive-btn');

        button.addEventListener('pointerdown', (e) => {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';

            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            button.appendChild(ripple);
            setTimeout(() => ripple.remove(), 650);
        });
    });
}

// ===== Music Player =====
function initMusicPlayer() {
    const audio = document.getElementById('background-music');
    const toggleBtn = document.getElementById('music-toggle');
    if (!audio || !toggleBtn) return;

    const playIcon = toggleBtn.querySelector('.play-icon');
    const pauseIcon = toggleBtn.querySelector('.pause-icon');

    let isPlaying = false;
    let triedAutoStart = false;

    const setUI = (playing) => {
        isPlaying = playing;
        if (playIcon) playIcon.style.display = playing ? 'none' : 'block';
        if (pauseIcon) pauseIcon.style.display = playing ? 'block' : 'none';
        toggleBtn.classList.toggle('playing', playing);
    };

    const play = () => {
        audio.volume = 0.7;
        return audio.play().then(() => setUI(true)).catch(() => setUI(false));
    };

    const pause = () => {
        audio.pause();
        setUI(false);
    };

    const tryAutoStart = () => {
        if (triedAutoStart) return;
        triedAutoStart = true;
        play();
    };

    ['click', 'touchstart', 'keydown'].forEach((eventName) => {
        document.addEventListener(eventName, tryAutoStart, { once: true, passive: true });
    });

    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isPlaying) pause();
        else play();
    });
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initSmoothScrolling();
    initRevealAnimations();
    initSectionCinemaTransitions();
    initScrollProgress();
    initHeroPointerParallax();
    initButtonEffects();
    initMusicPlayer();
});

// ===== Copy to Clipboard Function =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Mostrar notificación de copiado
        showCopyNotification();
    }).catch(err => {
        console.error('Error al copiar:', err);
        // Fallback para navegadores antiguos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showCopyNotification();
        } catch (err) {
            console.error('Fallback: Error al copiar', err);
        }
        document.body.removeChild(textArea);
    });
}

function showCopyNotification() {
    // Crear notificación
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 6L9 17l-5-5"></path>
        </svg>
        <span>¡Copiado!</span>
    `;
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remover después de 2 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ===== Prevent Right Click on Images (opcional) =====
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});
