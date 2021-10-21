//__________________________________//
    //**** 9 - OPERADORES ***** //
//__________________________________//
//__________________________________//
  // - OPERADORES DE ARITIMÉTICOS //
        // ++ / -- 
//__________________________________//
// é com ele que nós vamos criar a lógica, são eles:

            //Operadores Aritiméticos (matemáticos)
            //Operadores de Atribuição
            //Operadores de Igualdade
            //Operadores Tenários
            //Operadores de Comparação
            //Operadores Lógicos
            //Operadores Bitwise


            //Operadores Aritiméticos (matemáticos)
// + , - , * , / , **
let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log( 5 ** 5);

// ++ --

let passaro = 18;

//resultado aparece DEPOIS (DEPOIS++)
console.log(passaro++);
console.log(passaro);

//resultado aparece ANTES (++ANTES)
let gato = 18;

console.log(++gato);
console.log(gato);

// resultado --
// resultado aparece DEPOIS (DEPOIS--)
    // ele só vai fazer a operação depois de ter atribuído o valor
let formigas = 18;

console.log(formigas--); // 18
console.log(formigas); // 17

// resultado aparece DEPOIS (--ANTES)

let baleia = 18;

console.log(--baleia); // 17
console.log(baleia); // 17
//__________________________________//
 //   - OPERADORES DE ATRIBUIÇÃO //

//      OPERADORES DE IGUALDADE //
//             += / -=
//__________________________________//
// abaixo nos temos um valor a direita(100) sendo passado
//para a variável que está a esquerda(valorTecladoGamer)
//através do operador = 

// = é um atribuidor de atribuição


let valorTecladoGamer = 100;
               
                  // +=
// substitui a expressão: 
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer; ficando como no valor abaixo 
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer); // = 200

                  // -=

 let valorTeclado = 100;

// substitui a expressão: 
// valorTecladoGamers = valorTecladoGamers + valorTecladoGamer; ficando como no valor abaixo 
valorTeclado -= valorTeclado;
console.log(valorTeclado); // = 0

//__________________________________//
    // - OPERADORES DE IGUALDADE //
              // == / === / 
//__________________________________//


//Igualdade estrita  <<< === >>> além de comparar o valores ele está comparando o TIPO 
// O + RECOMENDADO //

console.log(1 === 1); // true
console.log('1' === 1); // false


//Igualdade solta  <<< == >>> ele só compara o TIPO e ignora o VALORES 
console.log(1 == 1); // true 

//e caso os tipos seja diferente ele vai converter para que os tipos fiquem iguais/ ex: 
console.log('1' == 1); // true ( ele ignora o tipo "string" e vai comparar apenas o valor "1" )


//__________________________________//
    // - OPERADORES DE TERNÁRIO //
              // ? / : / 
//__________________________________//

// Tem um cliente, se ele tiver mais de 100 pontos ele vai ser do tipo premium, caro contrário ele vai ser comum:

let pontos = 100;
//se for maior que 100 ele é premium senão ele é comum//
let tipo = pontos > 100 ?  'premium ': 'comum';
console.log(tipo);


//__________________________________//
      // - OPERADORES LÓGICO //
 //    &&(e) - ||(ou) - (!) NOT    //
//__________________________________//

// eles são usados para tomar decisões baseadas em condições múltiplas
 //       &&(e) ||(ou) / (!) NOT    //

//      - OPERADOR LÓGICO -   &&(e) //
// ele retorna TRUE se os dois operandos forem TRUE

console.log(true && true); // true
console.log(false && true); // false
console.log(false && false); // false

// exemplo abaixo

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar); //true

// exemplo abaixo 2

let maiorDeIdadx = false;
let possuiCarteiraDeTrabalhx = true;
let podeAplicax = maiorDeIdadx && possuiCarteiraDeTrabalhx;

console.log(podeAplicax); //false


// - OPERADOR LÓGICO- ||(OU)

  // vai retornar true se um dos operandos for true //

let maiorDe18 = false;
let possuiCLT = true;
let podeAp = maiorDe18 || possuiCLT;

console.log(podeAp); //true


  // vai retornar true se um dos operandos for true

  let maiorDe19 = false;
  let possuiCLTs = false;
  let podeApp = maiorDe19 || possuiCLTs;
  
  console.log('pode aplicar:', podeApp); //false

// pq pelo menos um dos operadores precisa ser TRUE

// - OPERADOR LÓGICO- NOT - ! (não)

let candidatoRecusado = !podeAplicar; // não pode aplicar

console.log('Candidato Recusado:', candidatoRecusado); // falso > não foi recusado 

//______________________________________//
// agora ele é recusado : 
let candidatoRecusadx = !podeAplicax; // não pode aplicar

console.log(candidatoRecusadx); // true > não foi recusado 


//__________________________________//
    // - COMPARAÇÕES NÃO BOOLEANAS //
 //    //
//__________________________________//

          //FALSY
// falsy são todos os valores que são:
  // undefined
  //  null  
  // 0
  // false
  // ''
  // NaN - not a number ( cal mat que resultam em valores inválidos)

      //TRUTHY
  let corPersonalizada = 'Vermelho';
  let corPadrao = 'Azul'; 
  let corPerfil = corPersonalizada || corPadrao;

  console.log(corPerfil);
