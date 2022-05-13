// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01


function calculaAreaRetangulo() {
    // implemente sua lógica aqui
    const altura = prompt("Qual a altura um retângulo ?")
    const largura = prompt("Qual a largura de um retângulo ?")
    const areaDoRetangulo = altura * largura
    console.log(areaDoRetangulo)
    return areaDoRetangulo
  }



// EXERCÍCIO 02
function imprimeIdade() {
  const anoUser = Number(prompt("Insira o ano atual"))
  const anoAtual = Number(prompt("Insira o ano que você nasceu"))
  const idade =  anoUser - anoAtual
  console.log(idade)
  return (idade)

}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual seu nome?")
let idade = Number(prompt("Qual sua idade?"))
let email = prompt("Qual seu email?")
   const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`

  console.log(frase)
  return frase
  

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const coresArray = []
  let corI = prompt("Escolha uma cor favorita")
  let corII = prompt("Escolha uma outra cor")
  let corIII= prompt("Escolha mais uma cor")
  coresArray.push(corI, corII, corIII)
  console.log(coresArray)
  return(coresArray)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 const maior = string.toUpperCase()
 return(maior)

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 let calculo = custo / valorIngresso
 return calculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
comparador = string1.length === string2.length
return comparador
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui


return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiroElemento = array[0]
const ultimoElemento = array[array.length-1]

array[0] = ultimoElemento
array[array.length-1] = primeiroElemento
return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}