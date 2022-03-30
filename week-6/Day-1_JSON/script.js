console.log('JSON');
//JSON
/* json: javascript object notation 

my sql: hanya tau string, bolean, null*/

// const obj = {
// 	name: nop,
// };
// console.log(JSON.stringify(obj)); //mengubah object ke string. untuk dioper ke database

// const stringobj = JSON.stringify(obj);
// console.log(stringobj);// sama halnya console.log diatas

// console.log(JSON.parse(stringobj));//mengubah string ke obj

// //bukan JSON yg falid
// console.log("{name:'nop'}");
// console.log(JSON.stringify("{name:'nop'}"));

/* kriteria JSON
1. key nya dibukus oleh string ""
2. tidak da comment/ tidak bisa memberikan stat komentar didalam json 
3. bukan sekedar request*/

//authorization
/* flow{lengkap} yang digunakan agar user dapat mengakses aplikasi secara penuh.
memasuki aplikasi:
register - verifikasi email - login */

//authentication
/* proses dimana suatu user di berikan akses atau tidak */

//authenticated (return dari authentication)
/* user yang sudah authentication */

//fetch
/* suatu http request yang digunakan untuk menghubungkan suatu aplikasi ke API 
contoh http request
XMLHTTPRequest (old)
fetch 
axios (menggunakan triparty)
*/

// How to use fetch
/* const getLisMovie = async () =>{
    const obj ={
        name: "nop",
        age: 16
    }
    const res = await fetch("url: {url yang terdaftar token}")({
        method:"GET",
        body: JSON.stringify(obj)
        headers : {Authorization: "Barear {token}",},
    });

const results = await res.JSON()
console.log(results)
}

getListMovie()

kenapa ftch ga bisa return: karena kembalinya promise dan harus membuat await*/
