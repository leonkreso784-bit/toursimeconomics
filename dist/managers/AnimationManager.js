/**
 * Animation Manager
 * Manages slide transitions and element animations
 */
export class AnimationManager {
    constructor() {
        this.defaultDuration = 500;
    }
    /**
     * Animate slide entrance
     */
    animateIn(element, direction) {
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
    animateOut(element, direction) {
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
    animateElement(element, animation, delay = 0) {
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
    staggerAnimate(elements, animation, staggerDelay = 100) {
        elements.forEach((element, index) => {
            this.animateElement(element, animation, index * staggerDelay);
        });
    }
    /**
     * Get CSS animation class name
     */
    getAnimationClass(animation) {
        const classMap = {
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
    setDuration(duration) {
        this.defaultDuration = duration;
    }
    /**
     * Get current animation duration
     */
    getDuration() {
        return this.defaultDuration;
    }
}
//# sourceMappingURL=AnimationManager.js.map