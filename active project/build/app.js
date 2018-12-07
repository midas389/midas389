class Asteroid {
    constructor(src, xCoordinate, yCoordinate, xMovement, yMovement) {
        this.src = src;
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.xMovement = xMovement;
        this.yMovement = yMovement;
    }
    update() {
        this.xCoordinate += this.xMovement;
        this.yCoordinate += this.yMovement;
    }
    getXCoordinate() {
        return this.xCoordinate;
    }
    getYCoordinate() {
        return this.yCoordinate;
    }
    getSrc() {
        return this.src;
    }
}
class Canvas {
    constructor(canvas) {
        this.d_canvas = canvas;
        this.d_context = this.d_canvas.getContext('2d');
        console.log('in canvas constructor');
    }
    Clear() {
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
class Game {
    constructor() {
        const canvasElement = document.getElementById('canvas');
        this.d_canvas = new Canvas(canvasElement);
        this.d_player = new Player(canvasElement);
        console.log('in game constructor');
        this.draw();
    }
    draw() {
        this.d_player.draw();
    }
}
window.addEventListener('load', init);
function init() {
    const ZombieGame = new Game();
}
class Player {
    constructor(canvas) {
        this.d_canvas = new Canvas(canvas);
    }
    draw() {
        this.d_canvas.writeImageFromFileToCanvas('./assets/images/Zombies/4ZombieFrontSPAWN.png', 100, 100);
    }
}
//# sourceMappingURL=app.js.map