///<reference path="Entity.ts" />

class Player extends Entity {

    private _keyboardListener: KeyBoardListener;
 

    public constructor(
        canvas: HTMLCanvasElement,
        imageSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number
    ) {
        super(canvas, imageSource, xCoor, yCoor, width, height);

        this._keyboardListener = new KeyBoardListener();
        
    }

    
    public move() {
        if (this._keyboardListener.getLeftPressed()) {
            this._xPos -= 2;
        }
        if (this._keyboardListener.getUpPressed()) {
            this._yPos -= 2;
        }
        if (this._keyboardListener.getRightPressed()) {
            this._xPos += 2;
        }
        if (this._keyboardListener.getdownPressed()) {
            this._yPos += 2;
        }
    }
}
