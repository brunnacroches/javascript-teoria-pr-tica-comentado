//02:28:43 - Factory Functions - Factory Functions ( Função Fábrica)


// ===========================> <==============================
//Factory Functions - Factory Functions ( Função Fábrica)

//o método factory fucntion ele vai encapsular essa informação dentro de um método que cria o objeto

function criarCelular(marcaCelular, tamanhoTela,capacidadeBateria){
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar() {
        console.log("Fazendo ligação...")
    }
  }
}

const celular1 = criarCelular('Zenfone',5.5,5000);
console.log(celular1);


// EX ANTERIOR
// function criaCelular(){
//     const celular = {
//       marcaCelular : 'ASUS',
//       tamanhoTela : {
//           vertical: 155,
//           horizontal: 75,
//       },
//       capacidadeBateria : 5000,
//       ligar: function() {
//             console.log("Fazendo ligação...")
//       }
// }
// return celular;