// 03:36:15 - Introdução a Arrays

/*
Add novos Elementos
Encontrar Elementos
Remover Elementos
Dividir Elementos
Dividir Elementos
Combinar Arrays
*/


// ADICIONAR ELEMENTOS ARRAY

const numeros = [1,2,3];
// numeros ele é uma array porém um array também é um objeto que tem vários métodos e também e propriedades ( numeros. <==)

// ====> Adicionando Métodos <====
        //==> início do array
numeros.unshift(0); //
console.log(numeros);
/* 
O que ele faz? Ele empurra todos os valores para a direita e insere o valor que você escolheu no início
(4) [0, 1, 2, 3]
0: 0
1: 1
2: 2
3: 3
length: 4
[[Prototype]]: Array(0)
 */

       //==> meio do array
numeros.splice(1,0,'a')
console.log(numeros);
/*
O que ele faz: vai escolher a posição que ele vai iniciar
(5) [0, 'a', 1, 2, 3]
0: 0
1: "a"
2: 1
3: 2
4: 3
length: 5
[[Prototype]]: Array(0)
*/
       //==> fim do array
numeros.push(5);
console.log(numeros);
/* (6) [0, 'a', 1, 2, 3, 5]
0: 0
1: "a"
2: 1
3: 2
4: 3
5: 5
length: 6
[[Prototype]]: Array(0) 
*/