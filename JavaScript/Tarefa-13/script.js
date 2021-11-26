var palavra = window.prompt('Digite uma palavra para saber se é palíndromo.')
var compara = palavra.split('').reverse().join('')


function palindromo(palavra){
   if(palavra !== compara){
     return 1;
   }
   return 0;
}

if (palindromo(palavra)==1) {
  alert('Não é palindromo')
}else {
  alert('É um palindromo')
}
