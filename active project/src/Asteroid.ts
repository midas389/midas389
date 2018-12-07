class Asteroid
{
    private src: string;
    private xCoordinate: number;
    private yCoordinate: number;
    private xMovement: number;
    private yMovement: number;

    public constructor(src: string, xCoordinate: number, yCoordinate: number, xMovement: number, yMovement: number)
    {
        this.src = src;
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.xMovement = xMovement;
        this.yMovement = yMovement;
    }

    public update(): void{
        this.xCoordinate += this.xMovement;
        this.yCoordinate += this.yMovement;
    }

    public getXCoordinate():number{
        return this.xCoordinate;
    }

    public getYCoordinate():number{
        return this.yCoordinate;
    }
    public getSrc():string{
        return this.src;
    }
}
