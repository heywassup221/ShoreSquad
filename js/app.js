/**
 * ShoreSquad - Main Application Script
 * 
 * Features:
 * - Navigation interactivity
 * - Dynamic content loading
 * - Performance optimization
 * - Accessibility enhancements
 */

// ===================================
// Configuration & Constants
// ===================================

const CONFIG = {
    apiBaseUrl: 'https://api.example.com',
    mapRefreshInterval: 30000, // 30 seconds
    weatherRefreshInterval: 600000, // 10 minutes
    debugMode: true,
};

// ===================================
// Utility Functions
// ===================================

/**
 * Debounce function to optimize performance
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function}
 */
function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/**
 * Log messages in debug mode
 * @param {string} message - Message to log
 * @param {*} data - Optional data to log
 */
function debug(message, data = null) {
    if (CONFIG.debugMode) {
        console.log(`[ShoreSquad] ${message}`, data || '');
    }
}

// ===================================
// Navigation Functionality
// ===================================

class Navigation {
    constructor() {
        this.toggle = document.querySelector('.nav-toggle');
        this.navLinks = document.querySelector('.nav-links');
        this.init();
    }

    init() {
        // Mobile menu toggle
        if (this.toggle) {
            this.toggle.addEventListener('click', () => this.toggleMenu());
        }

        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close menu on scroll (optional)
        window.addEventListener('scroll', () => {
            this.closeMenu();
        });

        debug('Navigation initialized');
    }

    toggleMenu() {
        this.toggle.classList.toggle('active');
        this.navLinks.style.display = 
            this.navLinks.style.display === 'flex' ? 'none' : 'flex';
    }

    closeMenu() {
        this.toggle?.classList.remove('active');
        if (this.navLinks) {
            this.navLinks.style.display = 'none';
        }
    }
}

// ===================================
// Map Handler (Placeholder)
// ===================================

class MapHandler {
    constructor() {
        this.container = document.getElementById('map-container');
        this.init();
    }

    init() {
        debug('Map handler initialized');
        // Placeholder for map integration (e.g., Leaflet, Google Maps)
        this.loadPlaceholder();
    }

    loadPlaceholder() {
        if (this.container) {
            this.container.innerHTML = `
                <div style="text-align: center;">
                    <p style="font-size: 2rem; margin: 0;">🗺️</p>
                    <p style="color: #0066CC; font-weight: 600;">Map integration coming soon!</p>
                    <p style="color: #666; font-size: 0.9rem;">Connect with Leaflet or Google Maps API</p>
                </div>
            `;
        }
    }

    async updateCleanups() {
        // TODO: Fetch cleanup events from API
        debug('Updating cleanup events');
    }
}

// ===================================
// Weather Handler (Placeholder)
// ===================================

class WeatherHandler {
    constructor() {
        this.widget = document.getElementById('weather-widget');
        this.init();
    }

    init() {
        debug('Weather handler initialized');
        this.loadPlaceholder();
        // Uncomment for live updates
        // setInterval(() => this.updateWeather(), CONFIG.weatherRefreshInterval);
    }

    loadPlaceholder() {
        if (this.widget) {
            this.widget.innerHTML = `
                <div class="weather-placeholder" style="grid-column: 1 / -1;">
                    <p style="font-size: 2rem; margin: 0;">☀️</p>
                    <p style="color: #0066CC; font-weight: 600;">Weather Integration</p>
                    <p style="color: #666; font-size: 0.9rem;">OpenWeatherMap API coming soon</p>
                </div>
            `;
        }
    }

    async updateWeather() {
        // TODO: Fetch weather data from API
        debug('Fetching weather data');
    }
}

// ===================================
// Crew Management (Placeholder)
// ===================================

class CrewManager {
    constructor() {
        this.crewList = document.getElementById('crew-list');
        this.init();
    }

    init() {
        debug('Crew manager initialized');
        this.loadPlaceholder();
    }

    loadPlaceholder() {
        if (this.crewList) {
            this.crewList.innerHTML = `
                <div class="crew-placeholder">
                    <p style="font-size: 2rem; margin: 0;">👥</p>
                    <p style="color: #0066CC; font-weight: 600;">Join or Create a Crew</p>
                    <p style="color: #666;">Connect with eco-warriors near you</p>
                </div>
            `;
        }
    }

    async loadCrews() {
        // TODO: Fetch crews from API
        debug('Loading crew data');
    }
}

// ===================================
// CTA Button Handler
// ===================================

class CTAHandler {
    constructor() {
        this.button = document.querySelector('.cta-button');
        this.init();
    }

    init() {
        if (this.button) {
            this.button.addEventListener('click', () => this.handleCTA());
        }
    }

    handleCTA() {
        debug('CTA button clicked');
        // TODO: Route to signup/onboarding
        alert('Welcome to ShoreSquad! Sign-up coming soon.');
    }
}

// ===================================
// Performance Monitoring
// ===================================

class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        // Report performance metrics
        window.addEventListener('load', () => {
            this.reportMetrics();
        });
    }

    reportMetrics() {
        if (window.performance && window.performance.timing) {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            debug(`Page load time: ${loadTime}ms`);
        }
    }
}

// ===================================
// Accessibility Enhancements
// ===================================

class Accessibility {
    constructor() {
        this.init();
    }

    init() {
        // Skip to main content link
        this.addSkipLink();
        
        // Keyboard navigation
        this.enhanceKeyboardNav();
        
        debug('Accessibility features enabled');
    }

    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background: #00A86B;
            color: white;
            padding: 8px 16px;
            z-index: 1000;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '0';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.prepend(skipLink);
    }

    enhanceKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            // Escape key to close mobile menu
            if (e.key === 'Escape') {
                const nav = document.querySelector('.nav-toggle');
                if (nav?.classList.contains('active')) {
                    nav.click();
                }
            }
        });
    }
}

// ===================================
// Application Initialization
// ===================================

class App {
    constructor() {
        this.init();
    }

    init() {
        debug('ShoreSquad app initializing...');
        
        // Initialize all components
        new Navigation();
        new MapHandler();
        new WeatherHandler();
        new CrewManager();
        new CTAHandler();
        new PerformanceMonitor();
        new Accessibility();
        
        debug('ShoreSquad app ready!');
    }
}

// ===================================
// Start Application
// ===================================

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new App();
    });
} else {
    new App();
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { App, Navigation, MapHandler, WeatherHandler, CrewManager };
}
