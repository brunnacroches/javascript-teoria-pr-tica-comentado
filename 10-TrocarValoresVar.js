//__________________________________//
    //10 - TROCAR VALORES DE UMA VARIÁVEL //
 //    //
//__________________________________//

let a = 'vermelho';
let b = 'azul';

console.log(a);
console.log(b);

            //RESOLVER A TROCA DE VALORES
// 1 : declarar uma terceira variável para que eu consiga fazer uma troca guardando o valor na terceira vairável para que ela não seja modificada.
let c = a; 

a = b;
b = c;

console.log(a);
console.log(b);
                  //INVERTIDO