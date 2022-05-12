let array
console.log('a. ', array)
// undefined

array = null
console.log('b. ', array)
// null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// 11

let i = 0
console.log('d. ', array[i])
// 3

array[i+1] = 19
console.log('e. ', array)
// [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
// 9 


const frase = prompt("Digite uma frase")
// "Subi num ônibus em Marrocos"
console.log(frase.toLocaleUpperCase().replaceAll("A", "I"), frase.length)
// "Subi num ônibus em Mirrocos 27" 



// Questão 1
let nome = prompt("Qual seu nome?")
let email = prompt("Qual seu email?")
console.log(`O seu email ${email} foi cadastrado com sucesso. Seja Bem vinda(o), ${nome}`)

// Questão 2
let comidasPreferidas = ['Sushi', 'Carne', 'Pizza', 'Yakisoba', 'Frutas']
console.log(comidasPreferidas)
console.log("Essas são minhas comidas favoritas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])
let comidaPreferidaUser = prompt("Qual a sua comida favorita?")
comidasPreferidas[1] = comidaPreferidaUser
console.log(comidasPreferidas)

// Questão 3
let listaDeTarefas = []
let tarefa1 = prompt("Digite a primeira tarefa")
let tarefa2 = prompt("Digite a segunda tarefa")
let tarefa3 = prompt("Digite a terceira tarefa")
let inserindoTarefas = listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)
let tarefasRealizadas = Number(prompt("Digite o número da tarefa que você já concluiu"))
tarefasRealizadas = tarefasRealizadas - 1
let tirandoTarefa = listaDeTarefas.splice(tarefasRealizadas, 1)
console.log(listaDeTarefas) 