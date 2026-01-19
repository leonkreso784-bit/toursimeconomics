/**
 * Presentation Controller
 * Manages the overall presentation state and slide transitions
 */
import { Slide, NavigationDirection } from '../types/index.js';
import { SlideManager } from '../managers/SlideManager.js';
import { AnimationManager } from '../managers/AnimationManager.js';
export declare class PresentationController {
    private slideManager;
    private animationManager;
    private slideRenderer;
    private state;
    private container;
    constructor(slideManager: SlideManager, animationManager: AnimationManager);
    /**
     * Render all slides to the DOM
     */
    renderSlides(): void;
    /**
     * Navigate to next slide
     */
    nextSlide(): void;
    /**
     * Navigate to previous slide
     */
    prevSlide(): void;
    /**
     * Navigate to specific slide
     */
    goToSlide(index: number, direction?: NavigationDirection): void;
    /**
     * Get current slide index
     */
    getCurrentSlide(): number;
    /**
     * Get total number of slides
     */
    getTotalSlides(): number;
    /**
     * Get slide data by index
     */
    getSlideData(index: number): Slide | undefined;
    /**
     * Get all slides data
     */
    getAllSlidesData(): Slide[];
    /**
     * Check if can go to next slide
     */
    canGoNext(): boolean;
    /**
     * Check if can go to previous slide
     */
    canGoPrev(): boolean;
    /**
     * Get slide DOM element
     */
    private getSlideElement;
    /**
     * Update URL hash with current slide
     */
    private updateUrlHash;
    /**
     * Dispatch custom event for slide change
     */
    private dispatchSlideChangeEvent;
}
//# sourceMappingURL=PresentationController.d.ts.map