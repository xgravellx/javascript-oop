class Person1 {
    constructor (name, surname) {
        this.ad = name;
        this.soyad = surname;
    }

    selamver() {
        return `merhaba ben ${this.ad + " " + this.soyad}`;
    }
}

class Ogrenci extends Person1 {
    constructor (ad, soyad, yas){
        super(ad, soyad);
        this.yas = yas;
    }

    yasi() {
        return `ben ${this.yas} yaşındayım`;
    }

}

const ayse = new Ogrenci('ayse', 'agdiken', 10);
console.log(ayse.selamver());
console.log(ayse.yasi());
