// QUI-GON JINN está encargado de revisar un arreglo
// de 20 sables de luz y contabilizar la cantidad de sables que
// tienen energías menores a 20 Joules.

// Nota: el formato de cada sable es:
// cable={
// color:v erde,
//  energía: 50 ,
//  portafor: Obi Wan
// }

let sables = [
    {color:"verde",energia:50,portador:"obi Wan"},
    {color:"amarillo",energia:10,portador:"pepita"},
    {color:"azul",energia:17,portador:"Simon"},
    {color:"verde",energia:30,portador:"Mateo"},
    {color:"verde",energia:19,portador:"Sebastian"},
    {color:"verde",energia:20,portador:"Mariano"},
    {color:"verde",energia:11,portador:"simona"},
    {color:"verde",energia:13,portador:"caramela"},
    {color:"verde",energia:25,portador:"paulina"},
    {color:"verde",energia:50,portador:"harry"},
    {color:"verde",energia:60,portador:"Ron"},
    {color:"verde",energia:70,portador:"Hermione"},
    {color:"verde",energia:1,portador:"Ginny"},
    {color:"verde",energia:2,portador:"Molly"},
    {color:"verde",energia:5,portador:"Arthur"},
    {color:"verde",energia:22,portador:"Fred"},
    {color:"verde",energia:43,portador:"Jorge"},
    {color:"verde",energia:90,portador:"Lucius"},
    {color:"verde",energia:21,portador:"Draco"},
    {color:"verde",energia:9,portador:"Narcissa"},
    {color:"verde",energia:50,portador:"severus"}

]

let filtrado=sables.filter(function(sable){

    return(sable.energia<=19)//condicion de filtrado

})//funcion tradicional,funciones anonimas

console.log(filtrado)
// let mostrar=usuarios.filter(function(usuario){

//     return(usuario.esPaisa==true && usuario.edad<=17)


// })