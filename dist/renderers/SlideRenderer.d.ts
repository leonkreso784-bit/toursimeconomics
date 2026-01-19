/**
 * Slide Renderer
 * Renders slide data to HTML elements
 */
import { Slide } from '../types/index.js';
export declare class SlideRenderer {
    /**
     * Render a slide to HTML element
     */
    render(slide: Slide, index: number): HTMLElement;
    /**
     * Get CSS classes for slide
     */
    private getSlideClasses;
    /**
     * Apply background styles
     */
    private applyBackground;
    /**
     * Render slide content based on type
     */
    private renderContent;
    /**
     * Render title slide
     */
    private renderTitleSlide;
    /**
     * Render section slide
     */
    private renderSectionSlide;
    /**
     * Render content slide
     */
    private renderContentSlide;
    /**
     * Render comparison slide
     */
    private renderComparisonSlide;
    /**
     * Render chart slide
     */
    private renderChartSlide;
    /**
     * Render quote slide
     */
    private renderQuoteSlide;
    /**
     * Render conclusion slide
     */
    private renderConclusionSlide;
    /**
     * Render thanks slide
     */
    private renderThanksSlide;
    /**
     * Render default slide
     */
    private renderDefaultSlide;
    /**
     * Render table
     */
    private renderTable;
}
//# sourceMappingURL=SlideRenderer.d.ts.map