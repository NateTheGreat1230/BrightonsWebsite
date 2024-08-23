import { type H3Event } from 'h3';
import type { ContentQueryBuilderParams } from '../types/query';
export declare const encodeQueryParams: (params: ContentQueryBuilderParams) => string;
export declare const decodeQueryParams: (encoded: string) => any;
export declare const getContentQuery: (event: H3Event) => ContentQueryBuilderParams;
