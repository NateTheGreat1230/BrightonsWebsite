import { type PropType, type VNode } from 'vue';
import type { ParsedContent, QueryBuilderParams } from '../types';
declare const _default: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        /**
         * Query props
         */
        /**
         * The path of the content to load from content source.
         * @default '/'
         */
        path: {
            type: StringConstructor;
            required: false;
            default: undefined;
        };
        /**
         * A query builder params object to be passed to <ContentQuery /> component.
         */
        query: {
            type: PropType<QueryBuilderParams>;
            required: false;
            default: undefined;
        };
    }>>, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        /**
         * Query props
         */
        /**
         * The path of the content to load from content source.
         * @default '/'
         */
        path: {
            type: StringConstructor;
            required: false;
            default: undefined;
        };
        /**
         * A query builder params object to be passed to <ContentQuery /> component.
         */
        query: {
            type: PropType<QueryBuilderParams>;
            required: false;
            default: undefined;
        };
    }>>, {
        path: string;
        query: QueryBuilderParams;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        /**
         * Query props
         */
        /**
         * The path of the content to load from content source.
         * @default '/'
         */
        path: {
            type: StringConstructor;
            required: false;
            default: undefined;
        };
        /**
         * A query builder params object to be passed to <ContentQuery /> component.
         */
        query: {
            type: PropType<QueryBuilderParams>;
            required: false;
            default: undefined;
        };
    }>>, {}, {}, {}, {}, {
        path: string;
        query: QueryBuilderParams;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * Query props
     */
    /**
     * The path of the content to load from content source.
     * @default '/'
     */
    path: {
        type: StringConstructor;
        required: false;
        default: undefined;
    };
    /**
     * A query builder params object to be passed to <ContentQuery /> component.
     */
    query: {
        type: PropType<QueryBuilderParams>;
        required: false;
        default: undefined;
    };
}>>, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    path: string;
    query: QueryBuilderParams;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (context: {
            list: ParsedContent[];
            refresh: () => Promise<void>;
        }) => VNode[] | undefined;
    };
});
export default _default;
