export function L(key:string): string {
    const locale = exports["five_locale"];
    if(!locale || !locale.get){
        return key;
    }
    return locale.get(key);
}