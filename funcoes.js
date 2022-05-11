function soma(operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}

function olaGama(nome) {
    console.log('Olá Gama! ' + nome);
}

var resultadoSoma = soma(1, 2);
var resultadoNovoDaSoma = soma(10, 66);

console.log(resultadoSoma);
console.log(resultadoNovoDaSoma);

olaGama('JC');