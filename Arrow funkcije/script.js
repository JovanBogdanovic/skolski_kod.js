let suma = function(a, b) {
    let s = a + b
    return s;
}

console.log(suma(1, 5));
console.log(suma(9, 4));

let suma2 = (a, b) => {
    return a +b;;
}

console.log(suma2(1, 68));

let hello = () => {
    console.log("KEKW");
}

let echo = (s1, s2) => {
    let s = s1 + ", " + s2;
    console.log(s);
}

echo("Haha", "hahaha");

// 3 zadatak funkcije

let neparan = (n) => {
    if (n % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(neparan(5));

let maks2 = (n, m) => {
    if (n > m) {
        return n;
    }
    else {
        return m;
    }
} 

let maks4 = (n, m, j, k) => {
    let g = maks2(n, m);
    let g1 = maks2(j, k);
    return maks2(g, g1)
}

console.log(maks4(2, 5, 9, 11));

let deljivSaTri = (n, m) => {
    let br = 0;
    for(i = n; i <= m; i++){
        if(i % 3 == 0){
        br++;
        console.log(i)
        }
    }
    console.log(br);
}
deljivSaTri(10, 15);

// napisati funkciju koja prikazuje sliku za prosledjenu adresu slike

function slika(putanja) {
    return `<img src='${putanja}' alt = 'haha'>`;
}

// Arrow funkcija
let slika2 = (putanja) => {
    return `<img src='${putanja}' alt = 'haha'>`;
}

//telo arrow funkcije se sastoji samo od return naredbe

let slika3 = (putanja) => `<img src='${putanja}' alt = 'haha'>`;

let div = document.getElementById('haha');
div.innerHTML = slika('Images/slika.png');

// ukoliko funkcija ima samo jedan parametar

let slika4 = putanja => `<img src='${putanja}' alt = 'haha'>`;

div.innerHTML += slika('Images/slika.png');










