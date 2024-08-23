import type { ParsedContent } from '../types';
import type { ContentQueryBuilder, ContentQueryBuilderParams } from '../types/query';
/**
 * Query fetcher
 */
export declare const createQueryFetch: <T = ParsedContent>() => (query: ContentQueryBuilder<T, {}>) => Promise<unknown>;
/**
 * Query contents from path
 */
export declare function queryContent<T = ParsedContent>(): ContentQueryBuilder<T>;
export declare function queryContent<T = ParsedContent>(query: string, ...pathParts: string[]): ContentQueryBuilder<T>;
export declare function queryContent<T = ParsedContent>(query: ContentQueryBuilderParams): ContentQueryBuilder<T>;
