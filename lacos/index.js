// Exercícios de interpretação de código 

// Questão 1
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

/*
 O que o código abaixo está fazendo? Qual o resultado impresso no console?
r: O código está contando a partir do 0 até 5.
será impresso o valor da variável + o indice
*/

// Questão 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
/*
a) Serão impressos todos os números maiores que 18
b) pode-se mudar a condição do if para (numero = 18)
*/

// Questão 3

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

/*
Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
*
**
***
****
*/

// Exercicios de escrita

/*
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array      
    
    c) Por fim, imprima o array com os nomes dos bichinhos no console
*/

confirm("Insira quantos animais você tem com números (0, 1, 2...)")
let petsUser = prompt("Quantos animais de extimação você possui?")
 
for (let i=0; i < petsUser; i++){
    if(petsUser > 0){
        let nome = prompt("Qual o nome do seu pet?")
        let listaPet = []
        listaPet.push(nome)
        console.log(listaPet)
    } else if (petsUser === '0') {
        console.log("Que pena! Você pode adotar um pet!")
    }
}
