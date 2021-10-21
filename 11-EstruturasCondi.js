
//_________________________________________//
        //  11- //ESTRUTURAS CONDICIONAIS// 
            // -IF.. ELSE  //
 //                   1:10t         //
//________________________________________//

//IF .. ELSE


//Se a hora estiver entre as 06:00 até 12:00 : Bom dia!
//Se estiver enter 12:00 até 18:00 : Boa tarde!
//Caso contrário : Boa noite!

//declarar hora
let hora = 10;

if (hora > 06 && hora < 12) { //condição
  //código a ser executado
  console.log("Bom dia");
}
else if (hora > 12 && hora < 18) { //outraCondicao
  //código a ser executado
  console.log("Boa tarde");
}

else {
  //código a ser executado
  console.log("Boa noite");
}

