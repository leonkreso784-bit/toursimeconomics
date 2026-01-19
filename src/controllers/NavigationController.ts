/**
 * Navigation Controller
 * Manages navigation UI elements (buttons, menu, progress bar)
 */

import { PresentationController } from './PresentationController.js';
import { MenuItem } from '../types/index.js';

export class NavigationController {
    private presentationController: PresentationController;
    private prevBtn: HTMLElement | null = null;
    private nextBtn: HTMLElement | null = null;
    private slideCounter: HTMLElement | null = null;
    private progressFill: HTMLElement | null = null;
    private menuToggle: HTMLElement | null = null;
    private sidebar: HTMLElement | null = null;
    private sidebarClose: HTMLElement | null = null;
    private slideMenu: HTMLElement | null = null;

    constructor(presentationController: PresentationController) {
        this.presentationController = presentationController;
    }

    /**
     * Initialize navigation elements
     */
    public init(): void {
        this.cacheElements();
        this.bindEvents();
        this.buildSlideMenu();
        this.updateUI();
    }

    /**
     * Cache DOM elements
     */
    private cacheElements(): void {
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.slideCounter = document.getElementById('slide-counter');
        this.progressFill = document.getElementById('progress-fill');
        this.menuToggle = document.getElementById('menu-toggle');
        this.sidebar = document.getElementById('sidebar');
        this.sidebarClose = document.getElementById('sidebar-close');
        this.slideMenu = document.getElementById('slide-menu');
    }

    /**
     * Bind event listeners
     */
    private bindEvents(): void {
        // Navigation buttons
        this.prevBtn?.addEventListener('click', () => {
            this.presentationController.prevSlide();
        });

        this.nextBtn?.addEventListener('click', () => {
            this.presentationController.nextSlide();
        });

        // Sidebar toggle
        this.menuToggle?.addEventListener('click', () => {
            this.toggleSidebar();
        });

        this.sidebarClose?.addEventListener('click', () => {
            this.closeSidebar();
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (this.sidebar?.classList.contains('open')) {
                const target = e.target as HTMLElement;
                if (!this.sidebar.contains(target) && !this.menuToggle?.contains(target)) {
                    this.closeSidebar();
                }
            }
        });

        // Listen for slide changes
        document.addEventListener('slideChange', () => {
            this.updateUI();
        });
    }

    /**
     * Build slide menu in sidebar
     */
    private buildSlideMenu(): void {
        if (!this.slideMenu) return;

        const slides = this.presentationController.getAllSlidesData();
        const menuItems: MenuItem[] = slides.map((slide, index) => ({
            index,
            title: slide.title,
            isActive: index === this.presentationController.getCurrentSlide()
        }));

        this.slideMenu.innerHTML = menuItems.map(item => `
            <li>
                <a href="#slide-${item.index + 1}" 
                   data-slide-index="${item.index}"
                   class="${item.isActive ? 'active' : ''}">
                    <span class="menu-number">${item.index + 1}.</span>
                    ${item.title}
                </a>
            </li>
        `).join('');

        // Bind menu item clicks
        this.slideMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const index = parseInt(link.getAttribute('data-slide-index') || '0', 10);
                this.presentationController.goToSlide(index);
                this.closeSidebar();
            });
        });
    }

    /**
     * Update navigation UI
     */
    private updateUI(): void {
        const current = this.presentationController.getCurrentSlide();
        const total = this.presentationController.getTotalSlides();

        // Update counter
        if (this.slideCounter) {
            this.slideCounter.textContent = `${current + 1} / ${total}`;
        }

        // Update progress bar
        if (this.progressFill) {
            const progress = ((current + 1) / total) * 100;
            this.progressFill.style.width = `${progress}%`;
        }

        // Update button states
        if (this.prevBtn) {
            this.prevBtn.classList.toggle('disabled', !this.presentationController.canGoPrev());
        }
        if (this.nextBtn) {
            this.nextBtn.classList.toggle('disabled', !this.presentationController.canGoNext());
        }

        // Update menu active state
        this.updateMenuActiveState(current);
    }

    /**
     * Update active state in slide menu
     */
    private updateMenuActiveState(currentIndex: number): void {
        this.slideMenu?.querySelectorAll('a').forEach((link, index) => {
            link.classList.toggle('active', index === currentIndex);
        });
    }

    /**
     * Toggle sidebar visibility
     */
    private toggleSidebar(): void {
        this.sidebar?.classList.toggle('open');
    }

    /**
     * Close sidebar
     */
    private closeSidebar(): void {
        this.sidebar?.classList.remove('open');
    }
}
