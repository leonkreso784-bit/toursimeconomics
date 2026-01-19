/**
 * Simple Presentation App
 * Standalone navigation for gastronomy tourism presentation
 */

(function() {
    'use strict';

    // Slide data
    const slidesData = [
        { id: 'title', title: 'Gastronomy Tourism Economics' },
        { id: 'agenda', title: 'Presentation Outline' },
        { id: 'research-context', title: 'Why Compare Croatia and Russia?' },
        { id: 'objectives', title: 'Research Objectives' },
        { id: 'theory', title: 'Economic Framework' },
        { id: 'methodology', title: 'Analytical Approach' },
        { id: 'global-context', title: 'Global Significance' },
        { id: 'croatia-profile', title: 'Croatia: Economic Profile' },
        { id: 'croatia-gastronomy', title: 'Croatia: Gastronomy Tourism' },
        { id: 'croatia-data', title: 'Croatia: Economic Data' },
        { id: 'russia-profile', title: 'Russia: Economic Profile' },
        { id: 'russia-gastronomy', title: 'Russia: Gastronomy Tourism' },
        { id: 'russia-data', title: 'Russia: Economic Data' },
        { id: 'comparison-economic', title: 'Economic Comparison' },
        { id: 'two-models', title: 'Two Development Models' },
        { id: 'value-chain', title: 'Value Chain Analysis' },
        { id: 'swot', title: 'SWOT Analysis' },
        { id: 'recommendations', title: 'Policy Recommendations' },
        { id: 'conclusions', title: 'Key Findings' },
        { id: 'thank-you', title: 'Thank You' }
    ];

    let currentSlide = 0;
    let totalSlides = 0;
    let isAnimating = false;

    // DOM elements
    let slides = [];
    let slideCounter = null;
    let progressFill = null;
    let prevBtn = null;
    let nextBtn = null;
    let sidebar = null;
    let slideMenu = null;
    let menuToggle = null;
    let sidebarClose = null;

    /**
     * Initialize the presentation
     */
    function init() {
        console.log('Initializing presentation...');
        
        // Get DOM elements
        slides = document.querySelectorAll('.slide');
        slideCounter = document.getElementById('slide-counter');
        progressFill = document.getElementById('progress-fill');
        prevBtn = document.getElementById('prev-btn');
        nextBtn = document.getElementById('next-btn');
        sidebar = document.getElementById('sidebar');
        slideMenu = document.getElementById('slide-menu');
        menuToggle = document.getElementById('menu-toggle');
        sidebarClose = document.getElementById('sidebar-close');

        totalSlides = slides.length;
        console.log('Found ' + totalSlides + ' slides');

        if (totalSlides === 0) {
            console.error('No slides found!');
            return;
        }

        // Setup event listeners
        setupNavigation();
        setupKeyboard();
        setupTouch();
        setupSidebar();

        // Show first slide
        goToSlide(0);

        // Hide loader
        hideLoader();

        console.log('Presentation ready!');
    }

    /**
     * Setup navigation buttons
     */
    function setupNavigation() {
        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                prevSlide();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                nextSlide();
            });
        }
    }

    /**
     * Setup keyboard navigation
     */
    function setupKeyboard() {
        document.addEventListener('keydown', function(e) {
            switch(e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                case 'PageDown':
                    e.preventDefault();
                    nextSlide();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                case 'PageUp':
                    e.preventDefault();
                    prevSlide();
                    break;
                case 'Home':
                    e.preventDefault();
                    goToSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    goToSlide(totalSlides - 1);
                    break;
                case 'Escape':
                    closeSidebar();
                    break;
            }
        });
    }

    /**
     * Setup touch/swipe navigation
     */
    function setupTouch() {
        let touchStartX = 0;
        let touchEndX = 0;
        const minSwipeDistance = 50;

        document.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        document.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > minSwipeDistance) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }
    }

    /**
     * Setup sidebar menu
     */
    function setupSidebar() {
        // Build menu
        if (slideMenu) {
            slideMenu.innerHTML = '';
            slidesData.forEach(function(slide, index) {
                const li = document.createElement('li');
                li.className = 'slide-menu-item';
                if (index === 0) li.classList.add('active');
                
                const a = document.createElement('a');
                a.href = '#slide-' + (index + 1);
                a.textContent = (index + 1) + '. ' + slide.title;
                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    goToSlide(index);
                    closeSidebar();
                });
                
                li.appendChild(a);
                slideMenu.appendChild(li);
            });
        }

        // Toggle button
        if (menuToggle) {
            menuToggle.addEventListener('click', function(e) {
                e.preventDefault();
                toggleSidebar();
            });
        }

        // Close button
        if (sidebarClose) {
            sidebarClose.addEventListener('click', function(e) {
                e.preventDefault();
                closeSidebar();
            });
        }
    }

    /**
     * Go to next slide
     */
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            goToSlide(currentSlide + 1);
        }
    }

    /**
     * Go to previous slide
     */
    function prevSlide() {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    }

    /**
     * Go to specific slide
     */
    function goToSlide(index) {
        if (isAnimating) return;
        if (index < 0 || index >= totalSlides) return;
        if (index === currentSlide && slides[currentSlide].classList.contains('active')) return;

        isAnimating = true;

        // Remove active from all slides
        slides.forEach(function(slide) {
            slide.classList.remove('active');
            slide.classList.remove('slide-enter');
            slide.classList.remove('slide-exit');
        });

        // Add active to target slide
        slides[index].classList.add('active');
        slides[index].classList.add('slide-enter');

        // Update state
        currentSlide = index;

        // Update UI
        updateCounter();
        updateProgress();
        updateMenuActive();

        // Update URL
        history.replaceState(null, '', '#slide-' + (index + 1));

        // Reset animation flag
        setTimeout(function() {
            isAnimating = false;
            slides[index].classList.remove('slide-enter');
        }, 300);
    }

    /**
     * Update slide counter
     */
    function updateCounter() {
        if (slideCounter) {
            slideCounter.textContent = (currentSlide + 1) + ' / ' + totalSlides;
        }
    }

    /**
     * Update progress bar
     */
    function updateProgress() {
        if (progressFill) {
            const progress = ((currentSlide + 1) / totalSlides) * 100;
            progressFill.style.width = progress + '%';
        }
    }

    /**
     * Update active menu item
     */
    function updateMenuActive() {
        if (slideMenu) {
            const items = slideMenu.querySelectorAll('.slide-menu-item');
            items.forEach(function(item, index) {
                if (index === currentSlide) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    }

    /**
     * Toggle sidebar
     */
    function toggleSidebar() {
        if (sidebar) {
            sidebar.classList.toggle('open');
        }
    }

    /**
     * Close sidebar
     */
    function closeSidebar() {
        if (sidebar) {
            sidebar.classList.remove('open');
        }
    }

    /**
     * Hide loader
     */
    function hideLoader() {
        const loader = document.getElementById('loader');
        if (loader) {
            setTimeout(function() {
                loader.classList.add('hidden');
            }, 300);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

/**
 * Explanation Modal System
 * Opens modal with explanations when clickable boxes are clicked
 */
(function() {
    'use strict';

    // Modal elements
    let modal = null;
    let modalTitle = null;
    let modalIcon = null;
    let modalBody = null;
    let modalClose = null;

    /**
     * Initialize modal system
     */
    function initModal() {
        modal = document.getElementById('explanation-modal');
        modalTitle = document.getElementById('modal-title');
        modalIcon = document.getElementById('modal-icon');
        modalBody = document.getElementById('modal-body');
        modalClose = document.getElementById('modal-close');

        if (!modal) {
            console.warn('Modal not found');
            return;
        }

        // Close button
        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }

        // Click outside to close
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Escape key to close
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });

        // Setup clickable boxes
        setupClickableBoxes();
    }

    /**
     * Setup all clickable boxes
     */
    function setupClickableBoxes() {
        const clickableSelectors = [
            '.agenda-item',
            '.country-card',
            '.objective',
            '.theory-card',
            '.dimension',
            '.badge',
            '.stat-card',
            '.stat-box',
            '.gastro-main',
            '.gastro-products',
            '.gastro-achievements',
            '.gastro-focus',
            '.gastro-challenge',
            '.model-card',
            '.swot-box',
            '.rec-item',
            '.conclusion-item',
            '.insight-box',
            '.data-insight',
            '.chain-insight',
            '.chain-step',
            '.trend'
        ];

        clickableSelectors.forEach(function(selector) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(function(el) {
                if (el.dataset.explanation) {
                    el.classList.add('clickable-box');
                    el.addEventListener('click', function(e) {
                        e.stopPropagation();
                        openModal(el);
                    });
                }
            });
        });
    }

    /**
     * Open modal with explanation
     */
    function openModal(element) {
        if (!modal) return;

        const title = element.dataset.title || 'More Information';
        const icon = element.dataset.icon || '📖';
        const explanation = element.dataset.explanation || 'No explanation available.';

        if (modalTitle) modalTitle.textContent = title;
        if (modalIcon) modalIcon.textContent = icon;
        if (modalBody) modalBody.innerHTML = explanation;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    /**
     * Close modal
     */
    function closeModal() {
        if (!modal) return;
        
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Initialize modal when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initModal);
    } else {
        initModal();
    }

})();
