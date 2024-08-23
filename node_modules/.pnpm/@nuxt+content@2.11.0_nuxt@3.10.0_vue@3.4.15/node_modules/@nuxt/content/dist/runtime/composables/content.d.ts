import type { ParsedContent } from '../types';
export declare const useContentState: <G extends object = Record<string, unknown>>() => {
    pages: any;
    surrounds: any;
    navigation: any;
    globals: any;
};
export declare const useContent: <T extends ParsedContent, G extends object = Record<string, unknown>>() => {
    globals: any;
    navigation: any;
    surround: any;
    page: any;
    excerpt: any;
    toc: any;
    type: any;
    layout: any;
    next: any;
    prev: any;
};
