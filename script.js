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
    // Verificar la seguridad de la URL primero
    if (!verifyAccess()) return;

    initCountdown();
    initSmoothScrolling();
    initRevealAnimations();
    initSectionCinemaTransitions();
    initScrollProgress();
    initHeroPointerParallax();
    initButtonEffects();
    initMusicPlayer();
    initAutoScrollPeek();
    
    // Magic Effects
    initFallingMagic();
    initGoldenDividers();
    initMusicNotes();
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

// ===== 3 MAGICAL EFFECTS ===== //

// 1. Falling Magic (Sparkles & Butterflies)
function initFallingMagic() {
    const magicContainer = document.createElement('div');
    magicContainer.className = 'magic-falling-container';
    document.body.appendChild(magicContainer);

    const createElement = () => {
        const el = document.createElement('div');
        const isButterfly = Math.random() > 0.7; // 30% chance for a butterfly
        
        el.className = 'falling-element ' + (isButterfly ? 'falling-butterfly' : 'sparkle');
        if (isButterfly) {
            el.textContent = '';
        }
        
        // Randomize starting position and duration
        const startX = Math.random() * window.innerWidth;
        const duration = 10 + Math.random() * 15; // 10 to 25 seconds
        const delay = Math.random() * 5;
        
        el.style.left = startX + 'px';
        el.style.animationDuration = duration + 's';
        el.style.animationDelay = delay + 's';
        
        // Clean up after animation finishes to prevent DOM bloating
        setTimeout(() => {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }, (duration + delay) * 1000);

        magicContainer.appendChild(el);
    };

    // Create initial batch
    for (let i = 0; i < 15; i++) {
        setTimeout(createElement, Math.random() * 3000);
    }

    // Continuously generate new ones
    setInterval(createElement, 2000);
}

// 2. Golden Dividers
function initGoldenDividers() {
    // Select the sections where we want a divider before them
    const sections = document.querySelectorAll('.parents-section, .event-details, .gift-registry, .rsvp-section, .photo-gallery');
    
    sections.forEach(section => {
        const divider = document.createElement('div');
        divider.className = 'golden-divider';
        section.parentNode.insertBefore(divider, section);
    });
}

// 3. Floating Music Notes
function initMusicNotes() {
    const audio = document.getElementById('background-music');
    if (!audio) return;
    
    const notes = ['', '', '', ''];
    
    setInterval(() => {
        // Check if audio is actually playing (not paused, no error)
        if (!audio.paused && !audio.muted) {
            const note = document.createElement('div');
            note.className = 'music-note';
            note.textContent = notes[Math.floor(Math.random() * notes.length)];
            
            // Randomize position slightly near the button
            const offset = (Math.random() - 0.5) * 40;
            note.style.right = (30 + offset) + 'px';
            
            document.body.appendChild(note);
            
            setTimeout(() => {
                if (note && note.parentNode) note.parentNode.removeChild(note);
            }, 3000);
        }
    }, 1500); // 1.5 seconds between notes when playing
}

// ===== 3 MAGICAL EFFECTS ===== //

// 1. Falling Magic (Sparkles & Butterflies)
function initFallingMagic() {
    const magicContainer = document.createElement('div');
    magicContainer.className = 'magic-falling-container';
    document.body.appendChild(magicContainer);

    const createElement = () => {
        const el = document.createElement('div');
        const isButterfly = Math.random() > 0.85; // 15% chance for a butterfly
        
        el.className = 'falling-element ' + (isButterfly ? 'falling-butterfly' : 'sparkle');
        if (isButterfly) {
            el.textContent = '';
        }
        
        const startX = Math.random() * window.innerWidth;
        const duration = 12 + Math.random() * 10;
        const delay = Math.random() * 3;
        
        el.style.left = startX + 'px';
        el.style.animationDuration = duration + 's';
        el.style.animationDelay = delay + 's';
        
        setTimeout(() => {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }, (duration + delay) * 1000);

        magicContainer.appendChild(el);
    };

    for (let i = 0; i < 15; i++) {
        setTimeout(createElement, Math.random() * 3000);
    }
    setInterval(createElement, 2000);
}

// 2. Golden Dividers
function initGoldenDividers() {
    const sections = document.querySelectorAll('.parents-section, .event-details, .gift-registry, .rsvp-section, .photo-gallery');
    
    sections.forEach(section => {
        const divider = document.createElement('div');
        divider.className = 'golden-divider';
        section.parentNode.insertBefore(divider, section);
    });
}

// 3. Floating Music Notes
function initMusicNotes() {
    const audio = document.getElementById('background-music');
    if (!audio) return;
    
    const notes = ['', '', '', ''];
    
    setInterval(() => {
        if (!audio.paused && !audio.muted) {
            const note = document.createElement('div');
            note.className = 'music-note';
            note.textContent = notes[Math.floor(Math.random() * notes.length)];
            
            const offset = (Math.random() - 0.5) * 40;
            note.style.right = (30 + offset) + 'px';
            
            document.body.appendChild(note);
            
            setTimeout(() => {
                if (note && note.parentNode) note.parentNode.removeChild(note);
            }, 3000);
        }
    }, 1500);
}

// ===== Control de Acceso (Protección de URL) =====
function verifyAccess() {
    const path = window.location.pathname;
    // Soporta tanto /2.html como /2 (Vercel clean URLs)
    const match = path.match(/\/([1-5])(?:\.html|\/)?$/);
    if (!match) return true; // Si no es 1,2,3,4,5, dejamos pasar (index)

    const fileNumber = match[1];
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('pase');

    // Puedes cambiar estos tokens si quieres, es el parámetro secreto para cada invitación.
    const tokensSecretos = {
        '1': 'mx7qE',
        '2': 'vP3wA',
        '3': 'z8TkB',
        '4': 'rQ5mN',
        '5': 'k2JhF'
    };

    // Validamos comparando el pase de la URL con el de la tabla
    if (token !== tokensSecretos[fileNumber]) {
        // Bloquear visualmente la página
        document.body.innerHTML = `
            <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: var(--bg-dark); color: var(--accent-gold); font-family: 'Cinzel Decorative', cursive; text-align: center; padding: 20px;">
                <div style="margin-bottom: 20px; font-size: 5rem;">🔒</div>
                <h1 style="font-size: 2.5rem; margin-bottom: 15px; color: #ff4d4d; letter-spacing: 2px;">ACCESO RESTRINGIDO</h1>
                <p style="font-family: 'Montserrat', sans-serif; font-size: 1.2rem; color: #ccc; max-width: 400px; line-height: 1.6;">El enlace de invitación es incorrecto o ha sido alterado.</p>
                <p style="font-family: 'Montserrat', sans-serif; font-size: 0.9rem; color: #777; margin-top: 30px;">Por favor usa el enlace exacto que te fue proporcionado originalmente.</p>
            </div>
        `;
        document.body.style.overflow = "hidden"; // Prevenir hacer scroll
        return false;
    }
    
    return true; // Acceso válido
}

// ===== Auto-Scroll Hint (Peek Loop) =====
function initAutoScrollPeek() {
    let peekInterval;
    let isPeeking = false;
    let userHasScrolled = false;

    // Detectar cuando el usuario desliza por sí mismo para detener el efecto
    window.addEventListener('scroll', () => {
        // Solo cuenta como scroll manual si baja más allá del pequeño asomo
        if (window.scrollY > 120 && !userHasScrolled && !isPeeking) {
            userHasScrolled = true;
            clearInterval(peekInterval); // Desaparecer el loop por completo
            
            // También ocultamos el contenedor visual si aún existe
            const scrollVisual = document.querySelector('.scroll-container');
            if (scrollVisual) {
                scrollVisual.style.opacity = '0';
                scrollVisual.style.transition = 'opacity 0.5s ease';
                setTimeout(() => scrollVisual.remove(), 500);
            }
        }
    }, { passive: true });

    // Comenzar el loop más rápido, casi de inmediato
    setTimeout(() => {
        if (!userHasScrolled && window.scrollY === 0) {
            startPeekLoop();
        }
    }, 100);

    function startPeekLoop() {
        peekAction();
        
        // Loop muy veloz: se repite cada 1.4 segundos para que llame la atención constante
        peekInterval = setInterval(() => {
            if (!userHasScrolled && window.scrollY === 0 && !isPeeking) {
                peekAction();
            }
        }, 650);
    }

    function peekAction() {
        isPeeking = true;
        const distance = 160; // Sigue subiendo los 160px completos
        const duration = 600; // Acelerado a 650ms en total (Sube y baja como un resorte ultrarrápido)
        const startTime = performance.now();
        const startY = window.scrollY;

        // Función de curva de velocidad (Cubic Ease In-Out)
        // Acelera rápido y frena de golpe como el resorte nativo de los celulares
        function easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function step(currentTime) {
            if (userHasScrolled) return;
            
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Calculamos en qué punto del viaje "ida y vuelta" estamos (0 -> 1 -> 0)
            const phase = progress < 0.5 ? (progress * 2) : (2 - progress * 2);
            
            // Aplicamos la curva "natural" al movimiento
            const easedProgress = easeInOutCubic(phase);
            const currentY = startY + (distance * easedProgress);
            
            window.scrollTo(0, currentY);

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                isPeeking = false;
            }
        }
        
        // Arranca la animación fluida y realista
        requestAnimationFrame(step);
    }
}
