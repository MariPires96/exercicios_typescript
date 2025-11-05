/* Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente. */

import readlineSync = require("readline-sync");

const cores: string[] = [];
const numeroDeCores = 5;

console.log('----- ENTRADA DE DADOS -----');
for (let i = 0; i <numeroDeCores; i++) {

    const corLida: string = readlineSync.question(`Digite a cor #${i + 1} de 5: `);
    cores.push(corLida);
}

console.log('\n----- Listar todas as cores: -----');

for (const cor of cores) {
    console.log(cor);
}

const coresOrdenadas: string[] = [...cores];

coresOrdenadas.sort();

console.log('\n----- Ordenar as cores: -----');
for (const cor of coresOrdenadas) {
    console.log(cor);
}

