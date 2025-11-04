// Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array, exiba na tela a posição deste número na Collection. Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!

import readlineSync = require("readline-sync");

const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);
let numero: number;

numero = readlineSync.questionInt('Digite um número inteiro: ',
    {limitMessage: 'Entrada inválida. Digite um número inteiro'});

const indiceEncontrado: number = numeros.indexOf(numero);


if (indiceEncontrado !== -1) {
    console.log(`O número ${numero} foi encontrado no índice ${indiceEncontrado}`);
} else {
    console.log(`O número ${numero} não foi encontrado!`);
}


