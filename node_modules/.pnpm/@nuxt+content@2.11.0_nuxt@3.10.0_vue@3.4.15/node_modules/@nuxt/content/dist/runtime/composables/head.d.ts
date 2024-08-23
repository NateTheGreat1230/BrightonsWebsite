import type { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router';
import type { Ref } from 'vue';
import type { ParsedContent } from '../types';
export declare const useContentHead: (_content: ParsedContent | Ref<ParsedContent>, to?: RouteLocationNormalized | RouteLocationNormalizedLoaded) => void;
