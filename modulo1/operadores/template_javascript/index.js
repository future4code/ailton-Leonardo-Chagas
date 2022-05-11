const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//false
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
//false
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
//true
console.log("d. ", typeof resultado)
//boolean


let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
// nada será impresso no console porque a soma não poderá ser feita, já que os dados não foram fornecidos
const soma = primeiroNumero + segundoNumero

console.log(soma)
// uma forma de fazer o codigo funcionar seria:
/*
let primeiroNumero 
let segundoNumero 

primeiroNumero = Number(prompt("Digite um numero!"))
segundoNumero = Number(prompt("Digite outro numero!"))
Number(primeiroNumero)
Number(segundoNumero)
const soma = primeiroNumero + segundoNumero

console.log(soma)
*/

// Questão 1
let suaIdade = Number(prompt("Digite sua idade"))
let idadeAmigo = Number(prompt("Qual a idade do seu amigo(a)"))
let comparando = suaIdade > idadeAmigo
console.log("Sua idade é maior que do seu amigo?", comparando)
let diferenca = suaIdade - idadeAmigo
console.log("A diferença de idade é: ", diferenca)

//2- Faça um programa que:
let numeroPar = Number(prompt("Insira um número"))
let calculo = numeroPar % 2
console.log(calculo)
/* Sempre que um número é dividido e seu resultado é um numero inteiro, seu resto é igual a 0
Sempre que um número é dividido e seu número é quebrado, seu resultado é igual ou maior a zero e menor que seu divisor. */

//3- Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
let idadeUser = Number(prompt("Quantos anos você tem?"))
let idadeMeses = idadeUser * 12
console.log(idadeMeses)
let idadeDias = idadeUser * 365
console.log(idadeDias)
let idadeHoras = idadeUser * 8760
console.log(idadeHoras)

//4- Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
let primeiroValor = Number(prompt("Insira o primeiro valor"))
let segundoValor = Number(prompt("Insira o segundo valor"))
const calculo1 = primeiroValor > segundoValor
console.log(calculo1)
const calculo2 = primeiroValor === segundoValor
console.log(calculo2)
const calculo3 = (primeiroValor % segundoValor) === 0
console.log(calculo3)
const calculo4 = (segundoValor % primeiroValor) === 0
console.log(calculo4)