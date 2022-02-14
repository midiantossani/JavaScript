let valores = [8,1,7,4,9]
valores.sort()
console.log(valores.sort())
//console.log(valores) //vai mostrar os valores dentro do array
//console.log(valores[0]) // vai mostrar o valor que esta na posição 0 

//for(let pos = 0; pos < valores.length; pos++){
  //  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
//}

for (let pos in valores) { // forma mais simples que o de cima
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}