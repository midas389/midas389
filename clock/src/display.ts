class display{
    

    constructor(){
        
    }

    public draw(){
        console.log()
    }
}

window.addEventListener('load', init);

function init(): void {
    const clock = new tick();
    window.setInterval(clock.tick, 1000 )
}