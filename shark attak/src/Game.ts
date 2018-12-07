class Game {
    private _canvas: Canvas;
    private _player: Boat;
    private _shark1: Shark;
    private _shark2: Shark;
    private _shark3: Shark;

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new Canvas(canvasElement);
        this._player = new Boat(canvasElement,'./assets/images/boat.png', 100, 100, 100, 70,5);
        this._shark1 = new Shark(canvasElement,'./assets/images/shark.png', window.innerWidth, this._canvas.randomNumber(10,window.innerHeight - 30), 80, 60,this._canvas.randomNumber(2,5))
        this._shark2 = new Shark(canvasElement,'./assets/images/shark.png', window.innerWidth, this._canvas.randomNumber(10,window.innerHeight - 30), 80, 60,this._canvas.randomNumber(2,5))
        this._shark3 = new Shark(canvasElement,'./assets/images/shark.png', window.innerWidth, this._canvas.randomNumber(10,window.innerHeight - 30), 80, 60,this._canvas.randomNumber(2,5))
    }
    

    public draw= () =>{
        this._player.update();
        this._shark1.update();
        this._player.isColliding(this._shark1.getX(), this._shark1.getY(),this._shark1.getWidth(),this._shark1.getHeight())
        this._shark2.update();
        this._player.isColliding(this._shark2.getX(), this._shark2.getY(),this._shark2.getWidth(),this._shark2.getHeight())
        this._shark3.update();
        this._player.isColliding(this._shark3.getX(), this._shark3.getY(),this._shark3.getWidth(),this._shark2.getHeight())
        this._canvas.clear();
    }
}
window.addEventListener('load', init);
var interval:any;

function init(): void {
    const SharkAttack = new Game();
     interval = window.setInterval(SharkAttack.draw, 1000 / 30)
    
}

function end():void{
 clearInterval(interval); 

}