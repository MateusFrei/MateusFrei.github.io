let numero = window.prompt('Digite um número')

function oddeven(numero){
  if (numero % 2 == 0) {
    return 1;
  }
  return 0;
}
if (oddeven(numero) == 1) {
  alert('É um numero Par')
}else {
  alert('É um numero Impar')
}
