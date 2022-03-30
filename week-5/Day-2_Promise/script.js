console.log('promise');
//promise(janji)
let sudahDatang;
let kondisi = 'Availabe';

const doATask = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('dibaca 6 detik');
	}, 6000);
});
//pending

//fulfilled/resolved

//rejected

//untuk menghandle pending pada suatu promise yaitu dengan:

const doATask1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (kondisi === 'Availabe') {
			resolve('janji terpenuhi');
		} else {
			reject('ada kendala');
		}
	}, 2000);
});
//callback stat
// doATask.then((result) => {
// 	console.log(result);
// });

// doATask1
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
// console.log('hi');
//asyhronous process
//pada async await mengeluarkan output nya menunggu semua await masuk ke dalam memory dan mencetaknya bersamaan
const doAPromise = async () => {
	try {
		const hasil = await doATask1;
		console.log(hasil); // dibaca setelah 2 detik
		const result = await doATask;
		console.log(result); // dibaca setelah 6 detik
	} catch (error) {
		console.log(error);
	}
};

const doAPromise = async () => {
	try {
		//sync didalam asysnc
		const result = await doATask;
		console.log(result); // dibaca setelah 6 detik
		const hasil = await doATask1;
		console.log(hasil); // dibaca setelah 6 detik
	} catch (error) {
		console.log(error);
	}
};

doAPromise();
console.log('hi');
