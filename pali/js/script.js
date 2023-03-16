// **Palindroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

const userWord= prompt('inserisci una parola e ti dirò se è palindroma')
console.log(userWord);
// se la parola inserita è palindroma allora stampa ok
// altrimenti stampa no                                   per fare questo passaggio ho bisogno di una funzione che analizza la parola e mi dice se è true o false


const response = isPali(userWord)
console.log(response); 


/**
 * Description confronta i caratteri della parola in entrambi i versi
 * @param {any} word
 * @returns {any} vedere se è palindroma o meno
 */
function isPali (word){

    let straight ='';
    for (let i =0;i<word.length;i++){
        straight+=word.charAt(i)
    }


    let opposite ='';
    for (let i = word.length -1;i>=0;i--){
        opposite+=word.charAt(i)
    }

   
  let result;
  if(straight === opposite){
     result='la tua parola è palindroma'
  }else{
    result ='non è palindroma'
  }

  return result;
}