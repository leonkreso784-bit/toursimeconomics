/**
 * Slide Manager
 * Manages slide data and provides access methods
 */

import { Slide } from '../types/index.js';

export class SlideManager {
    private slides: Slide[];

    constructor(slides: Slide[]) {
        this.slides = slides;
    }

    /**
     * Get all slides
     */
    public getAllSlides(): Slide[] {
        return this.slides;
    }

    /**
     * Get slide by index
     */
    public getSlide(index: number): Slide | undefined {
        return this.slides[index];
    }

    /**
     * Get total number of slides
     */
    public getTotalSlides(): number {
        return this.slides.length;
    }

    /**
     * Get slide by ID
     */
    public getSlideById(id: string): Slide | undefined {
        return this.slides.find(slide => slide.id === id);
    }

    /**
     * Get slide index by ID
     */
    public getSlideIndexById(id: string): number {
        return this.slides.findIndex(slide => slide.id === id);
    }

    /**
     * Get slides by type
     */
    public getSlidesByType(type: string): Slide[] {
        return this.slides.filter(slide => slide.type === type);
    }

    /**
     * Add a new slide
     */
    public addSlide(slide: Slide, index?: number): void {
        if (index !== undefined) {
            this.slides.splice(index, 0, slide);
        } else {
            this.slides.push(slide);
        }
    }

    /**
     * Remove a slide
     */
    public removeSlide(index: number): Slide | undefined {
        if (index >= 0 && index < this.slides.length) {
            return this.slides.splice(index, 1)[0];
        }
        return undefined;
    }

    /**
     * Update a slide
     */
    public updateSlide(index: number, slide: Partial<Slide>): boolean {
        if (index >= 0 && index < this.slides.length) {
            this.slides[index] = { ...this.slides[index], ...slide };
            return true;
        }
        return false;
    }
}
