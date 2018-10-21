var check = 1;
function checkPosition(x){
    var button = document.getElementById("button"+x);
    if(count == 0){
        document.getElementById("counter").innerText = "Helaas je pogingen zijn op";
        return 
    }
    if(x == check){
        button.style= "border: 4px solid green";
        check++;
        if(check == 5){
            finish();
        }
    }
    else{
        counter();
    }
}

var count = 5;
function counter(){
    count -= 1;
    document.getElementById("counter").innerText = "je hebt nog "+count+" pogingen";
    if(count == 0){
        checkPosition();
    }
}

function finish(){
    document.getElementById("counter").innerText = "GOED GEDAAN!!";
    document.getElementById("puzzelProbeer").style ="display: none;"
    document.getElementById("puzzelAf").style ="display: inline;"
}
