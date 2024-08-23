import { type Storage, type StorageValue } from 'unstorage';
import type { NavItem, ParsedContent } from '../types';
import type { ContentQueryBuilderParams } from '../types/query';
export declare const contentStorage: Storage<StorageValue>;
export declare function createDB(storage: Storage): {
    storage: Storage<StorageValue>;
    fetch: (query: import("../types/query").ContentQueryBuilder<ParsedContent, {}>) => Promise<import("../types/api").ContentQueryResponse<ParsedContent>>;
    query: (initialParams?: ContentQueryBuilderParams) => import("../types/query").ContentQueryBuilder<ParsedContent, {}>;
};
export declare function useContentDatabase(): Promise<{
    storage: Storage<StorageValue>;
    fetch: (query: import("../types/query").ContentQueryBuilder<ParsedContent, {}>) => Promise<import("../types/api").ContentQueryResponse<ParsedContent>>;
    query: (initialParams?: ContentQueryBuilderParams | undefined) => import("../types/query").ContentQueryBuilder<ParsedContent, {}>;
}>;
export declare function generateNavigation(query?: ContentQueryBuilderParams): Promise<Array<NavItem>>;
