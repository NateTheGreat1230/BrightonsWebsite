declare const _default: import("vue").DefineComponent<{
    /**
     * A slot name or function
     */
    use: {
        type: FunctionConstructor;
        default: undefined;
    };
    /**
     * Tags to unwrap separated by spaces
     * Example: 'ul li'
     */
    unwrap: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * A slot name or function
     */
    use: {
        type: FunctionConstructor;
        default: undefined;
    };
    /**
     * Tags to unwrap separated by spaces
     * Example: 'ul li'
     */
    unwrap: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
}>>, {
    use: Function;
    unwrap: string | boolean;
}, {}>;
export default _default;
