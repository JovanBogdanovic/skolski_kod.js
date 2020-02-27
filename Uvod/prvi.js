//window.alert("Hello world!") //poruka u alert box-u
//document.write("Hello world"); //dodavanje sadrzaja

console.log("hello world"); //poruka u konzoli browsera

document.getElementById("par1").innerHTML = "Hello world!";

console.log('jovan');

console.log(true)

console.log(false)


//komentar u jednoj liniji

/* komentar u vise linija */


let x = 3; //promenjiva x, vrednost 3

console.log(x);

let y;

y = -9;
x = 5;

// let $1, _1, p1

console.log(x, y);


const z = 8.05; // kada se uvede konstanta, mora da se zada i njena vrednost, koja vise ne moze da se menja
console.log(z);

//z = 5; // Ne moze jer je z konstanta
// console.log(z);


x = "utorak"
console.log(x, y);


x = "Volvo XC60";
y = 'VolvoXC60';
console.log(x, y);


x = "It's alright";
y = 'He is called "Johnny"';
console.log(x, y);
x = 'It\'s alright, "Johnny"';
y = "It's alright \"Johnny\"";
console.log(x, y);

x = true;
y = false;
console.log(x, y);

let m;

console.log(m, m + 3);

let n = null;
console.log(n, n+3);

let firstName = 'Marko';
let lastName = 'Markovic';
let fullName = firstName + " " + lastName;

console.log(firstName, lastName, fullName);

//console.log(fullname) nepostojeca promenjiva

console.log(fullName.length);


x = 8.7;
y = 3;
let t = x * y;
console.log(x, y, t);

x = 5;
y = 2;
t = x / y;
console.log(x, y, t);

x = 6;
y = 4;
console.log(x, y);
x= x + y;
console.log(x, y);


x = 8;
y = 4;
x *= y;
console.log(x, y);

x = 3;
y = 9;
x++; y--;
console.log(x, y);


x = 4;
y = 9;
console.log(y % x);


x = 3;
y = 9;
console.log(y ** x);


let sati = 10;
let minuti = 30;
let resenje = sati *60 + minuti;
console.log(resenje);

let cena = 200;
let novcanica = 500;
let kusur = novcanica - cena;
console.log(kusur);

let dinari = 2000;
const kurs = 117.6;
let euri = dinari / kurs;
console.log(euri);

let euri1 = 200;
let dinari1 = euri1 * kurs; 
console.log(dinari1);

let dolari = 100;
const kursDolar = 104.5;
console.log(dolari * kursDolar / kurs);

let celsius = 15;
let farenhajt = celsius * 1.8 + 32;
console.log(farenhajt);

let farenhajt1 = 80;
let celsius1 = (farenhajt1 - 32) * 5/9;
console.log(celsius1);

let celsius2 = 30;
let kelvin = celsius2 + 273.15;
console.log(kelvin);

let kelvin2 = 290;
let celsius4 = kelvin2 - 273.15;
console.log(celsius4);
