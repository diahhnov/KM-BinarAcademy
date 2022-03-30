// for .... of
// sebuah looping yang bisa mengulang atau menulusuri object yang interable
// const mhs = ['erick', 'nopi', 'jon'];

// menggunakan for biasa
// for (let i = 0; i < mhs.length; i++){
//     console.log(mhs[i])
// }

// menggunakan foreach; tidak bisa digunakan untuk string, hanya untuk array
// mhs.forEach(m => console.log(m))
// mhs.forEach((m, i) => {
// 	console.log(`${m} adalah mahasiswa ke-${i}`); //erik adalah mahasiswa ke-1
// 	//nopi adalah mahasiswa ke-2
// 	//jon adalah mahasiswa ke-3
// });

// menggunakan for of
// for (const m of mhs) {
// 	console.log(m);
// }
// for (const m of mhs) {
// 	console.log(m);
// }

// Object Interable
// string
// const nama = 'Diah Novianti';
// for (const urutNamaKebawah of nama) {
// 	console.log(urutNamaKebawah);
// }
const mhs = ['erick', 'nopi', 'jon'];
for (const [m, i] of mhs.entries()) {
	console.log(`${m} adalah mahasiswa ke-${i}`);
	//erik adalah mahasiswa ke-1
	// 	//nopi adalah mahasiswa ke-2
	// 	//jon adalah mahasiswa ke-3
}

// array
// arguments(parameter) / nodelist(query pada DOM): object yang mirip dengan array
// typearray
// map
// set
// user-defined iterables
