import { UIEventGroup } from "./groups/UIEventGroup";

export class UI {

    private fiveui:any;
    
    private constructor(){
        this.fiveui = exports["five_ui"];
        if(this.isAvailable()){
            console.error("This module needs five_ui dependency to start.");   
            return;
        }
    }

    public isAvailable():boolean{
        return (this.fiveui !== undefined);
    }

    public emit(eventName:string, data?:object): void {
        if(!data){
            data = {};
        }
        if(this.isAvailable()){
            this.fiveui.send(`${eventName}`, data);            
        }
    }

    public on(eventName:string, callback:Function): void {
        if(this.isAvailable()){
            this.fiveui.addEventListener(`${eventName}`, callback);            
        }
    }

    private static _instance:UI;
    private static get instance():UI {
        if(!this._instance){
            this._instance = new UI;
        }
        return this._instance;
    }

    public static on(eventName:string, callback:Function):void {
        this.instance.on(eventName, callback);
    }
    public static emit(eventName:string, data?:object):void {
        this.instance.emit(eventName, data);
    }

    public static group(groupName:string): UIEventGroup {
        return new UIEventGroup(groupName, this.instance);
    }
}