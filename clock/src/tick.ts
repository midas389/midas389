class tick{

    private _seconds:count;
    private _minutes:count;
    private _hours:count;

    constructor(){  
        this._seconds = new count(0,60,1);
        this._minutes = new count(0,60,2);
        this._hours = new count(0,24,3);   
    }

    public tick(){
        if(this._seconds.counter()){
            this._minutes.counter();
        }
        if(this._minutes.counter()){
            this._hours.counter();
        }
        console.log(this._seconds , this._minutes)
    }

    
}