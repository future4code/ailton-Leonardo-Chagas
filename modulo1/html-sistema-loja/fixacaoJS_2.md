```javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let valor12 = quantidade * 1
  let valorMenor12 = quantidade * 1.30
  if (quantidade < 12){
    return valorMenor12
  } else {
    return valor12
  }
  
}
```