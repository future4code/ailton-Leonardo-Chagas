let nomeUsuario
let idadeUsuario
console.log(typeof nomeUsuario, idadeUsuario)


let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
// 10
// 10 5


let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
// 10 10 10

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
//  p = horasTrabalhadas
//  t = quantoRecebe