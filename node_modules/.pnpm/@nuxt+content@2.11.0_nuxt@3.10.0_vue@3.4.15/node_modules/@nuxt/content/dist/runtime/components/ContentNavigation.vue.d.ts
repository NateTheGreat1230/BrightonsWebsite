import { type PropType, type VNode } from 'vue';
import type { NavItem, QueryBuilderParams, QueryBuilder } from '../types';
declare const _default: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        /**
         * A query to be passed to `fetchContentNavigation()`.
         */
        query: {
            type: PropType<QueryBuilderParams | QueryBuilder<import("../types").ParsedContentMeta>>;
            required: false;
            default: undefined;
        };
    }>>, {
        navigation: any;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        /**
         * A query to be passed to `fetchContentNavigation()`.
         */
        query: {
            type: PropType<QueryBuilderParams | QueryBuilder<import("../types").ParsedContentMeta>>;
            required: false;
            default: undefined;
        };
    }>>, {
        query: QueryBuilderParams | QueryBuilder<import("../types").ParsedContentMeta>;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        /**
         * A query to be passed to `fetchContentNavigation()`.
         */
        query: {
            type: PropType<QueryBuilderParams | QueryBuilder<import("../types").ParsedContentMeta>>;
            required: false;
            default: undefined;
        };
    }>>, {
        navigation: any;
    }, {}, {}, {}, {
        query: QueryBuilderParams | QueryBuilder<import("../types").ParsedContentMeta>;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    /**
     * A query to be passed to `fetchContentNavigation()`.
     */
    query: {
        type: PropType<QueryBuilderParams | QueryBuilder<import("../types").ParsedContentMeta>>;
        required: false;
        default: undefined;
    };
}>>, {
    navigation: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    query: QueryBuilderParams | QueryBuilder<import("../types").ParsedContentMeta>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: ({ navigation }: {
            navigation: NavItem[];
        }) => VNode[] | undefined;
    };
});
export default _default;
