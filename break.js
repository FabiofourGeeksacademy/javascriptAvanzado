let a =[1,2,3,4,5,6,7]

for (let index = 0; index < a.length-1; index++) {
    if(a[index] ===4){
        continue
    }
    console.log(a[index])
}

console.log("terminamos")