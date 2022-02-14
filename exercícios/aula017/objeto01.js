let amigo = {
    nome: 'José',
    peso: 89,
    sexo: 'M',
    engordar(p=0) {
        this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)