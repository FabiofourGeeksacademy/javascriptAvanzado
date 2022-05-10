//definicion de la prototipo
function Persona(nombre, profesion){
    //atributos
    this.nombre = nombre;
    this.profesion = profesion;

//    this.saludar= function (){
//        console.log("hola")
//    }
}

//creacion de metodo
Persona.prototype.saludar=function (){
    console.log("hola")
}
//creacion de instancia
let Fabio = new Persona("fabio", "Profesor")
Fabio.nombre
Fabio.saludar()