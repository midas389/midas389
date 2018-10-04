console.log("test test test");
//oprdacht 1
var a = 3;
console.log(a % 2);
//opdracht 2
var b = "Programming is not so cool";
b = b.replace(" not", "");
console.log(b);
//opdracht 3
1400 == "ik woon in naboo"
// je bent hier een nummer met een sting aan het vergelijken



//opdrachten conditionals
//opdracht 1
var cijfer = 6.3;
if (cijfer < 6) {
    console.log("onvoldoende");
}
else if (cijfer < 7) {
    console.log('voldoende');
}
else if (cijfer < 9) {
    console.log("goed")
}
else if (cijfer >= 9) {
    console.log("uitmuntend")
}
//opdracht 2

switch (Math.round(cijfer)) {
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
// opdarcht 3
purchasedbook = true;
job = "teacher";
intrain = false;

if (purchasedbook == true && job == "teacher" && intrain == true) {
    console.log("finally i can enjoy my book")
}
else if (purchasedbook == true && intrain == true) {
    console.log("don't need to be a teacher to read a book")
}
else if (purchasedbook == false) {
    console.log("can't read a book when you dont have one ")
}
else if (intrain == true) {
    console.log("time to relax")
}



// loops opdrachten
console.log("loops opdrachten")
//opdracht 1
console.log("opdracht",1)

let i =0;
var array=[1,4,6,8,12,20];
while(i<array.length){
let math = array[i] / 4;
if(Number.isInteger(math)==true){
    console.log(array[i],'is deelbaar door 4')
}
i++;
}

//opdracht 2
console.log("opdracht",2)
var fibo= [1,1];
var volgendefibo ="";
i =1;
while(i<10){
volgendefibo = fibo[i] + fibo[i-1];
fibo[i+1]= volgendefibo;
i++;
}
console.log(fibo)

//opdracht 3
console.log("opdracht",3)
array=[2, 4, 8, 9, 12, 13];
var sumarray=0;
for(i=0;i<array.length;i++){
 sumarray= sumarray + array[i];
}
console.log(sumarray)



//opdrachten funties
console.log("opdracht funties")
//opdracht 1
console.log("opdracht",1)
function Fibonacci(x){
var fibo= [1,1];
var volgendefibo ="";
i =1;
while(i<x){
volgendefibo = fibo[i] + fibo[i-1];
fibo[i+1]= volgendefibo;
i++;
}
return fibo;
}
console.log(Fibonacci(10))

//opdracht 2
console.log("opdracht",2)
function countdown(jaartal){
for(i=0;i<10;i++){
    console.log(10-i)
}
if(i == 10){
    console.log("happy new",jaartal)
}
}
countdown(2090);

//opdarcht 3
console.log("opdracht",3)
x=5;
y=6;
console.log(x+y)
var x;
var y;

