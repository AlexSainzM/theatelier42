document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const heroBg = document.querySelector('.hero-bg');

    // TODO: Reemplazar wa.me/5210000000000 en index.html con número real de WhatsApp

    if (heroBg) {
        if (heroBg.complete) {
            heroBg.classList.add('loaded');
        } else {
            heroBg.addEventListener('load', () => heroBg.classList.add('loaded'));
        }
    }

    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (y > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('open');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up-element').forEach(el => observer.observe(el));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = navbar.offsetHeight;
                const pos = target.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({ top: pos, behavior: 'smooth' });
            }
        });
    });

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // TODO: Enviar a Formspree — action/method en index.html y fetch opcional:
            // fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })

            const btn = form.querySelector('button');
            const btnText = btn.querySelector('.btn-text');
            const original = btnText.textContent;
            btnText.textContent = 'Enviando…';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            setTimeout(() => {
                btnText.textContent = '¡Solicitud enviada!';
                form.reset();
                setTimeout(() => {
                    btnText.textContent = original;
                    btn.disabled = false;
                    btn.style.opacity = '';
                }, 3000);
            }, 1200);
        });
    }

    const marqueeTrack = document.querySelector('.marquee-track');
    if (marqueeTrack) {
        const content = marqueeTrack.innerHTML;
        marqueeTrack.innerHTML = content + content;
    }
});
