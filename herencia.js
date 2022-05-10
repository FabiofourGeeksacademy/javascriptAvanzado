//definicion de la clase
class Persona{
    constructor(nombre, profesion){
        this.nombre=nombre;
        this.profesion =profesion;
    }

    saludar(){
        console.log("hola")
    }
}
//definicion de la clase con herencia de una clase padre
class Profesor extends Persona{
    DictarCLase(){
        console.log("En esta clase veremos conseptos avanzados de javascrit")
    }
}
//creacion de instancia
let Fabio = new Profesor("fabio", "profesor")
Fabio.nombre;
Fabio.saludar();
Fabio.DictarCLase();