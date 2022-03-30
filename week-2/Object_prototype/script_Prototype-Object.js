//Cara membuat Object pada Javascript

// 1.1 Object
// 1. Object LIteral
// problem tidak efektif
// object Literal tidak boleh menggunakan nama variabel yang sama dengan variabel lain. jadi memakan resoure banyak. jika ingin membuat lebih dari 1 objek harus berbeda nama varibel object nya
//method adaah function dalam object

// let mahasiswa = {
// 	nama: 'nop', // property
// 	energi: 10,
// 	makan: function (porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`halo ${this.nama}, selamat makan`);
// 	},
// };

// 2. FUnction Declaration
// problem setiap inisiasi yang di deklarasi method dalam function disimpan, melakukan duplikasi. penyelesaian masalahnya: dengan membuat object terpisah dengan method yang ada di dalam functin dibawah
// jika ingin membuat object lebih dari satu hanya membuat templatenya dan hanya memanggil( inisiasi)

// function Mahasiswa(nama, energi) {
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;
// 	//method
// 	mahasiswa.makan = function (porsi) {
// 		this.energi += porsi;
// 		console.log(`halo ${this.nama}, selamat makan`);
// 	};
// 	//method
// 	mahasiswa.main = function (jam) {
// 		this.energi -= jam;
// 		console.log(`halo ${this.nama}, selamat main`);
// 	};
// 	return mahasiswa; // return object atau variabel di dalam function
// }

// let nopi = Mahasiswa('Diah', 10);
// let diah = Mahasiswa('Nopi', 5);

// object yang dihubungan dengan method
// object hanya di simpan sekali
// const methodMahasiswa = {
// 	//method
// 	makan: function (porsi) {
// 		this.energi += porsi;
// 		console.log(`halo ${this.nama}, selamat makan`);
// 	},
// 	//method
// 	main: function (jam) {
// 		this.energi -= jam;
// 		console.log(`halo ${this.nama}, selamat main`);
// 	},
// 	tidur: function (jam) {
// 		this.energi += jam * 2;
// 		console.log(`halo ${this.nama}, selamat tidur`);
// 	},
// };
// function Mahasiswa(nama, energi) {
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;
// 	mahasiswa.makan = methodMahasiswa.makan;
// 	mahasiswa.main = methodMahasiswa.main;
// 	mahasiswa.tidur = methodMahasiswa.tidur;

// 	return mahasiswa; // return object atau variabel di dalam function
// }
// let nopi = Mahasiswa('Diah', 10);
// let diah = Mahasiswa('Nopi', 5);

// 3. Cunstructor function
// tindak perlu mendeklarasikan variabel object dan return nya

// function Mahasiswa(nama, energi) {
// 	this.nama = nama;
// 	this.energi = energi;
// 	//method
// 	this.makan = function (porsi) {
// 		this.energi += porsi;
// 		console.log(`halo ${this.nama}, selamat makan`);
// 	};
// 	//method
// 	this.main = function (jam) {
// 		this.energi -= jam;
// 		console.log(`halo ${this.nama}, selamat main`);
// 	};
// }

// let nopi = new Mahasiswa('Diah', 10);
// let diah = new Mahasiswa('Nopi', 5);

// 1.2 Object.create()
// seperti function deklarasi
// methodMahasiswa adalah parent object

// const methodMahasiswa = {
// 	//method
// 	makan: function (porsi) {
// 		this.energi += porsi;
// 		console.log(`halo ${this.nama}, selamat makan`);
// 	},
// 	main: function (jam) {
// 		this.energi -= jam;
// 		console.log(`halo ${this.nama}, selamat main`);
// 	},
// 	tidur: function (jam) {
// 		this.energi += jam * 2;
// 		console.log(`halo ${this.nama}, selamat tidur`);
// 	},
// };
// function Mahasiswa(nama, energi) {
// 	let mahasiswa = Object.create(methodMahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	return mahasiswa; // return object atau variabel di dalam function
// }
// let nopi = Mahasiswa('Diah', 10);
// let diah = Mahasiswa('Nopi', 5);

// Prototype

// function Mahasiswa(nama, energi) {
// 	this.nama = nama;
// 	this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
// 	this.energi += porsi;
// 	return `halo ${this.nama}, selamat makan`;
// };

// Mahasiswa.prototype.main = function (jam) {
// 	this.energi += jam;
// 	return `halo ${this.nama}, selamat main`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
// 	this.energi += jam * 2;
// 	return `halo ${this.nama}, selamat tidurr`;
// };

// let nopi = new Mahasiswa('Diah', 10);
// let diah = new Mahasiswa('Nopi', 5);

// denngan class
// pada belakang layar menggunakan prototype
// class Mahasiswa {
// 	constructor(nama, energi) {
// 		this.nama = nama;
// 		this.energi = energi;
// 	}
// 	makan(porsi) {
// 		this.energi += porsi;
// 		return `halo ${this.nama}, selamat makan`;
// 	}
// 	main(jam) {
// 		this.energi += jam;
// 		return `halo ${this.nama}, selamat main`;
// 	}
// 	tidur(jam) {
// 		this.energi += jam * 2;
// 		return `halo ${this.nama}, selamat tidur`;
// 	}
// }

// let nopi = new Mahasiswa('Diah', 10);
// let diah = new Mahasiswa('Nopi', 5);
