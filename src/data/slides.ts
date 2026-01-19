/**
 * Slides Data
 * Contains all presentation slide content
 * Gastronomy Tourism Economics: Croatia vs Russia
 */

import { Slide } from '../types/index.js';

export const slides: Slide[] = [
    // ===== SLIDE 1: TITLE =====
    {
        id: 'title',
        title: 'Gastronomy Tourism Economics',
        subtitle: 'A Comparative Analysis of Croatia and Russia',
        type: 'title',
        content: {
            html: `
                <div class="title-meta">
                    <p class="course-name">Economics in Tourism</p>
                    <p class="authors">Leon Kreso & Sofia Butkovskaia</p>
                    <p class="institution">Faculty of Tourism and Hospitality Management, Opatija</p>
                    <p class="date">November 2025</p>
                </div>
                <div class="title-flags">
                    <span class="flag flag-croatia">🇭🇷</span>
                    <span class="flag-separator">vs</span>
                    <span class="flag flag-russia">🇷🇺</span>
                </div>
            `
        },
        background: {
            type: 'gradient',
            value: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        }
    },

    // ===== SLIDE 2: AGENDA =====
    {
        id: 'agenda',
        title: 'Presentation Outline',
        type: 'content',
        content: {
            html: `
                <div class="agenda-grid">
                    <div class="agenda-item" data-num="1">
                        <span class="agenda-icon">📋</span>
                        <span class="agenda-text">Introduction & Research Objectives</span>
                    </div>
                    <div class="agenda-item" data-num="2">
                        <span class="agenda-icon">📚</span>
                        <span class="agenda-text">Theoretical Framework</span>
                    </div>
                    <div class="agenda-item" data-num="3">
                        <span class="agenda-icon">🔬</span>
                        <span class="agenda-text">Methodology</span>
                    </div>
                    <div class="agenda-item" data-num="4">
                        <span class="agenda-icon">🇭🇷</span>
                        <span class="agenda-text">Croatia: Economic Analysis</span>
                    </div>
                    <div class="agenda-item" data-num="5">
                        <span class="agenda-icon">🇷🇺</span>
                        <span class="agenda-text">Russia: Economic Analysis</span>
                    </div>
                    <div class="agenda-item" data-num="6">
                        <span class="agenda-icon">⚖️</span>
                        <span class="agenda-text">Comparative Analysis</span>
                    </div>
                    <div class="agenda-item" data-num="7">
                        <span class="agenda-icon">💡</span>
                        <span class="agenda-text">Strategic Implications</span>
                    </div>
                    <div class="agenda-item" data-num="8">
                        <span class="agenda-icon">🎯</span>
                        <span class="agenda-text">Conclusions & Recommendations</span>
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 3: RESEARCH CONTEXT =====
    {
        id: 'research-context',
        title: 'Why Compare Croatia and Russia?',
        type: 'comparison',
        content: {
            html: `
                <div class="context-intro">
                    <p>Two fundamentally different economic models for gastronomy tourism development</p>
                </div>
                <div class="comparison-cards">
                    <div class="country-card croatia">
                        <h3>🇭🇷 Croatia</h3>
                        <ul>
                            <li>Tourism-dependent economy</li>
                            <li><strong>17.5% of GDP</strong> from tourism</li>
                            <li>International market focus</li>
                            <li>Mediterranean destination</li>
                        </ul>
                    </div>
                    <div class="country-card russia">
                        <h3>🇷🇺 Russia</h3>
                        <ul>
                            <li>Diversified economy</li>
                            <li><strong>&lt;0.5% of GDP</strong> from tourism</li>
                            <li>Domestic market focus</li>
                            <li>Continental destination</li>
                        </ul>
                    </div>
                </div>
                <div class="key-stat">
                    <span class="stat-highlight">50×</span>
                    <span class="stat-label">difference in relative tourism contribution to GDP</span>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 4: RESEARCH OBJECTIVES =====
    {
        id: 'objectives',
        title: 'Research Objectives',
        type: 'content',
        content: {
            html: `
                <div class="objectives-list">
                    <div class="objective" data-num="1">
                        <div class="obj-icon">📊</div>
                        <div class="obj-content">
                            <h4>Economic Contribution Analysis</h4>
                            <p>Analyze gastronomy tourism's contribution to national GDP, employment, and regional development</p>
                        </div>
                    </div>
                    <div class="objective" data-num="2">
                        <div class="obj-icon">🎯</div>
                        <div class="obj-content">
                            <h4>Role Assessment</h4>
                            <p>Compare gastronomy's function as tourism driver (Croatia) vs cultural asset (Russia)</p>
                        </div>
                    </div>
                    <div class="objective" data-num="3">
                        <div class="obj-icon">🔗</div>
                        <div class="obj-content">
                            <h4>Value Chain Evaluation</h4>
                            <p>Evaluate integration between agriculture, food processing, and tourism sectors</p>
                        </div>
                    </div>
                    <div class="objective" data-num="4">
                        <div class="obj-icon">🏆</div>
                        <div class="obj-content">
                            <h4>Branding Effectiveness</h4>
                            <p>Assess gastronomy branding and international market positioning strategies</p>
                        </div>
                    </div>
                    <div class="objective" data-num="5">
                        <div class="obj-icon">📝</div>
                        <div class="obj-content">
                            <h4>Policy Implications</h4>
                            <p>Identify strategic opportunities and formulate policy recommendations</p>
                        </div>
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 5: THEORETICAL FRAMEWORK =====
    {
        id: 'theory',
        title: 'Economic Framework for Gastronomy Tourism',
        type: 'content',
        content: {
            html: `
                <div class="theory-grid">
                    <div class="theory-card">
                        <div class="theory-icon">💰</div>
                        <h4>Tourism Multiplier Effects</h4>
                        <ul>
                            <li><strong>Direct:</strong> Restaurant, hotel spending</li>
                            <li><strong>Indirect:</strong> Supplier purchases</li>
                            <li><strong>Induced:</strong> Employee spending</li>
                        </ul>
                        <div class="theory-note">Typical multiplier: 1.5-2.5×</div>
                    </div>
                    <div class="theory-card">
                        <div class="theory-icon">🔗</div>
                        <h4>Value Chain Theory</h4>
                        <ul>
                            <li>Agriculture → Processing</li>
                            <li>Processing → Hospitality</li>
                            <li>Hospitality → Tourism</li>
                        </ul>
                        <div class="theory-note">Higher integration = Higher multipliers</div>
                    </div>
                    <div class="theory-card">
                        <div class="theory-icon">🏆</div>
                        <h4>Destination Competitiveness</h4>
                        <ul>
                            <li><strong>Inherited:</strong> Natural resources</li>
                            <li><strong>Created:</strong> Infrastructure, branding</li>
                            <li><strong>Supporting:</strong> Policy, governance</li>
                        </ul>
                        <div class="theory-note">Porter & Ritchie-Crouch models</div>
                    </div>
                    <div class="theory-card">
                        <div class="theory-icon">📈</div>
                        <h4>Economic Dimensions</h4>
                        <ul>
                            <li>GDP contribution</li>
                            <li>Employment generation</li>
                            <li>Regional development</li>
                        </ul>
                        <div class="theory-note">WTTC methodology</div>
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 6: METHODOLOGY =====
    {
        id: 'methodology',
        title: 'Analytical Approach',
        type: 'content',
        content: {
            html: `
                <div class="method-container">
                    <div class="method-main">
                        <h3>Comparative Case Study Methodology</h3>
                        <p>Secondary data analysis spanning 2015-2024</p>
                    </div>
                    <div class="method-sources">
                        <h4>Data Sources</h4>
                        <div class="source-badges">
                            <span class="badge">UN Tourism</span>
                            <span class="badge">World Bank</span>
                            <span class="badge">WTTC</span>
                            <span class="badge">Eurostat</span>
                            <span class="badge">Croatian Bureau of Statistics</span>
                            <span class="badge">Rosstat</span>
                        </div>
                    </div>
                    <div class="method-dimensions">
                        <h4>Four-Dimensional Analysis</h4>
                        <div class="dimension-grid">
                            <div class="dimension">
                                <span class="dim-num">1</span>
                                <span class="dim-text">Economic Contribution</span>
                            </div>
                            <div class="dimension">
                                <span class="dim-num">2</span>
                                <span class="dim-text">Value Chain Integration</span>
                            </div>
                            <div class="dimension">
                                <span class="dim-num">3</span>
                                <span class="dim-text">Market Positioning</span>
                            </div>
                            <div class="dimension">
                                <span class="dim-num">4</span>
                                <span class="dim-text">Development Context</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 7: GLOBAL CONTEXT =====
    {
        id: 'global-context',
        title: 'Gastronomy Tourism: Global Significance',
        type: 'stats',
        content: {
            html: `
                <div class="global-stats">
                    <div class="stat-card large">
                        <span class="stat-value">25-35%</span>
                        <span class="stat-desc">of travel budget spent on food/beverage by tourists</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-value">$1.1T</span>
                        <span class="stat-desc">Global food tourism market (2024)</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-value">8.7%</span>
                        <span class="stat-desc">Annual growth rate (CAGR)</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-value">1.5-2.5×</span>
                        <span class="stat-desc">Typical economic multiplier</span>
                    </div>
                </div>
                <div class="global-trends">
                    <h4>Key Global Trends</h4>
                    <div class="trend-items">
                        <div class="trend">✓ Growing demand for authentic local experiences</div>
                        <div class="trend">✓ Post-pandemic acceleration of culinary tourism</div>
                        <div class="trend">✓ Food as primary travel motivator for millennials</div>
                        <div class="trend">✓ Integration of gastronomy into destination branding</div>
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 8: CROATIA PROFILE =====
    {
        id: 'croatia-profile',
        title: 'Croatia: Tourism-Dependent Economy',
        subtitle: '🇭🇷',
        type: 'profile',
        content: {
            html: `
                <div class="profile-header croatia-theme">
                    <div class="country-flag">🇭🇷</div>
                    <div class="country-info">
                        <h3>Republic of Croatia</h3>
                        <p>EU & Eurozone Member (2023)</p>
                    </div>
                </div>
                <div class="profile-stats">
                    <div class="stat-box">
                        <span class="label">GDP (2024)</span>
                        <span class="value">$92.5 billion</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Population</span>
                        <span class="value">3.9 million</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">GDP per capita</span>
                        <span class="value">$23,932</span>
                    </div>
                    <div class="stat-box highlight">
                        <span class="label">Tourism Receipts</span>
                        <span class="value">$16.2 billion</span>
                    </div>
                    <div class="stat-box highlight-main">
                        <span class="label">Tourism % of GDP</span>
                        <span class="value">17.51%</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Tourism Employment</span>
                        <span class="value">~115,000</span>
                    </div>
                </div>
                <div class="profile-note">
                    <strong>Key Fact:</strong> Croatia has one of the highest tourism dependencies in Europe
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 9: CROATIA GASTRONOMY =====
    {
        id: 'croatia-gastronomy',
        title: 'Croatia: Gastronomy as Tourism Driver',
        type: 'content',
        content: {
            html: `
                <div class="gastro-grid">
                    <div class="gastro-main">
                        <h4>Mediterranean Cuisine with Regional Diversity</h4>
                        <div class="regions">
                            <div class="region">
                                <strong>Istria:</strong> Truffles, olive oil, wine
                            </div>
                            <div class="region">
                                <strong>Dalmatia:</strong> Seafood, pršut, wine
                            </div>
                            <div class="region">
                                <strong>Slavonia:</strong> Kulen, paprika, freshwater fish
                            </div>
                            <div class="region">
                                <strong>Zagorje:</strong> štrukli, turkey, game
                            </div>
                        </div>
                    </div>
                    <div class="gastro-products">
                        <h4>Key Export Products</h4>
                        <div class="product-list">
                            <span class="product">🫒 Olive Oil (15 PDO regions)</span>
                            <span class="product">🍷 Wine (130+ indigenous varieties)</span>
                            <span class="product">🍄 Truffles (Istrian white & black)</span>
                            <span class="product">🥓 Pršut (Dalmatian & Istrian)</span>
                            <span class="product">🧀 Cheese (Paški sir PDO)</span>
                        </div>
                    </div>
                    <div class="gastro-achievements">
                        <h4>International Recognition</h4>
                        <div class="achievement-list">
                            <span>⭐ 10 Michelin-starred restaurants</span>
                            <span>🏆 140+ Gault Millau listings</span>
                            <span>🍷 Top 10 wine destination (Wine Enthusiast)</span>
                        </div>
                    </div>
                    <div class="gastro-challenge">
                        <h4>⚠️ Key Challenge</h4>
                        <p><strong>Extreme seasonality:</strong> 60%+ of arrivals in July-August</p>
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 10: CROATIA ECONOMIC DATA =====
    {
        id: 'croatia-data',
        title: 'Croatia: Tourism Economic Performance',
        type: 'data',
        content: {
            html: `
                <div class="data-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Indicator</th>
                                <th>2020</th>
                                <th>2022</th>
                                <th>2024</th>
                                <th>Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tourism Receipts (bil $)</td>
                                <td>5.5</td>
                                <td>13.4</td>
                                <td>16.2</td>
                                <td class="positive">+195%</td>
                            </tr>
                            <tr>
                                <td>% of GDP</td>
                                <td>9.5%</td>
                                <td>18.8%</td>
                                <td>17.5%</td>
                                <td class="positive">+84%</td>
                            </tr>
                            <tr>
                                <td>Arrivals (millions)</td>
                                <td>5.5</td>
                                <td>15.3</td>
                                <td>~17.0</td>
                                <td class="positive">+209%</td>
                            </tr>
                            <tr>
                                <td>Employment (000s)</td>
                                <td>~80</td>
                                <td>~105</td>
                                <td>~120</td>
                                <td class="positive">+50%</td>
                            </tr>
                            <tr>
                                <td>Receipt per Arrival ($)</td>
                                <td>1,000</td>
                                <td>876</td>
                                <td>953</td>
                                <td class="negative">-5%</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="chart-visual">
                        <h4>Tourism Recovery 2020-2024</h4>
                        <div class="bar-chart">
                            <div class="bar" style="--height: 34%;" data-label="2020" data-value="$5.5B"></div>
                            <div class="bar" style="--height: 83%;" data-label="2022" data-value="$13.4B"></div>
                            <div class="bar" style="--height: 100%;" data-label="2024" data-value="$16.2B"></div>
                        </div>
                    </div>
                    <div class="data-insight">
                        <strong>Key Insight:</strong> Full recovery from COVID-19 achieved by 2022, with continued growth in 2024
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 11: RUSSIA PROFILE =====
    {
        id: 'russia-profile',
        title: 'Russia: Diversified Continental Economy',
        subtitle: '🇷🇺',
        type: 'profile',
        content: {
            html: `
                <div class="profile-header russia-theme">
                    <div class="country-flag">🇷🇺</div>
                    <div class="country-info">
                        <h3>Russian Federation</h3>
                        <p>World's Largest Country (11 time zones)</p>
                    </div>
                </div>
                <div class="profile-stats">
                    <div class="stat-box">
                        <span class="label">GDP (2024)</span>
                        <span class="value">$2,174 billion</span>
                        <span class="note">23.5× Croatia</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Population</span>
                        <span class="value">146 million</span>
                        <span class="note">37× Croatia</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">GDP per capita</span>
                        <span class="value">$14,889</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Tourism Receipts</span>
                        <span class="value">$7.6 billion</span>
                    </div>
                    <div class="stat-box highlight-main">
                        <span class="label">Tourism % of GDP</span>
                        <span class="value">0.35%</span>
                    </div>
                    <div class="stat-box">
                        <span class="label">Tourism Employment</span>
                        <span class="value">~1.12 million</span>
                    </div>
                </div>
                <div class="profile-note">
                    <strong>Key Fact:</strong> Despite 10× lower tourism % of GDP, Russia employs 10× more people in tourism
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 12: RUSSIA GASTRONOMY =====
    {
        id: 'russia-gastronomy',
        title: 'Russia: Gastronomy as Cultural Heritage',
        type: 'content',
        content: {
            html: `
                <div class="gastro-grid">
                    <div class="gastro-main">
                        <h4>Continental Cuisine with 180+ Ethnic Influences</h4>
                        <div class="regions">
                            <div class="region">
                                <strong>European Russia:</strong> Traditional Slavic cuisine
                            </div>
                            <div class="region">
                                <strong>Caucasus:</strong> Georgian, Armenian influences
                            </div>
                            <div class="region">
                                <strong>Volga Region:</strong> Tatar cuisine
                            </div>
                            <div class="region">
                                <strong>Siberia/Far East:</strong> Indigenous traditions
                            </div>
                        </div>
                    </div>
                    <div class="gastro-products">
                        <h4>Signature Products</h4>
                        <div class="product-list">
                            <span class="product">🥣 Traditional dishes (borscht, pelmeni, blini)</span>
                            <span class="product">🦪 Caviar (Caspian)</span>
                            <span class="product">🍯 Honey (world's largest producer)</span>
                            <span class="product">🍷 Emerging wine regions (Krasnodar)</span>
                            <span class="product">🫖 Tea culture traditions</span>
                        </div>
                    </div>
                    <div class="gastro-focus">
                        <h4>Market Focus</h4>
                        <div class="focus-item">
                            <span class="focus-label">Domestic Tourism</span>
                            <span class="focus-value">Primary focus - vast internal market</span>
                        </div>
                        <div class="focus-item">
                            <span class="focus-label">International Recognition</span>
                            <span class="focus-value">Limited but growing</span>
                        </div>
                    </div>
                    <div class="gastro-challenge">
                        <h4>⚠️ Key Challenges</h4>
                        <p>Infrastructure gaps • Quality consistency • Marketing fragmentation</p>
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 13: RUSSIA ECONOMIC DATA =====
    {
        id: 'russia-data',
        title: 'Russia: Tourism Economic Performance',
        type: 'data',
        content: {
            html: `
                <div class="data-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Indicator</th>
                                <th>2020</th>
                                <th>2022</th>
                                <th>2024</th>
                                <th>Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tourism Receipts (bil $)</td>
                                <td>3.9</td>
                                <td>5.6</td>
                                <td>7.6</td>
                                <td class="positive">+95%</td>
                            </tr>
                            <tr>
                                <td>% of GDP</td>
                                <td>0.26%</td>
                                <td>0.24%</td>
                                <td>0.35%</td>
                                <td class="positive">+35%</td>
                            </tr>
                            <tr>
                                <td>Int'l Arrivals (millions)</td>
                                <td>6.4</td>
                                <td>~4.0</td>
                                <td>~3.5</td>
                                <td class="negative">-45%</td>
                            </tr>
                            <tr>
                                <td>Employment (millions)</td>
                                <td>1.12</td>
                                <td>~1.10</td>
                                <td>~1.10</td>
                                <td class="neutral">~0%</td>
                            </tr>
                            <tr>
                                <td>Domestic Trips (millions)</td>
                                <td>~55</td>
                                <td>~70</td>
                                <td>~85</td>
                                <td class="positive">+55%</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="chart-visual">
                        <h4>Tourism Receipts 2020-2024</h4>
                        <div class="bar-chart">
                            <div class="bar" style="--height: 51%;" data-label="2020" data-value="$3.9B"></div>
                            <div class="bar" style="--height: 74%;" data-label="2022" data-value="$5.6B"></div>
                            <div class="bar" style="--height: 100%;" data-label="2024" data-value="$7.6B"></div>
                        </div>
                    </div>
                    <div class="data-insight">
                        <strong>Key Insight:</strong> Shift to domestic tourism compensates for international decline; sector remains resilient
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 14: COMPARATIVE ECONOMIC INDICATORS =====
    {
        id: 'comparison-economic',
        title: 'Head-to-Head: Economic Comparison',
        type: 'comparison',
        content: {
            html: `
                <div class="comparison-table-container">
                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th>Indicator</th>
                                <th class="croatia">🇭🇷 Croatia</th>
                                <th class="russia">🇷🇺 Russia</th>
                                <th>Ratio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>GDP (2024)</td>
                                <td>$92.5 billion</td>
                                <td>$2,174 billion</td>
                                <td>1 : 23.5</td>
                            </tr>
                            <tr>
                                <td>Population</td>
                                <td>3.9 million</td>
                                <td>146 million</td>
                                <td>1 : 37</td>
                            </tr>
                            <tr>
                                <td>Tourism Receipts</td>
                                <td>$16.2 billion</td>
                                <td>$7.6 billion</td>
                                <td class="highlight-cell">2.1 : 1</td>
                            </tr>
                            <tr class="highlight-row">
                                <td>Tourism % of GDP</td>
                                <td class="highlight">17.51%</td>
                                <td class="highlight">0.35%</td>
                                <td class="mega-highlight">50 : 1</td>
                            </tr>
                            <tr>
                                <td>Receipt per Arrival</td>
                                <td>$953</td>
                                <td>~$615</td>
                                <td>1.5 : 1</td>
                            </tr>
                            <tr>
                                <td>Tourism Employment</td>
                                <td>115,000</td>
                                <td>1.12 million</td>
                                <td>1 : 9.7</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="comparison-insight">
                    <div class="insight-box">
                        <span class="insight-icon">💡</span>
                        <span class="insight-text">Croatia earns <strong>2× more tourism revenue</strong> with <strong>37× smaller population</strong></span>
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 15: TWO MODELS =====
    {
        id: 'two-models',
        title: 'Two Development Models',
        type: 'comparison',
        content: {
            html: `
                <div class="models-comparison">
                    <div class="model-card croatia-model">
                        <div class="model-header">
                            <span class="model-flag">🇭🇷</span>
                            <h3>EXPORT MODEL</h3>
                            <span class="model-subtitle">Gastronomy as Tourism Attraction</span>
                        </div>
                        <div class="model-features">
                            <div class="feature">
                                <span class="feature-icon">🌍</span>
                                <span>International market focus</span>
                            </div>
                            <div class="feature">
                                <span class="feature-icon">💎</span>
                                <span>Premium pricing strategy</span>
                            </div>
                            <div class="feature">
                                <span class="feature-icon">🏆</span>
                                <span>Strong international branding</span>
                            </div>
                            <div class="feature">
                                <span class="feature-icon">📈</span>
                                <span>High economic dependency</span>
                            </div>
                            <div class="feature">
                                <span class="feature-icon">🔗</span>
                                <span>Tight value chain integration</span>
                            </div>
                        </div>
                        <div class="model-risk">
                            <strong>Risk:</strong> Over-dependence on external demand
                        </div>
                    </div>
                    <div class="model-card russia-model">
                        <div class="model-header">
                            <span class="model-flag">🇷🇺</span>
                            <h3>DOMESTIC MODEL</h3>
                            <span class="model-subtitle">Gastronomy as Cultural Asset</span>
                        </div>
                        <div class="model-features">
                            <div class="feature">
                                <span class="feature-icon">🏠</span>
                                <span>Domestic market focus</span>
                            </div>
                            <div class="feature">
                                <span class="feature-icon">🗺️</span>
                                <span>Regional development tool</span>
                            </div>
                            <div class="feature">
                                <span class="feature-icon">📊</span>
                                <span>Low economic dependency</span>
                            </div>
                            <div class="feature">
                                <span class="feature-icon">🌱</span>
                                <span>Self-sufficiency potential</span>
                            </div>
                            <div class="feature">
                                <span class="feature-icon">🔓</span>
                                <span>Loose value chain integration</span>
                            </div>
                        </div>
                        <div class="model-risk">
                            <strong>Risk:</strong> Underutilized international potential
                        </div>
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 16: VALUE CHAIN COMPARISON =====
    {
        id: 'value-chain',
        title: 'Value Chain Integration Analysis',
        type: 'data',
        content: {
            html: `
                <div class="value-chain-container">
                    <div class="chain-comparison">
                        <table class="chain-table">
                            <thead>
                                <tr>
                                    <th>Dimension</th>
                                    <th class="croatia">🇭🇷 Croatia</th>
                                    <th class="russia">🇷🇺 Russia</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Agriculture-Tourism Links</td>
                                    <td><span class="stars">★★★★★</span></td>
                                    <td><span class="stars">★★☆☆☆</span></td>
                                </tr>
                                <tr>
                                    <td>Local Sourcing Rate</td>
                                    <td>60-70%</td>
                                    <td>~30%</td>
                                </tr>
                                <tr>
                                    <td>Quality Certification</td>
                                    <td>Advanced (EU PDO/PGI)</td>
                                    <td>Emerging</td>
                                </tr>
                                <tr>
                                    <td>Agritourism Development</td>
                                    <td>Mature</td>
                                    <td>Early Stage</td>
                                </tr>
                                <tr>
                                    <td>Processing Capacity</td>
                                    <td>Artisanal focus</td>
                                    <td>Industrial scale</td>
                                </tr>
                                <tr>
                                    <td>Scale Potential</td>
                                    <td>Limited</td>
                                    <td>High</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="chain-visual">
                        <h4>Value Chain Flow</h4>
                        <div class="chain-diagram">
                            <div class="chain-step">🌾 Agriculture</div>
                            <div class="chain-arrow">→</div>
                            <div class="chain-step">🏭 Processing</div>
                            <div class="chain-arrow">→</div>
                            <div class="chain-step">🍽️ Hospitality</div>
                            <div class="chain-arrow">→</div>
                            <div class="chain-step">✈️ Tourism</div>
                        </div>
                    </div>
                    <div class="chain-insight">
                        <strong>Key Finding:</strong> Croatia's superior integration generates higher economic multipliers (2.0-2.5× vs 1.2-1.5×)
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 17: SWOT COMPARISON =====
    {
        id: 'swot',
        title: 'Strategic SWOT Analysis',
        type: 'comparison',
        content: {
            html: `
                <div class="swot-dual">
                    <div class="swot-country croatia">
                        <h3>🇭🇷 Croatia</h3>
                        <div class="swot-grid">
                            <div class="swot-box strengths">
                                <h4>Strengths</h4>
                                <ul>
                                    <li>International brand</li>
                                    <li>EU standards</li>
                                    <li>Quality products</li>
                                </ul>
                            </div>
                            <div class="swot-box weaknesses">
                                <h4>Weaknesses</h4>
                                <ul>
                                    <li>Extreme seasonality</li>
                                    <li>High dependency</li>
                                    <li>Small scale</li>
                                </ul>
                            </div>
                            <div class="swot-box opportunities">
                                <h4>Opportunities</h4>
                                <ul>
                                    <li>Premium positioning</li>
                                    <li>Off-season dev.</li>
                                    <li>Inland expansion</li>
                                </ul>
                            </div>
                            <div class="swot-box threats">
                                <h4>Threats</h4>
                                <ul>
                                    <li>Competition</li>
                                    <li>Over-tourism</li>
                                    <li>Climate change</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="swot-country russia">
                        <h3>🇷🇺 Russia</h3>
                        <div class="swot-grid">
                            <div class="swot-box strengths">
                                <h4>Strengths</h4>
                                <ul>
                                    <li>Vast domestic market</li>
                                    <li>Cultural diversity</li>
                                    <li>Self-sufficiency</li>
                                </ul>
                            </div>
                            <div class="swot-box weaknesses">
                                <h4>Weaknesses</h4>
                                <ul>
                                    <li>Limited intl. brand</li>
                                    <li>Infrastructure</li>
                                    <li>Fragmentation</li>
                                </ul>
                            </div>
                            <div class="swot-box opportunities">
                                <h4>Opportunities</h4>
                                <ul>
                                    <li>Regional development</li>
                                    <li>Authentic positioning</li>
                                    <li>Domestic growth</li>
                                </ul>
                            </div>
                            <div class="swot-box threats">
                                <h4>Threats</h4>
                                <ul>
                                    <li>Geopolitics</li>
                                    <li>Investment limits</li>
                                    <li>Quality gaps</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 18: STRATEGIC RECOMMENDATIONS =====
    {
        id: 'recommendations',
        title: 'Policy Recommendations',
        type: 'content',
        content: {
            html: `
                <div class="recommendations-container">
                    <div class="rec-column croatia">
                        <h3>🇭🇷 For Croatia</h3>
                        <div class="rec-list">
                            <div class="rec-item">
                                <span class="rec-num">1</span>
                                <div class="rec-content">
                                    <strong>Diversify Within Tourism</strong>
                                    <p>Develop gastronomy tourism in off-peak seasons and inland regions</p>
                                </div>
                            </div>
                            <div class="rec-item">
                                <span class="rec-num">2</span>
                                <div class="rec-content">
                                    <strong>Strengthen Value Chains</strong>
                                    <p>Increase local sourcing to 80%+ through farm-restaurant partnerships</p>
                                </div>
                            </div>
                            <div class="rec-item">
                                <span class="rec-num">3</span>
                                <div class="rec-content">
                                    <strong>Build Resilience</strong>
                                    <p>Create tourism stabilization funds; diversify source markets</p>
                                </div>
                            </div>
                            <div class="rec-item">
                                <span class="rec-num">4</span>
                                <div class="rec-content">
                                    <strong>Premium Positioning</strong>
                                    <p>Target high-value culinary travelers; expand Michelin presence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rec-column russia">
                        <h3>🇷🇺 For Russia</h3>
                        <div class="rec-list">
                            <div class="rec-item">
                                <span class="rec-num">1</span>
                                <div class="rec-content">
                                    <strong>Prioritize Domestic Tourism</strong>
                                    <p>Develop regional gastronomy circuits; leverage vast internal market</p>
                                </div>
                            </div>
                            <div class="rec-item">
                                <span class="rec-num">2</span>
                                <div class="rec-content">
                                    <strong>Create Regional Brands</strong>
                                    <p>Establish Krasnodar wine region; Siberian honey certification</p>
                                </div>
                            </div>
                            <div class="rec-item">
                                <span class="rec-num">3</span>
                                <div class="rec-content">
                                    <strong>Invest in Infrastructure</strong>
                                    <p>Modernize rural tourism facilities; improve accessibility</p>
                                </div>
                            </div>
                            <div class="rec-item">
                                <span class="rec-num">4</span>
                                <div class="rec-content">
                                    <strong>Quality Standardization</strong>
                                    <p>Develop national gastronomy certification; training programs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 19: CONCLUSIONS =====
    {
        id: 'conclusions',
        title: 'Key Findings',
        type: 'content',
        content: {
            html: `
                <div class="conclusions-container">
                    <div class="conclusion-item">
                        <span class="conclusion-num">1</span>
                        <div class="conclusion-content">
                            <h4>Economic Structure Determines Role</h4>
                            <p>A <strong>50× difference</strong> in relative GDP contribution reflects fundamentally different economic structures, not tourism "success" or "failure"</p>
                        </div>
                    </div>
                    <div class="conclusion-item">
                        <span class="conclusion-num">2</span>
                        <div class="conclusion-content">
                            <h4>Value Chain Integration is Critical</h4>
                            <p>Croatia's <strong>superior agriculture-tourism integration</strong> generates higher economic multipliers (2.0-2.5× vs 1.2-1.5×)</p>
                        </div>
                    </div>
                    <div class="conclusion-item">
                        <span class="conclusion-num">3</span>
                        <div class="conclusion-content">
                            <h4>Neither Model is Superior</h4>
                            <p>Croatia's export model and Russia's domestic model both represent <strong>context-appropriate strategies</strong></p>
                        </div>
                    </div>
                    <div class="conclusion-item">
                        <span class="conclusion-num">4</span>
                        <div class="conclusion-content">
                            <h4>Gastronomy Serves Multiple Functions</h4>
                            <p>Can act as <strong>tourism driver</strong> (Croatia) OR <strong>regional development tool</strong> (Russia) depending on context</p>
                        </div>
                    </div>
                </div>
                <div class="final-insight">
                    <span class="insight-icon">💡</span>
                    <span class="insight-text">Effective gastronomy tourism strategy must align with broader economic structure and development goals</span>
                </div>
            `
        },
        background: { type: 'color', value: 'dark' }
    },

    // ===== SLIDE 20: THANK YOU =====
    {
        id: 'thank-you',
        title: 'Thank You',
        subtitle: 'Questions?',
        type: 'title',
        content: {
            html: `
                <div class="thank-you-content">
                    <div class="authors-info">
                        <h3>Authors</h3>
                        <p class="author-names">Leon Kreso & Sofia Butkovskaia</p>
                    </div>
                    <div class="course-info">
                        <p><strong>Course:</strong> Economics in Tourism</p>
                        <p><strong>Institution:</strong> Faculty of Tourism and Hospitality Management, Opatija</p>
                        <p><strong>Date:</strong> November 2025</p>
                    </div>
                    <div class="closing-flags">
                        <span class="flag">🇭🇷</span>
                        <span class="separator">×</span>
                        <span class="flag">🇷🇺</span>
                    </div>
                </div>
            `
        },
        background: {
            type: 'gradient',
            value: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        }
    }
];

// Export helper function for slide count
export const getSlideCount = (): number => slides.length;

// Export helper to find slide by ID
export const getSlideById = (id: string): Slide | undefined => {
    return slides.find(slide => slide.id === id);
};

// Export function to add slide dynamically
export function addSlide(slide: Slide): void {
    slides.push(slide);
}
