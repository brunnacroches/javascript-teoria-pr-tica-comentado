//_________________________________________//
               //12- SWITCH CASE// 
              // swith, case, break    //
 //                   1:10t         //
//________________________________________//

let permissao; // usuário comum, usário genrete, usuário diretor
permissao = 'comum'

//para que possamos fazer essa comparação você precisa definir um SWITCH

switch(permissao) { // a "variável" vai ativar essa condição
  case 'comum': // usando o "case" nos vamos tratar os diversos cenários
  console.log('usário comum');
  break; // para que ele não continue lendo e comparando as outras funções pq ele já encontrou. não queremos que ele continue


  //agora vamos copiar e colar só mudar a condição de comparação
  case 'gerente': 
  console.log('usuário gerente');
  break;

  case 'diretor': 
  console.log('usuário diretor');
  break;

  default: 
  console.log('Usuário não reconhecido');
}
 
