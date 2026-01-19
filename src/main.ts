/**
 * Main Application Entry Point
 * Gastronomy Tourism Economics Presentation
 * Croatia vs Russia
 */

import { PresentationController } from './controllers/PresentationController.js';
import { NavigationController } from './controllers/NavigationController.js';
import { SlideManager } from './managers/SlideManager.js';
import { AnimationManager } from './managers/AnimationManager.js';
import { KeyboardHandler } from './handlers/KeyboardHandler.js';
import { TouchHandler } from './handlers/TouchHandler.js';
import { slides } from './data/slides.js';

// Application Class
class App {
    private presentationController: PresentationController;
    private navigationController: NavigationController;
    private slideManager: SlideManager;
    private animationManager: AnimationManager;
    private keyboardHandler: KeyboardHandler;
    private touchHandler: TouchHandler;

    constructor() {
        // Initialize managers
        this.slideManager = new SlideManager(slides);
        this.animationManager = new AnimationManager();
        
        // Initialize controllers
        this.presentationController = new PresentationController(
            this.slideManager,
            this.animationManager
        );
        
        this.navigationController = new NavigationController(
            this.presentationController
        );
        
        // Initialize handlers
        this.keyboardHandler = new KeyboardHandler(this.presentationController);
        this.touchHandler = new TouchHandler(this.presentationController);
    }

    /**
     * Initialize the application
     */
    public init(): void {
        console.log('Initializing Gastronomy Tourism Presentation...');
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    /**
     * Setup all components
     */
    private setup(): void {
        // Render slides
        this.presentationController.renderSlides();
        
        // Setup navigation
        this.navigationController.init();
        
        // Setup keyboard controls
        this.keyboardHandler.init();
        
        // Setup touch controls
        this.touchHandler.init();
        
        // Hide loader
        this.hideLoader();
        
        // Navigate to first slide or hash
        this.handleInitialNavigation();
        
        console.log('Presentation ready!');
    }

    /**
     * Hide the loading screen
     */
    private hideLoader(): void {
        const loader = document.getElementById('loader');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500);
        }
    }

    /**
     * Handle initial navigation based on URL hash
     */
    private handleInitialNavigation(): void {
        const hash = window.location.hash;
        if (hash) {
            const slideIndex = parseInt(hash.replace('#slide-', ''), 10);
            if (!isNaN(slideIndex) && slideIndex > 0) {
                this.presentationController.goToSlide(slideIndex - 1);
                return;
            }
        }
        this.presentationController.goToSlide(0);
    }
}

// Create and initialize the application
const app = new App();
app.init();

// Export for potential external use
export { App };
