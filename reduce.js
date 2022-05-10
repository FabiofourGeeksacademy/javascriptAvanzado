let arr = [ "hola", "como", "estas","hoy", "es", "un","gran","dia"];

let string = arr.reduce((e, acc="", index )=>{
    acc+=" "+ e
    console.log(index)
    return acc
})
console.log(string)
console.log(typeof string)

let arrnum = [ 123,4324,123123,5123123,4123,123];
let salida= arrnum.reduce((e, acc="", index )=>{
    acc+= e
    console.log(index)
    return acc
})

console.log(salida)