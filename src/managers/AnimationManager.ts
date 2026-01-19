/**
 * Animation Manager
 * Manages slide transitions and element animations
 */

import { NavigationDirection, AnimationType } from '../types/index.js';

export class AnimationManager {
    private defaultDuration: number = 500;

    /**
     * Animate slide entrance
     */
    public animateIn(element: HTMLElement, direction: NavigationDirection): void {
        element.classList.remove('slide-exit', 'slide-exit-left', 'slide-exit-right');
        
        switch (direction) {
            case 'forward':
                element.classList.add('slide-enter-right');
                break;
            case 'backward':
                element.classList.add('slide-enter-left');
                break;
            default:
                element.classList.add('slide-enter');
        }

        // Remove animation class after completion
        setTimeout(() => {
            element.classList.remove('slide-enter', 'slide-enter-left', 'slide-enter-right');
        }, this.defaultDuration);
    }

    /**
     * Animate slide exit
     */
    public animateOut(element: HTMLElement, direction: NavigationDirection): void {
        element.classList.remove('slide-enter', 'slide-enter-left', 'slide-enter-right');
        
        switch (direction) {
            case 'forward':
                element.classList.add('slide-exit-left');
                break;
            case 'backward':
                element.classList.add('slide-exit-right');
                break;
            default:
                element.classList.add('slide-exit');
        }
    }

    /**
     * Animate element with specific animation type
     */
    public animateElement(
        element: HTMLElement, 
        animation: AnimationType, 
        delay: number = 0
    ): void {
        element.style.animationDelay = `${delay}ms`;
        element.classList.add('animate', `animate-${this.getAnimationClass(animation)}`);

        // Remove animation classes after completion
        const duration = this.defaultDuration + delay;
        setTimeout(() => {
            element.classList.remove('animate', `animate-${this.getAnimationClass(animation)}`);
            element.style.animationDelay = '';
        }, duration);
    }

    /**
     * Stagger animate multiple elements
     */
    public staggerAnimate(
        elements: HTMLElement[], 
        animation: AnimationType, 
        staggerDelay: number = 100
    ): void {
        elements.forEach((element, index) => {
            this.animateElement(element, animation, index * staggerDelay);
        });
    }

    /**
     * Get CSS animation class name
     */
    private getAnimationClass(animation: AnimationType): string {
        const classMap: Record<AnimationType, string> = {
            'fade': 'fadeIn',
            'fadeUp': 'fadeInUp',
            'fadeDown': 'fadeInDown',
            'fadeLeft': 'fadeInLeft',
            'fadeRight': 'fadeInRight',
            'scale': 'scaleIn',
            'slide': 'slideInRight'
        };
        return classMap[animation] || 'fadeIn';
    }

    /**
     * Set animation duration
     */
    public setDuration(duration: number): void {
        this.defaultDuration = duration;
    }

    /**
     * Get current animation duration
     */
    public getDuration(): number {
        return this.defaultDuration;
    }
}
