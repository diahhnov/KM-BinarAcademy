console.log('OOP');
// OOP
/* ada class dan object yang memiliki sifatnya tersendiri
   OOP adalah Paradigma Pemograman
*/

// Paradigma Pemograman
/* cara kita menyelesaikan suatu maslah atua algoritma menggunakan sudut padang pemograman, 2 hal berbeda dalam menyelesaikan masalah dengan satu tujuan*/
// ex: const Mahasiswa
//     const mahaSiswa

/* kenpa kita harus pakai OOP
1. biar lebih rapi
2. menyederhanakan masalah yang complex menjadi bagian lebih kecil
*/

OBJECT
const buah ={
    name:'Mangga',
    color:'hijau',
    bentuk:'lonjong'
};
console.log(`Buah ${buah.name} warnanya ${buah.color} dan bentuknya ${buah.bentuk}`)
//dengan object ini menghabiskan memory dan merepotkan

//function
const Buah = (name, color, bentuk) =>{
    return{
        name: name,
        color:color,
        bentuk:bentuk,//value keynya parameter
    }//scope ini object
}
const Pisang = Buah('Pisang', 'kuning', 'lojong');
console.log(
	`Buah ${Pisang.name} warnanya ${Pisang.color} dan bentuknya ${Pisang.bentuk}`
);

//class
class Buah {
	constructor(name, color, bentuk) {
		this.name = name;
		this.color = color;
		this.bentuk = bentuk;
	}
	// property tanpa this dan diluar construction menjadi property object yang berada di constructor dan tidak bisa dipanggil
    caraMakannya(){
        return `$(this.name) harus dikupas dahulu sebelum dimakan`;
    }//ini ada method
}
const Pisang = new Buah('Pisang', 'kuning', 'lojong');
console.log(Pisang); //menggunakan class sama halnya dengan function akan tetapi terdapat variabel yang ada di depan class
console.log(Pisang.caraMakannya());//memanggil method sama halnya seperti function, ya karna methoditu function dalam object

class Buah {
	constructor(name, color, bentuk) {
		this.name = name;
		this.color = color;
		this.bentuk = bentuk;
	}
	// property tanpa this dan diluar construction menjadi property object yang berada di constructor dan tidak bisa dipanggil
    habit ='lembab';
    caraMakannya(){
        return `$(this.habit) harus dikupas dahulu sebelum dimakan`;//lembab ini akan masuk kedalam statement return
    }//ini ada method
}
const Pisang = new Buah('Pisang', 'kuning', 'lojong');
console.log(Pisang); //menggunakan class sama halnya dengan function akan tetapi terdapat variabel yang ada di depan class
console.log(Pisang.caraMakannya());//memanggil method sama halnya seperti function, ya karna methoditu function dalam object

// KONSEP OOP
class Hero {
	constructor(heroName, stamina, type, attack) {
		//pada parameter ini bisa bernilai default jika di consol.lognya bernilai default bukan falsey apalagi truthy
		this.heroName = heroName;
		this.stamina = stamina;
		this.type = type;
		this.attack = attack;
	}
	#healt = 100; // ini tidak akan pernah bisa diturunkan ke function berikutnya

	menyerang() {
		this.stamina -= 2;

		return this.stamina;
	}

	istirahat() {
		this.stamina *= 2;

		return this.stamina;
	}
}
// const Nop = new Hero('nop', 10, 'healer', 10);
// console.log(Nop.menyerang());
// console.log(Nop.menyerang()); //stamina: 6
// console.log(Nop.menyerang()); //stamina: 6
// console.log(Nop);

// Polymorphyson
// Inheritance(penurunan sifat)
class Atribute extends Hero {
	constructor(heroName, stamina, type, attack) {
		super(heroName, stamina, type, attack);
	}
	// showMyHealt() {
	// 	return this.#healt;
	// }
}
const Nop = new Atribute('Diah', 40, 'healer', 10);
console.log(Nop);
// console.log(Nop.showMyHealt());
// Encapsulation
// untuk menentukan suatu properti/method itu memiliki sifat private atau public, public bisa diturunkan(constraction). selain constraction bisa di private (#)

// class Hero {
    constructor(heroName, stamina, type, attack){//pada parameter ini bisa bernilai default jika di consol.lognya bernilai default bukan falsey apalagi truthy
        this.heroName = heroName;
        this.stamina = stamina;
        this.type = type;
        this.attack = attack;
    }
    #healt = 100;// ini tidak akan pernah bisa diturunkan ke function berikutnya

    menyerang (){
        this.stamina -= 2;

        return this.stamina;
    }

    istirahat (){
        this.stamina *= 2;

        return this.stamina;
    }
}
const Nop = new Hero ('nop', 10, 'healer', 10);
console.log(Nop.menyerang());
console.log(Nop.menyerang());//stamina: 6
console.log(Nop.menyerang());//stamina: 6
console.log(Nop);//{heroName: 'Nop', stamina: 12, type: 'healer', attack: 10}

// Polymorphyson
//membuat satu method dengan nama yang sama, tanpa merubah method parent secara langsung
// Abstraction
class Student {//parameter nya harus object jika mau beragam
    constructor(props){
        this.state = props;
    }
}

const Nop = new Student({
    kriteria: 'imut',
    hobbies: ['napas', 'tidur', 'makan']
})// dapat diletakkan function lain

const Dro = new Student({
	kriteria: 'lucu',
	hobbies: ['nonton', 'naik motor', 'makan'],
    umur: 20,
});
console.log(Nop);
console.log(Dro);

class kendaraan percepatan(method)
class hewan punya kriteria, cara hidup

class Animal {
	constructor(props) {
		this.state = props;
	}
}

const Gajah = new Animal({
	kriteria: [
		'memiliki belalai',
		'badannya besar',
		'mempunyai 4 kaki',
		'hewan mamalia',
	],
	caraHidup: 'berkelompok',
	kebiasaan: 'berendam dalam lumpur',
});
console.log(Gajah);

class Animal {
	constructor(kriteria, kebiasaan, caraHidup) {
		this.kriteria = kriteria;
		this.kebiasaan = kebiasaan;
		this.caraHidup = caraHidup;
	}
	whyGajahBerendem() {
		this.kebiasaan = 'melindungi kulit dari matahari';
	}
	kegunaanSayap() {
		this.kriteria = 'sayap pada pinguin itu untuk berenang';
	}
}

const Gajah = new Animal(
	'badannya besar',
	'berendam dalam lumpur',
	'berkelompok'
);

const Pinguin = new Animal('memiliki sayap', 'suka berenang', 'berkelompok');

console.log(Gajah);
console.log(Gajah.whyGajahBerendem);
console.log(Pinguin);
console.log(Pinguin.kegunaanSayap);
