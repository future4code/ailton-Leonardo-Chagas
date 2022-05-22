/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    const querJogar = confirm("Quer jogar uma partida?")
    const carta1User = comprarCarta();
    const carta2User = comprarCarta();
    const carta1Pc = comprarCarta();
    const carta2Pc = comprarCarta();
    const pontuacaoUser = carta1User.valor + carta2User.valor ;
    const pontuacaoPc = carta1Pc.valor + carta2Pc.valor; 


    if(querJogar){
        

       console.log( `Suas cartas são  ${carta1User.texto} e  ${carta2User.texto} - `, `Sua pontuação é ${pontuacaoUser}`);
       let resultadoPc = pontuacaoPc
       console.log(`As cartas do computador são ${carta1Pc.texto}, ${carta2Pc.texto} - `, `A pontuação do computador é ${pontuacaoPc}`)        
    }
     if (pontuacaoUser > pontuacaoPc){
        console.log("Você ganhou!")
     } else if( pontuacaoPc > pontuacaoUser){
        console.log("Você perdeu")
     } else if(pontuacaoPc === pontuacaoUser){
        console.log("Empate!")
     } else {
        console.log("Fim de jogo")
     }