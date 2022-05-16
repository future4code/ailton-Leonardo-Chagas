// Interpretação de código 

// Questão 1
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
// Matheus Nachtergaele
// Virginia Cavendish
// canal: "Globo", horario: "14h"

// Questão 2
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
/*
{nome: 'Juca', idade: 3, raca: 'SRD'}
{nome: 'Juca', idade: 3, raca: 'SRD'}
{nome: 'Juca', idade: 3, raca: 'SRD'}

A sintaxe dos 3 pontos serve pra intoduzir o array gato dentro de outro array

*/

// Escrita de código

// Questão 1
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

let pessoa = {
    nome: "Abigail",
    apelidos:  ["Biga", "Abigal", "Mingail"]
}

function texto(pessoa) {
    console.log(`Eu sou, ${pessoa.nome}, mas pode me chamar de : ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)
}
console.log(texto)
// Eu sou, Abigail, mas pode me chamar de : Biga, Abigal, Mingail

//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto


let pessoa2 = {
    ...pessoa.nome,
    apelidos: ["Bigal", "Abil que caiu", "Umbigo"]
}

function texto2(pessoa2) {
    console.log(`Eu sou, ${pessoa2.nome}, mas pode me chamar de : ${pessoa2.apelidos[0]}, ${pessoa2.apelidos[1]}, ${pessoa2.apelidos[2]}`)
}
console.log(texto2)
// Eu sou, undefined, mas pode me chamar de : Bigal, Abil que caiu, Umbigo