let usuarios =[
    {nombre:"Jhohana" ,edad:23, esPaisa:false},
    {nombre:"Manuela" ,edad:32, esPaisa:true},
    {nombre:"Erika" ,edad:22, esPaisa:true},
    {nombre:"Salome" ,edad:23, esPaisa:false},
    {nombre:"Juana" ,edad:36, esPaisa:true},
    {nombre:"Nora" ,edad:63, esPaisa:true},
    {nombre:"Zamara" ,edad:10, esPaisa:true},
    {nombre:"Monica" ,edad:30, esPaisa:true},
    {nombre:"Fernanda" ,edad:27, esPaisa:true},
    {nombre:"Maria" ,edad:50, esPaisa:false}

]

//filtrar el arreglo para tener solo los usuarios mayores de edad

/*let filtrado=usuarios.filter(function(usuario){

    return(usuario.edad>=18)//condicion de filtrado

})//funcion tradicional,funciones anonimas

console.log(filtrado)*/
// let mostrar=usuarios.filter(function(usuario){

//     return(usuario.esPaisa==true && usuario.edad<=17)


// })

// console.log(mostrar)

// let datosMapeados=usuarios.map(function(usuario){

//     return(usuario.nombre=usuario.nombre+  "--cesde")
// })

// console.log(datosMapeados)
// console.log(usuarios)

let suma=0
usuarios.forEach(function(usuario){
    suma=suma+usuario.edad
    console.log(suma)
})

