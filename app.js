// idades = [30, 35, 28]
// nomes = ["Ana", "Juliana", "Rafaela"]
// faculdade = [false, true, true]

// funcionarios = [nomes,idades,faculdade]

//function eMaiorQue10(value){
//      return value >= 10; 
//  }

//var filtrado = numeros.filter(eMaiorQue10);
// filtrado é [12, 130, 44]

//console.log(filtrado)

const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        media += notasGerais[i][j] / notasGerais[i].length;
    }
}

media = media / notasGerais.length

console.log(media)

function teste() {
    return 10
}
let TexteDeQuebraLinha = "Oi, tudo bem? Eu sou Rafaela, esse PalavrasTexto é longo mesmo para podermos testar a quebra de linha"

array = []
array.push(1)
console.log(array)

let PalavrasTexto = ["oi", "ok"]

for (let i = 0; i < PalavrasTexto.length; i++) {
    const element = PalavrasTexto[i];
    
}
