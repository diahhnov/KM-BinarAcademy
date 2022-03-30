const myNumber ="Diahhnov number's favorite and 071198 her birthday"
const hasilparseInt = parseInt(myNumber)
console.log (hasilparseInt)

const test = '10.4'
const hasilpurseFloat = parseFloat(test)
console.log(hasilpurseFloat)

const mathRound = Math.round(10.4)
console.log(mathRound)

const mathCeil = Math.ceil(10.4)
console.log(mathCeil)//

const mathFloar = Math.floor(8.999999999999)
console.log(mathFloar)//

const mathRandom = Math.random()
console.log(mathRandom)//

const stringToNumber = dataString =>{
    const changeString = Number(dataString)//+(unary operator)
        if(isNaN(changeString)){
            return 'ERROR: The params is not valid'
        }
    return changeString
}

console.log(stringToNumber('123'))
console.log(stringToNumber('986'))
console.log(stringToNumber('12gsdgfd3'))