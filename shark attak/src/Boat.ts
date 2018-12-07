///<reference path="GameItem.ts" />

class Boat extends GameItem{

    private _keyboardListener: KeyBoardListener;
    private speed:number;
    private lives:number;

    public constructor(
        canvas: HTMLCanvasElement,
        imageSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number,
        speed: number
    ) {
        super(canvas, imageSource, xCoor, yCoor, width, height,speed);

        this._keyboardListener = new KeyBoardListener();
        this.speed = speed;
        this.lives = 3;
        
    }

    public update(){
        this.move();
        this.draw();
    }
  
    private move() {
        if (this._keyboardListener.getUpPressed()) {
            this._yPos -= this.speed;
        }
        if (this._keyboardListener.getRightPressed()) {
            this._xPos += this.speed;
        }
        if (this._keyboardListener.getdownPressed()) {
            this._yPos += this.speed;
        }
    }

    private checkLives(){
        console.log(this.lives)
        if(this.lives == 0){
            console.log("end")
            end();
        }
    }

   

    public isColliding(sharkX:number,sharkY:number,sharkWidth:number, sharkHeight:number){
        if(this._xPos < sharkX + sharkWidth && this._xPos + this._width > sharkX &&
            this._yPos < sharkY + sharkHeight && this._yPos + this._height > sharkY){
            this.lives -=1;
            this.checkLives();
            
        }
    }
}