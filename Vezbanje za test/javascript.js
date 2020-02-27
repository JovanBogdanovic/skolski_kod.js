let prosek = [0.4, 3.9, 5.6, 11, 18.1, 20.1, 22.1, 21.4, 18.5, 11.4, 4.5, 2.4]
let dan = {
    datum: "2020/02/24",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [-2, 3, 7, 12, 12, 7, 2, -1],
    // metoda koja vraca prosecnu temperaturu za dan
    prosek: function() {
        let temp = this.temperature;
        let suma = 0;
        temp.forEach(t => {
            suma += t;
        });
        let p = suma / temp.length;
        return p
    },
    // prebrojava koliko je bilo merenja sa natprosecnom temperaturom 
    brojNatprosek: function() {
        let p = this.prosek();
        let temp = this.temperature;
        let broj = 0;
        temp.forEach(t => {
            if(t > p) {
            broj++;
        }
        });
        return broj;
    },
    // prebrojava koliko je bilo merenja sa maksimalnom temperaturom
    brojMaksimalnih: function() {
        let temp = this.temperature;
        let max = temp[0]; // proglasavamo prvi broj u nizu za maksimalni
        for(i = 1; i < temp.length; i++) {
            if( temp[i] > max) {
                max = temp[i];
            }
        }
        let broj = 0;
        temp.forEach( t => {
            if(t == max){
                broj++;
            }
        });
        return broj;
    },
    // metoda koja prima dva parametra koji predstavljaju dve temperature, a koja broji koliko je meranja bilo izmedju ove dve temperature
    brojIzmedju: function(t1, t2) {
        if(t1 > t2){
            let t = t1; // ili [t1, t2] = [t2, t1]
             t1 = t2;
             t2 = t;
        }
        let broj = 0;
        let temp = this.temperature;
        temp.forEach(t => {
            if(t1 <= t && t <= t2){
                broj++;
            }
        });
        return broj;
    },
    // metoda koja proverava da li je u vecini dana temperatura bila iznad proseka ili ne
    iznadProsek: function() {
        let p = this.prosek();
        let temp = this.temperature;
        let brojIznad = 0;
        let brojIspod = 0;
        temp.forEach(t => {
            if(t >= p){
                brojIznad++;
            }
            else {
                brojIspod++;
            }
        });
        if(brojIznad > brojIspod) {
            return true;
        }
        else {
            return false;
        }
    },
    //metoda koja proverava da li je dan bio leden, za dan se smatra da je leden ako temperature nije bila veca od 0 stepeni
    ledeniDan: function() {
        let temp = this.temperature;
        for(let i = 0; i < temp.length; i++ ){
            if(temp[i] >= 0) {
                return false;
            }
        }
        return true;
    },
    //metoda koja proverava da li je dan bio tropski, za dan se smatra da je tropski ukoliko nijedna temperatura nije bila manja od 24 stepena
    tropskiDan: function() {
        let temp = this.temperature;
        let tropski = true;
        temp.forEach(t => {
            if(t < 24){
                tropski = false;
            }
        });
        return tropski;
    },
    //metoda koja proverava da li je dan bio nepovoljan za meteropate. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni.
    nepovoljan: function() {
        let temp = this.temperature;
        for(let i = 0; i < temp.length -1; i++){
            //temp[i] je tekuci element
            //temp[i + 1] je njegov sledbenik
            if(Math.abs(temp[i + 1] - temp[i]) > 8) {
                return true;
            }
        }
        return false;
    },
    // metoda koja proverava da li je dan bio neuobičajen. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano.
    neuobicajen: function() {
        let ok = false;
        let temp = this.temperature;
        if(this.kisa && this.oblacno && this.sunce) {
            return true;
        }
        temp.forEach(t =>{
            if(this.kisa == true && t <-5 || this.oblacno && t > 25) {
                ok = true;
            }
        });
        return ok;
    },
    // U objektu dan napisati metodu koja ispituje da li je prosečna temperatura iznad proseka za taj mesec ili ne.
    iznadProsekZaMesec: function() {
        let mesecString = this.datum.substr(5,2);
        let mesecCeoBroj = parseInt(mesecString);
        console.log(mesecCeoBroj);
        let p = prosek[mesecCeoBroj - 1];// prosecna temperatura za mesec
        let p1 = this.prosek(); // prosecna temperatura za dan
        if (p1 > p){
            return true
        }
        else{
            return false;
        }
    }
}


console.log(dan.prosek());
console.log(dan.brojNatprosek());
console.log(dan.brojMaksimalnih());
console.log(dan.brojIzmedju(4, 9));
console.log(dan.brojIzmedju(12, 5));
console.log(dan.iznadProsek());
console.log(dan.ledeniDan());
console.log(dan.tropskiDan());
console.log(dan.nepovoljan());
console.log(dan.neuobicajen());
console.log(dan.iznadProsekZaMesec());

let dan1 = {
    datum: "2020/02/20",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [1, 3, 7, 11, 15, 7, 2, 0]
}
let dan2 = {
    datum: "2020/02/19",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [1, 6, 9, 7, 2, 1]
}
let dan3 = {
    datum: "2020/02/18",
    kisa: true,
    sunce: false,
    oblacno: false,
    temperature: [-2, 1, 6, 9, 5, 2, 0, -3]
}

let merenjaDani = [dan1, dan2, dan3]

//Napisati arrow funkciju koja ispisuje datum u kome je naviše puta izmerena temperatura. Ukoliko ima više takvih datuma, ispisati:
//prvi takav

let prviNajviseMerenja = dani => {
    let max = dani[0].temperature.length;
    let index = 0;
    dani.forEach((dan, i) => { //dan[i] = dan
       if(dan.temperature.length > max){
           max = dan.temperature.length;
           index = i;
       } 
    });
    console.log(dani[index].datum);
}
let poslednjiNajviseMerenja = dani => {
    let max = dani[0].temperature.length;
    let index = 0;
    dani.forEach((dan, i) => { //dan[i] = dan
       if(dan.temperature.length >= max){
           max = dan.temperature.length;
           index = i;
       } 
    });
    console.log(dani[index].datum);
}
prviNajviseMerenja(merenjaDani);
poslednjiNajviseMerenja(merenjaDani);















