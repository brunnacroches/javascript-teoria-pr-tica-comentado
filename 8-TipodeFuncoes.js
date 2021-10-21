
//__________________________________//
  //**** 8- TIPO DE FUNÇÕES ***** //
//__________________________________//

//Basicamente nós temos dois tipos de funções : a primeira > 
//função que realiza algo e não devolve nada e a outra que retorna algo 

//FUNÇÃO QUE REALIZA UMA TAREFA E NÃO DEVOLVE NADA
function dizerNome () {
  console.log('jhonatan')
}
dizerNome()
// eu não usei o retorno em nenhum momento (variável)

//OPERAÇÃO QUE FAZ UM CÁLCULO OU OPERAÇÃO E RETORNA ALGO

//return : eu estou devolvendo para que seja usada em algúm lugar o 
//resultado dessa função
function MultiplicarPorDois(valor){
return valor* 2;
}
console.log(MultiplicarPorDois(5));

// a grande diferença é que eu posso pegar o valor de MultiplicarPorDois 
//e colocar em uma variável 

let resultado = MultiplicarPorDois(5)

console.log(resultado);

