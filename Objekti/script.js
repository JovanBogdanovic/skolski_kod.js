// kreiranje objekta blog

let blog = {
    title: 'Naslov moga bloga',
    content: 'Tekst moga bloga',
    author: 'Blogan Blogdanovic'
};

console.log(blog);
console.log(typeof 5);
console.log(typeof true);
console.log(typeof blog);

// pristupanje osobini
console.log(blog.title);
console.log(blog['title']);

//izmena neke osobine
blog.title = ('Naslov moga bloga!');
console.log(blog);

blog['title'] = ('Naslov moga bloga!!!');
console.log(blog);


let blog1 = {
    title: 'Blog 1!',
    content: 'Tekst 1',
    likes: 0,
    dislikes: 50
};
console.log(blog1);

let blog2 = {
    title: 'Blog 2!',
    content: 'Tekst 2',
    likes: 20,
    dislikes: 20
};
console.log(blog2);

let blog3 = {
    title: 'Blog 3',
    content: 'Tekst 3',
    likes: 5,
    dislikes: 50
};
console.log(blog3);

let user = {
    username: 'JohnDoe',
    age: 69,
    blogs: ['Title1', 'Title2', 'Title3'],
    login: function(){
        console.log("Ulogovani ste");
    },
    logBlogs: function() {
        this.blogs.forEach( b => {
            console.log(b);
        });
    }
};
console.log(user.username);

let arrBlogs = user.blogs;
// ispis niza blogova
for(let i = 0; i < arrBlogs.length; i++){
    console.log(`Naslov bloga je:${arrBlogs[i]}`)
}

// ispis niza blogova forEach metodom

arrBlogs.forEach( blog => {
    console.log(`Naslov je ${blog}`);
});

// poziv metoda
user.login();
// poziv propertija unutura metoda
user.logBlogs();
console.log(this);
// niz objekata
let blogs = [blog1, blog2, blog3];
// iteracija for petljom
for(let i = 0; i < blogs.length; i++) {
    console.log(blogs[i].title);
}

// iteracija forEach nizom objekata - ispisivanje celih objekata
blogs.forEach( blog => {
    console.log(blog);
});

// iteracija forEach nizom objekata -  ispisovanje naslova
console.log(blog1.title);
blogs.forEach( blog => {
    console.log(blog.title);
});

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let ukupnoLajkova = blogs => {
    let ukupno = 0;
    blogs.forEach(elem => {
        ukupno += elem.likes;
    });
    return ukupno;
};
console.log(ukupnoLajkova(blogs));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosekLajkova = niz => {
    let ukupno = ukupnoLajkova(niz);
    let br = niz.length;
    let avg = ukupno / br;
    return avg;
};
console.log(prosekLajkova(blogs));
// Saletov kraci nacin
let prosek = niz => ukupnoLajkova(niz) / niz.length;
console.log(prosek(blogs));

//prosecno dislajkova
let prosekDislajkova = niz => {
    let ukupno = 0;
    niz.forEach(x => {
        ukupno += x.dislikes;
    });
    let br = niz.length;
    let avg = ukupno / br;
    return avg;
};

//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova kojiimaju više pozitivnih nego negativnih ocena

let visePozitivnih = niz => {
    niz.forEach( elem => {
        let poz = elem.likes;
        let neg = elem.dislikes;
        if(poz > neg){ // 2*neg za objekti u nizu - vezbanje -  naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
            console.log(elem.title);
        }
    });
}
visePozitivnih(blogs);

//Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = blogs => {
    blogs.forEach ( blog => {
        let naslov = blog.title;
        if(naslov.endsWith('!')) {
            console.log(naslov);
        }
    });
};

uzvicnik(blogs);


// objekat u objektu
let user1 = {
    username: 'Kevin Garvey',
    age: 38,
    blogs: [blog1, blog2, blog3],
    logBlogs: function() {
        this.blogs.forEach( b => {
            console.log(b)
        });
    },
    logTitleBlogs: function() {
        this.blogs.forEach(b => {
            console.log(b.title);
        });
    }
};
console.log(user1);
user1.logBlogs();
user1.logTitleBlogs();

// Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
let user2 = {
    username: 'Nora Durst',
    age: 16,
    blogs: [blog1, blog2]
}

let user3 = {
    username: 'Mathew Jamison',
    age: 40,
    blogs: [blog1, blog2]
}
// niz korisnika
let users = [user1, user2, user3];
//Ispisati imena onih autora koji imaju ispod 18 godina

let maloletni = korisnici => {
    korisnici.forEach(elem => {
        let god = elem.age;
        if(god < 18){
            console.log(elem.username);
        }
    });
};
maloletni(users);

//Ispisati naslove onih blogova koji imaju više od 50 lajkova
let popularniBlogovi = korisnici => {
    korisnici.forEach(k => {
        let nizBlogova = k.blogs;
        nizBlogova.forEach(b => {
            let lajkovi = b.likes;
            if(lajkovi > 50) {
                console.log(b.title);
            }
        });        
    });
}
popularniBlogovi(users);


// Ispisati sve blogove autora čiji je username 'Kevin Garvey'

let blogoviAutora = (korisnici, ime) => { // onda ne treba ime
    korisnici.forEach(k => {
        if(k.username == ime){// == 'Kevin Garvey'
            let nizBlogova = k.blogs;
            nizBlogova.forEach(b => {
                console.log(b.title);
            });
        }
    });
}
blogoviAutora(users, 'Kevin Garvey');

//Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
let popularniAutori = autori => {
    autori.forEach(a => {
        let nizBlogova = a.blogs;
        let sumLikes = 0;
        nizBlogova.forEach(b => {
            sumLikes += b.likes;
        });
        if(sumLikes > 100) {
            console.log(a.username);
        }
    });
}
popularniAutori(users);

// pomocu funkcije ukupno lajkova
let popularniAutori2 = autori => {
    autori.forEach(a => {
        let nizBlogova = a.blogs;
        let sumLikes = ukupnoLajkova(nizBlogova);
        if(sumLikes > 100) {
            console.log(a.username);
        }
    });
}
popularniAutori2(users);

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena

let superBlog = niz => {
    let sum = 0; // suma svih lajkova svih blogova
    let sumDis = 0;
    let br = 0; //broj svih blogova
    niz.forEach(a => {
        let nizBlogova = a.blogs;
        nizBlogova.forEach(b => {
            br++
            sum += b.likes;
            sumDis += b.dislikes;
        });
    });
    let avgLikes = sum / br;
    let avgDisLikes = sumDis / br;
// prodjemo svim blogovima i ispitamo da li imaju vise od prosecno lajkova..
    niz.forEach(a =>{
        let nizBlogova = a.blogs;
        nizBlogova.forEach(b => {
            if(avgLikes < b.likes && avgDisLikes > b.dislikes){
                console.log(b.title);
            }
        });
    });
}
superBlog(users);

console.log("Nova poruka");
















