var Quantidade_Dias = document.getElementById('dias')
var Quantidade_Meses = document.getElementById('meses')
var Quantidade_Anos = document.getElementById('anos')
var data = new Date()

function verifica(Quantidade_Dias, Quantidade_Meses, Quantidade_Anos) {
  var dia = String(data.getDate()).padStart(2, '0')
  var mes = String(data.getMonth() + 1).padStart(2, '0')
  var ano = data.getFullYear()

  var DiaR = Math.abs(Quantidade_Dias - dia)
  var MesR = Math.abs(Quantidade_Meses - mes)
  var AnoR = Math.abs(Quantidade_Anos - ano)
  alert(AnoR.toFixed() + " Anos " + MesR.toFixed() + " Meses " + DiaR.toFixed() + " Dias");
}
