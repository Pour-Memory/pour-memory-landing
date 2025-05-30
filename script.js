// ===== POUR MEMORY LANDING PAGE SCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initFormHandling();
    initParallaxEffects();
    initAnimations();
    initAccessibility();
});

// ===== FORM HANDLING =====
function initFormHandling() {
    const form = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const messageDiv = document.getElementById('formMessage');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Form submission handler
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Clear previous messages
        clearMessage();
        
        // Validate email
        if (!email) {
            showMessage('Please enter your email address.', 'error');
            emailInput.focus();
            return;
        }
        
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            emailInput.focus();
            return;
        }
        
        // Show loading state
        setLoadingState(true);
        
        try {
            // Simulate API call (replace with actual endpoint)
            await simulateEmailSubmission(email);
            
            // Success
            showMessage('Thank you! We\'ll notify you when Pour Memory launches.', 'success');
            emailInput.value = '';
            
            // Add celebration animation
            celebrateSubmission();
            
        } catch (error) {
            // Error
            showMessage('Something went wrong. Please try again.', 'error');
            console.error('Form submission error:', error);
        } finally {
            setLoadingState(false);
        }
    });

    // Real-time email validation
    emailInput.addEventListener('input', function() {
        clearMessage();
        
        const email = this.value.trim();
        if (email && !emailRegex.test(email)) {
            this.style.borderColor = 'var(--color-merlot)';
        } else {
            this.style.borderColor = 'transparent';
        }
    });

    // Loading state management
    function setLoadingState(loading) {
        if (loading) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline-block';
        } else {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            btnText.style.display = 'inline-block';
            btnLoading.style.display = 'none';
        }
    }

    // Message display functions
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `form-message ${type}`;
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }

    function clearMessage() {
        messageDiv.textContent = '';
        messageDiv.className = 'form-message';
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(-10px)';
    }

    // Simulate API call (replace with your actual email service)
    async function simulateEmailSubmission(email) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate 90% success rate
                if (Math.random() > 0.1) {
                    console.log('Email submitted:', email);
                    resolve();
                } else {
                    reject(new Error('Simulated network error'));
                }
            }, 1500);
        });
    }

    // Celebration animation
    function celebrateSubmission() {
        // Create floating particles
        for (let i = 0; i < 5; i++) {
            setTimeout(() => createParticle(), i * 100);
        }
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--color-merlot);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            opacity: 1;
        `;
        
        const rect = submitBtn.getBoundingClientRect();
        particle.style.left = (rect.left + rect.width / 2) + 'px';
        particle.style.top = (rect.top + rect.height / 2) + 'px';
        
        document.body.appendChild(particle);
        
        // Animate particle
        const angle = Math.random() * Math.PI * 2;
        const velocity = 100 + Math.random() * 100;
        const duration = 1000 + Math.random() * 1000;
        
        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fill: 'forwards'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

// ===== PARALLAX EFFECTS =====
function initParallaxEffects() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const opacity = Math.max(0, 1 - scrolled / window.innerHeight);
        
        // Parallax background
        const overlay = document.querySelector('.background-overlay');
        if (overlay) {
            overlay.style.transform = `translateY(${rate}px)`;
            overlay.style.opacity = opacity;
        }
        
        // Parallax mission text
        const missionText = document.querySelector('.mission-text');
        if (missionText) {
            const missionRate = scrolled * -0.2;
            missionText.style.transform = `translateY(${missionRate}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Only add parallax on larger screens
    if (window.innerWidth > 768) {
        window.addEventListener('scroll', requestTick);
    }
    
    // Handle resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            window.removeEventListener('scroll', requestTick);
        } else {
            window.addEventListener('scroll', requestTick);
        }
    });
}

// ===== ANIMATIONS =====
function initAnimations() {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.mission-section, .signup-section');
    animateElements.forEach(el => observer.observe(el));
    
    // Smooth hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.email-input, .submit-btn');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
}

// ===== ACCESSIBILITY =====
function initAccessibility() {
    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    function handleReducedMotion(e) {
        if (e.matches) {
            document.body.classList.add('reduced-motion');
        } else {
            document.body.classList.remove('reduced-motion');
        }
    }
    
    prefersReducedMotion.addListener(handleReducedMotion);
    handleReducedMotion(prefersReducedMotion);
    
    // Enhanced focus management
    const focusableElements = document.querySelectorAll(
        'button, input, textarea, select, a[href], [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        
        element.addEventListener('blur', function() {
            this.classList.remove('focused');
        });
    });
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== CONSOLE BRANDING =====
console.log(
    '%c🍷 Pour Memory Landing Page %c\nTransforming wine into a keepsake. Savor the story.',
    'font-size: 16px; font-weight: bold; color: #74271B;',
    'font-size: 12px; color: #5F5241;'
);

// ===== GLOBAL ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Page error:', e.error);
    // You could send this to an error tracking service
});

// ===== PERFORMANCE MONITORING =====
window.addEventListener('load', function() {
    // Log page load performance
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
    
    // Check if animations are performing well
    if (loadTime > 3000) {
        console.warn('Page load time is slow, consider optimizing animations');
        document.body.classList.add('slow-device');
    }
}); 