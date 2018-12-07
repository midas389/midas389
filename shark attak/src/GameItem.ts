class GameItem {
    protected _xPos: number;
    protected _yPos: number;
    protected readonly _height: number;
    protected readonly _width: number;
    private readonly _imageSrc: string;
    protected readonly _canvas: Canvas;
    protected _speed:number

    public constructor(
        canvas: HTMLCanvasElement,
        imageSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number,
        speed: number
        ) {
        this._canvas = new Canvas(canvas);
        this._imageSrc = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
        this._width = width;
        this._height = height;
        this._speed = speed;
    }

    public draw(){
        this._canvas.writeImageToCanvas(this._imageSrc,this._xPos,this._yPos,this._width,this._height);
    }

    public getX(): number
    {
        return this._xPos;
    }

    public getY(): number
    {
        return this._yPos;
    }

    public getWidth(): number
    {
        return this._width;
    }

    public getHeight(): number
    {
        return this._height;
    }
}