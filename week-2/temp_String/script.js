// Template String
// String Literal yang memungkinakan adanya expression di dalamanya
// String Literal : string yang sering dibuat '' , "" pada php "" bisa melakukan interpolasi, pada javascript keduanya tiak ada beda dan `` kalo backtik memungkinkan untuk membuat template literal.

//Tamplate Literal ``
//multi-line expression
//HTML fragments sering digunakan jika menggunakan frontend framework
//expression interpolation sama halnya dengan ""
//tagged tamplate

// 'String text' //string biasa
// `String text 1
//  String text 2
//  String text 3`;
// console.log(`string 1 \n string 2`);
// console.log(
// 	`string 1
//         string 2`
// ); //multi-Line string
// console.log(`${2 + 3}`); //embeded Expresion
// console.log(`${alert('haii!')}`)// akan tampil notif alert haii
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`)//ternary
// `String text ${expretion} String text`; //menambahakan ekspresi dalam string(embeded string)
// tag`String text ${expretion} String text`; //tag string

//HTML Fragment
// const mhs = {
// 	nama: 'Diah Novianti',
// 	age: 22,
// 	nim: 201843500552,
// };
// const el = `<div class="mhs">
// <h2> ${mhs.nama}</h2>
// <span class="nim">${mhs.nim}</span>
// </div>`;
// document.body.innerHTML = el;
// console.log(el); // akan tampil dalam console coding bentuk html

//HTML Fragment
// const mhs = [
// 	{
// 		nama: 'Diah',
// 		nim: 5635362,
// 	},
// 	{
// 		nama: 'Dilla',
// 		nim: 5635362,
// 	},
// 	{
// 		nama: 'Desti',
// 		nim: 5635362,
// 	},
// ];

// const el = `<div class="mhs">
//     ${mhs
// 			.map(
// 				(m) =>
// 					`<ul>
//         <li>${m.nama}</li>
//         <li>${m.nim}</li>
//     </ul>`
// 			)
// 			.join('')}
// </div>`;

// conditionals
//ternary
// const lagu = {
// 	judul: 'Tetap dalam jiwa',
// 	singer: 'Isyana',
// 	// feat: 'Rayi',
// };
// const el = `<div class="lagu">
// <ul>
//     <li>${lagu.singer}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// </ul>
// </div>`;

// nested(html fragment bersarang)
// const mhs = {
// 	nama: 'Diah',
// 	nim: 5635362,
// 	mataKuliah: [
// 		'RPL',
// 		'Analisi dan Perancangan Sistem Informsi',
// 		'Pemrograman sistem INteraktif',
// 		'PBO',
// 	],
// };

// function cetakMataKuliah(mataKuliah) {
// 	return `
//     <ol>
//         ${mataKuliah.map((mk) => `<li>${mk}</li>`).join('')}
//     </ol>`;
// }

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nim">${mhs.nim}</span>
// <h4>Mata Kuliah</h4>
// ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;
// document.body.innerHTML = el;

//tag template
// escaping HTML tags: sanitasi html, untuk menghindari ketika ada script yang ada dihalaman web
// styles componnents: styling pada react
//translation dan intrnationalization: mentranslate bahasa di program ke hasil etapi harus berbeda bahasa yang dicodingan dengan bahasa yang digunakan pada tools
// bentuk lebih complex dari pada tamplate literal
// const nama = 'Diah Novianti';
// const umur = 22;

// function coba(string, ...values) {
// 	// let result = '';
// 	// string.forEach((str, i) => {
// 	// 	result += `${str}${values[i] || ''}`;
// 	// });
// 	// return result;
// 	return string.reduce(
// 		(result, str, i) => `${result}${str}${values[i] || ''}`,
// 		''
// 	);
// }

// const gabung = coba`halo, nama saya ${nama}, umur saya ${umur}`;
// console.log(gabung);

// Highlight
// const nama = 'Diah Novianti';
// const umur = 22;

// function coba(string, ...values) {
// 	return string.reduce(
// 		(result, str, i) =>
// 			`${result}${str}<span class = "hl">${values[i] || ''}</span>`,
// 		''
// 	);
// }

// const gabung = coba`halo, nama saya ${nama}, umur saya ${umur}`;
// document.body.innerHTML = gabung;
