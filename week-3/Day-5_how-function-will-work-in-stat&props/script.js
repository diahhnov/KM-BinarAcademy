const student = (data) => {
    console.log(data.nama);
}

student ({name: 'nopnop'})
//data nya bernilai object
student ('nopnop');
//undefined, karena nopnop bernilai string

const student2 = (props) => {
    console.log(props.name);
}
student2({name: 'nopnop'});
//props: bernilai abstrak. harus object dan harus memanggil dengan key
student2({firstname: 'noo', middlename: 'pii'})
//hasilnya undifined karena tidak ada keynya

const student3 = ({name, age}, names) => {
    console.log(name,age, names);
}
student3({name: 'nop', age: 22}, 'jiwaa');
//parameter objek dan string(names)

const student4 = (props) => {};
student4({name: 'nop', age: 22})
//equal atau sama aja
//<student4 ({name: 'nop', age: 22})/>