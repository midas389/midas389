class count{
    private currentTime:number;
    private maxTime:number;
    private level:number;

    constructor(currentTime:number,maxTime:number, level:number){
        this.currentTime = currentTime;
        this.maxTime = maxTime;
        this.level = level;
    }

    public counter():boolean{
        if(this.currentTime < this.maxTime){
            this.currentTime += 1;
            return false
        }
        else{
            this.reset();
            return  true 
        }
    }

    private reset():void{
        this.currentTime = 0;
    }



    public getCurrentTime(){
        return this.currentTime;
    }
}