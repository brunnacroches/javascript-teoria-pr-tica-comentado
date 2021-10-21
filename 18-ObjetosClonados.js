//02:43:31 - Clonando Objetos

// como criar cópia de objetos que já foi criada anteriormente

const phone = {
  marcaCelular : 'ASUS',
  tamanhoTela: {
      vertical: 155,
      horizontal: 75
  },
  ligar: function () {
      console.log("Fazendo Ligação...");
  }
}


// como criar cópia de objetos que já foi criada anteriormente

const novoObjeto = Object.assign({
    bateria: 5000  // add um novo 
},phone); 
// vai pegar o primeiro parametro, para onde ele e para onde ele vai copiar a propriedade método. 
// ele vai ser armazenado em "const novoObjeto"
console.log(novoObjeto);



// outra forma 
 const objeto2 = { ...celular };
 console.log(objeto2);