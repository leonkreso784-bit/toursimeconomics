/**
 * Touch Handler
 * Handles touch/swipe navigation for the presentation
 */

import { PresentationController } from '../controllers/PresentationController.js';

interface TouchState {
    startX: number;
    startY: number;
    startTime: number;
    isTracking: boolean;
}

export class TouchHandler {
    private presentationController: PresentationController;
    private touchState: TouchState;
    private minSwipeDistance: number = 50;
    private maxSwipeTime: number = 500;
    private isEnabled: boolean = true;

    constructor(presentationController: PresentationController) {
        this.presentationController = presentationController;
        this.touchState = {
            startX: 0,
            startY: 0,
            startTime: 0,
            isTracking: false
        };
    }

    /**
     * Initialize touch handlers
     */
    public init(): void {
        const presentation = document.getElementById('presentation');
        if (!presentation) return;

        presentation.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        presentation.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
        presentation.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
        presentation.addEventListener('touchcancel', () => this.handleTouchCancel(), { passive: true });
    }

    /**
     * Handle touch start
     */
    private handleTouchStart(event: TouchEvent): void {
        if (!this.isEnabled) return;
        if (event.touches.length !== 1) return;

        const touch = event.touches[0];
        this.touchState = {
            startX: touch.clientX,
            startY: touch.clientY,
            startTime: Date.now(),
            isTracking: true
        };
    }

    /**
     * Handle touch move
     */
    private handleTouchMove(event: TouchEvent): void {
        if (!this.isEnabled || !this.touchState.isTracking) return;
        if (event.touches.length !== 1) return;

        const touch = event.touches[0];
        const deltaX = touch.clientX - this.touchState.startX;
        const deltaY = touch.clientY - this.touchState.startY;

        // If horizontal swipe is more significant, prevent vertical scroll
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            event.preventDefault();
        }
    }

    /**
     * Handle touch end
     */
    private handleTouchEnd(event: TouchEvent): void {
        if (!this.isEnabled || !this.touchState.isTracking) return;

        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - this.touchState.startX;
        const deltaY = touch.clientY - this.touchState.startY;
        const deltaTime = Date.now() - this.touchState.startTime;

        this.touchState.isTracking = false;

        // Check if it's a valid swipe
        if (deltaTime > this.maxSwipeTime) return;
        if (Math.abs(deltaX) < this.minSwipeDistance) return;
        if (Math.abs(deltaY) > Math.abs(deltaX)) return;

        // Determine direction and navigate
        if (deltaX < 0) {
            // Swipe left - next slide
            this.presentationController.nextSlide();
        } else {
            // Swipe right - previous slide
            this.presentationController.prevSlide();
        }
    }

    /**
     * Handle touch cancel
     */
    private handleTouchCancel(): void {
        this.touchState.isTracking = false;
    }

    /**
     * Enable touch navigation
     */
    public enable(): void {
        this.isEnabled = true;
    }

    /**
     * Disable touch navigation
     */
    public disable(): void {
        this.isEnabled = false;
    }

    /**
     * Check if touch navigation is enabled
     */
    public isTouchEnabled(): boolean {
        return this.isEnabled;
    }

    /**
     * Set minimum swipe distance
     */
    public setMinSwipeDistance(distance: number): void {
        this.minSwipeDistance = distance;
    }

    /**
     * Set maximum swipe time
     */
    public setMaxSwipeTime(time: number): void {
        this.maxSwipeTime = time;
    }
}
