/**
 * Main Application Entry Point
 * Gastronomy Tourism Economics Presentation
 * Croatia vs Russia
 */
declare class App {
    private presentationController;
    private navigationController;
    private slideManager;
    private animationManager;
    private keyboardHandler;
    private touchHandler;
    constructor();
    /**
     * Initialize the application
     */
    init(): void;
    /**
     * Setup all components
     */
    private setup;
    /**
     * Hide the loading screen
     */
    private hideLoader;
    /**
     * Handle initial navigation based on URL hash
     */
    private handleInitialNavigation;
}
export { App };
//# sourceMappingURL=main.d.ts.map