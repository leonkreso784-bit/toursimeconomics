/**
 * Navigation Types
 * Defines navigation-related interfaces
 */

export interface NavigationState {
    currentSlide: number;
    totalSlides: number;
    isAnimating: boolean;
    direction: NavigationDirection;
}

export type NavigationDirection = 'forward' | 'backward' | 'none';

export interface NavigationEvent {
    type: 'next' | 'prev' | 'goto';
    targetSlide?: number;
    source: NavigationSource;
}

export type NavigationSource = 
    | 'keyboard'
    | 'mouse'
    | 'touch'
    | 'button'
    | 'menu'
    | 'url';

export interface MenuItem {
    index: number;
    title: string;
    isActive: boolean;
}
