let arr = [2,3,4,5,6,7,8,9,7,5,3,1,434,32,4566,3]


let newArr = arr.filter((e)=>{
    if(e % 2 ===0){
        return e
    }
})
console.log(newArr)