// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function ordenando(a, b){
      return (a - b)
  }
  return array.sort(ordenando)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
 
  function buscarNumerosPares (pares) {
    if (pares % 2 == 0) 
    return pares;
}
let numerosPares = array.filter(buscarNumerosPares);
    
   
   return numerosPares
 
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  function buscarNumerosPares (pares) {
    if (pares % 2 == 0) 
    return pares;
}
let numerosPares = array.filter(buscarNumerosPares) ;
    let calculando = numerosPares.map(function(pares){
      return Math.pow(pares, 2)
    })
   
   return calculando
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(null, array )
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
 let maiorNumero =  Math.max.apply(null, (num1, num2))
 let maiorDivisivelPorMenor
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  function buscarNumerosPares (pares) {
    if (pares % 2 == 0) 
    return pares;
}
let numerosPares = array.filter(buscarNumerosPares);
for(let i = 0; PrimeiroPar.length < n; i++)
    
   
   return primeirosPares
 
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB === ladoC){
  let 
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`)
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa,
   nome: "ANÔNIMO"
   }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}