import { type Options as MiniSearchOptions } from 'minisearch';
import { type MaybeRefOrGetter } from '#imports';
export declare const defineMiniSearchOptions: <DataItem>(options: MiniSearchOptions<DataItem>) => any;
export declare const searchContent: <DataItem>(search: MaybeRefOrGetter<string>, options?: {
    miniSearch?: any;
}) => Promise<any>;
