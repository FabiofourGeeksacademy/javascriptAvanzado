let listaPersona = [
{Nombre:"fabio"},
{Nombre:"Lys"},
{Nombre:"Bryan"},
{Nombre:"Angelica"},
{Nombre:"Grys"},
]

let numeroPersona = listaPersona.find((e)=>{
    if(e.Nombre === "Bryan"){
        return e
    }
})

console.log(numeroPersona)