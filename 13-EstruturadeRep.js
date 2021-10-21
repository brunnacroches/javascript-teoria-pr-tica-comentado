//_________________________________________//
          // LAÇO - LOOP  - FOR
       // repedindo várias vezes       //
//________________________________________//

// no JS nos temos 5 loops :
// 1.For
//2. While
//3. Do..while
//4. For..in
//5. For..of


                // For     //
//________________________________________//

for (let i = 1; i <= 5; i++) {
  // criar um váriavel "i", de índice que serve de contador (let i = 0)
  
  // além disso nós vamos colocar a condição que vai ficar rodando (1 < 5) até que i seja menor que 5
  
  //finalmente nós vamos colocar uma expressao de incremento, ou seja o que vai acontecer depois que o loop finalizar (i++)
  
  
  //vai imprimir no console  5 vezes
  console.log('Estou aprendendo');
  }
  
  
  //       // PARA IMPRIMIR SÓ OS VALORES ÍMPARES //
  // for( let i = 0; i <= 5; i++) {
  //   if(i % 2 !== 0) // % > se o restante da divisão do primeiro valor pelo segundo for diferente de zero (! == 0 ) então nos vamos imprimir "i" / ou seja quantas vezes o 2 vai em 3.  
  //   console.log(i);
  // }
  
  
  //     // PARA IMPRIMIR SÓ OS VALORES ÍMPARES //
  //            // DE FORMA DECRESCENTE //
  //            // DO MAIOR PARA O MENOR//
  // for(let i= 5; i >= 1; i--) {
  //   if(1 %2 !== 0) {
  //     console.log(i);
  //   }
  // }
  
                          // While     //
  //________________________________________//
  
  // //
  
  // let i = 5;
  
  // while (i >= 1 ){ //while(condicao)
  //   if(i %2 !== 0){
  //     console.log(i);
  //   }
  //   i--;
  // }
  
              // CUIDADO //
  //   // LAÇO / DO.. WHILE // DIGITANDO SEM PARAR 
  // //
  // let i = 0;
  // do {
  //     console.log('digitando!');
  // }while(i < 10)
  
  // PARAR O LOOP INFINITO 
  
  let i = 0;
  do {
    console.log('digitando!', i);
    i++;
  } while (i < 10)
  
  // a grande diferença do DO.. WHILE para o WHILE é que ele sempre vai EXECUTAR NO MÍNIMO UMA VEZ e ele só vai vefificar a condição depois de já ter feito uma vez. Então ele verifica primeiro e executa depois. 
  
   // O WHILE: verifica primeiro e executa depois
   // O DO : executa primeiro uma vez e depois verifica
  
                     // For  .. in   //
  //________________________________________//
  
  // foram feitos específicamente para iterar sobre propriedade de objeto ou elementos de uma array
   
  const alunos = {
    nome: 'Joanatan', // nome: é uma chave - Jonatan : valor
    idade: 7
  };
  
  // key-value > chave e valor 
  for(let chave in alunos) {
    // para imprimir o nome da chave / propriedade
    console.log(chave);  // nome , idade
    // para imprimir o valor da propriedade que está dentro
    console.log(chave, alunos.nome); // acessar a propriedade
    //OU > outra forma de acessar a propriedade
    console.log(chave, alunos['nome']);
  }
  
                    //ARRAY CORES//
  
  const cores = ['Vermelho' , 'Azul' , 'Verde'];
  
  for (let indice in cores ) { // quando você acessa uma cor, todas as propriedades são acessadas pelo índice dela
  
    console.log(indice) // ele vai imprimir os numeros que corresponde aos índices dessa ARRAY
  
    console.log(indice, cores[indice]) // acessando as propriedades
  } 
  
                  // For  .. of   //
          //________________________________________//
  
  
  for (let cor of cores) {
    console.log(cor);
  }
  // caso você precisa iterar sobre os ítens
  
          //(Mini-Projeto 2) - Máximo Entre Dois Valores 
    // Escreva uma função que usa 2 números e retorna o maior entre eles
  
  let valorMaior= max(5,9);
  console.log(valorMaior);
  
  function max(numero1,numero2) { 
      if (numero1 > numero2) // comparar os 2 numeros
        return numero1;
      else return numero2;
  }
  
  // Simplificando o código deixando ele mais limpo
  function max(numero1,numero2) {
    return numero1>numero2 ? numero1 : numero2;
  }
  
  
  //Divisível por 3 => Fizz
  //Divisível por 5 => Buzz
  //Divisível por 3 e 15 => fizzBuzz
  const resultadox = fizzBuzz(10);
  console.log(resultadox);
  
  function fizzBuzz(entrada) { 
  }
  

  