/**
 * Touch Handler
 * Handles touch/swipe navigation for the presentation
 */
import { PresentationController } from '../controllers/PresentationController.js';
export declare class TouchHandler {
    private presentationController;
    private touchState;
    private minSwipeDistance;
    private maxSwipeTime;
    private isEnabled;
    constructor(presentationController: PresentationController);
    /**
     * Initialize touch handlers
     */
    init(): void;
    /**
     * Handle touch start
     */
    private handleTouchStart;
    /**
     * Handle touch move
     */
    private handleTouchMove;
    /**
     * Handle touch end
     */
    private handleTouchEnd;
    /**
     * Handle touch cancel
     */
    private handleTouchCancel;
    /**
     * Enable touch navigation
     */
    enable(): void;
    /**
     * Disable touch navigation
     */
    disable(): void;
    /**
     * Check if touch navigation is enabled
     */
    isTouchEnabled(): boolean;
    /**
     * Set minimum swipe distance
     */
    setMinSwipeDistance(distance: number): void;
    /**
     * Set maximum swipe time
     */
    setMaxSwipeTime(time: number): void;
}
//# sourceMappingURL=TouchHandler.d.ts.map