// var tabuada = 7;

// for (var i = 0; i <= 10; i ++) {
//     console.log('Valor de ' + tabuada + ' x ' + i + ' = ' + tabuada * i)
// }

// for (var i = 0; i < 100; i ++) {
//     console.log(i);
//     if (numeroSorteado === i) {
//         console.log('Seu número foi encontrado');
//         break;
//     }
// }

var achou = false;

var numeroSorteado = 10;
var possivelValor = 0;

while (!achou) {
    possivelValor += 1;
    if (numeroSorteado === possivelValor) {
        achou = true
    } else {
        console.log('Possivel valor não corresponde ao número sorteado ' + possivelValor);
    }
}