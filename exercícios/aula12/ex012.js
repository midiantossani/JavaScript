//var agora = new Date()
var hora = 12//agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 12 && hora >= 6) {
    console.log('BOM DIA!')
} else if (hora <= 18 && hora > 12) {
    console.log('BOA TARDE!')
} else if  (hora >= 1 && hora <= 5 ) {
    console.log('BOA MADRUGADA!')
} else   {
    console.log('BOA NOITE!')
}
   