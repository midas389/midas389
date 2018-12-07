class Canvas {
    constructor(canvas) {
        this.d_canvas = canvas;
        this.d_context = this.d_canvas.getContext('2d');
        console.log('in canvas constructor');
    }
    clear() {
        this.d_context.clearRect(0, 0, this.d_canvas.width, this.d_canvas.height);
    }
    writeTextToCanvas(aText, aFontSize, aXpos, aYpos, aColor = "white", aAlignment = "center") {
        this.d_context.font = `${aFontSize}px Minecraft`;
        this.d_context.fillStyle = aColor;
        this.d_context.textAlign = aAlignment;
        this.d_context.fillText(aText, aXpos, aYpos);
    }
    writeImageFromFileToCanvas(aSrc, aXpos, aYpos) {
        let image = new Image();
        image.addEventListener('load', () => {
            this.d_context.drawImage(image, aXpos, aYpos);
        });
        image.src = aSrc;
    }
}
class Entity {
    constructor(canvas, imageSource, xCoor, yCoor, width, height) {
        this._canvas = new Canvas(canvas);
        this._imageSrc = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
        this._width = width;
        this._height = height;
    }
    draw() {
        this._canvas.writeImageFromFileToCanvas(this._imageSrc, this._xPos, this._yPos);
    }
    getX() {
        return this._xPos;
    }
    getY() {
        return this._yPos;
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
}
class Game {
    constructor() {
        this.draw = () => {
            this._player.move();
            this._player.draw();
            this._zombie1.getPlayerPosition(this._player.getX(), this._player.getY());
            this._zombie1.move();
            this._zombie1.draw();
            this._canvas.clear();
        };
        const canvasElement = document.getElementById('canvas');
        this._canvas = new Canvas(canvasElement);
        this._player = new Player(canvasElement, './assets/images/player.png', 100, 100, 32, 32);
        this._zombie1 = new Zombie(canvasElement, './assets/images/Zombies/4ZombieFrontSPAWN.png', 10, 10, 32, 36);
        console.log('in game constructor');
    }
}
window.addEventListener('load', init);
function init() {
    const ZombieGame = new Game();
    window.setInterval(ZombieGame.draw, 1000 / 30);
}
class Player extends Entity {
    constructor(canvas, imageSource, xCoor, yCoor, width, height) {
        super(canvas, imageSource, xCoor, yCoor, width, height);
        this._keyboardListener = new KeyBoardListener();
    }
    move() {
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
class Zombie extends Entity {
    constructor(canvas, imageSource, xCoor, yCoor, width, height) {
        super(canvas, imageSource, xCoor, yCoor, width, height);
    }
    move() {
        if (this.playerXPos < this._xPos) {
            this._xPos -= 0.5;
        }
        else if (this.playerXPos > this._xPos) {
            this._xPos += 0.5;
        }
        if (this.playerYPos < this._yPos) {
            this._yPos -= 0.5;
        }
        else if (this.playerYPos > this._yPos) {
            this._yPos += 0.5;
        }
    }
    getPlayerPosition(playerXPos, playerYPos) {
        this.playerXPos = playerXPos;
        this.playerYPos = playerYPos;
    }
}
class KeyBoardListener {
    constructor() {
        this.keyDownHandler = (event) => {
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
        };
        this.keyUpHandler = (event) => {
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
        };
        this.leftPressed = false;
        this.upPressed = false;
        this.rightPressed = false;
        this.downPressed = false;
        window.addEventListener("keydown", this.keyDownHandler);
        window.addEventListener("keyup", this.keyUpHandler);
    }
    getLeftPressed() {
        return this.leftPressed;
    }
    getUpPressed() {
        return this.upPressed;
    }
    getRightPressed() {
        return this.rightPressed;
    }
    getdownPressed() {
        return this.downPressed;
    }
}
//# sourceMappingURL=app.js.map