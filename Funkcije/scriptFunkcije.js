/*
function zdravoSvete() {
    console.log("Zdravo Svete!");
}

zdravoSvete();
console.log("!!!!");


zdravoSvete();
for(let i = 1; i <= 10; i++) {
    zdravoSvete()
}


// funkcija sa jednim prosledjenim parametrom

function ispisi(tekst) {
    console.log(tekst);
}
ispisi("Haha");
ispisi("JavaScript");
let ime = "Kevin";
ispisi(ime);
ispisi(19.1);


// funkcija kojoj prosledjujemo tri parametra

function ispisiKorisnika(ime, prezime, godinaRodjenja){
    console.log(`Korisnik je ${ime} ${prezime} je rodjen ${godinaRodjenja}`);
}
ispisiKorisnika("Kevin", "Garvey", 1982);
let korisnikIme = "Jovan";
let korisnikPrezime = "Bogdanovic";
let korisnikGodinaRodjenja = 1991;

ispisiKorisnika(korisnikIme, korisnikPrezime, korisnikGodinaRodjenja);


// ispis zbira dva broja


function ispisizbir(a, b) {
    let c = a + b;
    console.log(c) // console.log(a + b)
}
ispisizbir(2, 3);



//digitron

function digitron(a, b, o) {
    let rez;
    if(o == "+") {
        rez = a + b;
    }
    else if (o == "-") {
        rez = a - b;
    }
    else if (o == "*") {
        rez = a * b;
    }
    else {
        if(b == 0) {
            rez = "nije dozvoljeno deliti nulom"
        }
        else{
        rez = a / b;
        }
    }
    console.log(rez)
}

digitron(5, 3, "+");
digitron(5, 3, "-");
digitron(5, 3, "*");
digitron(5, 3, "/");
digitron(5, 0, "/");



// return funkcije
function saberi(a, b) {
    let c = a + b;
    return c;
}

let zbir = saberi(1, 5);
console.log(zbir);
let pom = zbir + 1;
console.log(pom);


let zbir1 = saberi(3, 4);
let zbir2 = saberi(2, 7);
let zbir3 = zbir1 + zbir2;
console.log(`${zbir1} + ${zbir2} = ${zbir3}`);

// drugi nacin
zbir3 = saberi(zbir1, zbir2);
console.log(`${zbir1} + ${zbir2} = ${zbir3}`);


//Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function max2(a, b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}

function max4(a, b, c, d){
    let mak1 = max2(a, b);
    let mak2 = max2(c, d);
    let mak3 = max2(mak1, mak2);
    return mak3;
}


let m = max2(2, 5);
console.log(m);

m = max4(5, 3, 7, 4);
console.log(m);

//Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.


function neparan(n) {
    if(n % 2 != 0){
        return true;
    }
    else {
        return false;
    }
}
let parNepar = neparan(12);
console.log(parNepar);
if(parNepar == true) {
    console.log("Broj je neparan");
}
else {
    console.log("Broj je paran");
}


//Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n- ti dan u nedjelji (npr. za 1 se ispisuje „Ponedjeljak“, za 7 ispisuje “Nedelja”, a za 8 opet “Ponedeljak”). Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function sedmiDan(dan) {
    let pomDan = dan % 7;
    switch(pomDan) {
        case 0:
            return "Nedelja"
            break;
        case 1:
            return "Ponedeljak"
            break;
        case 2:
            return "Utorak"
            break;
        case 3:
            return "Sreda"
            break;
        case 4:
            return "Cetvrtak"
            break;
        case 5:
            return "Petak"
            break;
        case 6:
            return "Subota"
            break;
        default:
            return "Los unos"
    }
}

let dan = sedmiDan(9);
console.log(dan);



// oblast vazenja promenjivih
let i;
let s = 0;
for( let i = 1; i += 3; i++) {
    s += i;
}
for(i = 4; i += 6; i++) {
    s += i;
}
console.log(i);
console.log(s);


function f1() {
    var j = 3;
    if ( 8 === 8) {
        var k = -5;
    }
    console.log(j, k)
}

function f2 () {
    console.log(j)
}

f1();
f2();



//suma brojeva od n do m

function suma(n, m) {
    let s = 0;
    if (n > m){
        return 0;
    }
    for(let i = n; i <= m; i++){
        s+=i;
    }
    return s;
}

let p = suma(6, 12);
console.log(p);
p = suma(1, 5);
console.log(p);
console.log(suma(4, 7));
console.log(suma(9, 7));



function mnozi(n, m) {
    let p = 1;
    for( let i = n; i <=m; i++) {
        p*= i;
    }
    return(p);
}

console.log(mnozi(3, 6));



function arsr(n, m) {
    let zbir = 0;
    let broj = 0;
    for(let i = n; i <= m; i++) {
        zbir += i;
        broj++;
    }
    return zbir / broj;
}

console.log(arsr(5, 9));



function arsr(n, m) {
let zbir = 0;
let broj = 0;
for(let i = n; i <= m; i++) {
    if(i % 10 == 3){
    zbir += i;
    broj++;
    }
}
    if(broj > 0) {
    return zbir / broj;
    }
    return 0;
}
console.log(arsr(5, 9));

// brojevi od n do m deljivi sa 3 i prebrojati ih

function deljivsa3(n, m) {
    let broj = 0;
    for(let i = n; i <=m; i++ ){
        if( i % 3 == 0) {
            //console.log(i)
            broj++
        }
    }
    return broj;
}

console.log(deljivsa3(5, 14));
*/

// napisati funkciju koja prikazuje sliku za prosledjenu aresu slike


function slika(putanja) {
    //return "<img src='" + putanja + "' alt = 'haha'>";
    return `<img src='${putanja}' alt = 'haha'>`;
}

let elem = document.getElementById('haha');
elem.innerHTML = slika('Images/slika.png'); // ako hocemo jos jednu sliku u div-u, dodamo znak + ispred znaka =

console.log(elem.innerHTML);


function paragraf(boja) {
    return `<p style='color: ${boja}'> Neki tekst.. </p>`
}

elem.innerHTML += paragraf('red');
elem.innerHTML += paragraf('blue');

function paragraf2(boja, tekst) {
    return `<p style='color: ${boja}'> ${tekst}</p>`;
}
elem.innerHTML += paragraf2('green', 'Lorem ipsum..');
elem.innerHTML += paragraf2('black', 'oh no');

function paragraf3(velicina, tekst) {
    return `<p style='font-size: ${velicina}px'> ${tekst}</p>`;
}


elem.innerHTML += paragraf3(24, "Tekst velicine 24 pixela");
elem.innerHTML += paragraf3(46, "Tekst velicine 46 pixela");


function pisiPetParagrafa() {
    let res = "";
    for(let i = 1; i <= 5; i++) {
        let j = i * 10;
        res = res + `<p style='font-size: ${j}px'> Neki tekst</p>`;
    }
    return res;
}

elem.innerHTML += pisiPetParagrafa();






