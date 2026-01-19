/**
 * Keyboard Handler
 * Handles keyboard navigation for the presentation
 */

import { PresentationController } from '../controllers/PresentationController.js';

export class KeyboardHandler {
    private presentationController: PresentationController;
    private isEnabled: boolean = true;

    constructor(presentationController: PresentationController) {
        this.presentationController = presentationController;
    }

    /**
     * Initialize keyboard handlers
     */
    public init(): void {
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
    }

    /**
     * Handle keydown events
     */
    private handleKeyDown(event: KeyboardEvent): void {
        if (!this.isEnabled) return;
        
        // Ignore if user is typing in an input
        if (this.isInputFocused()) return;

        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
            case ' ':
            case 'PageDown':
                event.preventDefault();
                this.presentationController.nextSlide();
                break;

            case 'ArrowLeft':
            case 'ArrowUp':
            case 'PageUp':
                event.preventDefault();
                this.presentationController.prevSlide();
                break;

            case 'Home':
                event.preventDefault();
                this.presentationController.goToSlide(0);
                break;

            case 'End':
                event.preventDefault();
                this.presentationController.goToSlide(
                    this.presentationController.getTotalSlides() - 1
                );
                break;

            case 'Escape':
                event.preventDefault();
                this.closeSidebar();
                break;

            // Number keys for direct slide navigation (1-9)
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (!event.ctrlKey && !event.metaKey) {
                    event.preventDefault();
                    const slideNum = parseInt(event.key, 10) - 1;
                    if (slideNum < this.presentationController.getTotalSlides()) {
                        this.presentationController.goToSlide(slideNum);
                    }
                }
                break;

            case 'f':
            case 'F':
                // Toggle fullscreen (if supported)
                if (!event.ctrlKey && !event.metaKey) {
                    event.preventDefault();
                    this.toggleFullscreen();
                }
                break;
        }
    }

    /**
     * Check if an input element is focused
     */
    private isInputFocused(): boolean {
        const activeElement = document.activeElement;
        if (!activeElement) return false;

        const tagName = activeElement.tagName.toLowerCase();
        return tagName === 'input' || 
               tagName === 'textarea' || 
               tagName === 'select' ||
               activeElement.getAttribute('contenteditable') === 'true';
    }

    /**
     * Close sidebar if open
     */
    private closeSidebar(): void {
        const sidebar = document.getElementById('sidebar');
        sidebar?.classList.remove('open');
    }

    /**
     * Toggle fullscreen mode
     */
    private toggleFullscreen(): void {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
    }

    /**
     * Enable keyboard navigation
     */
    public enable(): void {
        this.isEnabled = true;
    }

    /**
     * Disable keyboard navigation
     */
    public disable(): void {
        this.isEnabled = false;
    }

    /**
     * Check if keyboard navigation is enabled
     */
    public isKeyboardEnabled(): boolean {
        return this.isEnabled;
    }
}
