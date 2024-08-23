import type { QueryBuilder } from '../../types';
export declare function createPipelineFetcherLegacy<T>(getContentsList: () => Promise<T[]>): (query: QueryBuilder<T>) => Promise<T | T[]>;
