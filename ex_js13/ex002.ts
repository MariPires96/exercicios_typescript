/* Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado. 
Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia. */

import { Stack } from './Stack';
import readline from 'readline-sync'; 

const bookStack = new Stack<string>(); 
let option: number;

function runMenu() {
    do {
        console.log("\nENTRADA");
        const input = readline.question("Digite uma opção: ");
        option = parseInt(input);

        console.log("SAÍDA");
        switch (option) {
            case 1:
                const bookName = readline.question("Digite o nome: ");
                bookStack.push(bookName);
                
                console.log("Pilha:");
                const booksAfterPush = bookStack.getStackData();
                for (let i = 0; i < booksAfterPush.length; i++) {
                    console.log(`O ${booksAfterPush[i]}`);
                }
                console.log("Livro adicionado!");
                break;

            case 2:
                console.log("Lista de Livros na Pilha:");
                if (bookStack.isEmpty()) {
                    console.log("A Pilha está vazia!");
                } else {
                    const booksToList = bookStack.getStackData(); 
                    
                    for (let i = 0; i < booksToList.length; i++) {
                        console.log(`O ${booksToList[i]}`);
                    }
                }
                break;

            case 3:
                if (bookStack.isEmpty()) {
                    console.log("A Pilha está vazia!"); 
                } else {
                    bookStack.pop();
                    
                    console.log("Pilha:");
                    const booksAfterPop = bookStack.getStackData();
                     
                    for (let i = 0; i < booksAfterPop.length; i++) {
                         console.log(`O ${booksAfterPop[i]}`);
                     }
                    
                    console.log("Um Livro foi retirado da pilha!");
                }
                break;

            case 0:
                console.log("Programa Finalizado!");
                break;

            default:
                console.log("Opção inválida!");
                break;
        }
    } while (option !== 0);
}

runMenu();