/**
 * Keyboard Handler
 * Handles keyboard navigation for the presentation
 */
import { PresentationController } from '../controllers/PresentationController.js';
export declare class KeyboardHandler {
    private presentationController;
    private isEnabled;
    constructor(presentationController: PresentationController);
    /**
     * Initialize keyboard handlers
     */
    init(): void;
    /**
     * Handle keydown events
     */
    private handleKeyDown;
    /**
     * Check if an input element is focused
     */
    private isInputFocused;
    /**
     * Close sidebar if open
     */
    private closeSidebar;
    /**
     * Toggle fullscreen mode
     */
    private toggleFullscreen;
    /**
     * Enable keyboard navigation
     */
    enable(): void;
    /**
     * Disable keyboard navigation
     */
    disable(): void;
    /**
     * Check if keyboard navigation is enabled
     */
    isKeyboardEnabled(): boolean;
}
//# sourceMappingURL=KeyboardHandler.d.ts.map