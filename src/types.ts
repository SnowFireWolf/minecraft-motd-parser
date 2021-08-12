interface extraLibraryType {
  [key: string]: string;
};



interface motdJsonType {
  [key: string]: string | boolean | object | Array<object> | undefined;
  font?:    string;
  color? : string;
  text?: string;
  extra?: object[];
};



// 類型檢查
function isMotdJSONType(object: any): object is motdJsonType {
  return object;
}



export {
  extraLibraryType,
  motdJsonType,
  isMotdJSONType
};