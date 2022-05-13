function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//vai imprimir o resultado da multiplicação (10, 50)
//se tirar o console.log, nada será impresso

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//serve para identificar se na frase existe a palavra "cenoura"
/*
true
true
true
*/

// Questão 1
//a
function informacoesUser(nome, idade, cidade, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)}
    informacoesUser('leo', 21, 'manaus','programador')


//b
let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Qual sua idade?"))
let cidade = prompt("Qual sua cidade?")
let profissao = prompt("Qual sua profissão?")


function informacoesUser(nome, idade, cidade, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)}
    console.log(informacoesUser(nome, idade, cidade, profissao))

// Questão 2
//a)
let num1 = Number(prompt("Insira um número"))
let num2 = Number(prompt("Insira outro número"))
function soma(){
    return num1 + num2
}
soma(num1, num2)

//b)
let val1 = Number(prompt("Insira um número"))
let val2 = Number(prompt("insira outro número"))
function comparador() {
    return val1 > val2
}
console.log(comparador(val1, val2))

//c)
let numPar = Number(prompt("Insira um número"))
function verificador() {
  let verificando = numPar % 2 === 0
  return verificando
}
console.log(verificador(numPar))

//d)
let texto = prompt("Insira uma frase")
function mensagem(){
    let tamanhoDaFrase =  ("Essa frase tem " + texto.length + " letras e em maiúsuclo fica: " + texto.toUpperCase())
    return tamanhoDaFrase
}
console.log(mensagem(texto))

//Questão 3
let numI = Number(prompt("Insira um número"))
let numII = Number(prompt("Insira outro número"))
function soma(){
    return numI + numII
}
function diferenca(){
    return numI % numII
}
function subtracao(){
    return numI - numII
}
function multiplica(){
    return numI * numII 
}
function divide(){
    return numI / numII
}
console.log( 
    `Números inseridos: ${numI} e ${numII}
    Soma: ${soma(numI, numII)}
    Subtrai: ${subtracao(numI, numII)}
    Diferença: ${diferenca(numI, numII)}
    Multiplicação: ${multiplica(numI, numII)}
    Divisão: ${divide(numI, numII)}`
)