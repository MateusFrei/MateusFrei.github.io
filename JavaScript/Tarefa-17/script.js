var Quantidade_Dias = 10
var Quantidade_Meses = 8
var Quantidade_Anos = 1990
var data = new Date()

var dia = String(data.getDate()).padStart(2, '0')
var mes = String(data.getMonth() + 1).padStart(2, '0')
var ano = data.getFullYear()

var DiaR = Math.abs(Quantidade_Dias - dia)
var MesR = Math.abs(Quantidade_Meses - mes)
var AnoR = Math.abs(Quantidade_Anos - ano)


alert(AnoR.toFixed() + " Anos " + MesR.toFixed() + " Meses " + DiaR.toFixed() + " Dias");
