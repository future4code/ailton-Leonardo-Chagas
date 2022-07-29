import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    `

const Imagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const TxtH4 = styled.h4 `
    margin-bottom: 15px;
    `

const TxtDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <CardContainer>
            <Imagem alt='foto' src={ props.imagem } />
            <TxtDiv>
                <TxtH4>{ props.nome }</TxtH4>
                <p>{ props.descricao }</p>
            </TxtDiv>
        </CardContainer>
    )
}

export default CardGrande;