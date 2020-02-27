let a = 5;
let b = 9;
let c = a;
a = b;
b = c;
console.log(a, b);


let poeni = 66;
let ocena;
if (poeni > 90) {
    ocena = 10;
}
else if (poeni > 80) {
    ocena = 9;
}
else if (poeni > 70) {
    ocena = 8;
}
else if (poeni > 60) {
    ocena = 7;
}
else if (poeni > 50) {
    ocena = 6;
}
else {
    ocena = "nije polozio";
}
console.log(ocena);


let datum = new Date()
let dan = datum.getDay()
if (dan == 0) {
     console.log("vikend");
}
else if (dan == 6) {
    console.log("vikend");
}
else {
    console.log("radni dan");
}



let vreme = datum.getHours();
if (vreme < 12) {
    console.log('Dobro jutro');
}
else if(vreme < 18) {
    console.log("Dobar dan");
}
else {
    console.log("Dobro vece");
}


let dan1 = 7;
let mesec1 = 2;
let godina1 = 2020;
let dan2 = 5;
let mesec2 = 4;
let godina2 = 2020;
if (godina1 < godina2) {
    console.log("Prvi datum je raniji");
}
else if (godina1 > godina2) {
    console.log("Drugi datum je raniji");
}
else if (mesec1 < mesec2) {
    console.log("Prvi datum je raniji");
}
else if (mesec1 > mesec2) {
    console.log("Drugi datum je raniji");
}
else if (dan1 < dan2) {
    console.log("Prvi datum je raniji");
}
else if (dan1 > dan2) {
    console.log("Drugi datum je raniji");
}
else {
    console.log("Datumi su identicni");
}



let p1 = 9;
let k1 = 17;
let p2 = 12;
let k2 = 21;
if ((p1 <= p2) && (p2 <= k1)) {
    console.log("Preklapaju se");
}
else if ((p2 <= p1) && (p1 <= k2)) {
    console.log("Preklapaju se");
}
else {
    console.log("Ne preklapaju se");
}

// (p1 <= p2) && (p2 <= k1) || (p2 <= p1) && (p1 <= k2) 


let broj = 8;
let paran;
if (broj % 2 == 0) {
    paran = true;
}
else {
    paran = false;
}
console.log(paran)

let boja = "zelena"
switch(boja) {
    case "plava":
        console.log("Odabrali ste plavu boju");
        break;
    case "zelena":
    case "tirkizna":
        console.log("Odabrali ste nijansu zelene boju");
        break;
    case "crvena":
        console.log("Odabrali ste crvenu boju");
        break;
    default:
        console.log("Niste odabrali plavu zelenu ili crvenu boju")
}



let danasnjiDan = datum.getDay();
switch(danasnjiDan) {
    case 0:
    console.log("Nedelja");
    break;
    case 1:
    console.log("Ponedeljak");
    break;
    case 2:
    console.log("Utorak");
    break;
    case 3:
    console.log("Sreda");
    break;
    case 4:
    console.log("Cetvrtak");
    break;
    case 5:
    console.log("Petak");
    break;
    case 6:
    console.log("Subota");
    break;
}

let prosek = 4;
switch(prosek) {
    case 1:
    console.log("Nedovoljan");
    break;
    case 2:
    console.log("Dovoljan");
    break;
    case 3:
    console.log("Dobar");
    break;
    case 4:
    console.log("Vrlo dobar");
    break;
    case 5:
    console.log("Odlican");
}

let nekiBroj = 8;
switch(nekiBroj) {
    case 0:
    console.log("Nula");
    break;
    case 2:
    console.log("Dva");
    break;
    case 4:
    console.log("Cetiri");
    break;
    case 6:
    console.log("Vrlo Sest");
    break;
    case 8:
    console.log("Osam");
    break;
    case 10:
    console.log("Deset")
}

let broj1 = 4;
let broj2 = 8;
let karakter = "d"
let resenje;
switch(karakter) {
    case "m":
    resenje = broj1 * broj2;
    console.log(resenje)
    break;
    case "d":
    resenje = broj1 / broj2;
    console.log(resenje)
    break;
    case "s":
    resenje = broj1 + broj2;
    console.log(resenje)
    break;
    case "o":
    resenje = broj1 - broj2;
    console.log(resenje)
    break;
}
