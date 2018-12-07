///<reference path="GameItem.ts" />

class Shark extends GameItem{
    private speed:number;

    constructor(
        canvas: HTMLCanvasElement,
        imageSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number,
        speed:  number
    ){
        super(canvas, imageSource, xCoor, yCoor, width, height,speed);
        this.speed = speed;
    }
    public update(){
        
        this.moveRightToLeft();
        this.draw();
    }
    private moveRightToLeft(){
        this._xPos -= this.speed;
        if(this._xPos <= 0){
            this._xPos = window.innerWidth
            this.speed = this._canvas.randomNumber(2,5);
            this._yPos = this._canvas.randomNumber(10,window.innerHeight - 30);
        }
    }

}