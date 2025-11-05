/* Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila. */

import { Queue } from "./Queue";
import readline from 'readline-sync'; 

const filaDeClientes = new Queue<string>();
let opcao: number = -1;

function exibirMenu(): void {
    console.log('\n***************************************************');
    console.log('1 - Adicionar Cliente na Fila');
    console.log('2 - Listar todos os Clientes');
    console.log('3 - Retirar Cliente da Fila');
    console.log('0 - Sair');
    console.log('*************************************************** \n');
}

while (opcao !== 0) {

    exibirMenu();
    
    opcao = readline.questionInt('Digite uma opção: ');

    switch (opcao) {
        case 1:
            const nome = readline.question('Digite o nome: ');
            filaDeClientes.enqueue(nome);
            
            console.log('\nFila:');
            filaDeClientes.getList().forEach(cliente => console.log(cliente));
            
            console.log('\nCliente Adicionado!');
            break;
            
        case 2:
            const lista = filaDeClientes.getList(); 
            
            if (filaDeClientes.isEmpty()) {
                console.log('\nA Fila está vazia!');
            } else {
                console.log('\nLista de Clientes na Fila:');
                
                lista.forEach((cliente) => {
                    console.log(cliente); 
                });
            }
            break;
            
        case 3:
            const clienteChamado = filaDeClientes.dequeue();

            if (clienteChamado === undefined) { 
                console.log('\nA Fila está vazia!'); 
            } else {
                console.log('\nFila:');
                
                const listaRestante = filaDeClientes.getList();
                listaRestante.forEach((cliente) => {
                    console.log(cliente);
                });
            }
            break;
            
        case 0:
            console.log('Programa finalizado. Até logo!');
            break;
            
        default:
            console.log('\nOpção inválida. Por favor, escolha 0, 1, 2 ou 3.');
    }
}