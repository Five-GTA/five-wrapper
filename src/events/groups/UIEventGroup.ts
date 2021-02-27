import { UI } from "../UI";

export class UIEventGroup {

    private groupName:string;
    private instance:UI;

    constructor(groupName:string, instance:UI){
        this.groupName = groupName;
        this.instance = instance;
    }

    public emit(eventName:string, data?:object): void {
        this.instance.emit(`g:${this.groupName}:${eventName}`, data);
    }

    public on(eventName:string, callback:Function): void {
        this.instance.on(`g:${this.groupName}:${eventName}`, callback);
    }
}
