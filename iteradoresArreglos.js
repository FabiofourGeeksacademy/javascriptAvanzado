let arr = [1,2,3,4,5,6,7,8,9]

let  a= arr.forEach( (elemento) =>  console.log(elemento))
console.log("a ",a)

let arreglo = arr.map((elemento) =>  elemento*2 )
let arreglo2 = arr.map((elemento) => { 
    return elemento*2
})

console.log(arreglo)

let arr3=[]
for (const i of arr) {
    arr3.push(i*2)
}
console.log("arr3 ",arr3)

