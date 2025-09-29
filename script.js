// Enhanced Background Effects
function createBackgroundEffects() {
    const particlesContainer = document.querySelector('.particles-container');
    const floatingShapes = document.querySelector('.floating-shapes');
    
    // Create floating particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
    
    // Create floating shapes
    for (let i = 0; i < 3; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-shape';
        floatingShapes.appendChild(shape);
    }
}

// Enhanced Car Image Effects
function enhanceCarImage() {
    const carImage = document.querySelector('.main-car');
    if (carImage) {
        carImage.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.2) contrast(1.1) saturate(1.2)';
            this.style.transform = 'scale(1.05)';
        });
        
        carImage.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1) contrast(1) saturate(1)';
            this.style.transform = 'scale(1)';
        });
        
        // Add click effect
        carImage.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }
}

// Enhanced Gallery Effects
function enhanceGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Enhanced Feature Cards
function enhanceFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
            this.style.boxShadow = '0 25px 50px rgba(0, 168, 204, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Enhanced License Plate Effects
function enhanceLicensePlate() {
    const licensePlate = document.querySelector('.plate-text');
    if (licensePlate) {
        licensePlate.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 30px rgba(0, 168, 204, 1), 0 0 60px rgba(0, 168, 204, 0.5)';
            this.style.transform = 'scale(1.1)';
        });
        
        licensePlate.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 0 20px rgba(0, 168, 204, 0.8)';
            this.style.transform = 'scale(1)';
        });
    }
}

// Enhanced Gas Tank Effects
function enhanceGasTank() {
    const gasTank = document.querySelector('.gas-tank');
    if (gasTank) {
        gasTank.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.boxShadow = '0 25px 50px rgba(40, 167, 69, 0.4)';
        });
        
        gasTank.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.boxShadow = '0 20px 40px rgba(40, 167, 69, 0.3)';
        });
    }
}

// Enhanced Scroll Effects
function enhanceScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background, .car-glow, .floating-elements');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Enhanced Typing Effect
function createTypingEffect() {
    const elements = document.querySelectorAll('.hero-title, .section-title');
    
    elements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        
        // Start typing effect when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(type, 500);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// Enhanced Loading Screen
function enhanceLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.querySelector('.loading-progress');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 500);
        }
        progressBar.style.width = progress + '%';
    }, 200);
}

// Enhanced Cursor Effects
function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(0, 168, 204, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: all 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .gallery-item, .feature-card');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.borderColor = 'rgba(0, 168, 204, 1)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = 'rgba(0, 168, 204, 0.8)';
        });
    });
}

// Enhanced Sound Effects (Visual)
function createSoundEffects() {
    const soundElements = document.querySelectorAll('.feature-card, .gallery-item, .nav-link');
    
    soundElements.forEach(element => {
        element.addEventListener('click', function() {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 168, 204, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (rect.width / 2 - size / 2) + 'px';
            ripple.style.top = (rect.height / 2 - size / 2) + 'px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced Owner Signature Effects
function enhanceOwnerSignature() {
    const ownerSignature = document.querySelector('.owner-signature');
    if (ownerSignature) {
        ownerSignature.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 15px 30px rgba(0, 168, 204, 0.3)';
            this.style.borderColor = 'rgba(0, 168, 204, 0.5)';
        });
        
        ownerSignature.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 5px 15px rgba(0, 168, 204, 0.1)';
            this.style.borderColor = 'rgba(0, 168, 204, 0.2)';
        });
        
        // Add click effect
        ownerSignature.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    }
}

// Mini Game Logic
class GasStationGame {
    constructor() {
        this.gameActive = false;
        this.fuelLevel = 0;
        this.score = 0;
        this.timeLeft = 30;
        this.gameTimer = null;
        this.fuelTimer = null;
        
        this.initializeElements();
        this.setupEventListeners();
    }
    
    initializeElements() {
        this.gameField = document.querySelector('.game-field');
        this.pumpNozzle = document.getElementById('pump-nozzle');
        this.fuelCap = document.getElementById('fuel-cap');
        this.fuelLevelBar = document.getElementById('fuel-level');
        this.fuelPercentage = document.getElementById('fuel-percentage');
        this.gameScore = document.getElementById('game-score');
        this.gameTime = document.getElementById('game-time');
        this.startBtn = document.getElementById('start-game');
        this.resetBtn = document.getElementById('reset-game');
        this.fuelDrops = document.getElementById('fuel-drops');
    }
    
    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.resetBtn.addEventListener('click', () => this.resetGame());
        
        // Mouse movement for nozzle control
        this.gameField.addEventListener('mousemove', (e) => {
            if (this.gameActive) {
                const rect = this.gameField.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                this.pumpNozzle.style.left = (x - 5) + 'px';
                this.pumpNozzle.style.top = (y - 7) + 'px';
                
                this.checkFueling();
            }
        });
        
        // Click to start fueling
        this.gameField.addEventListener('click', (e) => {
            if (this.gameActive) {
                this.startFueling();
            }
        });
        
        // Release to stop fueling
        this.gameField.addEventListener('mouseup', () => {
            this.stopFueling();
        });
    }
    
    startGame() {
        this.gameActive = true;
        this.fuelLevel = 0;
        this.score = 0;
        this.timeLeft = 30;
        
        this.gameField.classList.add('game-active');
        this.startBtn.textContent = 'ИГРА ИДЕТ...';
        this.startBtn.disabled = true;
        
        this.updateDisplay();
        this.startTimer();
    }
    
    resetGame() {
        this.gameActive = false;
        this.fuelLevel = 0;
        this.score = 0;
        this.timeLeft = 30;
        
        this.gameField.classList.remove('game-active');
        this.startBtn.textContent = 'НАЧАТЬ ИГРУ';
        this.startBtn.disabled = false;
        
        this.stopTimers();
        this.updateDisplay();
        this.resetNozzlePosition();
    }
    
    startTimer() {
        this.gameTimer = setInterval(() => {
            this.timeLeft--;
            this.updateDisplay();
            
            if (this.timeLeft <= 0) {
                this.endGame();
            }
        }, 1000);
    }
    
    stopTimers() {
        if (this.gameTimer) {
            clearInterval(this.gameTimer);
            this.gameTimer = null;
        }
        if (this.fuelTimer) {
            clearInterval(this.fuelTimer);
            this.fuelTimer = null;
        }
    }
    
    startFueling() {
        if (this.fuelTimer) return;
        
        this.fuelTimer = setInterval(() => {
            this.addFuel();
            this.createFuelDrop();
        }, 100);
    }
    
    stopFueling() {
        if (this.fuelTimer) {
            clearInterval(this.fuelTimer);
            this.fuelTimer = null;
        }
    }
    
    checkFueling() {
        const nozzleRect = this.pumpNozzle.getBoundingClientRect();
        const fuelCapRect = this.fuelCap.getBoundingClientRect();
        
        const distance = Math.sqrt(
            Math.pow(nozzleRect.left - fuelCapRect.left, 2) +
            Math.pow(nozzleRect.top - fuelCapRect.top, 2)
        );
        
        // Calculate angle for hose rotation
        const angle = Math.atan2(
            fuelCapRect.top - nozzleRect.top,
            fuelCapRect.left - nozzleRect.left
        ) * (180 / Math.PI);
        
        // Set CSS variable for hose rotation
        this.pumpNozzle.style.setProperty('--nozzle-angle', `${angle}deg`);
        
        if (distance < 30) {
            this.pumpNozzle.style.background = '#28a745';
            this.fuelCap.style.background = '#28a745';
            this.fuelCap.style.boxShadow = '0 0 15px rgba(40, 167, 69, 0.8)';
        } else {
            this.pumpNozzle.style.background = '#666';
            this.fuelCap.style.background = '#666';
            this.fuelCap.style.boxShadow = 'none';
        }
    }
    
    addFuel() {
        if (this.fuelLevel < 100) {
            this.fuelLevel += 2;
            this.score += 10;
            this.updateDisplay();
            
            if (this.fuelLevel >= 100) {
                this.fuelLevel = 100;
                this.score += 500; // Bonus for full tank
                this.updateDisplay();
                this.stopFueling();
            }
        }
    }
    
    createFuelDrop() {
        const drop = document.createElement('div');
        drop.className = 'fuel-drop';
        
        const nozzleRect = this.pumpNozzle.getBoundingClientRect();
        const fieldRect = this.gameField.getBoundingClientRect();
        
        drop.style.left = (nozzleRect.left - fieldRect.left) + 'px';
        drop.style.top = (nozzleRect.top - fieldRect.top) + 'px';
        
        this.fuelDrops.appendChild(drop);
        
        setTimeout(() => {
            drop.remove();
        }, 1000);
    }
    
    updateDisplay() {
        this.fuelLevelBar.style.width = this.fuelLevel + '%';
        this.fuelPercentage.textContent = Math.round(this.fuelLevel) + '%';
        this.gameScore.textContent = this.score;
        this.gameTime.textContent = this.timeLeft;
    }
    
    resetNozzlePosition() {
        this.pumpNozzle.style.left = '25px';
        this.pumpNozzle.style.top = '180px';
        this.pumpNozzle.style.background = '#666';
        this.fuelCap.style.background = '#666';
        this.fuelCap.style.boxShadow = 'none';
    }
    
    endGame() {
        this.gameActive = false;
        this.gameField.classList.remove('game-active');
        this.startBtn.textContent = 'НАЧАТЬ ИГРУ';
        this.startBtn.disabled = false;
        
        this.stopTimers();
        
        // Show beautiful notification instead of alert
        if (this.fuelLevel >= 100) {
            showNotification('success', 'Поздравляем!', `Вы заправили автомобиль на ${Math.round(this.fuelLevel)}%! Счет: ${this.score}`);
        } else {
            showNotification('info', 'Игра окончена', `Уровень топлива: ${Math.round(this.fuelLevel)}%. Счет: ${this.score}`);
        }
    }
}

// Beautiful Notification System
function showNotification(type, title, message, duration = 5000) {
    const container = document.getElementById('notification-container');
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    
    const iconMap = {
        success: 'fas fa-check',
        error: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <button class="notification-close">&times;</button>
        <div class="notification-header">
            <div class="notification-icon ${type}">
                <i class="${iconMap[type]}"></i>
            </div>
            <div class="notification-title">${title}</div>
        </div>
        <div class="notification-message">${message}</div>
        <div class="notification-progress">
            <div class="notification-progress-bar"></div>
        </div>
    `;
    
    container.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
    
    // Auto remove after duration
    setTimeout(() => {
        removeNotification(notification);
    }, duration);
    
    // Add click to close
    notification.addEventListener('click', () => {
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.animation = 'notificationSlideOut 0.3s ease-in forwards';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Add slide out animation
const slideOutStyle = document.createElement('style');
slideOutStyle.textContent = `
    @keyframes notificationSlideOut {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(slideOutStyle);

// Initialize Mini Game
let gasStationGame;

document.addEventListener('DOMContentLoaded', function() {
    createBackgroundEffects();
    enhanceCarImage();
    enhanceGallery();
    enhanceFeatureCards();
    enhanceLicensePlate();
    enhanceGasTank();
    enhanceScrollEffects();
    createTypingEffect();
    createCustomCursor();
    createSoundEffects();
    enhanceOwnerSignature();
    
    // Initialize mini game
    gasStationGame = new GasStationGame();
});

// Enhanced Loading Screen
window.addEventListener('load', function() {
    enhanceLoadingScreen();
    
    // Show gas refuel notification
    setTimeout(() => {
        showNotification('info', 'Информация', 'Автомобиль работает на газовом топливе (ГБО). Экономия до 50%!', 6000);
    }, 5000);
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
        
        // Close mobile menu when clicking on links
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Smooth scrolling for navigation links
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

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Gallery modal functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const imageSrc = this.querySelector('img').src;
        modalImage.src = imageSrc;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add entrance animation
        modalImage.style.opacity = '0';
        modalImage.style.transform = 'scale(0.8)';
        setTimeout(() => {
            modalImage.style.transition = 'all 0.3s ease';
            modalImage.style.opacity = '1';
            modalImage.style.transform = 'scale(1)';
        }, 10);
    });
});

// Close modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .gallery-item, .spec-item, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Enhanced parallax effects
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    // Hero parallax
    const heroBackground = document.querySelector('.hero-background');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroBackground && heroContent) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
    
    // Video section parallax
    const videoSection = document.querySelector('.video-section');
    if (videoSection) {
        const rect = videoSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            videoSection.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    }
    
    // Stats section parallax
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            statsSection.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
    }
});

// License plate animation on scroll
window.addEventListener('scroll', function() {
    const licensePlate = document.querySelector('.plate-text');
    const licenseShowcase = document.querySelector('.license-showcase');
    
    if (licensePlate && licenseShowcase) {
        const rect = licenseShowcase.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            licensePlate.style.animation = 'plateNumberGlow 1s ease-in-out infinite alternate';
        } else {
            licensePlate.style.animation = 'none';
        }
    }
});

// Animated Statistics Counter
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        
        if (end % 1 !== 0) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = current;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Stats animation observer
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseFloat(stat.getAttribute('data-target'));
                animateCounter(stat, 0, target, 2000);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Initialize stats animation
document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const testimonialBtns = document.querySelectorAll('.testimonial-btn');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
    
    testimonialBtns.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    
    currentTestimonial = index;
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Initialize testimonials
document.addEventListener('DOMContentLoaded', function() {
    testimonialBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    // Auto-rotate testimonials
    setInterval(nextTestimonial, 5000);
});

// Video placeholder click handler
document.addEventListener('DOMContentLoaded', function() {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            // Add video loading animation
            this.innerHTML = `
                <div class="video-loading">
                    <i class="fas fa-spinner fa-spin"></i>
                    <h3>ЗАГРУЗКА ВИДЕО...</h3>
                    <p>Подготовка эксклюзивной презентации</p>
                </div>
            `;
            
            // Simulate video loading
            setTimeout(() => {
                this.innerHTML = `
                    <i class="fas fa-play-circle"></i>
                    <h3>ВИДЕО ГОТОВО</h3>
                    <p>Нажмите для воспроизведения</p>
                `;
            }, 2000);
        });
    }
});

// Map placeholder click handler
document.addEventListener('DOMContentLoaded', function() {
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('click', function() {
            // Add map loading animation
            this.innerHTML = `
                <div class="map-loading">
                    <i class="fas fa-spinner fa-spin"></i>
                    <h3>ЗАГРУЗКА КАРТЫ...</h3>
                    <p>Поиск местоположения</p>
                </div>
            `;
            
            // Simulate map loading
            setTimeout(() => {
                this.innerHTML = `
                    <i class="fas fa-map-marked-alt"></i>
                    <h3>КАРТА ЗАГРУЖЕНА</h3>
                    <p>Интерактивная карта готова</p>
                `;
            }, 1500);
        });
    }
});

// Add floating elements animation
function createFloatingElements() {
    const floatingContainer = document.createElement('div');
    floatingContainer.className = 'floating-elements';
    floatingContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    document.body.appendChild(floatingContainer);
    
    // Create floating car icons
    for (let i = 0; i < 8; i++) {
        const floatingElement = document.createElement('div');
        floatingElement.innerHTML = '<i class="fas fa-car"></i>';
        floatingElement.style.cssText = `
            position: absolute;
            font-size: 20px;
            color: rgba(0, 168, 204, 0.1);
            animation: floatElement ${Math.random() * 20 + 20}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 10}s;
        `;
        
        floatingContainer.appendChild(floatingElement);
    }
}

// Add CSS for floating elements
const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
    @keyframes floatElement {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        90% {
            opacity: 0.3;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatingStyle);

// Initialize floating elements
window.addEventListener('load', function() {
    setTimeout(createFloatingElements, 2000);
});

// Enhanced scroll progress indicator
function createEnhancedScrollProgress() {
    const progressContainer = document.createElement('div');
    progressContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(0, 0, 0, 0.1);
        z-index: 10001;
    `;
    
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        height: 100%;
        background: linear-gradient(90deg, #00a8cc, #ffffff, #00a8cc);
        background-size: 200% 100%;
        animation: progressGradient 3s ease infinite;
        transition: width 0.1s ease;
    `;
    
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressBar);
    
    // Add gradient animation
    const progressStyle = document.createElement('style');
    progressStyle.textContent = `
        @keyframes progressGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(progressStyle);
    
    window.addEventListener('scroll', function() {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize enhanced scroll progress
document.addEventListener('DOMContentLoaded', createEnhancedScrollProgress);

// Add floating particles effect
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 168, 204, 0.3);
            border-radius: 50%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 10}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles after page load
window.addEventListener('load', function() {
    setTimeout(createParticles, 1000);
});

// Add typing effect for hero subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', function() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        setTimeout(() => {
            typeWriter(subtitle, originalText, 80);
        }, 1000);
    }
});

// Add mouse cursor effect
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'custom-cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid rgba(0, 168, 204, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transition: all 0.1s ease;
        `;
        document.body.appendChild(newCursor);
    }
    
    const customCursor = document.querySelector('.custom-cursor');
    if (customCursor) {
        customCursor.style.left = e.clientX - 10 + 'px';
        customCursor.style.top = e.clientY - 10 + 'px';
    }
});

// Hide default cursor and show custom cursor
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.cursor = 'none';
});

// Car image hover effect
document.addEventListener('DOMContentLoaded', function() {
    const carImage = document.querySelector('.main-car');
    if (carImage) {
        carImage.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) contrast(1.1)';
        });
        
        carImage.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1) contrast(1)';
        });
    }
});

// Gas fuel type special effects
document.addEventListener('DOMContentLoaded', function() {
    const gasSpecItem = document.querySelector('.spec-item:has(.spec-value:contains("ГАЗ"))');
    if (gasSpecItem) {
        // Add special animation for gas fuel type
        gasSpecItem.style.animation = 'gasGlow 3s ease-in-out infinite alternate';
        
        // Add CSS for gas glow animation
        const gasStyle = document.createElement('style');
        gasStyle.textContent = `
            @keyframes gasGlow {
                0% { 
                    box-shadow: 0 0 20px rgba(40, 167, 69, 0.3);
                    border-left-color: #28a745;
                }
                100% { 
                    box-shadow: 0 0 30px rgba(40, 167, 69, 0.6);
                    border-left-color: #20c997;
                }
            }
        `;
        document.head.appendChild(gasStyle);
    }
});
