var number = window.prompt('Digite um número')

function fatorial(number){
  var result = number;

  for (var i = 1; i < number; i++) {
      result *= i;
  }
  	return result;
}

alert('O fatorial de '+ number+' é: '+fatorial(number));
