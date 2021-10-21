

// ====> String do Tipo Primitivo <=====

const mensagem = 'minha primeira mensagem';

//Formas de saber o tipo da string
  // abrir  o browser > inspecionar o elemento > console > 
  //digite : typeof mensagem :
  // imprime : 'string'

  //Segunda forma:
      // console.log(typeof mensagem);



//====> String do Tipo Objeto <=====
const outraMensagem = new String('bom dia');



// INSPECIONAR ELEMENTO NO BROWSER > CONSOLE
            //COMANDOS//
//        ==> typeof  <==
//====> PARA SABER O TIPO DE UM OPERANDO 
//   => typeof : o operador  retorna uma string indicando o tipo de um operando.
// typeof ___ +(nome da variável )
// COMANDO : outraMensagem
// RESPOSTA : 'object'

          //COMANDOS//
//        ==> .  <==
//====> PARA SABER O TAMANHO DA STRING
// (nome da variável ) + " . " 
// ele vai encapsular o tipo primitivo e vai permitir que use como objeto 
// COMANDO : outraMensagem.length
// RESPOSTA : 7

          //COMANDOS//
//        ==> [2]  <==
//====> PARA SABER A LETRA DA STRING
// COMANDO: outraMensagem[2]
// RESPOSTA: 'm'

          //COMANDOS//
//        ==> includes  <==
//====>PARA PESQUISAR ALGO DENTRO DE UMA STRING
// COMANDO: mensagem.includes('primeira')
//RESPOSTA: true

          //COMANDOS//
//        ==> includes  <==
//====> PARA PESQUISAR ALGO DENTRO DE UMA STRING
//COMANDO:  mensagem.includes('vermelho')
// RESPOSTA: false

          //COMANDOS//
//        ==> starsWith  <==
//====> PARA PESQUISAR ALGO INICIA NA UMA STRING
// COMANDO: mensagem.startsWith('verde')
// RESPOSTA: false

          //COMANDOS//
//        ==> endsWith  <==
//====> PARA PESQUISAR ALGO TERMINA NA UMA STRING
// COMANDO: mensagem.endsWith('mensagem')
// RESPOSTA: true

          //COMANDOS//
//        ==> indexOf  <==
//====> PARA SABER QUAL É O ÍNDICE DE ALGO DENTRO DE UMA STRING
// COMANDO: mensagem.indexOf('primeira')
//RESPOSTA: 6

          //COMANDOS//
//        ==> replace  <==
//====> PARA SUBSTITUIR O PRIMEIRO VALOR 'minha' para 'sua' STRING
// COMANDO: mensagem.replace('minha','sua')
// RESPOSTA:'sua primeira mensagem'

          //COMANDOS//
//        ==> trim  <==
//====> PARA TIRAR OS ESPAÇOS DA STRING
// COMANDO: mensagem.trim
// RESPOSTA: ƒ trim() { [native code] }

          //COMANDOS//
//        ==> split  <==
//====> PARA SEPARAR A STRING
// COMANDO: mensagem.split( ' ')
//RESPOSTA:
//(3) ['minha', 'primeira', 'mensagem']
// 0: "minha"
// 1: "primeira"
// 2: "mensagem"
// length: 3
// [[Prototype]]: Array(0)







// APOIO : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String


///https://ricardo-reis.medium.com/tipos-de-dados-javascript-a1f6f498a7d4