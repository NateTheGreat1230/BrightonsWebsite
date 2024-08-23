/**
 * component only used within islands for slot teleport
 */
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        required: true;
    };
    /**
     * must be an array to handle v-for
     */
    props: {
        type: () => Array<any>;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: true;
    };
    /**
     * must be an array to handle v-for
     */
    props: {
        type: () => Array<any>;
    };
}>>, {}, {}>;
export default _default;
