import { type PropType, type VNode } from 'vue';
import type { ParsedContent, SortParams } from '../types';
export interface ContentQueryDefaultSlotContext {
    data: ParsedContent | Array<ParsedContent>;
    refresh: () => Promise<void>;
    isPartial: boolean;
}
declare const _default: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        /**
         * The path of the content to load from content source.
         */
        path: {
            type: StringConstructor;
            required: false;
            default: undefined;
        };
        /**
         * Select a subset of fields
         */
        only: {
            type: PropType<string[]>;
            required: false;
            default: undefined;
        };
        /**
         * Remove a subset of fields
         */
        without: {
            type: PropType<string[]>;
            required: false;
            default: undefined;
        };
        /**
         * Filter results
         */
        where: {
            type: PropType<{
                [key: string]: any;
            }>;
            required: false;
            default: undefined;
        };
        /**
         * Sort results
         */
        sort: {
            type: PropType<SortParams>;
            required: false;
            default: undefined;
        };
        /**
         * Limit number of results
         */
        limit: {
            type: PropType<number>;
            required: false;
            default: undefined;
        };
        /**
         * Skip number of results
         */
        skip: {
            type: PropType<number>;
            required: false;
            default: undefined;
        };
        /**
         * Filter contents based on locale
         */
        locale: {
            type: PropType<string>;
            required: false;
            default: undefined;
        };
        /**
         * A type of query to be made.
         */
        find: {
            type: PropType<"surround" | "one">;
            required: false;
            default: undefined;
        };
    }>>, {
        isPartial: any;
        data: any;
        refresh: any;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        /**
         * The path of the content to load from content source.
         */
        path: {
            type: StringConstructor;
            required: false;
            default: undefined;
        };
        /**
         * Select a subset of fields
         */
        only: {
            type: PropType<string[]>;
            required: false;
            default: undefined;
        };
        /**
         * Remove a subset of fields
         */
        without: {
            type: PropType<string[]>;
            required: false;
            default: undefined;
        };
        /**
         * Filter results
         */
        where: {
            type: PropType<{
                [key: string]: any;
            }>;
            required: false;
            default: undefined;
        };
        /**
         * Sort results
         */
        sort: {
            type: PropType<SortParams>;
            required: false;
            default: undefined;
        };
        /**
         * Limit number of results
         */
        limit: {
            type: PropType<number>;
            required: false;
            default: undefined;
        };
        /**
         * Skip number of results
         */
        skip: {
            type: PropType<number>;
            required: false;
            default: undefined;
        };
        /**
         * Filter contents based on locale
         */
        locale: {
            type: PropType<string>;
            required: false;
            default: undefined;
        };
        /**
         * A type of query to be made.
         */
        find: {
            type: PropType<"surround" | "one">;
            required: false;
            default: undefined;
        };
    }>>, {
        skip: number;
        limit: number;
        only: string[];
        without: string[];
        sort: SortParams;
        where: {
            [key: string]: any;
        };
        find: "surround" | "one";
        path: string;
        locale: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        /**
         * The path of the content to load from content source.
         */
        path: {
            type: StringConstructor;
            required: false;
            default: undefined;
        };
        /**
         * Select a subset of fields
         */
        only: {
            type: PropType<string[]>;
            required: false;
            default: undefined;
        };
        /**
         * Remove a subset of fields
         */
        without: {
            type: PropType<string[]>;
            required: false;
            default: undefined;
        };
        /**
         * Filter results
         */
        where: {
            type: PropType<{
                [key: string]: any;
            }>;
            required: false;
            default: undefined;
        };
        /**
         * Sort results
         */
        sort: {
            type: PropType<SortParams>;
            required: false;
            default: undefined;
        };
        /**
         * Limit number of results
         */
        limit: {
            type: PropType<number>;
            required: false;
            default: undefined;
        };
        /**
         * Skip number of results
         */
        skip: {
            type: PropType<number>;
            required: false;
            default: undefined;
        };
        /**
         * Filter contents based on locale
         */
        locale: {
            type: PropType<string>;
            required: false;
            default: undefined;
        };
        /**
         * A type of query to be made.
         */
        find: {
            type: PropType<"surround" | "one">;
            required: false;
            default: undefined;
        };
    }>>, {
        isPartial: any;
        data: any;
        refresh: any;
    }, {}, {}, {}, {
        skip: number;
        limit: number;
        only: string[];
        without: string[];
        sort: SortParams;
        where: {
            [key: string]: any;
        };
        find: "surround" | "one";
        path: string;
        locale: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * The path of the content to load from content source.
     */
    path: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    /**
     * Select a subset of fields
     */
    only: {
        type: PropType<string[]>;
        required: false;
        default: undefined;
    };
    /**
     * Remove a subset of fields
     */
    without: {
        type: PropType<string[]>;
        required: false;
        default: undefined;
    };
    /**
     * Filter results
     */
    where: {
        type: PropType<{
            [key: string]: any;
        }>;
        required: false;
        default: undefined;
    };
    /**
     * Sort results
     */
    sort: {
        type: PropType<SortParams>;
        required: false;
        default: undefined;
    };
    /**
     * Limit number of results
     */
    limit: {
        type: PropType<number>;
        required: false;
        default: undefined;
    };
    /**
     * Skip number of results
     */
    skip: {
        type: PropType<number>;
        required: false;
        default: undefined;
    };
    /**
     * Filter contents based on locale
     */
    locale: {
        type: PropType<string>;
        required: false;
        default: undefined;
    };
    /**
     * A type of query to be made.
     */
    find: {
        type: PropType<"surround" | "one">;
        required: false;
        default: undefined;
    };
}>>, {
    isPartial: any;
    data: any;
    refresh: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    skip: number;
    limit: number;
    only: string[];
    without: string[];
    sort: SortParams;
    where: {
        [key: string]: any;
    };
    find: "surround" | "one";
    path: string;
    locale: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (context: ContentQueryDefaultSlotContext) => VNode[] | undefined;
    };
});
export default _default;
