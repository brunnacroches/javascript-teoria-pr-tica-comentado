// 02:34:53 - Constructor Functions


//         ======>  camelCase  <===== umDoisTresQuatro
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
  return {
      marcaCelular,
      tamanhoTela,
      capacidadeBateria,
      ligar() {
          console.log("Fazendo ligação...")
      }
  }
}

// Pascal Case - ======> UmDoisTresQuatro <=======

function Celular (marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular, // ==> this  <== > serve para poder referenciar aquele objeto (o objt atual que estou manipulando)
    this.tamanhotela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria
    this.ligar = function() {
        console.log("Fazendo Ligação...");
    }
}
// não tem o return 

const celular = new Celular('asus', 5.5, 5000);
// ===> new <=== nos estamos criando/instanciando um objeto passando todas as propriedades que estão definidas aqui dentro através dos parâmetro que foram definidos la em cima 
console.log(celular);

// =======>  A grande diferença do Constructor e Factory <========
// um você vai fazer a criação através do new, e o outro dentro da própria função

// eles fazem exatamente a mesma coisa