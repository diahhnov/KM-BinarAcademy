// function changeChar (str){
//     if (typeof (str) === 'string'){
//         let splitStr = str.split (' ');
//         let tmp = splitStr.map( val =>{
//             let word = val.split('');
//             word[0] = word[0].toUpperCase();
//             return word.join('');
//         })
//         return tmp.join(' ');
//     }else{
//         return new Error('coba di check')
//     }
// }

// console.log(changeChar('diah novianti'))
// console.log(changeChar(0))

// //dalam angka
// ages = "12 25 35 47 38 15 7 20";
// // Return a string with the inverted digits of ages
// function inverted(ages) {
//  return ages.split(' ').map( (age) => {
//    return age.split('').reverse().join('');
//  }).join(' ');
// }
// console.log( inverted(ages) );

// let mahasiswa = ['Diah Novianti', 'diahhnov', 'nop'];

// let jmlHuruf = mahasiswa.map((nama) => {
// 	return nama.length;
// });
// console.log(jmlHuruf()); // akan menampilakan jumlah huruf dalam bentuk array

// let mahasiswa = ['Diah Novianti', 'diahhnov', 'nop'];

// let jmlHuruf = mahasiswa.map((nama) => {
// 	return {
// 		nama: nama,
// 		jumlah: nama.length,
// 	};
// });
// console.log(jmlHuruf()); // akan menampilakan nama dan jumlah huruf dalam bentuk object
// console.table(jmlHuruf()); // akan menampilakan nama dan jumlah huruf dalam bentuk table
