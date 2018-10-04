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


//opdarachten arrays
//opdracht 1
console.log("opdarcht 1")
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 
function random(){

    for(i=0;i<3;i++){
        console.log(lapRounds[randomInt(0,lapRounds.length)])      
    }
}
random();

//opdracht 2
console.log("opdarcht 2")
const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
 ];
function getAllMyRecords(){
 for(i=0;i<3;i++){
    console.log(allMyRecords[0][i])
 }
 for(i=0;i<3;i++){
    console.log(allMyRecords[1][i])
 }
}
getAllMyRecords();

//opdarcht3
console.log("opdaracht 3")
function lapRoundsCheck(laptimes){
    return laptimes < 4
}
console.log(lapRounds.filter(lapRoundsCheck))
// het gebruik van .filter is korter en simpeler dan de for loop


//opdarchten objects
//opdarcht 1
console.log("opdarcht 1")
const lapTimes = [55.99,  63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12]; 
var JSONlapTimes= JSON.stringify(lapTimes);
console.log(JSONlapTimes) 


//opdarcht 2
console.log("opdracht 2")
const teachers = [
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek:40, 
        salary: 2000,
        salaryPerHour: function(){return this.salary }      
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        hoursPerWeek:35, 
        salary: 2500   
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek:37, 
        salary: 3000   
    }
];

console.log(teachers[0].salaryPerHour)

for(i=0;i<3;i++){
    console.log( "I have a " ,teachers[i].profession,"named ",teachers[i].name, "and he likes to work on a ",teachers[i].brand," computer");
}


//opdracht 3
console.log("opdracht 3")







