/* La luna de Endor pierde temperatura día a día, para ello
hay que hacer un monitoreo constante, Cree una función de flecha que
permita calcular la temperatura media de la luna a partir de la
temperatura máxima y mínima de cada día  */
let promedio= (temperatura)=> {
    let maxima = Math.max(...temperatura)
    let min = Math.min(...temperatura)

    let promedio = (maxima + min) /2

    console.log("la temperatura promedio de la luna de Endor es de: " + promedio + " grados")
}


promedio(temperatura=[35,50])


