// ispisati brojeve od 0 do 10 pomocu for petlje

let i;
/*
for(i = 0; i <= 10; i++) {
    console.log(i);
}


for(i = 20; i >= 1; i--){
    console.log(i);
}

// prvi nacin
for(i = 1; i <= 20; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}
X
//drugi nacin

for(i = 2; i <= 20; i+=2) {
        console.log(i);
}


for(i = 5; i <= 15; i++) {
    console.log(i*2);
}

// sabirati brojeve od 1 pa na dalje, tako da ne predjete unetu sumu s ukljucujuci i sumu s(<=)

let s = 15;
i = 1;
let br = 0;
let pom_s = 0;
while(pom_s <= s) {
    pom_s += i;
    i++;
    br++;
}
console.log(br);



//Pomnziti brojeve od 1 pa na dalje redom, tako da ne predjete uneti proizvod p(strogo manje)

let p = 9;
i = 1;
let br = 0;
let pom_p = 1;
while(pom_p < p) {
    pom_p *= i;
    i++;
    br++;
}
console.log(br-1);



// odrediti sumu brojeva od 1 do 100

s = 0;
for(i = 1; i <= 100; i ++) {
    s += i;
}
console.log(s);


// odrediti sumu brojeva od 1 do n

s = 0;
let n = 50
for(i = 1; i <= n; i ++) {
    s += i;
}
console.log(s);


// odrediti sumu brojeva od n do m

s = 0;
let n = 50
let m = 100
for(i = n; i <= m; i ++) {
    s += i;
}
console.log(s);



// odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100

let p = 1
for(i = 20; i <= 100; i++) {
    if(i%11 == 0) {
        p *= i; 
    }
}
console.log(p);


// odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100 i ispisati ih

let p = 1
for(i = 20; i <= 100; i++) {
    if(i%11 == 0) {
        p *= i; 
        console.log(i);
    }
}
console.log(p);


// prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150
let br = 0;
for(i = 5; i <= 150; i++){
    if(i%13 == 0){
        br++;
    }
}
console.log(br);

// prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150 i koliko nisu deljivi sa 13

let br = 0;
let br1 = 0;
for(i = 5; i <= 150; i++){
    if(i%13 == 0){
        br++;
    } else {
        br1++;
    }
}

console.log(`U intervalu od 5 do 150 ima ${br} bojeva deljivih sa 13 i ${br1} brojeva koji to nisu.`)


let br = 0;
for(i = 5; i <= 150; i++){
    if(i%13 == 0){
        br++;
    } 
}
let br1 = 150 - 5 - br + 1;
console.log(br1);


// ispisati aritmeticku sredinu brojeva od n do m

let n = 5;
let m = 10;
let s = 0;
let br = 0;
for(i = n; i <= m; i++){
    s += i;
    br++;
}
let arsr = s/br;
console.log(arsr);


let n = 5;
let m = 10;
let s = 0;
for(i = n; i <= m; i++){
    s += i;
}
let br = m - n + 1;
let arsr = s / br;
console.log(arsr);



// prebrojati koliko brojeva od n do m je pozitivno a koliko negativno

let n = -7;
let m = 13;
let poz = 0;
let neg = 0;
for (i = n; i <= m; i++) {
    if(i >= 0) {
        poz++;
    }
    else {
        neg++
    }
}
console.log(poz);
console.log(neg);


// broj brojeva deljivih sa 3 ili 5 u intervalu od 5 do 50

let br = 0;
for (i = 5; i <=50; i++ ) {
    if (i % 3 == 0 || i % 5 == 0) {
        br++
    }
}
console.log(br);


// prebrojati i izracunati sumu brojeva od n do m kojima je poslednja cifra 4

let n = 10;
let m = 45;
let br = 0;
let s = 0;
for(i = n; i <= m; i++) {
    let cifra = i % 10; // let cifra moze i iznad for petlje
    if(cifra == 4){
        br++;
        s = s+=i;
    }
}
console.log(br);
console.log(s);


// odrediti proizvod brojeva od n do m, koji su deljivi brojem a


let n = -11;
let m = 30;
let p = 1;
let a = 10;
for(i = n; i <= m; i++) {
    if(i % a == 0 && i != 0) {
        p *= i;
    }
}
console.log(p);

// tri slicice
let div = document.getElementById("slika");
for(i = 1; i <= 10; i++) {

    div.innerHTML += "<img src=" + i + ".png> <br>"; // "<img src=images/" + i + ".png>"
}

// tri slicice naizmenicno

let div = document.getElementById("slika");
for(i = 1; i <= 10; i++) {
    if (i % 3 == 1) {
        div.innerHTML += "<img src='1.png'>";
    }
    else if (i % 3 == 2) {
            div.innerHTML += "<img src='2.png'>";
        }
    else {
            div.innerHTML += "<img src='3.png'>";
        }
    }
*/





