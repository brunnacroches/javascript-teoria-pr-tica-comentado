//03:03:41 - Date Lidando com datas


// TRABALHANDO COM DATAS
const data1 = new Date();
const date2 = new Date('March 06 2019 09:30');
const date3 = new Date(2019, 03, 06, 09,30);
// 0 = janeiro / 1 = fevereiro / 2 = março 

//Extrair método data
      // get => para extrair informações de um objeto
      //set => para alterar o valor /ano/semana/mes/dia

date3.setFullYear(2030);

          //Conversão de ojbeto data para string
//date2.toDateString
//ƒ toDateString() { [native code] }    

        //Ver qual informacao de usa ele usa > tempo local  > formato usado caso queira extrair as informações para o servidor
//date2.toTimeString
//ƒ toTimeString() { [native code] }

