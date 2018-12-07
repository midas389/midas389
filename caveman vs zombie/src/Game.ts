class Game {

    private readonly _canvas: Canvas;
    private readonly _player: Player;
    private _zombie1: Zombie;

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new Canvas(canvasElement);
        this._player = new Player(canvasElement, './assets/images/player.png', 100, 100, 32, 32);
        this._zombie1 = new Zombie(canvasElement, './assets/images/Zombies/4ZombieFrontSPAWN.png', 10, 10, 32, 36);
        console.log('in game constructor');
    }

    public draw = () => {
        this._player.move();
        this._player.draw();
        this._zombie1.getPlayerPosition(this._player.getX(),this._player.getY());
        this._zombie1.move();
        this._zombie1.draw();

        this._canvas.clear();
    }
}

window.addEventListener('load', init);

function init(): void {
    const ZombieGame = new Game();
    window.setInterval(ZombieGame.draw, 1000 / 30)
}
