var number = window.prompt('Digite um número ')

function fatorial(number){
  var aux = number;

  for (var i = 1; i < number; i++) {
      aux *= i;
  }
  	return aux;
}

alert('O fatorial de: '+ number +' é de : '+fatorial(number));
