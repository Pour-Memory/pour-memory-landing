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
    const form = document.querySelector('.signup-form');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const formMessage = document.getElementById('formMessage');
    const inputGroup = form.querySelector('.input-group');
    const emailInput = form.querySelector('input[type="email"]');

    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Function to sanitize email input
    function sanitizeEmail(email) {
        // Remove any HTML tags and trim whitespace
        return email.replace(/<[^>]*>/g, '').trim();
    }

    // Function to validate email
    function validateEmail(email) {
        return emailRegex.test(email);
    }

    // Function to show message
    function showMessage(message, isError = false) {
        formMessage.textContent = message;
        formMessage.style.color = isError ? '#f44336' : '#4CAF50';
        formMessage.style.fontSize = isError ? '0.9em' : '1em';
        formMessage.style.marginTop = '8px';
    }

    // Real-time email validation
    emailInput.addEventListener('input', function() {
        const email = sanitizeEmail(this.value);
        if (email && !validateEmail(email)) {
            this.style.borderColor = '#f44336';
        } else {
            this.style.borderColor = 'transparent';
        }
    });

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Sanitize and validate email before submission
        const email = sanitizeEmail(emailInput.value);
        
        if (!email) {
            showMessage('Please enter your email address.', true);
            emailInput.focus();
            return;
        }

        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address.', true);
            emailInput.focus();
            return;
        }

        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        submitBtn.disabled = true;
        formMessage.textContent = '';

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Hide the input and submit button
                inputGroup.style.display = 'none';
                showMessage('Thanks for signing up! We\'ll be in touch soon.');
                form.reset();
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            showMessage('Oops! There was a problem submitting your email. Please try again.', true);
        } finally {
            // Reset button state
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
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