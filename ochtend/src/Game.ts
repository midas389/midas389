class Game {

    private readonly d_canvas: Canvas;
    private readonly d_player: Player;

    constructor() {
        const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this.d_canvas = new Canvas(canvasElement);
        this.d_player = new Player(canvasElement);
        console.log('in game constructor');
        this.draw();
    }

    public draw(){
        //this.d_canvas.writeImageFromFileToCanvas();
        this.d_player.draw();
    }
}

window.addEventListener('load', init);

function init(): void {
    const ZombieGame = new Game();
}


