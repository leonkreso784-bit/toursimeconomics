/**
 * Navigation Controller
 * Manages navigation UI elements (buttons, menu, progress bar)
 */
import { PresentationController } from './PresentationController.js';
export declare class NavigationController {
    private presentationController;
    private prevBtn;
    private nextBtn;
    private slideCounter;
    private progressFill;
    private menuToggle;
    private sidebar;
    private sidebarClose;
    private slideMenu;
    constructor(presentationController: PresentationController);
    /**
     * Initialize navigation elements
     */
    init(): void;
    /**
     * Cache DOM elements
     */
    private cacheElements;
    /**
     * Bind event listeners
     */
    private bindEvents;
    /**
     * Build slide menu in sidebar
     */
    private buildSlideMenu;
    /**
     * Update navigation UI
     */
    private updateUI;
    /**
     * Update active state in slide menu
     */
    private updateMenuActiveState;
    /**
     * Toggle sidebar visibility
     */
    private toggleSidebar;
    /**
     * Close sidebar
     */
    private closeSidebar;
}
//# sourceMappingURL=NavigationController.d.ts.map