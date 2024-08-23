import type { H3Event } from 'h3';
import type { ParsedContent } from '../types';
import type { ContentQueryBuilder } from '../types/query';
export declare function getContentIndex(event: H3Event): Promise<Record<string, string[]>>;
export declare function getIndexedContentsList<T = ParsedContent>(event: H3Event, query: ContentQueryBuilder<T>): Promise<T[]>;
