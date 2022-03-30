// // const yu =['ka','ki','ku','kor',['ke','ko','ker'],['ou','oi',['je',['le']]]]
// // console.log(yu[1],yu[0])
// // console.log(yu[3][1])
// // console.log(yu[2])
// // console.log(yu[5][2][0])
// // yu.unshift('cob')
// // console.log(yu)

// // const a =[1,2,3,4,5]
// // console.log(a.length)

// // const ye = {
// //     nama : 'nop',
// //     jp: 'perem'
// // }
// // console.log(ye)

// // ye.angkaFav = [2,4,8,9]
// // console.log(ye)

// // let {nama, jp}= ye
// // console.log(nama)
// // console.log(jp[1])

// // const yo = ["ye","yo"]
// // yo = [ "le", ...yo , "ko"]
// // console.log(yo)

// // konsep this pada arrow function

// // constructor function
// // const Mahasiswa = function () {
// // 	this.nama = 'nop';
// // 	this.umur = 22;
// // 	this.haii = function () {
// // 		console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur}`);
// // 	};
// // };
// // const Diah = new Mahasiswa(); //jika dalam console di ketih Diah.haii akan tercetak Halo, nama saya nop, umur saya 22

// // arrow function
// // Arrow function tidak memiliki konsep this, akan mencari this variabel luar
// // pada method bisa diganti engan arrow function
// // const Mahasiswa = function () {
// // 	this.nama = 'nop';
// // 	this.umur = 22;
// // 	this.haii = () => {
// // 		console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur}`);
// // 	};
// // };
// // const Diah = new Mahasiswa();

// //object LIteral
// // const Mahasiswa = {
// //     nama : 'diah',
// //     umur: 22,
// //     sayHello: function(){
// //         console.log(` hallo, nama saya ${this.nama}, umur saya ${this.umur}`);
// //     }
// // }
// // //pada console jika di ketik Mahasiswa.sayHello akan tampil hallo, nama saya diah, umur saya 22
// // const Mahasiswa = {
// // 	nama: 'diah',
// // 	umur: 22,
// // 	sayHello: () => {
// // 		console.log(` hallo, nama saya ${this.nama}, umur saya ${this.umur}`);
// // 	},
// // };
// //pada console jika di ketik Mahasiswa.sayHello akan tampil hallo, nama saya undefined, umur saya undefined. penjelasan: this akan mecari pada local scope diatas

// // const Mahasiswa = function () {// global fn
// // 	this.nama = 'nop';
// // 	this.umur = 22;
// // 	this.haii = function () { // fn expresion: fn disimpan ke dalam variable. dan fn tidak kena hosting
// // 		console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur}`);
// // 	};
// //     setInterval(function(){ //fn deklarasi
// //         console.log(this.umur++) //umur akan bertambah
// //     }, 500)// keterangan waktu setiap bertambahnya umur
// // };
// // const Diah = new Mahasiswa(); //NaN
// // const Mahasiswa = function () {// global fn
// // 	this.nama = 'nop';
// // 	this.umur = 22;
// // 	this.haii = function () { // fn expresion: fn disimpan ke dalam variable. dan fn tidak kena hosting
// // 		console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur}`);
// // 	};
// //     setInterval(function(){ //fn deklarasi
// //         console.log(this.umur) //umur akan bertambah
// //     }, 500)// keterangan waktu setiap bertambahnya umur
// // };
// // const Diah = new Mahasiswa(); // undefined

// // const Mahasiswa = function () {// global fn
// // 	this.nama = 'nop';
// // 	this.umur = 22;
// // 	this.haii = function () { // fn expresion: fn disimpan ke dalam variable. dan fn tidak kena hosting
// // 		console.log(`Halo, nama saya ${this.nama}, umur saya ${this.umur}`);
// // 	};
// //     setInterval(() => { //fn arrw
// //         console.log(this.umur++) //this akan mencari this.umur di global fn
// //     }, 500)// keterangan waktu setiap bertambahnya umur
// // };
// // const Diah = new Mahasiswa();
// // // 23
// // // 24, dan seterusnya

// //stylesheet
// //toggle: jika belum ada class ditambahkan jika ada class dihilangkan
// // const box = document.querySelector('.box');
// // box.addEventListener('click', function () {
// // 	let satu = 'size';
// // 	let dua = 'captiion';

// // 	if (this.classList.contains(satu)) {
// // 		satu = temp;
// // 		satu = dua;
// // 		dua = temp;
// // 	}
// // 	this.classList.toggle(satu);
// // 	setTimeout(() => {
// // 		this.classList.toggle(dua);
// // 	}, 600);
// // });

// const box = document.querySelector('.box');
// box.addEventListener('click', function () {
// 	let satu = 'size';
// 	let dua = 'captiion';

// 	if (this.classList.contains(satu)) {
// 		[satu, dua] = [dua, satu];
// 	}
// 	this.classList.toggle(satu);
// 	setTimeout(() => {
// 		this.classList.toggle(dua);
// 	}, 600);
// });

// Higher order function adalah function yang memiliki sebuah parameter yang bernilai function
// kerjakanTUgas adalah Higher Order FUnction
// selesai adalah callback(bernilai function)
// function kejakanTugas(matakuliah, selesai) {
// 	console.log(`Mulai mengerjakan tugas ${matakuliah}`);
// 	selesai();
// }

// function selesai() {
// 	alert('selesai mengerjakan tugas!');
// }

// kejakanTugas('Pemrograman Web', selesai());
// hasilnya: dalam console; Mulai mengerjakan tugas Pemrograman Web. lalu pada browser akan muncul notif alert; selesai mengerjakan tugas!
/* contoh lainnnya;
 pada setTimeOut, closure, style DOM box, */

//alasan kenapa menggunakan higher order function
// Abstraksi: membuat agar code yang kita buat lebih sederhana.

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// for
// const newAngka = [];
// for (let a = 0; a < angka.length; a++) {
// 	if (angka[a] >= 3) {
// 		newAngka.push(angka[a]);
// 	}
// }
// console.log(newAngka);

//Array.prototype.map()
// Map sama halnya dengan foreach akan tetapi berbeda dalam hasilnya, map menghasilkan array baru sedangkan foreach tidak, memetakan tiap tiap elemen pda fungsi baru
// const newAngka = angka.map(function(a){
// 	return a * 2
// })
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka)

//Array.prototype.reduce()
// Reduce
// melakukan sesuatu pada semua elemen arraynya, jumlahkan seluruh array
//currentValue: element array yang sedang di looping
//accumulator: hasil dari prosesnya
// const newAngka = angka.reduce(function (accumulator, currentValue) {
// 	return accumulator + currentValue;
// });
// const newAngka = angka.reduce(
// 	(accumulator, currentValue) => accumulator + currentValue,
// 	5 // defaultnya 0
// );
// console.log(newAngka); // 26 jumlah dari seluruh array angka

//Array.prototype.filter()
// Filter
// const newAngka = angka.filter(function (a) {
// 	return a >= 3;
// });
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// methode Chaining
// cari angka > 5; dikalikan 3; jumlahkan
// const newAngka = angka
// 	.filter(function (a) {
// 		return a > 5;
// 	})
// 	.map(function (a) {
// 		return a * 3;
// 	})
// 	.reduce(function (acc, cur) {
// 		return acc + cur;
// 	});

// const newAngka = angka
// 	.filter((a) => a > 5)// 8,9,9
// 	.map((a) => a * 3)// 24,27,27
// 	.reduce((acc, cur) => acc + cur);//78
// console.log(newAngka);

// Latihan
// NodeList berbeda dengan array
// ambil semua elemen video

// const videos = Array.from(document.querySelectorAll('[data-duration]'));

// //pilih hanya yang 'JAVASCRIPT LANJUTAN'

// // const jsLanjut = videos.filter(function (video) {
// // 	return video.textContent.includes('JAVASCRIPT LANJUTAN');
// // });

// let jsLanjut = videos
// 	.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN')) // arti includes : yang terdapat( ini adalah hal yang di triger includes )

// 	// ambil durasi masing masing video
// 	// .map(function (item) {
// 	// 	return item.dataset.duration;
// 	// });
// 	.map((item) => item.dataset.duration)

// 	//ubah durasi menjadi float, ubah menjadi menit ke detik
// 	.map((waktu) => {
// 		// 10:30 -> [10, 3] ; split
// 		const parts = waktu.split(':').map((part) => parseFloat(part));
// 		return parts[0] * 60 + parts[1];
// 	})

// 	// jumlahkan seluruh detik
// 	.reduce((total, detik) => total + detik);

// //ubah detik ke jam menit dan detik
// // floor ambil pembulatan bawahnya
// // ceil ; 3.1 adalah 4
// // round pembulatan paling dekat
// const jam = Math.floor(jsLanjut / 3600);
// jsLanjut = jsLanjut - jam * 3600;

// const menit = Math.floor(jsLanjut / 60);

// const detik = jsLanjut - menit * 60;

// //simpan di DOM
// const pDurasi = document.querySelector('.total-durasi');
// pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
// const jmlhVideo = videos.filter((video) =>
// 	video.textContent.includes('JAVASCRIPT LANJUTAN')
// ).length;
// const pJmlhVideo = document.querySelector('.jumlah-video');
// pJmlhVideo.textContent = `${jmlhVideo} Video`;
// console.log(jmlhVideo);
