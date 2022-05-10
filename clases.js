//definicion de la clase
class Persona{
    constructor(nombre, profesion){
        this.__nombre=nombre;
        this.__profesion =profesion;
    }
    getterNombre(){
        return this.nombre
    }

    setterNombre(nombreRemplazo){
        this.nombre = nombreRemplazo
        return this.nombre
    }

    saludar(){
        console.log("hola")
    }
}

//creacion de instancia
let Fabio = new Persona("fabio", "profesor")

console.log(Fabio.nombre)
Fabio.saludar()
console.log(Fabio.getterNombre()) 
console.log(Fabio.setterNombre('Andres')) 
console.log(Fabio.getterNombre())
delete Fabio.nombre
console.log(Fabio.nombre)

let objecto ={
    clave: "valor"
}
console.log(Fabio)
console.log(objecto)
console.log(Object.keys(objecto))
console.log(Object.hasOwnProperty.call(objecto, "clave"))
console.log(Object.hasOwnProperty.call(objecto, "algo"))

if(Object.hasOwnProperty.call(objecto, "clave")){
    objecto["clave"] = "asdasda"
}

console.log(Object.getOwnPropertyNames(Fabio))