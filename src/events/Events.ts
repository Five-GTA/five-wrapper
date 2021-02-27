import { EventGroup } from "./groups/EventGroup";
export class Events {

    public static emit(eventName:string, data?:object): void {
        if(!data){
            data = {};
        }
        emit(eventName, data);
    }

    public static on(eventName:string, callback:Function): void {
        on(eventName, callback);
    }

    public static emitNet(eventName:string, data?:object): void {
        if(!data){
            data = {};
        }
        emitNet(eventName, data);
    }

    public static onNet(eventName:string, callback:Function): void {
        onNet(eventName, callback);
    }

    public static group(groupName:string): EventGroup {
        return new EventGroup(groupName);
    }

}