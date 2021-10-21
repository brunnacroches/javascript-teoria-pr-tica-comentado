// 02:55:59 - Template Literal


//Primeiro : como nos criamos uma mensagem em string no JavaScript
const note = 'Oi, essa é a minha primeira mensagem'; 
console.log(note);


// para dar uma quebra de linha => \n <==
const quebraDeLinha = 'Oi essa é a minha\n primeira mensagem'; 
console.log(quebraDeLinha); // fez a quebra de linha no console 

//
const teste = 
'Oi essa é a minha\n' + 
'\'primeira\' mensagem'; 
console.log(teste); //  Oi essa é a minha
                    // 'primeira' mensagem


                    //====> 
//Literais do JS
    //Object {}  ====> instanciamos 
    //Boolean true, false  ====>
    //String '', " "  ====>
    //Template `` ===> 
const outra = `Oi isso é a minha 'primeira' mensagem`;
//"Oi isso é a minha 'primeira' mensagem"

//Quando isso é útil?
const email = 
`Olá Fulano

Obrigado por se inscrever no canal!

Para acompanhar os vídeos não se esqueça de ativar o sino.

Obrigado,
Jhonatan. `;
console.log(email);

//Sustituir Palavra 
const name = 'Rafael';

const gmail = 
`Olá ${name} ${2+2} 

Obrigado por se inscrever no canal!

Para acompanhar os vídeos não se esqueça de ativar o sino.

Obrigado,
Jhonatan. `;

console.log(gmail);