let cars = ["Toyota", "BMW", "Opel"];
console.log(cars);
console.log(cars[0]);
console.log(cars[2]);

// Niz od n elemenata ide: 0, 1, 2, 3, ..., n - 1

cars[1] = "Ford";
console.log(cars);

let test = [6.07, "Sreda", -9, false];
console.log(test);

//ispis svih elemenata niza
for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
//Drugi nacin za ispis svih elemenata niza
for(let i = 0; i <= cars.length -1; i++) { // i = 0, 1, 2
    console.log(cars[i]);
}

//ispis svih elemenata u obrnutom redosledu
for(let i = cars.length -1; i >= 0; i--) { // i = 2, 1, 0
    console.log(cars[i]);
}

// odrediti sumu elemenata celobrojnog niza

let niz =[3, 5, 1];

let s = 0;
for(let i = 0; i < niz.length; i++){
    s = s + niz[i];
}

console.log(s);

// odrediti proizvod elemenata celobrojnog niza

let niz1 = [2, 3, 4, 5, 6];

let p  = 1;
for(let i = 0; i < niz1.length; i++) {
    p = p * niz1[i];
    console.log(i, niz1[i], p); // tabela
}

console.log(p);

// srednja vrednost elemenata niza

s = 0;
for(let i = 0; i < niz.length; i++){
    s = s + niz[i];
}

let srvr;
if (niz.length == 0){
    srvr = 0;
}
else {
    srvr = s / niz.length;
}
console.log(srvr);


// odrediti maksimalnu vrednost u celobrojnom nizu

let niz2 = [ 3, 6, 38, 23, 11, -4, -15];
let max = niz[0];
for(let i = 1; i < niz2.length; i ++){
    if (niz2[i] > max){
        max = niz2[i];
    }
    console.log(i, niz2[i], max); // tabela
}

console.log(max);


// odrediti minimalnu vrednost celobrojnog niza

let min = niz2[0];
for(let i = 0; i < niz2.length; i++){
    if(niz2[i] < min){
        min = niz2[i];
    }
}
console.log(min);

// Napisati arrow funkciju koja vraca minimalni element niza

let minArrow = niz2 => {
    let min = niz2[0];
    for(let i = 1; i < niz2.length; i++){
        if(niz2[i] < min){
            min = niz2[i]
        }
    }
    return min;
}

console.log(minArrow(niz2));
console.log(minArrow([1, 4, 7, -3, 9, 0, -12]));

// odrediti index maksimalnog elementa celobrojnog niza

let maxIndex = niz2 => {
    let max = niz2[0]; // vrednost maksimalnog elementa niza
    let index = 0; // index maksimalnog elementa niza
    for(let i = 1; i < niz2.length; i++){
        if(niz2[i] > max) {
            max = niz2[i];
            index = i;
        }
    }
    return index;
}
console.log(maxIndex(niz2));
console.log(maxIndex([1, 8, 7, 8, 4]));

// odrediti arrow funkciju koja vraca broje elemenata celobrojnog niza koji su veci od srednje vrednosti
let arSr = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++){
        suma += niz[i];
    }
    return suma / niz.length;
}


let brojSrVr = niz2 => {
    suma = 0;
    for(let i = 0; i < niz2.length; i++){
        suma += niz2[i];
    }
    let srvr = arSr(niz)
    console.log(srvr);
    let br = 0
    for(let i = 0; i < niz2.length; i++){
        if(niz2[i] > srvr) {
            br++;
        }
    }
    return br;
}
console.log(brojSrVr(niz2));

// izracunati zbir pozitivnih elemenata celobrojnog niza

let zbirPoz = niz => {
    let suma = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] > 0){
            suma += niz[i];
        }
    }
    return suma;
}
console.log(zbirPoz(niz));

// odrediti broj parnih elemenata u celobrojnom nizu

let brPar = niz => {
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] % 2 == 0){
            broj++;
        }
    }
    return broj;
}
console.log(brPar(niz2));


// odrediti broj parnih elemenata sa neparnim indeksima

let brParNepInd = niz => {
    let broj = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] % 2 == 0 && i % 2 != 0){
            broj++;
        }
    }
    return broj;
}
console.log(brParNepInd(niz2));

// promeniti znak svakom elementu celobrojnog niza

let promeniZnak = niz => {
    for(let i = 0; i < niz.length; i++) {
        niz[i] *= -1;
    }
}
promeniZnak(niz);
console.log(niz);

// formiratu ul listu

let lista = niz => {
    // elementi niza su stringovi
    let result = "";
    result += "<ul>";
    for(let i = 0; i < niz.length; i++){
        result += `<li>${niz[i]}</li>`
    }
    result += "</ul>"
    return result;
}
let div = document.getElementById("KEKW");
div.innerHTML = lista(["jaja", "mleko", "jogurt"]);

//  Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let nizTimova = (['Tim A', 'Tim BB', 'Tim CCC', 'Tim DDDD'])
let tabela = "<table><tr>";
for(let i = 0; i < nizTimova.length; i++) {
    tabela += `<td> ${nizTimova[i]} </td>`;
}
tabela += "</tr></table>";
let divTabela = document.getElementById('tabela');
divTabela.innerHTML = tabela;


/* 
<table>
    <tr><td>Tim A</td></tr>
    <tr><td>Tim B</td></tr>
    <tr><td>Tim C</td></tr>
</table>
*/

// Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
/*
    <img src="...">
    <img src="...">
    <img src="...">
*/
let nizSlika = ['oliveoil.jpg', 'pasta.jpg','pizza.jpg'];
let slike = "";
for(let i = 0; i < nizSlika.length; i++){
    slike += `<img src=${nizSlika[i]}>`
}

div = document.getElementById('slike');
div.innerHTML = slike;


// stringovi i njihovi metodi
let str = 'Hello world';

//duzina stringa
console.log(str.length);

//da li string sadrzi neki karakter - includes
console.log(str.includes('d'));

if(str.includes('o')){
    console.log('String sadrzi slovo o');
}
else {
    console.log('String ne sadrzi slovo o')
}

//  da li sadrzi karakter na odredjenoj poziciji
console.log(str.includes('H', 0));

// prvi indeks unetog slova - indexOf
console.log(str.indexOf('o'));

// poslednji index unetog slova
console.log(str.lastIndexOf('o'));

// prvo slovo reci - startsWith
console.log(str.startsWith('H'));

// poslednje slovo reci - endsWith
console.log(str.endsWith('d'));

// slice - odakle poceti podstring, gde zavrsiti podstring, ne ukljucuje poslednju
console.log(str.slice(0, 4));
// substr - odakle uzeti podstring, i koliko elemenata od te pozicije na dalje uzeti
console.log(str.substr(3, 5));

// replace
console.log(str.replace('H', 'B'));
console.log(str.split('l').join('*')); // menja sva slova..
// Ispisati dužinu svakog elementa u nizu stringova
for(i = 0; i < nizTimova.length; i++){
    let duzReci = nizTimova[i].length;
    console.log(duzReci);
}

// Odrediti element u nizu stringova sa najvećom dužinom
let najduzaRec = nizTimova => {
    let maks = nizTimova[0].length;
    let maksRec = nizTimova[0];
    for(i = 1; i < nizTimova.length; i++) {
        if(maks < nizTimova[i].length) {
            maks = nizTimova[i].length;
            maksRec = nizTimova[i];
        }
    }
    return maksRec;
}
console.log(najduzaRec(nizTimova));

// odrediti prosek broja slova svih reci

let prosek = niz => {
    let duzina = 0;
    for(i = 0; i < niz.length; i++) {
        duzina += niz[i].length;
    }
    let arsr = duzina / niz.length
    return arsr;
}
console.log(prosek(nizTimova));
console.log(prosek(cars));

// ispisati reci duze od prosecne duzine reci
let natprosecnoDugacke = niz =>{
    let ar = prosek(niz);
    for(i = 0; i < niz.length; i++){
        if(ar < niz[i].length)
        console.log(niz[i])
    }
}
natprosecnoDugacke(nizTimova);

// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let brNat = niz =>{
    let ar = prosek(niz);
    let br = 0;
    for(i = 0; i < niz.length; i++){
        if(ar < niz[i].length) {
            br++
        }
    }
    return br;
}

console.log(brNat(nizTimova));

// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a'.

let brojElemenataSaKarakterom = (niz, slovo) => {
    let br = 0;
    for(i = 0; i < niz.length; i++) {
        if(niz[i].includes(slovo)) {
            br++
        }
    }
    return br;
}
console.log(brojElemenataSaKarakterom(nizTimova, 'T'));

// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.

let brojElemenataKojiPocinjuSlovom = (niz, slovo) => {
    let br = 0;
    for(i = 0; i < niz.length; i++) {
        // slovo.toUpperCase() - za pretvaranje u veliko slovo
        // slovo.toLowerCase() - za pretvaranje u malo slovo
        if(niz[i].startsWith(slovo.toLowerCase()) || niz[i].startsWith(slovo.toUpperCase())) {
            br++;
        }
    }
    return br;
}
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, 'y'));
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, 't'));
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, 'T'));

//spojiti nizove a i b u niz c, tako da uzimamo po jedan element iz oba niza naizmenicno

let a = [2, 5, 7];
let b = [-3, -4, -5];
let c = [];
for(let i = 0; i < a.length; i++){
    c.push(a[i]);
    c.push(b[i]);
}

// pop() - izbacivanje poslednjeg elementa niza
console.log(c)
console.log(c.pop())
console.log(c)

// 25 zadatak

let proizvodElemenata = (a, b) => {
    let c = [];
    for(i = 0; i < b.length; i++){
        c.push(a[i] * b[i])
    }
    return c;
}
console.log(proizvodElemenata(a, b));

// zadatak 26

a = [2, 4, 6, 8, 10, 12];
b = [];
let n = a.length / 2;
for(let i = 0; i < n ; i++) {
    let i_pom = a.length - i - 1;
    b.push((a[i] + a[i_pom]) / 2);
}
console.log(b)












