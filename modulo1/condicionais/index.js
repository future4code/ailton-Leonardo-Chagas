const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
// Verifica se o número inserido é par. Os números pares passarão no teste, ímpares não

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*
 a) Está pedindo para o user inserir um valor.
 b) O preço da fruta maçã é R$ 2.25
 c) O preço da fruta Pêra é R$ 5
*/

 const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
/*
a) Colhendo dados do user
b) "Esse número passou no teste" e "Essa mensagem é secreta!!!"", respectivamente"
c) A condição para ser impresso a variável mensagem não foi definida, além disso ela se encontra dentro do if
*/

//Escrita de código

// Questão 1

let idadeUser = Number(prompt("Qual a sua idade?"))
if (idadeUser >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

// Questão 2

confirm("Digite 'M' para Matutino, 'V' para Vespertino e 'N' para Noturno.")
let turnoUser = prompt("Em qua turno você estuda?")
if (turnoUser == "M") {
    console.log("Bom dia!")
} else if (turnoUser == "V") {
    console.log("Boa tarde!")
} else if (turnoUser == "N") {
    console.log("Boa noite!")
} else {
    console.log("Dado inválido")
}



// Questão 3

confirm("Digite 'M' para Matutino, 'V' para Vespertino e 'N' para Noturno.")
let turnoUser = prompt("Em qua turno você estuda?")

 switch (turnoUser){
    case 'M', 'm':
        console.log("Bom dia!")
        break
    case 'V', 'v':
        console.log("Boa tarde!")
        break
    case 'N', 'n':
        console.log("Boa noite!")
        break
    default:
        console.log('Dado inválido')
        break
}

// Questão 4

let generoFilme = prompt("Qual o gênero do filme?")
let valorFilme = prompt("Qual o valor do ingresso?")

if (generoFilme == "fantasia" && valorFilme == "15") {
    console.log("Bom filme")
} else {
    console.log("Escolha outro filme")
}
