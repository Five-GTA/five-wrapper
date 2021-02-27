export class EventGroup {
    
    private groupName:string;

    public constructor(groupName:string){
        this.groupName = groupName;
    }

    public emit(eventName:string, data?:object): void {
        if(!data){
            data = {};
        }
        emit(`g:${this.groupName}:${eventName}`, data);
    }

    public on(eventName:string, callback:Function): void {
        on(`g:${this.groupName}:${eventName}`, callback);
    }

    public emitNet(eventName:string, data?:object): void {
        if(!data){
            data = {};
        }
        emitNet(`g:${this.groupName}:${eventName}`, data);
    }

    public onNet(eventName:string, callback:Function): void {
        onNet(`g:${this.groupName}:${eventName}`, callback);
    }
}