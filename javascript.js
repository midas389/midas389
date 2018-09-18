console.log("test test test");
//oprdacht 1
var a =3;
console.log(a % 2);
//opdracht 2
var b="Programming is not so cool";
b = b.replace(" not","");
console.log(b);
//opdracht 3
1400=="ik woon in naboo"
// je bent hier een nummer met een sting aan het vergelijken

//opdrachten conditionals
//opdracht 1
var cijfer=6.3;
if(cijfer <6){
    console.log("onvoldoende");
}
else if(cijfer <7){
    console.log('voldoende');
}
else if(cijfer <9){
    console.log("goed")
}
else if(cijfer >= 9){
    console.log("uitmuntend")
}
//opdracht 2

switch(Math.round(cijfer)){
    case 4:
        console.log("onvoldoende");
        break;
    case 5:
        console.log("onvoldoende");
        break;
    case 6:
        console.log("voldoende");
        break;
    case 7:
        console.log("voldoende");
        break;
    case 8:
        console.log("goed");
        break;
    case 9:
        console.log("goed");
        break;
    case 10:
        console.log("uitmuntend");
        break;
    
}


