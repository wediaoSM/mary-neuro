// NeuroCode Landing Page JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize all animations and interactions
    initAnimations();
    initSwiper();
    initNavigation();
    initScrollEffects();
    
});

// Animation Functions
function initAnimations() {
    
    // Hero animations
    gsap.from(".hero-card", {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
    });
    
    gsap.from("h1 span", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });
    
    gsap.from(".hero-3d svg line", {
        duration: 2,
        strokeDasharray: "100%",
        strokeDashoffset: "100%",
        ease: "power2.inOut",
        stagger: 0.1,
        delay: 1
    });
    
    // Floating shapes animation
    gsap.to(".floating-shape", {
        duration: 8,
        rotation: 360,
        repeat: -1,
        ease: "none",
        stagger: 1
    });
    
    // Stats counter animation
    gsap.from(".grid.grid-cols-3 > div", {
        scrollTrigger: {
            trigger: ".grid.grid-cols-3",
            start: "top 80%",
        },
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });
    
    // CEO Section Animations
    gsap.from("#ceo .aspect-square", {
        scrollTrigger: {
            trigger: "#ceo",
            start: "top 70%",
        },
        duration: 1.5,
        x: -100,
        opacity: 0,
        ease: "power3.out"
    });
    
    gsap.from("#ceo .space-y-8", {
        scrollTrigger: {
            trigger: "#ceo",
            start: "top 70%",
        },
        duration: 1.5,
        x: 100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3
    });
    
    // Mission Cards Animation
    gsap.from("#missao .group", {
        scrollTrigger: {
            trigger: "#missao .grid.lg\\:grid-cols-3",
            start: "top 70%",
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });
    
    // Mission Steps Animation
    gsap.from("#missao .grid.md\\:grid-cols-4 > div", {
        scrollTrigger: {
            trigger: "#missao .grid.md\\:grid-cols-4",
            start: "top 80%",
        },
        duration: 1,
        y: 40,
        opacity: 0,
        stagger: 0.3,
        ease: "power3.out"
    });
    
    // Product Section Animations
    gsap.from("#produto .bg-gradient-to-br", {
        scrollTrigger: {
            trigger: "#produto .grid.lg\\:grid-cols-2",
            start: "top 70%",
        },
        duration: 1.5,
        scale: 0.8,
        opacity: 0,
        ease: "power3.out"
    });
    
    gsap.from("#produto .space-y-8", {
        scrollTrigger: {
            trigger: "#produto .grid.lg\\:grid-cols-2",
            start: "top 70%",
        },
        duration: 1.5,
        x: 100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3
    });
    
    // Product Features Animation
    gsap.from("#produto .flex.items-start", {
        scrollTrigger: {
            trigger: "#produto .space-y-6",
            start: "top 80%",
        },
        duration: 0.8,
        x: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });
    
    // Product Benefits Animation
    gsap.from("#produto .grid.md\\:grid-cols-2 > div", {
        scrollTrigger: {
            trigger: "#produto .bg-gray-50.rounded-3xl",
            start: "top 80%",
        },
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.15,
        ease: "power3.out"
    });
    
    // Mentoria Section Animations
    gsap.from("#mentoria .space-y-8", {
        scrollTrigger: {
            trigger: "#mentoria .grid.lg\\:grid-cols-2",
            start: "top 70%",
        },
        duration: 1.5,
        x: -100,
        opacity: 0,
        ease: "power3.out"
    });
    
    gsap.from("#mentoria .bg-white.rounded-3xl", {
        scrollTrigger: {
            trigger: "#mentoria .grid.lg\\:grid-cols-2",
            start: "top 70%",
        },
        duration: 1.5,
        x: 100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.3
    });
    
    // Mentoria Features Animation
    gsap.from("#mentoria .flex.items-start", {
        scrollTrigger: {
            trigger: "#mentoria .space-y-6",
            start: "top 80%",
        },
        duration: 0.8,
        x: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });
    
    // Timeline Steps Animation
    gsap.from("#mentoria .space-y-4 > div", {
        scrollTrigger: {
            trigger: "#mentoria .space-y-4",
            start: "top 85%",
        },
        duration: 1,
        y: 40,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });
    
    // Testimonial Animation
    gsap.from("#mentoria blockquote", {
        scrollTrigger: {
            trigger: "#mentoria .bg-white.rounded-3xl.p-12",
            start: "top 80%",
        },
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });
    
    // Portfolio Section Animations
    gsap.from("#portfolio .swiper", {
        scrollTrigger: {
            trigger: "#portfolio",
            start: "top 70%",
        },
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power3.out"
    });
    
    // Portfolio Stats Animation
    gsap.from("#portfolio .grid.md\\:grid-cols-4 > div", {
        scrollTrigger: {
            trigger: "#portfolio .grid.md\\:grid-cols-4",
            start: "top 80%",
        },
        duration: 1,
        y: 40,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });
}

// Swiper Initialization
function initSwiper() {
    // Initialize Swiper for Portfolio
    const portfolioSwiper = new Swiper('.portfolio-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
}

// Navigation Functions
function initNavigation() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-blur');
        } else {
            navbar.classList.remove('navbar-blur');
        }
    });
    
    // Parallax effect for floating shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.floating-shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Utility Functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Form Validation (to be used later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('border-red-500');
        } else {
            input.classList.remove('border-red-500');
        }
    });
    
    return isValid;
}

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Loading state management
function showLoading(element) {
    element.innerHTML = '<div class="loading-dots"><div></div><div></div><div></div><div></div></div>';
    element.disabled = true;
}

function hideLoading(element, originalText) {
    element.innerHTML = originalText;
    element.disabled = false;
}

// Analytics tracking (placeholder)
function trackEvent(action, category, label) {
    // Google Analytics or other tracking service integration
    console.log(`Event tracked: ${action} in ${category} - ${label}`);
}

// Performance optimization
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Here you could send error reports to a logging service
});

// ===========================================
// 🎯 Alpine.js Components
// ===========================================

// Contact Form Component
window.contactForm = () => ({
    form: {
        name: '',
        email: '',
        phone: '',
        company: '',
        interest: '',
        message: '',
        budget: ''
    },
    errors: {},
    isSubmitting: false,
    showSuccess: false,

    validateForm() {
        this.errors = {};
        
        if (!this.form.name.trim()) {
            this.errors.name = 'Nome é obrigatório';
        }
        
        if (!this.form.email.trim()) {
            this.errors.email = 'Email é obrigatório';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
            this.errors.email = 'Email inválido';
        }
        
        if (!this.form.phone.trim()) {
            this.errors.phone = 'WhatsApp é obrigatório';
        }
        
        if (!this.form.interest) {
            this.errors.interest = 'Selecione um interesse';
        }
        
        return Object.keys(this.errors).length === 0;
    },

    async submitForm() {
        if (!this.validateForm()) {
            return;
        }

        this.isSubmitting = true;

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Here you would normally send the form data to your backend
            console.log('Form submitted:', this.form);
            
            this.showSuccess = true;
            this.resetForm();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                this.showSuccess = false;
            }, 5000);
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Erro ao enviar formulário. Tente novamente.');
        } finally {
            this.isSubmitting = false;
        }
    },

    resetForm() {
        this.form = {
            name: '',
            email: '',
            phone: '',
            company: '',
            interest: '',
            message: '',
            budget: ''
        };
        this.errors = {};
    }
});

// FAQ Accordion Component
window.faqAccordion = () => ({
    openItems: [],

    isOpen(id) {
        return this.openItems.includes(id);
    },

    toggle(id) {
        if (this.isOpen(id)) {
            this.openItems = this.openItems.filter(item => item !== id);
        } else {
            this.openItems.push(id);
        }
    }
});

// Export functions for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initAnimations,
        initSwiper,
        initNavigation,
        validateForm,
        validateEmail,
        contactForm,
        faqAccordion
    };
}