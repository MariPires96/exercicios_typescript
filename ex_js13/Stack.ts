interface stackInterface<Type> {
    push(dataItem: Type): void;
    pop(): Type | undefined;
    isEmpty(): boolean;
    count(): number;
    printStack(): void; // Mantido, mas não usado no Main
    peek(): Type | undefined;
    contains(dataItem: Type): boolean;
    clear(): void;
    getStackData(): Type[]; // Novo método para expor os dados
}

export class Stack<Type> implements stackInterface<Type> {
    private items: Array<Type> = []; // Renomeado StackData para items
    
    constructor() { }
    
    isEmpty(): boolean {
       return this.items.length <= 0;
    }
    
    push(dataItem: Type): void {
       this.items.push(dataItem);
    }
    
    pop(): Type | undefined {
       if (this.isEmpty()) {
          // Nota: O programa principal fará a checagem e a impressão da mensagem, mas mantive o console.log aqui
          // console.log("A fila está vazia"); 
          return undefined; // Retorna undefined para indicar que está vazio
       } else {
          return this.items.pop();
       }
    }
    
    count(): number {
       return this.items.length;
    }
    
    printStack(): void { // Não será usado no Main, mas mantido na classe
       for (let i = this.items.length - 1; i >= 0 ; i--) {
          console.log(this.items[i]);
       }
    }
    
    // Método implementado para ser usado no Main.ts
    getStackData(): Type[] {
        return this.items;
    }

    // ... Outros métodos (peek, contains, clear) mantidos ...
    peek(): Type | undefined {
        if (this.isEmpty()) {
            return undefined;
        } else {
            return this.items[this.items.length - 1];
        }
    }
    contains(dataItem: Type): boolean {
        return this.items.includes(dataItem);
    }
    clear(): void {
        this.items.length = 0;
    }
}