class Game {
    //global attr for canvas
    //readonly attributes must be initialized in the constructor
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;

    //some global player attributes
    private readonly player: string = "Player1";
    private readonly score: number = 400;
    private readonly lives: number = 3;
    private readonly highscores: Array<any>; //TODO: do not use 'any': write an interface!

    private asteroidsPosition: Array<any>; 
    private maxAsteroidsOnScreen:number;
    private asteroids:Array<any>;

    private leftPressed: boolean;
    private upPressed: boolean;
    private rightPressed: boolean;
    private downPressed: boolean;

    private shipXOffset: number = 50;
    private shipYOffset: number = 37;

    public constructor(canvasId: HTMLCanvasElement) {
        //construct all canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        //set the context of the canvas
        this.ctx = this.canvas.getContext('2d');

        this.highscores = [
            {
                playerName: 'Loek',
                score: 40000
            },
            {
                playerName: 'Daan',
                score: 34000
            },
            {
                playerName: 'Rimmert',
                score: 200
            }
        ]

        // all screens: uncomment to activate
        this.start_screen();
        // this.level_screen();
        // this.title_screen();

    }

    //-------- Splash screen methods ------------------------------------
    /**
     * Function to initialize the splash screen
     */
    public start_screen()
    {
        const horizontalCenter = this.canvas.width / 2;
        const verticalCenter = this.canvas.height / 2;

        //1. add 'Asteroids' text
        this.writeTextToCanvas("Asteroids", 140, horizontalCenter, 150);

        //2. add 'Press to play' text
        this.writeTextToCanvas("PRESS PLAY TO START", 40, horizontalCenter, verticalCenter - 20);

        //3. add button with 'start' text
        this.writeButtonToCanvas();

        //4. add Asteroid image
        this.writeImageToCanvas(
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png",
            horizontalCenter - 50,
            verticalCenter + 40
        );
    }

    //-------- level screen methods -------------------------------------
    /**
     * Function to initialize the level screen
     */
    public level_screen() {
        //1. load life images
        // const lifeImagePath = "./assets/images/SpaceShooterRedux/PNG/UI/playerLife1_blue.png";
        // this.writeImageToCanvas(lifeImagePath, 70, 50, 40, undefined, this.lives);

        //2. draw current score
        this.writeTextToCanvas(`Score: ${this.score}`, 20, this.canvas.width -150, 65, undefined, "right");

        //3. draw random asteroids
        const asteroids: Array<string> = [
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big2.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big3.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big4.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_med1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_med3.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_small1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_small2.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_tiny1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_tiny2.png",
        ];

        const maxAsteroidsOnScreen: number = 5;
        this.asteroidsPosition =[];
        for (let i = 0; i < maxAsteroidsOnScreen; i++) {
            const index = this.randomNumber(0, asteroids.length);

            this.asteroidsPosition.push(
                 {
                index:"",
                xPosition: 0 ,
                yPosition: 0
            })
            this.asteroidsPosition[i].index= asteroids[index];
            this.asteroidsPosition[i].xPosition = this.randomNumber(0, this.canvas.width);
            this.asteroidsPosition[i].yPosition =  this.randomNumber(0, this.canvas.height);
            console.log(this.asteroidsPosition[i]);
           
           
        }
    }

    //-------- Title screen methods -------------------------------------

    /**
    * Function to initialize the title screen
    */
    public title_screen()
    {
        const horizontalCenter = this.canvas.width / 2;
        let verticalCenter = this.canvas.height / 2;

        //1. draw your score
        this.writeTextToCanvas(`${this.player} score is ${this.score}`, 80, horizontalCenter, verticalCenter - 100);

        //2. draw all highscores
        this.writeTextToCanvas("HIGHSCORES", 40, horizontalCenter, verticalCenter);

        this.highscores.forEach((element, index) => {
            verticalCenter += 40;

            this.writeTextToCanvas(
                `${index + 1}: ${element.playerName} - ${element.score}`,
                20,
                horizontalCenter,
                verticalCenter
            );
        });
    }

    //-------Generic canvas functions ----------------------------------

    /**
    * Renders a random number between min and max
    * @param {number} min - minimal time
    * @param {number} max - maximal time
    */
    public randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }

    public writeTextToCanvas(
        text: string,
        fontSize: number,
        xCoordinate: number,
        yCoordinate: number,
        color: string = "white",
        alignment: CanvasTextAlign = "center"
    ) {
        this.ctx.font = `${fontSize}px Minecraft`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }

    public writeImageToCanvas(
        src: string,
        xCoordinate: number,
        yCoordinate: number,
        deltaX: number = 0,
        deltaY: number = 0,
        loops: number = 1
    ) {
        let element = document.createElement("img");
        element.src = src;

        for (let i = 0; i < loops; i++) {
            element.addEventListener("load", () => {
                xCoordinate += deltaX;
                yCoordinate += deltaY;
                this.ctx.drawImage(element, xCoordinate, yCoordinate);
            });
        }
    }

    /**
     * Writes "Play" button to canvas.
     * NOTE: This is all hard coded, but that's fine for now.
     */
    public writeButtonToCanvas()
    {
        const horizontalCenter = this.canvas.width / 2;
        const verticalCenter = this.canvas.height / 2;

        let buttonElement = document.createElement("img");
        buttonElement.src = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";

        buttonElement.addEventListener("load", () => {
            this.ctx.drawImage(buttonElement, horizontalCenter - 111, verticalCenter + 219);
            this.writeTextToCanvas("Play", 20, horizontalCenter, verticalCenter + 245, "black");
        });

        this.canvas.addEventListener("click", (event: MouseEvent) => {
            if (event.x > horizontalCenter - 111 && event.x < horizontalCenter + 111) {
                if (event.y > verticalCenter + 219 && event.y < verticalCenter + 259) {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.level_screen();
                    window.addEventListener("keydown", (event) => this.keyDownHandler(event));
                    window.addEventListener("keyup", (event) => this.keyUpHandler(event));

                    window.setInterval(() => this.draw(), 1000 / 60);
                }
            }
        });
    }
    public drawasteroids(){
        for(var i=0; i<this.maxAsteroidsOnScreen; i++){
            this.writeImageToCanvas(this.asteroidsPosition[i].index, this.asteroidsPosition[i].xPosition, this.asteroidsPosition[i].yPosition);
         this.asteroidsPosition[i].yPosition += 2;

             if(this.asteroidsPosition[i].yPosition >= this.canvas.height){
                this.asteroidsPosition[i].yPosition = 0;
             }
        }
        
        
    }

    private draw()
    {
        

        if (this.leftPressed) {
            this.shipXOffset -= 2;
        }
        if (this.upPressed) {
            this.shipYOffset -= 2;
        }
        if (this.rightPressed) {
            this.shipXOffset += 2;
        }
        if (this.downPressed) {
            this.shipYOffset += 2;
        }

        //4. draw player spaceship
        this.writeImageToCanvas("./assets/images/SpaceShooterRedux/PNG/playerShip1_blue.png", this.canvas.width / 2 + this.shipXOffset, this.canvas.height / 2 + this.shipYOffset);
        //draw current score
        this.writeTextToCanvas(`Score: ${this.score}`, 20, this.canvas.width -150, 65, undefined, "right");
        // draw lifes
        const lifeImagePath = "./assets/images/SpaceShooterRedux/PNG/UI/playerLife1_blue.png";
        this.writeImageToCanvas(lifeImagePath, 70, 50, 40, undefined, this.lives);
        //draw asteroids
        this.drawasteroids();
        //clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    private keyDownHandler(event: KeyboardEvent)
    {
        if (event.keyCode == 37) {
            this.leftPressed = true;
        }
        if (event.keyCode == 38) {
            this.upPressed = true;
        }
        if (event.keyCode == 39) {
            this.rightPressed = true;
        }
        if (event.keyCode == 40) {
            this.downPressed = true;
        }
    }

    private keyUpHandler(event: KeyboardEvent)
    {
        if (event.keyCode == 37) {
            this.leftPressed = false;
        }
        if (event.keyCode == 38) {
            this.upPressed = false;
        }
        if (event.keyCode == 39) {
            this.rightPressed = false;
        }
        if (event.keyCode == 40) {
            this.downPressed = false;
        }
    }
}

//this will get an HTML element. I cast this element in de appropriate type using <>
let init = function () {
    const Asteroids = new Game(<HTMLCanvasElement>document.getElementById('canvas'));
};

//add loadlistener for custom font types
window.addEventListener('load', init);