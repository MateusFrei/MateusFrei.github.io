function aluguel() {

  var retirada = new Date(document.getElementById('dataR').value)
  var entrega = new Date(document.getElementById('dataE').value)

  var cityR = document.getElementById('cidadeR')
  var cityE = document.getElementById('cidadeE')

  var tipo = document.getElementById('tipoCarro')
  var mili = entrega.getTime() - retirada.getTime()

  var days = mili/(1000*60*60*24)


  if (cityR.value != cityE.value) {
    var valor = 300 + parseInt(tipo.value)
     valor = valor * days
     alert(valor)
  }else {
    var final = parseInt(tipo.value) * days
      alert(final)
  }
}
