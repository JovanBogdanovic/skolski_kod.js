// query selektor po imenu taga
let paragraf = document.querySelector('p');
console.log(paragraf);
let div =  document.querySelector('div');
console.log(div);

// query selector po imenu klase
let klasaTest = document.querySelector(".test");
console.log(klasaTest);

// query selector po imenu klase
let klasaTestParagraf = document.querySelector('p.test');
console.log(klasaTestParagraf);

// query selector po id-u
let idParagraf = document.querySelector('#treci_paragraf');
console.log(idParagraf);

// query selector za sve <p> tagove
let sviParagrafi = document.querySelectorAll('p');
console.log(sviParagrafi);

//pristupanje elementu Node liste
console.log(sviParagrafi[0]);

//kretanje kroz node listu
sviParagrafi.forEach(elem =>{
    console.log(elem);
});

// getElementsByClassName
let klasaTestDoc = document.getElementsByClassName('test');
console.log(klasaTestDoc);

// kretanje HTML kolekcijom pomocu for petlje
console.log(klasaTestDoc[0]);
for(let i = 0; i < klasaTestDoc.length; i++){
    console.log(klasaTestDoc[i]);
}

// innerText -  dodavanje tekstualnog sadrzaja na stranicu

paragraf.innerText += ' Zdravo';

//innerHTML - dodavanje html sadrzaja 
paragraf.innerHTML += '<span> Kako si? </span>'

//Vezbanje
//Selektovati sve paragrafe i u svakom od njih pridodati tekst „VAŽNO!!!“

sviParagrafi.forEach(elem => {
    //elem.innerText += ' VAZNO!!!'
    elem.innerHTML += '<b> VAZNO!!! </b>'
});

sviParagrafi.forEach((elem, index) => {
    let kv = (index+1)**2;
    elem.innerText += `${kv}`;   
});

//Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati: Svako u novom paragrafu

let imena = ['Jovana', 'Miljana', 'Milena'];
/*
sviParagrafi.forEach((elem, index) => {
    elem.innerText += `${imena[index]}`;
});
*/
// Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati: U listi kao stavke liste

let lista = document.querySelector('ul');
imena.forEach(elem => {
    let item = `<li> ${elem} </li>`;
    lista.innerHTML += item;
});
