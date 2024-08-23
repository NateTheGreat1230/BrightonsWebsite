import { type StorageValue, type Storage } from 'unstorage';
import type { H3Event } from 'h3';
import type { ParsedContent, ContentTransformer } from '../types';
import type { ModuleOptions } from '../../module';
import type { ContentQueryBuilder, ContentQueryBuilderParams } from '../types/query';
interface ParseContentOptions {
    csv?: ModuleOptions['csv'];
    yaml?: ModuleOptions['yaml'];
    highlight?: ModuleOptions['highlight'];
    markdown?: ModuleOptions['markdown'];
    transformers?: ContentTransformer[];
    pathMeta?: {
        locales?: ModuleOptions['locales'];
        defaultLocale?: ModuleOptions['defaultLocale'];
        respectPathCase?: ModuleOptions['respectPathCase'];
    };
    [key: string]: any;
}
export declare const sourceStorage: Storage;
export declare const cacheStorage: Storage;
export declare const cacheParsedStorage: Storage;
export declare const getContentsIds: (event: H3Event, prefix?: string) => Promise<string[]>;
export declare function chunksFromArray<T>(arr: T[], n: number): Generator<T[], void>;
export declare const getContentsList: (event: H3Event, prefix?: string) => Promise<ParsedContent[]>;
export declare const getContent: (event: H3Event, id: string) => Promise<ParsedContent>;
/**
 * Parse content file using registered plugins
 */
export declare const parseContent: (id: string, content: StorageValue, opts?: ParseContentOptions) => Promise<{
    _id: string;
    body: StorageValue;
}>;
export declare const createServerQueryFetch: <T = ParsedContent>(event: H3Event) => (query: ContentQueryBuilder<T, {}>) => Promise<import("../types/api").ContentQueryResponse<T>>;
/**
 * Query contents
 */
export declare function serverQueryContent<T = ParsedContent>(event: H3Event): ContentQueryBuilder<T>;
export declare function serverQueryContent<T = ParsedContent>(event: H3Event, params?: ContentQueryBuilderParams): ContentQueryBuilder<T>;
export declare function serverQueryContent<T = ParsedContent>(event: H3Event, query?: string, ...pathParts: string[]): ContentQueryBuilder<T>;
export {};
