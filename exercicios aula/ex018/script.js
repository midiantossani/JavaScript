function carregar() {
var img = document.getElementById('imagem')
var msg = document.getElementById('msg')
var data = new Date()
//var hora = data.getHours()
var hora = 19
msg.innerHTML = `Agora são ${hora} horas`
if(hora > 0 && hora < 12) {
    img.src = 'manha.png'
    document.body.style.background = '#d5c5cf'
} else if (hora >=12 && hora <= 18) {
    img.src = 'tarde.png'
    document.body.style.background = '#c48081'
} else {
    img.src = 'noite.png'
    document.body.style.background = '#394a4c'
    }
}
