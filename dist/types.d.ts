interface extraLibraryType {
    [key: string]: string;
}

interface motdJsonType {
    text: string | Number;
    extra?: {
        color?: string;
        text?: string | Number;
        bold?: boolean;
        strikethrough?: boolean;
        underlined?: boolean;
        obfuscated?: boolean;
        italic?: boolean;
        extra?: object[];
    }[];
    [key: string]: string | boolean | object | Array<object> | undefined;
}

export type { extraLibraryType, motdJsonType };
