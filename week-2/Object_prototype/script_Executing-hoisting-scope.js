// Execution Context

// console.log(nama);
// var nama = 'nopi'; //undefined
// // let nama = 'nopi'; //error

// creation phase pada Globa; Context
// nama variabel dengan undefined
// nama function dengan code function atau fn()
// konsep diatas namanya hosting. mencari nama variabel lalu dinaikan  dan dideklarasikan undefined

//pada javascript terdapat object yang tidak pernah kita buat tapi terdeklarasi.
// window: didefinisikan sebagai Global Object
// this: dideklarasikan sebagai window

// execution phase

// console.log(kenaLan());
// var nama = 'nopi';
// var umur = 22;

// function kenaLan() {
// 	console.log(`Halo, nama saya ${nama} dan umur saya ${umur}`);
// }// variabel terdeklarasi undefined

// var nama = 'nopi';
// var umur = 22;
// console.log(kenaLan());// nilai variabel terdeklarasi
// function kenaLan() {
// 	console.log(`Halo, nama saya ${nama} dan umur saya ${umur}`);
// }
//diluar function disebut global execution
// var nama = 'nopi';
// var umur = 22;
// console.log(kenaLan()); // tidak ada undefined karena terdapat return dan console dibawah variabel

// //didalam function di sebut local execution
// function kenaLan() {
// 	return `Halo, nama saya ${nama} dan umur saya ${umur}`;
// }

// function membuat Local Execution ontext yang di dalamnya terdapat creation dan execution phase
//window
//argumnts , parameter
//hosting

// var nama = 'Diah NOvianti'
// var username = '@diahhnov'

// function cetakUrl(username) {
// 	var instagramUrl = 'http://twitter.com/';
// 	return instagramUrl + username;
// }
// console.log(cetakUrl(username))// http://twitter.com/@diahhnov

// var nama = 'Diah NOvianti';
// var username = '@diahhnov';

// function cetakUrl() {
// 	var instagramUrl = 'http://twitter.com/';
// 	return instagramUrl + username;
// }
// console.log(cetakUrl(username));// http://twitter.com/@diahhnov

// var nama = 'Diah NOvianti';
// var username = '@diahhnov';

// function cetakUrl() {
// 	console.log(arguments[0]); // diahhnov, terdeklarasi berbentuk array
// 	var instagramUrl = 'http://twitter.com/';
// 	return instagramUrl + username;
// }
// console.log(cetakUrl('diahhnov','noop'));// http://twitter.com/@diahhnov

// function dihosting dan mengutamakan global
// function satu(){
//     var nama = 'nop'// local variabel
//     console.log(nama)
// }

// function dua(){
//     console.log(nama)
// }

// console.log(nama)
// var nama = 'nopp'
// satu()
// dua('bro')//diabaikan karena tidak ada parameter dan statment bro masuk kedalam argumnt
// console.log(nama)

// function a(){
//     console.log(a)
//     function b(){
//         console.log(b)
//         function c(){
//             console.log(c)
//         }
//         c();
//     }
//     b();
// }
// a();

// Closures

// Lexical Scope
// function init(){
//     let nama = 'diah' // local variabel
//     function tampilnama(){ // inner function(ini adalah closurer)
//         console.log(nama) // akses ke parent variabel, naik ke atas
//     }
//     tampilnama();
// }
// init() //tercetak diah
// function init(){
//     let nama = 'diah' // local variabel
//     function tampilnama(){ // inner function(ini adalah closurer)
//         console.log(nama) // akses ke parent variabel, naik ke atas
//     }
//     console.log(tampilnama());
// }
// init()
// // diah
// // undefined: karena terdapat closure
// function init() {
// 	let nama = 'diah'; // local variabel
// 	function tampilnama() {
// 		// inner function(ini adalah closurer)
// 		console.log(nama); // akses ke parent variabel, naik ke atas
// 	}
// 	console.log(tampilnama);
// }
// init();
// // tercetak fn tampilnama
// function init() {
// 	let nama = 'diah'; // local variabel
//     let umur = 22;
// 	function tampilnama() {
// 		// inner function(ini adalah closurer)
// 		console.log(nama); // akses ke parent variabel, naik ke atas
//         console.log(umur);
// 	}
// 	console.dir(tampilnama);
// }
// init();
// //menampilkan objek dan terdapat scope yang berisi closure

// function init() {
// 	function tampilnama(nama) {
// 		// inner function(ini adalah closurer)
// 		console.log(nama); // akses ke parent variabel, naik ke atas
// 	}
// 	return tampilnama;// mengembalikan fn tampil nama
// }
// let panggilnama = init();
// panggilnama('nop')// tercetak nop

// function init() {
// 	return function(nama) {// fn anonymous
// 		// inner function(ini adalah closurer)
// 		console.log(nama); // akses ke parent variabel, naik ke atas
// 	}
// }
// let panggilnama = init();
// panggilnama('nop')// tercetak nop
// panggilnama('diah')// tercetak diah

// function ucapanSalam(waktu) { //lexical scope
// 	return function (nama) {
// 		console.log(`halo, ${nama}. Selamat ${waktu}, semoga harimu menyenangkan`);
// 	};
// }
// let selamatPagi = ucapanSalam('Pagi');
// let selamatSiang = ucapanSalam('Siang');
// let selamatMalam = ucapanSalam('Malam');

// selamatPagi('nop'); // halo, nop. Selamat Pagi, semoga harimu menyenangkan
// selamatSiang('diah');// halo, diah. Selamat Siang, semoga harimu menyenangkan
// selamatMalam('anti');// halo, anti. Selamat Malam, semoga harimu menyenangkan

// console.dir(selamatMalam);//menampilkan fn ononymous yang terdapat scope yang berisi closure

// let counter = 0;
// let add = function () {
//     return ++counter;
// }

// console.log(add()); // 1
// console.log(add()); // 2
// console.log(add()); // 3

// let counter = 0;
// let add = function () {
//     return ++counter;
// }

// counter = 10

// console.log(add()); // 11
// console.log(add()); // 12
// console.log(add()); // 13

// let add = function () {
//     let counter = 0;
//     return ++counter;
// }

// counter = 10;

// console.log(add()); // 1
// console.log(add()); // 1
// console.log(add()); // 1

// let add = function () {
//     let counter = 0;
//     return function(){
//         return ++counter;
//     }
// }

// let a = add();

// console.log(a()); // 1
// console.log(a()); // 2
// console.log(a()); // 3

// // sama hal nya dengan, imidiatly function

// let add = (function () {// function local
//     let counter = 0;
//     return function(){ // inner function
//         return ++counter;
//     }
// })()//kurung ini untuk men trigger function local;

// counter = 10 //tidak akan mengganggu perhitungan di inner function

// console.log(add()); // 1
// console.log(add()); // 2
// console.log(add()); // 3
