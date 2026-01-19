/**
 * Slide Manager
 * Manages slide data and provides access methods
 */
export class SlideManager {
    constructor(slides) {
        this.slides = slides;
    }
    /**
     * Get all slides
     */
    getAllSlides() {
        return this.slides;
    }
    /**
     * Get slide by index
     */
    getSlide(index) {
        return this.slides[index];
    }
    /**
     * Get total number of slides
     */
    getTotalSlides() {
        return this.slides.length;
    }
    /**
     * Get slide by ID
     */
    getSlideById(id) {
        return this.slides.find(slide => slide.id === id);
    }
    /**
     * Get slide index by ID
     */
    getSlideIndexById(id) {
        return this.slides.findIndex(slide => slide.id === id);
    }
    /**
     * Get slides by type
     */
    getSlidesByType(type) {
        return this.slides.filter(slide => slide.type === type);
    }
    /**
     * Add a new slide
     */
    addSlide(slide, index) {
        if (index !== undefined) {
            this.slides.splice(index, 0, slide);
        }
        else {
            this.slides.push(slide);
        }
    }
    /**
     * Remove a slide
     */
    removeSlide(index) {
        if (index >= 0 && index < this.slides.length) {
            return this.slides.splice(index, 1)[0];
        }
        return undefined;
    }
    /**
     * Update a slide
     */
    updateSlide(index, slide) {
        if (index >= 0 && index < this.slides.length) {
            this.slides[index] = { ...this.slides[index], ...slide };
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=SlideManager.js.map