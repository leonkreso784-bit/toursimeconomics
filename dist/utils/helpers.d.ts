/**
 * Utility Functions
 * Common helper functions used throughout the application
 */
/**
 * Debounce function - delays execution until after wait ms have elapsed
 */
export declare function debounce<T extends (...args: unknown[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void;
/**
 * Throttle function - limits execution to once per limit ms
 */
export declare function throttle<T extends (...args: unknown[]) => void>(func: T, limit: number): (...args: Parameters<T>) => void;
/**
 * Format number with thousands separator
 */
export declare function formatNumber(num: number, locale?: string): string;
/**
 * Format currency
 */
export declare function formatCurrency(amount: number, currency?: string, locale?: string): string;
/**
 * Format percentage
 */
export declare function formatPercentage(value: number, decimals?: number): string;
/**
 * Clamp a value between min and max
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Linear interpolation
 */
export declare function lerp(start: number, end: number, t: number): number;
/**
 * Generate unique ID
 */
export declare function generateId(prefix?: string): string;
/**
 * Check if element is in viewport
 */
export declare function isInViewport(element: HTMLElement): boolean;
/**
 * Deep clone an object
 */
export declare function deepClone<T>(obj: T): T;
/**
 * Wait for specified milliseconds
 */
export declare function wait(ms: number): Promise<void>;
/**
 * Sanitize HTML string (basic)
 */
export declare function sanitizeHtml(html: string): string;
/**
 * Get CSS variable value
 */
export declare function getCSSVariable(name: string): string;
/**
 * Set CSS variable value
 */
export declare function setCSSVariable(name: string, value: string): void;
/**
 * Check if device is touch-enabled
 */
export declare function isTouchDevice(): boolean;
/**
 * Check if device is mobile
 */
export declare function isMobileDevice(): boolean;
/**
 * Get browser language
 */
export declare function getBrowserLanguage(): string;
//# sourceMappingURL=helpers.d.ts.map