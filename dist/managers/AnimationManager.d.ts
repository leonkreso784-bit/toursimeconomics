/**
 * Animation Manager
 * Manages slide transitions and element animations
 */
import { NavigationDirection, AnimationType } from '../types/index.js';
export declare class AnimationManager {
    private defaultDuration;
    /**
     * Animate slide entrance
     */
    animateIn(element: HTMLElement, direction: NavigationDirection): void;
    /**
     * Animate slide exit
     */
    animateOut(element: HTMLElement, direction: NavigationDirection): void;
    /**
     * Animate element with specific animation type
     */
    animateElement(element: HTMLElement, animation: AnimationType, delay?: number): void;
    /**
     * Stagger animate multiple elements
     */
    staggerAnimate(elements: HTMLElement[], animation: AnimationType, staggerDelay?: number): void;
    /**
     * Get CSS animation class name
     */
    private getAnimationClass;
    /**
     * Set animation duration
     */
    setDuration(duration: number): void;
    /**
     * Get current animation duration
     */
    getDuration(): number;
}
//# sourceMappingURL=AnimationManager.d.ts.map