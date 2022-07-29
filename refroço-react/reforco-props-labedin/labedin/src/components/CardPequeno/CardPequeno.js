import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 60px;
`

const Imagem = styled.img `
    width: 39px;
    margin-right: 10px;
    border-radius: 50%;
    `


const CardDiv = styled.div `
display: flex;
flex-direction: column;
justify-items: flex-start;
`







 function CardPequeno(props){



    
    return(
        <CardDiv>
            <CardContainer>
                <Imagem alt="email" src="https://cdn-icons.flaticon.com/png/128/3178/premium/3178158.png?token=exp=1659063928~hmac=979a41957219bbd59610ea905f60a51f"></Imagem>
            <p><b>Email: </b> {props.email}</p>       
            </CardContainer>
            <CardContainer>
                <Imagem alt="endereço" src="https://cdn-icons-png.flaticon.com/128/331/331810.png"></Imagem>
                <p><b>Endereço:</b> {props.endereco}</p>                
            </CardContainer>

                
       

        </CardDiv>
    )
}

export default CardPequeno;