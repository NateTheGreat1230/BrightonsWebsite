declare const _default: import("vue").DefineComponent<{
    /**
     * The document to render.
     */
    value: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
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
     * The tag to use for the renderer element if it is used.
     * @default 'div'
     */
    tag: {
        type: StringConstructor;
        default: string;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The document to render.
     */
    value: {
        type: ObjectConstructor;
        required: false;
        default: () => {};
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
     * The tag to use for the renderer element if it is used.
     * @default 'div'
     */
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    excerpt: boolean;
    tag: string;
    value: Record<string, any>;
}, {}>;
export default _default;
