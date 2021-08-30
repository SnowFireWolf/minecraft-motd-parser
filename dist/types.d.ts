interface extraLibraryType {
    [key: string]: string;
}
interface motdJsonType {
    [key: string]: string | boolean | object | Array<object> | undefined;
    font?: string;
    color?: string;
    text?: string;
    extra?: object[];
}
export type { extraLibraryType, motdJsonType };
