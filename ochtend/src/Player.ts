class Player {

    private imageSrc: string;
    private readonly d_canvas: Canvas;

    constructor(canvas:HTMLCanvasElement) {
        //TODO: duplicate with game
        //const canvasElement: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this.d_canvas = new Canvas(canvas);
    }

    public draw(){
        this.d_canvas.writeImageFromFileToCanvas('./assets/images/Zombies/4ZombieFrontSPAWN.png',100, 100);
    }
}