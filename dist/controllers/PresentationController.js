/**
 * Presentation Controller
 * Manages the overall presentation state and slide transitions
 */
import { SlideRenderer } from '../renderers/SlideRenderer.js';
export class PresentationController {
    constructor(slideManager, animationManager) {
        this.container = null;
        this.slideManager = slideManager;
        this.animationManager = animationManager;
        this.slideRenderer = new SlideRenderer();
        this.state = {
            currentSlide: 0,
            totalSlides: slideManager.getTotalSlides(),
            isAnimating: false,
            direction: 'none'
        };
    }
    /**
     * Render all slides to the DOM
     */
    renderSlides() {
        this.container = document.getElementById('presentation');
        if (!this.container) {
            console.error('Presentation container not found!');
            return;
        }
        const slides = this.slideManager.getAllSlides();
        slides.forEach((slide, index) => {
            const slideElement = this.slideRenderer.render(slide, index);
            this.container.appendChild(slideElement);
        });
    }
    /**
     * Navigate to next slide
     */
    nextSlide() {
        if (this.state.isAnimating)
            return;
        const nextIndex = this.state.currentSlide + 1;
        if (nextIndex < this.state.totalSlides) {
            this.goToSlide(nextIndex, 'forward');
        }
    }
    /**
     * Navigate to previous slide
     */
    prevSlide() {
        if (this.state.isAnimating)
            return;
        const prevIndex = this.state.currentSlide - 1;
        if (prevIndex >= 0) {
            this.goToSlide(prevIndex, 'backward');
        }
    }
    /**
     * Navigate to specific slide
     */
    goToSlide(index, direction = 'none') {
        if (this.state.isAnimating)
            return;
        if (index < 0 || index >= this.state.totalSlides)
            return;
        if (index === this.state.currentSlide)
            return;
        this.state.isAnimating = true;
        this.state.direction = direction || (index > this.state.currentSlide ? 'forward' : 'backward');
        const currentSlideEl = this.getSlideElement(this.state.currentSlide);
        const targetSlideEl = this.getSlideElement(index);
        if (currentSlideEl && targetSlideEl) {
            // Animate out current slide
            this.animationManager.animateOut(currentSlideEl, this.state.direction);
            // Animate in target slide
            setTimeout(() => {
                currentSlideEl.classList.remove('active');
                targetSlideEl.classList.add('active');
                this.animationManager.animateIn(targetSlideEl, this.state.direction);
                // Update state
                this.state.currentSlide = index;
                this.state.isAnimating = false;
                // Update URL hash
                this.updateUrlHash(index);
                // Dispatch event for navigation controller
                this.dispatchSlideChangeEvent(index);
            }, 300);
        }
        else {
            this.state.isAnimating = false;
        }
    }
    /**
     * Get current slide index
     */
    getCurrentSlide() {
        return this.state.currentSlide;
    }
    /**
     * Get total number of slides
     */
    getTotalSlides() {
        return this.state.totalSlides;
    }
    /**
     * Get slide data by index
     */
    getSlideData(index) {
        return this.slideManager.getSlide(index);
    }
    /**
     * Get all slides data
     */
    getAllSlidesData() {
        return this.slideManager.getAllSlides();
    }
    /**
     * Check if can go to next slide
     */
    canGoNext() {
        return this.state.currentSlide < this.state.totalSlides - 1;
    }
    /**
     * Check if can go to previous slide
     */
    canGoPrev() {
        return this.state.currentSlide > 0;
    }
    /**
     * Get slide DOM element
     */
    getSlideElement(index) {
        return document.querySelector(`[data-slide-index="${index}"]`);
    }
    /**
     * Update URL hash with current slide
     */
    updateUrlHash(index) {
        const newHash = `#slide-${index + 1}`;
        if (window.location.hash !== newHash) {
            history.replaceState(null, '', newHash);
        }
    }
    /**
     * Dispatch custom event for slide change
     */
    dispatchSlideChangeEvent(index) {
        const event = new CustomEvent('slideChange', {
            detail: {
                currentSlide: index,
                totalSlides: this.state.totalSlides,
                slideData: this.getSlideData(index)
            }
        });
        document.dispatchEvent(event);
    }
}
//# sourceMappingURL=PresentationController.js.map