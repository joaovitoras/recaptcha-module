declare const _default: import("vue").DefineComponent<{
    siteKey: {
        type: StringConstructor;
        default: string;
    };
    dataTheme: {
        default: string;
        type: StringConstructor;
        validator: (value: unknown) => boolean;
    };
    dataSize: {
        default: null;
        type: StringConstructor;
        validator: (value: unknown) => boolean;
    };
    dataBadge: {
        default: string;
        type: StringConstructor;
        validator: (value: unknown) => boolean;
    };
    dataTabindex: {
        default: number;
        type: NumberConstructor;
    };
}, any, any, {
    computedDataSize(): any;
}, {
    onError(message: any): any;
    onSuccess(token: any): any;
    onExpired(): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "success" | "expired")[], "error" | "success" | "expired", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    siteKey: {
        type: StringConstructor;
        default: string;
    };
    dataTheme: {
        default: string;
        type: StringConstructor;
        validator: (value: unknown) => boolean;
    };
    dataSize: {
        default: null;
        type: StringConstructor;
        validator: (value: unknown) => boolean;
    };
    dataBadge: {
        default: string;
        type: StringConstructor;
        validator: (value: unknown) => boolean;
    };
    dataTabindex: {
        default: number;
        type: NumberConstructor;
    };
}>> & {
    onError?: ((...args: any[]) => any) | undefined;
    onSuccess?: ((...args: any[]) => any) | undefined;
    onExpired?: ((...args: any[]) => any) | undefined;
}, {
    siteKey: string;
    dataTheme: string;
    dataSize: string;
    dataBadge: string;
    dataTabindex: number;
}, {}>;
export default _default;
