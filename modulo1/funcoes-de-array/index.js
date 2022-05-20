// Exercícios de interpretação de código

// Questão 1

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

  // O que será impresso no console?
  // o nome de todos os usuários

  // Questão 2

  const usuarios = [
   { nome: "Amanda Rangel", apelido: "Mandi" },
   { nome: "Laís Petra", apelido: "Laura" },
   { nome: "Letícia Chijo", apelido: "Chijo" },
 ]
 
 const novoArrayB = usuarios.map((item, index, array) => {
    return item.nome
 })
 
 console.log(novoArrayB)

 // O que ser[a impresso?
// Serâo impressos os nomes dos usuários em um novo array

// Questão 3

const usuarios = [
   { nome: "Amanda Rangel", apelido: "Mandi" },
   { nome: "Laís Petra", apelido: "Laura" },
   { nome: "Letícia Chijo", apelido: "Chijo" },
 ]
 
 const novoArrayC = usuarios.filter((item, index, array) => {
    return item.apelido !== "Chijo"
 })
 
 console.log(novoArrayC)

 // O que será impresso?
 // Serão impressos os apelidos diferentes de "Chijo"


 // Escrita de código 

 // Questão 1
 // Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

 const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

let nomeDogs = pets.map((item, index, array) => {
   return item.nome
})
 console.log(nomeDogs)

 // (6) ['Lupin', 'Polly', 'Madame', 'Quentinho', 'Fluffy', 'Caramelo']




// b) Crie um novo array apenas com os [cachorros salsicha]

let soSalsicha = pets.filter((buscarSalsichas) => {
   return buscarSalsichas.raca === "Salsicha"
})
console.log(soSalsicha)



// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
