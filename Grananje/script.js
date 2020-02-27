let a = 5;
let b = 3;
if (a > b) {
    console.log(`${a} je vece od ${b}`);
}

console.log("Komanda posle if");



a = 5;
b = '5';
if(a == b) {
    console.log(`${a} je jednako ${b}`);
}

else {
    console.log(`${a} nije jednako ${b}`);
}

if(a === b){
    console.log(`${a} je jednako ${b} po tipu i vrednosti`);
}

else {
    console.log(`${a} nije jednako ${b} po tipu i vrednosti`);
}


a = 5;
b = 12;
if(a > b) {
    console.log(`${a} je vece od ${b}`);
}
else{
    console.log(`${a} nije vece od ${b}`);
}


let temperatura = 10;

if (temperatura >= 0 ) {
    console.log('temperatura je pozitivna');
}

else {
    console.log('temperatura je negativna');
}

let pol = 'm';
let div = document.getElementById('blabla');
if (pol == 'm') {
    console.log(`pol je muski`);
    div.innerHTML = "<img src='male.png' alt='Muski'>";
}

else{
    console.log(`pol je zenski`);
    div.innerHTML = "<img src='female.jpg' alt='Zenski'>";
}


let datum = new Date();

let vreme = datum.getHours();

if( vreme < 12) {
    console.log('jutro je');
}

else{
    console.log('popodne je');
}

let godina = datum.getFullYear();

let godiste = 1991;

if(godina - godiste < 18) {
    console.log('nije punoletan');
}

else {
    console.log('jeste punoletan');
}

let x = 15;
let y = 2;
let z = 30;
let max = x;
if(y > max) {
    max = y;
}

if(z > max); {
    max = z;
}
console.log(max);






