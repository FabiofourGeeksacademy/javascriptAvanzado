let saludar = saludo => console.log(saludo);
saludar("hola mundo")

let saludarA = (saludo , persona) => console.log(saludo+" "+persona);
saludarA("hola","clase")

let saludarUnoAUno= (pesonas) => {
    for (const pesona of pesonas) {
        console.log("Hola ",pesona)
    }
}
saludarUnoAUno(["Matias","Lys","Angelica"])