/**
 * Slide Manager
 * Manages slide data and provides access methods
 */
import { Slide } from '../types/index.js';
export declare class SlideManager {
    private slides;
    constructor(slides: Slide[]);
    /**
     * Get all slides
     */
    getAllSlides(): Slide[];
    /**
     * Get slide by index
     */
    getSlide(index: number): Slide | undefined;
    /**
     * Get total number of slides
     */
    getTotalSlides(): number;
    /**
     * Get slide by ID
     */
    getSlideById(id: string): Slide | undefined;
    /**
     * Get slide index by ID
     */
    getSlideIndexById(id: string): number;
    /**
     * Get slides by type
     */
    getSlidesByType(type: string): Slide[];
    /**
     * Add a new slide
     */
    addSlide(slide: Slide, index?: number): void;
    /**
     * Remove a slide
     */
    removeSlide(index: number): Slide | undefined;
    /**
     * Update a slide
     */
    updateSlide(index: number, slide: Partial<Slide>): boolean;
}
//# sourceMappingURL=SlideManager.d.ts.map