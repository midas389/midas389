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




