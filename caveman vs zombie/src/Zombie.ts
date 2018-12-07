///<reference path="Entity.ts" />

class Zombie extends Entity {
    private playerXPos: number;
    private playerYPos: number;

    public constructor(
        canvas: HTMLCanvasElement,
        imageSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number
    ) {
        super(canvas, imageSource, xCoor, yCoor, width, height);
    }

    public move(){
        if(this.playerXPos < this._xPos){
            this._xPos -= 0.5
         }
        else if(this.playerXPos > this._xPos){
             this._xPos += 0.5 
          }
        if(this.playerYPos < this._yPos){
             this._yPos -= 0.5
         }
        else if(this.playerYPos > this._yPos){
             this._yPos += 0.5
         }
    }

    public getPlayerPosition(playerXPos:number,playerYPos:number){
        this.playerXPos = playerXPos;
        this.playerYPos = playerYPos;
    
    }

}
