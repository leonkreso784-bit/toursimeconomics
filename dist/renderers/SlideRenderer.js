/**
 * Slide Renderer
 * Renders slide data to HTML elements
 */
export class SlideRenderer {
    /**
     * Render a slide to HTML element
     */
    render(slide, index) {
        const slideElement = document.createElement('section');
        slideElement.className = this.getSlideClasses(slide);
        slideElement.setAttribute('data-slide-index', index.toString());
        slideElement.setAttribute('data-slide-id', slide.id);
        if (index === 0) {
            slideElement.classList.add('active');
        }
        // Apply background
        if (slide.background) {
            this.applyBackground(slideElement, slide.background);
        }
        // Render content based on type
        slideElement.innerHTML = this.renderContent(slide, index);
        return slideElement;
    }
    /**
     * Get CSS classes for slide
     */
    getSlideClasses(slide) {
        const classes = ['slide'];
        // Add type class
        classes.push(`slide--${slide.type}`);
        // Add background class
        if (slide.background) {
            if (slide.background.type === 'gradient') {
                classes.push('slide--gradient-primary');
            }
            else if (slide.background.type === 'color' && slide.background.value === 'dark') {
                classes.push('slide--dark');
            }
            else if (slide.background.type === 'image') {
                classes.push('slide--image');
            }
        }
        else {
            classes.push('slide--dark');
        }
        return classes.join(' ');
    }
    /**
     * Apply background styles
     */
    applyBackground(element, background) {
        if (!background)
            return;
        switch (background.type) {
            case 'image':
                element.style.backgroundImage = `url(${background.value})`;
                break;
            case 'gradient':
                element.style.background = background.value;
                break;
            case 'color':
                // Handled by CSS classes
                break;
        }
    }
    /**
     * Render slide content based on type
     */
    renderContent(slide, index) {
        switch (slide.type) {
            case 'title':
                return this.renderTitleSlide(slide);
            case 'section':
                return this.renderSectionSlide(slide, index);
            case 'content':
                return this.renderContentSlide(slide);
            case 'comparison':
                return this.renderComparisonSlide(slide);
            case 'chart':
                return this.renderChartSlide(slide);
            case 'quote':
                return this.renderQuoteSlide(slide);
            case 'conclusion':
                return this.renderConclusionSlide(slide);
            case 'thanks':
                return this.renderThanksSlide(slide);
            default:
                return this.renderDefaultSlide(slide);
        }
    }
    /**
     * Render title slide
     */
    renderTitleSlide(slide) {
        return `
            <div class="slide-content">
                <div class="slide-decoration decoration-circle decoration-top-right"></div>
                <div class="slide-decoration decoration-circle decoration-bottom-left"></div>
                <div class="food-icons">
                    <span>🍷</span>
                    <span>🧀</span>
                    <span>🍽️</span>
                    <span>🌿</span>
                    <span>🍞</span>
                </div>
                <h1 class="slide-title">${slide.title}</h1>
                ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ''}
                <div class="slide-meta">
                    ${slide.content.html || ''}
                </div>
            </div>
        `;
    }
    /**
     * Render section slide
     */
    renderSectionSlide(slide, index) {
        // Calculate section number (simplified - you may want more complex logic)
        const sectionNum = Math.floor(index / 2) + 1;
        return `
            <div class="slide-content">
                <div class="section-number">${sectionNum}</div>
                <h2 class="slide-title">${slide.title}</h2>
                ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ''}
            </div>
        `;
    }
    /**
     * Render content slide
     */
    renderContentSlide(slide) {
        let contentHtml = '';
        // Stats
        if (slide.content.stats && slide.content.stats.length > 0) {
            contentHtml += `
                <div class="stat-grid">
                    ${slide.content.stats.map(stat => `
                        <div class="stat-item">
                            ${stat.icon ? `<div class="stat-icon">${stat.icon}</div>` : ''}
                            <div class="stat-value">${stat.value}</div>
                            <div class="stat-label">${stat.label}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        // Features
        if (slide.content.features && slide.content.features.length > 0) {
            contentHtml += `
                <div class="features-list">
                    ${slide.content.features.map(feature => `
                        <div class="feature-box">
                            <div class="feature-icon">${feature.icon}</div>
                            <div class="feature-content">
                                <h4>${feature.title}</h4>
                                <p>${feature.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        // Regions
        if (slide.content.regions && slide.content.regions.length > 0) {
            contentHtml += `
                <div class="region-cards">
                    ${slide.content.regions.map(region => `
                        <div class="region-card">
                            ${region.icon ? `<div class="region-icon">${region.icon}</div>` : ''}
                            <h4>${region.name}</h4>
                            <p>${region.description}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        // Columns
        if (slide.content.columns && slide.content.columns.length > 0) {
            contentHtml += `
                <div class="slide-columns slide-columns--${slide.content.columns.length}">
                    ${slide.content.columns.map(col => `
                        <div class="slide-column">
                            ${col.icon ? `<div class="column-icon">${col.icon}</div>` : ''}
                            ${col.title ? `<h3>${col.title}</h3>` : ''}
                            <div class="column-content">${col.content}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        // Table
        if (slide.content.table) {
            contentHtml += this.renderTable(slide.content.table);
        }
        // Raw HTML
        if (slide.content.html) {
            contentHtml += slide.content.html;
        }
        return `
            <div class="slide-content slide-content--left">
                <div class="slide-header">
                    <h2 class="slide-title">${slide.title}</h2>
                    ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ''}
                </div>
                <div class="slide-body">
                    ${contentHtml}
                </div>
            </div>
        `;
    }
    /**
     * Render comparison slide
     */
    renderComparisonSlide(slide) {
        const comparison = slide.content.comparison;
        if (!comparison)
            return this.renderDefaultSlide(slide);
        return `
            <div class="slide-content slide-content--wide">
                <div class="slide-header">
                    <h2 class="slide-title">${slide.title}</h2>
                    ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ''}
                </div>
                <div class="comparison">
                    <div class="comparison-side comparison-side--croatia">
                        <div class="comparison-title">
                            <span class="comparison-flag">${comparison.left.flag}</span>
                            <span>${comparison.left.country}</span>
                        </div>
                        <ul class="styled-list">
                            ${comparison.left.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="comparison-vs">VS</div>
                    <div class="comparison-side comparison-side--russia">
                        <div class="comparison-title">
                            <span class="comparison-flag">${comparison.right.flag}</span>
                            <span>${comparison.right.country}</span>
                        </div>
                        <ul class="styled-list">
                            ${comparison.right.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
    /**
     * Render chart slide
     */
    renderChartSlide(slide) {
        const chart = slide.content.chart;
        if (!chart)
            return this.renderDefaultSlide(slide);
        return `
            <div class="slide-content slide-content--wide">
                <div class="slide-header">
                    <h2 class="slide-title">${slide.title}</h2>
                    ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ''}
                </div>
                <div class="chart-container">
                    <div class="chart-title">${chart.title}</div>
                    <div class="bar-chart" id="chart-${slide.id}">
                        <!-- Chart will be rendered by ChartRenderer -->
                    </div>
                    <div class="chart-legend">
                        <div class="legend-item">
                            <div class="legend-color legend-color--croatia"></div>
                            <span>Croatia</span>
                        </div>
                        <div class="legend-item">
                            <div class="legend-color legend-color--russia"></div>
                            <span>Russia</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    /**
     * Render quote slide
     */
    renderQuoteSlide(slide) {
        const quote = slide.content.quote;
        if (!quote)
            return this.renderDefaultSlide(slide);
        return `
            <div class="slide-content">
                <blockquote class="quote">
                    <p>"${quote.text}"</p>
                    ${quote.author ? `<cite class="quote-author">— ${quote.author}</cite>` : ''}
                </blockquote>
            </div>
        `;
    }
    /**
     * Render conclusion slide
     */
    renderConclusionSlide(slide) {
        return `
            <div class="slide-content slide-content--left">
                <div class="slide-header">
                    <h2 class="slide-title">${slide.title}</h2>
                </div>
                <div class="slide-body">
                    ${slide.content.html || ''}
                </div>
            </div>
        `;
    }
    /**
     * Render thanks slide
     */
    renderThanksSlide(slide) {
        return `
            <div class="slide-content">
                <h1 class="slide-title">${slide.title}</h1>
                ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ''}
                <div class="contact-info">
                    ${slide.content.html || ''}
                </div>
            </div>
        `;
    }
    /**
     * Render default slide
     */
    renderDefaultSlide(slide) {
        return `
            <div class="slide-content">
                <h2 class="slide-title">${slide.title}</h2>
                ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ''}
                <div class="slide-body">
                    ${slide.content.html || ''}
                </div>
            </div>
        `;
    }
    /**
     * Render table
     */
    renderTable(table) {
        return `
            <table class="data-table data-table--striped">
                <thead>
                    <tr>
                        ${table.headers.map(header => `<th>${header}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${table.rows.map(row => `
                        <tr>
                            ${row.map(cell => `<td>${cell}</td>`).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
}
//# sourceMappingURL=SlideRenderer.js.map