/**
 * Touch Handler
 * Handles touch/swipe navigation for the presentation
 */
export class TouchHandler {
    constructor(presentationController) {
        this.minSwipeDistance = 50;
        this.maxSwipeTime = 500;
        this.isEnabled = true;
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
    init() {
        const presentation = document.getElementById('presentation');
        if (!presentation)
            return;
        presentation.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        presentation.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
        presentation.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
        presentation.addEventListener('touchcancel', () => this.handleTouchCancel(), { passive: true });
    }
    /**
     * Handle touch start
     */
    handleTouchStart(event) {
        if (!this.isEnabled)
            return;
        if (event.touches.length !== 1)
            return;
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
    handleTouchMove(event) {
        if (!this.isEnabled || !this.touchState.isTracking)
            return;
        if (event.touches.length !== 1)
            return;
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
    handleTouchEnd(event) {
        if (!this.isEnabled || !this.touchState.isTracking)
            return;
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - this.touchState.startX;
        const deltaY = touch.clientY - this.touchState.startY;
        const deltaTime = Date.now() - this.touchState.startTime;
        this.touchState.isTracking = false;
        // Check if it's a valid swipe
        if (deltaTime > this.maxSwipeTime)
            return;
        if (Math.abs(deltaX) < this.minSwipeDistance)
            return;
        if (Math.abs(deltaY) > Math.abs(deltaX))
            return;
        // Determine direction and navigate
        if (deltaX < 0) {
            // Swipe left - next slide
            this.presentationController.nextSlide();
        }
        else {
            // Swipe right - previous slide
            this.presentationController.prevSlide();
        }
    }
    /**
     * Handle touch cancel
     */
    handleTouchCancel() {
        this.touchState.isTracking = false;
    }
    /**
     * Enable touch navigation
     */
    enable() {
        this.isEnabled = true;
    }
    /**
     * Disable touch navigation
     */
    disable() {
        this.isEnabled = false;
    }
    /**
     * Check if touch navigation is enabled
     */
    isTouchEnabled() {
        return this.isEnabled;
    }
    /**
     * Set minimum swipe distance
     */
    setMinSwipeDistance(distance) {
        this.minSwipeDistance = distance;
    }
    /**
     * Set maximum swipe time
     */
    setMaxSwipeTime(time) {
        this.maxSwipeTime = time;
    }
}
//# sourceMappingURL=TouchHandler.js.map