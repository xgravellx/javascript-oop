class Person2 {

    static sayac = 0;

    constructor (name, surname) {
        this.ad = name;
        this.soyad = surname;
        Person2.sayac++;
    }

    selamver() {
        return `merhaba ben ${this.ad + " " + this.soyad}`;
    }
}

class Ogrenci1 extends Person2 {
    constructor (ad, soyad, yas){
        super(ad, soyad);
        this.yas = yas;
    }

    yasi() {
        return `ben ${this.yas} yaşındayım`;
    }

}

console.log("oluşturulan person sayısı:" + Person2.sayac);