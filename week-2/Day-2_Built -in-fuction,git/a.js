// const myName = "Diah Novianti"
// const myFullName = "Diah?Novianti"

// const hasilSlice = myName.slice(3,10)
// console.log(hasilSlice)

// const dataMahasiswa = ['tara','budi','yatno']
// dataMahasiswa.splice(1,0,'yanto')
// console.log(dataMahasiswa.join('-'))

// let numbers =[1,2,3,4,5,6,7,8,9]
// const hasilMap = numbers.map(index =>{
//     return index * 2
// })
// console.log(hasilMap.join(' - '))

// for ( let i = 0; i < numbers.length; i++){
//     console.log("indeks ke-"+(i+1)+" adalah nomor "+numbers[i])
// }

// console.log(numbers)
// console.log(numbers.join())

/* membuat program sederhana dalam pengaturan duduk didalam angkot */

const penumpang = ['nopi',undefined,'jiah','rara'];
const tambahPenumpang = ((namaPenumpang, penumpang) => {
    //jika angkot kosong
    if(penumpang.length === 0){
        //tambah penumpang diawal array
        penumpang.push(namaPenumpang)
        //kembalikan isi array & keluar dari function
        return penumpang
    }else{//telusuri seluruh kursi dari awal
        for (let i = 0; i <= penumpang.length; i++){
            //jika ada kursi kosong
            if(penumpang[i] === undefined){
                //tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang
                //kembalikan isi array dan keluar dari function
                return penumpang
            //jika sudah ada nama yang sama
            }else if(penumpang[i] === namaPenumpang){
                //tampilkan pesan kesalahan
                console.log(namaPenumpang+ ' sudah ada di dalam angkot')
                //kembalikan isi array & kluar dari function
                return penumpang
        //jika seluruh kursi sudah terisi    
            }else if(i === penumpang.length+1 ){
                    //tambah penumpang di akhir array
                 return penumpang.push()
                    //kembalikan isi array &keluar dari function
        }
     }
   }
})
console.log (tambahPenumpang("galih",penumpang))
console.log (tambahPenumpang("joko",penumpang))
console.log (tambahPenumpang("nopi",penumpang))