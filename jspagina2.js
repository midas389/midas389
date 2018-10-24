
var imgOrder = [3,0,1,2];
function createImg(){
    document.getElementById("puzzelProbeer").addEventListener('click',clickHandler)
    for(i=0;i<4;i++){
    var img = document.createElement("img");
    img.src= "foto's/Snapchat.jpg";
    img.id= imgOrder[i];
    img.style = "height: 200px; border-radius: 25px; "
    document.getElementById("puzzelProbeer").appendChild(img);
    document.getElementById('counter').innetText= "je hebt nog "+pogingen+" over";
    }

}
createImg();

var pogingen = 5;
var currentImg = 0;
function clickHandler(){
    if(event.target.id == currentImg){
        currentImg++;
        document.getElementById(event.target.id).style = " height: 200px; border-radius: 25px; border: 10px solid green;";
        if(currentImg == 4){
            document.getElementById('counter').innerText="JE HEBT GEWONNEN!!";
            document.getElementById('puzzelProbeer').removeEventListener("click",clickHandler);
        }
    }
    else if(event.target.id !== currentImg){
        pogingen--;
        document.getElementById('counter').innerText = "je hebt nog "+pogingen+" over";
        if(pogingen == 0){
            document.getElementById('counter').innerText = "JE HEBT VERLOREN!!";
            document.getElementById('puzzelProbeer').removeEventListener("click",clickHandler);
        }
    }
}