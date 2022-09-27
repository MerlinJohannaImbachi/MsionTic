//funcion tiene parametros//
//funcion declarativa 
function suma (num1, num2)
{
    resultado = num1 + num2
    console.log(resultado)
}
suma(10.5)

// forma 2 -funcion anonima + expresion
var sumaOtraForma = function(num1, num2) {
    var resultado = num1 + num2
    return resultado 
}
sumaOtraForma(15, 5) 