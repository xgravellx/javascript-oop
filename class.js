class Person {
    constructor (name, surname) {
        this.ad = name;
        this.soyad = surname;
    }

    selamver() {
        return `merhaba ben ${this.ad + " " + this.soyad}`;
    }
}

const hazal = new Person('hazal', 'yılmaz');
console.log(hazal.selamver());

const derya = new Person('derya', 'yılmaz');
console.log(derya.selamver());
