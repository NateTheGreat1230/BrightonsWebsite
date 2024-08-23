import { type PropType, type VNode } from 'vue';
import type { ParsedContent, QueryBuilderParams } from '../types';
declare const _default: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        /**
         * Renderer props
         */
        /**
         * The tag to use for the renderer element if it is used.
         * @default 'div'
         */
        tag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        /**
         * Whether or not to render the excerpt.
         * @default false
         */
        excerpt: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * Query props
         */
        /**
         * The path of the content to load from content source.
         * @default useRoute().path
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
        /**
         * Whether or not to map the document data to the `head` property.
         */
        head: {
            type: BooleanConstructor;
            required: false;
            default: undefined;
        };
    }>>, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        /**
         * Renderer props
         */
        /**
         * The tag to use for the renderer element if it is used.
         * @default 'div'
         */
        tag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        /**
         * Whether or not to render the excerpt.
         * @default false
         */
        excerpt: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * Query props
         */
        /**
         * The path of the content to load from content source.
         * @default useRoute().path
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
        /**
         * Whether or not to map the document data to the `head` property.
         */
        head: {
            type: BooleanConstructor;
            required: false;
            default: undefined;
        };
    }>>, {
        excerpt: boolean;
        tag: string;
        path: string;
        query: QueryBuilderParams;
        head: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        /**
         * Renderer props
         */
        /**
         * The tag to use for the renderer element if it is used.
         * @default 'div'
         */
        tag: {
            type: StringConstructor;
            required: false;
            default: string;
        };
        /**
         * Whether or not to render the excerpt.
         * @default false
         */
        excerpt: {
            type: BooleanConstructor;
            default: boolean;
        };
        /**
         * Query props
         */
        /**
         * The path of the content to load from content source.
         * @default useRoute().path
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
        /**
         * Whether or not to map the document data to the `head` property.
         */
        head: {
            type: BooleanConstructor;
            required: false;
            default: undefined;
        };
    }>>, {}, {}, {}, {}, {
        excerpt: boolean;
        tag: string;
        path: string;
        query: QueryBuilderParams;
        head: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * Renderer props
     */
    /**
     * The tag to use for the renderer element if it is used.
     * @default 'div'
     */
    tag: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    /**
     * Whether or not to render the excerpt.
     * @default false
     */
    excerpt: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Query props
     */
    /**
     * The path of the content to load from content source.
     * @default useRoute().path
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
    /**
     * Whether or not to map the document data to the `head` property.
     */
    head: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
}>>, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    excerpt: boolean;
    tag: string;
    path: string;
    query: QueryBuilderParams;
    head: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (context: {
            doc: ParsedContent;
            refresh: () => Promise<void>;
        }) => VNode[] | undefined;
    };
});
export default _default;
