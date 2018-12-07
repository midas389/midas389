class GameItem {
    constructor(canvas, imageSource, xCoor, yCoor, width, height, speed) {
        this._canvas = new Canvas(canvas);
        this._imageSrc = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
        this._width = width;
        this._height = height;
        this._speed = speed;
    }
    draw() {
        this._canvas.writeImageToCanvas(this._imageSrc, this._xPos, this._yPos, this._width, this._height);
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
class Boat extends GameItem {
    constructor(canvas, imageSource, xCoor, yCoor, width, height, speed) {
        super(canvas, imageSource, xCoor, yCoor, width, height, speed);
        this._keyboardListener = new KeyBoardListener();
        this.speed = speed;
        this.lives = 3;
    }
    update() {
        this.move();
        this.draw();
    }
    move() {
        if (this._keyboardListener.getUpPressed()) {
            this._yPos -= this.speed;
        }
        if (this._keyboardListener.getRightPressed()) {
            this._xPos += this.speed;
        }
        if (this._keyboardListener.getdownPressed()) {
            this._yPos += this.speed;
        }
    }
    checkLives() {
        console.log(this.lives);
        if (this.lives == 0) {
            console.log("end");
            end();
        }
    }
    isColliding(sharkX, sharkY, sharkWidth, sharkHeight) {
        if (this._xPos < sharkX + sharkWidth && this._xPos + this._width > sharkX &&
            this._yPos < sharkY + sharkHeight && this._yPos + this._height > sharkY) {
            this.lives -= 1;
            this.checkLives();
        }
    }
}
class Canvas {
    constructor(canvasId) {
        this._canvas = canvasId;
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this.ctx = this._canvas.getContext('2d');
        console.log(this._canvas.width, this._canvas.height);
    }
    writeTextToCanvas(text, fontSize, xCoordinate, yCoordinate, color = "white", alignment = "center") {
        this.ctx.font = `${fontSize}px Arial`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    writeImageToCanvas(src, xCoordinate, yCoordinate, width, height) {
        let element = document.createElement("img");
        element.src = src;
        element.addEventListener("load", () => {
            this.ctx.drawImage(element, xCoordinate, yCoordinate, width, height);
        });
    }
    clear() {
        this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
class Game {
    constructor() {
        this.draw = () => {
            this._player.update();
            this._shark1.update();
            this._player.isColliding(this._shark1.getX(), this._shark1.getY(), this._shark1.getWidth(), this._shark1.getHeight());
            this._shark2.update();
            this._player.isColliding(this._shark2.getX(), this._shark2.getY(), this._shark2.getWidth(), this._shark2.getHeight());
            this._shark3.update();
            this._player.isColliding(this._shark3.getX(), this._shark3.getY(), this._shark3.getWidth(), this._shark2.getHeight());
            this._canvas.clear();
        };
        const canvasElement = document.getElementById('canvas');
        this._canvas = new Canvas(canvasElement);
        this._player = new Boat(canvasElement, './assets/images/boat.png', 100, 100, 100, 70, 5);
        this._shark1 = new Shark(canvasElement, './assets/images/shark.png', window.innerWidth, this._canvas.randomNumber(10, window.innerHeight - 30), 80, 60, this._canvas.randomNumber(2, 5));
        this._shark2 = new Shark(canvasElement, './assets/images/shark.png', window.innerWidth, this._canvas.randomNumber(10, window.innerHeight - 30), 80, 60, this._canvas.randomNumber(2, 5));
        this._shark3 = new Shark(canvasElement, './assets/images/shark.png', window.innerWidth, this._canvas.randomNumber(10, window.innerHeight - 30), 80, 60, this._canvas.randomNumber(2, 5));
    }
}
window.addEventListener('load', init);
var interval;
function init() {
    const SharkAttack = new Game();
    interval = window.setInterval(SharkAttack.draw, 1000 / 30);
}
function end() {
    clearInterval(interval);
}
class Shark extends GameItem {
    constructor(canvas, imageSource, xCoor, yCoor, width, height, speed) {
        super(canvas, imageSource, xCoor, yCoor, width, height, speed);
        this.speed = speed;
    }
    update() {
        this.moveRightToLeft();
        this.draw();
    }
    moveRightToLeft() {
        this._xPos -= this.speed;
        if (this._xPos <= 0) {
            this._xPos = window.innerWidth;
            this.speed = this._canvas.randomNumber(2, 5);
            this._yPos = this._canvas.randomNumber(10, window.innerHeight - 30);
        }
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