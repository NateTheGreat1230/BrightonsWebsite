import { H3Event } from 'h3';
import type { ParsedContent, QueryBuilderWhere } from '../types';
export declare function serverSearchContent(event: H3Event, filterQuery?: QueryBuilderWhere): Promise<ParsedContent[]>;
type Section = {
    id: string;
    title: string;
    titles: string[];
    level: number;
    content: string;
};
export declare function splitPageIntoSections(page: ParsedContent, { ignoredTags }: {
    ignoredTags: string[];
}): Section[];
export {};
