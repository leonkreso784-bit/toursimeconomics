/**
 * Utility Functions
 * Common helper functions used throughout the application
 */
/**
 * Debounce function - delays execution until after wait ms have elapsed
 */
export function debounce(func, wait) {
    let timeout = null;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            func(...args);
        };
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);
    };
}
/**
 * Throttle function - limits execution to once per limit ms
 */
export function throttle(func, limit) {
    let inThrottle = false;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}
/**
 * Format number with thousands separator
 */
export function formatNumber(num, locale = 'en-US') {
    return new Intl.NumberFormat(locale).format(num);
}
/**
 * Format currency
 */
export function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(amount);
}
/**
 * Format percentage
 */
export function formatPercentage(value, decimals = 1) {
    return `${value.toFixed(decimals)}%`;
}
/**
 * Clamp a value between min and max
 */
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
/**
 * Linear interpolation
 */
export function lerp(start, end, t) {
    return start + (end - start) * t;
}
/**
 * Generate unique ID
 */
export function generateId(prefix = 'id') {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
/**
 * Check if element is in viewport
 */
export function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}
/**
 * Deep clone an object
 */
export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/**
 * Wait for specified milliseconds
 */
export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * Sanitize HTML string (basic)
 */
export function sanitizeHtml(html) {
    const temp = document.createElement('div');
    temp.textContent = html;
    return temp.innerHTML;
}
/**
 * Get CSS variable value
 */
export function getCSSVariable(name) {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
}
/**
 * Set CSS variable value
 */
export function setCSSVariable(name, value) {
    document.documentElement.style.setProperty(name, value);
}
/**
 * Check if device is touch-enabled
 */
export function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
/**
 * Check if device is mobile
 */
export function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
/**
 * Get browser language
 */
export function getBrowserLanguage() {
    return navigator.language || 'en-US';
}
//# sourceMappingURL=helpers.js.map