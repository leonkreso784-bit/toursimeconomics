/**
 * Slide Interface and Types
 * Defines the structure of presentation slides
 */
export interface Slide {
    id: string;
    title: string;
    subtitle?: string;
    type: SlideType;
    content: SlideContent;
    background?: SlideBackground;
    animation?: SlideAnimation;
}
export type SlideType = 'title' | 'section' | 'content' | 'comparison' | 'chart' | 'image' | 'quote' | 'conclusion' | 'thanks' | 'stats' | 'profile' | 'data';
export interface SlideContent {
    html?: string;
    elements?: SlideElement[];
    columns?: SlideColumn[];
    comparison?: ComparisonData;
    chart?: ChartData;
    image?: ImageData;
    quote?: QuoteData;
    stats?: StatData[];
    features?: FeatureData[];
    regions?: RegionData[];
    timeline?: TimelineData[];
    table?: TableData;
}
export interface SlideElement {
    type: 'text' | 'list' | 'card' | 'icon' | 'highlight';
    content: string;
    className?: string;
}
export interface SlideColumn {
    title?: string;
    content: string;
    icon?: string;
}
export interface ComparisonData {
    left: {
        country: string;
        flag: string;
        items: string[];
    };
    right: {
        country: string;
        flag: string;
        items: string[];
    };
}
export interface ChartData {
    type: 'bar' | 'line' | 'pie' | 'comparison';
    title: string;
    data: ChartDataPoint[];
    labels?: string[];
}
export interface ChartDataPoint {
    label: string;
    value: number;
    color?: string;
    country?: 'croatia' | 'russia';
}
export interface ImageData {
    src: string;
    alt: string;
    caption?: string;
}
export interface QuoteData {
    text: string;
    author?: string;
    source?: string;
}
export interface StatData {
    value: string;
    label: string;
    icon?: string;
}
export interface FeatureData {
    icon: string;
    title: string;
    description: string;
}
export interface RegionData {
    name: string;
    description: string;
    icon?: string;
}
export interface TimelineData {
    date: string;
    title: string;
    description: string;
}
export interface TableData {
    headers: string[];
    rows: string[][];
}
export interface SlideBackground {
    type: 'color' | 'gradient' | 'image';
    value: string;
    overlay?: boolean;
}
export interface SlideAnimation {
    entrance: AnimationType;
    exit?: AnimationType;
    elements?: ElementAnimation[];
}
export type AnimationType = 'fade' | 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'slide';
export interface ElementAnimation {
    selector: string;
    animation: AnimationType;
    delay?: number;
}
//# sourceMappingURL=Slide.d.ts.map