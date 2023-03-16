// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// scelte utente
const choose1 =prompt('pari o dispari?');
const choose2 =parseInt(prompt('adesso scegli un numero da 1 a 5'));
console.log(choose1,choose2,"scelte dell'utente");
// numero del computer
const computerNum =getRndInteger(1 , 5);
console.log(computerNum,'numero del computer');
 const Result = sum(choose2,computerNum)
    console.log('il numero è',Result);
// chi vince?
    if (choose1 === Result){
        console.log('bravo hai vinto');
    }else{
        console.log('vince il computer');
    }





// funzioni

/**
 * Description numero casuale computer
 * @param {any} min
 * @param {any} max
 * @returns {any} numero casuale da 1 a 5
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


  
  function sum(num1,num2){
    const result =num1+num2;
    let oddOrEven;
    if (result %2===0){
        oddOrEven= 'pari'

    }
    else{
        oddOrEven='dispari'
    }
    return oddOrEven;
  }