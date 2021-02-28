export function L(key:string): string {
    const locale = exports["five_locale"];
    if(!locale){
        return key;
    }
    return locale.locale(key);
}