//Distruction variable / assignment
//array
// const perkenalan = ['halo', 'nama', 'saya', 'nopi'];
// const [nana, naa, noo, nii] = perkenalan;
// const [, naa, , nii] = perkenalan; //skip items
// console.log(naa);
// console.log(nana)//error

// let a = 1;
// let b = 3;
// console.log(a);
// console.log(b); // normal
// [a, b] = [b, a];
// console.log(a);
// console.log(b); //swap items

// function coba() {
// 	return [1, 2];
// }
// const [a, b] = coba();
// console.log(b); // return value pada function

// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values); //rest parameter

// // distruction object
// const mhs = {
// 	nama: 'diah',
// 	umur: 22,
// };

// const { nama, umur } = mhs; // harus sesuai dengan key
// console.log(nama);

//assignment tanpa deklarasi object
// ({ nama, umur } = {
// 	nama: 'diah',
// 	umur: 22,
// });
// console.log(nama);

//assign dengan nama baru
// const mhs = {
// 	nama: 'diah',
// 	umur: 22,
// };
// const { nama: a, umur: b } = mhs;
// console.log(a);

//memberikan default value
// const mhs = {
// 	nama: 'diah',
// 	umur: 22,
// };

// const { nama: a, umur: b, email = 'email@.com' } = mhs;
// console.log(email); //akan tampil sesuai default jiika tidak ada di dalam property tapi kalo ada dalam property maka yang akan ditampilkan yang ada didalam property

//rest parameter
// const mhs = {
// 	nama: 'diah',
// 	umur: 22,
// };
// const { nama, ...value } = mhs; // pemanggilan
// console.log(value); // akan tampil semua property kecuali yang sudah terdeklarasi didalm pemanggilan

// mengambil field pada object, setelah dikirim sebagai prameter untuk function, sering digunakan saat mengambil data pada api
// const mhs = {
// 	id: 123,
// 	nama: 'diah',
// 	umur: 22,
// };
// function getIdMhs({ id, nama }) {
// 	return { id, nama };
// }
// console.log(getIdMhs(mhs));

// distructuring function
// function penjumlahanPerkalian(a,b){
// 	return [a+b, a*b]
// }
// const hitung = penjumlahanPerkalian(2,3)
// console.log(hitung);// akan tercetak penjumlahan dan perkalian sesuai dengan return dalam bentuk array

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// console.log(jumlah);// akan tampil return(array) pada index ke 0
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);// akan tampil return(array) pada index ke 1

// dengan Distructuring; sama halnya seperti diatas akan tetapi lebih ringkas ,labi variabel array dibawah harus sesuai dengan return value pada function, urutan sangat berpengaruh (array).
// const [jumlah , kali] = penjumlahanPerkalian(a,b)
// console.log(jumlah);//5
// console.log(kali);//6
// function kalkulasi(a, b) {
// 	return [a + b, a - b, a * b,];
// }
// const [jumlah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(a, b);
// console.log(bagi);// tidak ada(nilai default)

//dengan objek urutan pada variabel tidak masalah
// function kalkulasi(a, b) {
// 	return {
// 		tambah: a + b,
// 		kurang: a - b,
// 		bagi: a / b,
// 		kali: a * b
// 	};
// }
// const {kali, bagi, kurang, tambah} = kalkulasi(2,3);
// console.log(kali);//6 urutan tidak berpengaruh

//Distructuring function arguments
// const mhs = {
// 	nama: 'Diah Novianti',
// 	umur: 22,
// 	nilai:{
// 		tugas: 80,
// 		uts: 85,
// 		uas: 90
// 	}
// }

// function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}){
// 	return `Halo nama saya ${nama}, umur saya ${umur} tahun dan nilai uas saya adalah ${uas}`
// }
// console.log(mhs)//Halo nama saya Diah Novianti, umur saya 22 tahun dan nilai uas saya adalah 90
