
// eventos
function onSomar() {
    var val1 = getValor1Inteiro()
    var val2 = getValor2Inteiro()
    
    var resultado = soma(val1, val2);
    
    apresentaResultado(resultado);
}
function soma(val1, val2) {
    return val1 + val2;
}


function onSubtrair() {
    var val1 = getValor1Inteiro()
    var val2 = getValor2Inteiro()

    var resultado = Subtrair(val1, val2);

    apresentaResultado(resultado);

}
    
 function Subtrair(val1, val2) {
     return val1 - val2
 }

 function onDividir() {
    var val1 = getValor1Inteiro()
    var val2 = getValor2Inteiro()

     var resultado = dividir(val1, val2);

     apresentaResultado(resultado);
 }
// divisao
function dividir(val1, val2) {
    if (val2 > 0) {
        return val1 / val2
    } else {
        return 0;
    }
}

function onMultiplicar() {
    var val1 = getValor1Inteiro()
    var val2 = getValor2Inteiro()

    var resultado = multiplacao(val1, val2)

    apresentaResultado(resultado)
    
}
// multiplicação
function multiplacao(val1, val2) {
    return val1 * val2;
}


function apresentaResultado(resultado) {
    document.getElementById("resultado").innerHTML = resultado;
}

function getValor1Inteiro() {
    return parseInt(document.getElementById('val1').value)
}
function getValor2Inteiro() {
    return parseInt(document.getElementById('val2').value)
}