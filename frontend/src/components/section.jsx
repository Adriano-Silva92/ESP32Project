import React from 'react'
import styled from 'styled-components'


const Inicio = styled.div `
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: black;
`;
const Descricao = styled.div `
    flex: 1;
    padding-right: 5rem;
    h1{
        font-weight: bold;
        font-size: 3rem;
        color: yellow;
    }
    h2{
        font-weight: bold;
        font-size: 2rem;
        color: yellow;
    }


`;
const SummarySection  = ()=>{
    return(
        <Inicio>
            <Descricao>
                <h1>Adriano Josias da Silva</h1>
                <h2>Técnico em Mecatrônica</h2>
                <p>
                    Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.
                    Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500,
                    quando um impressor desconhecido pegou uma bandeja de tipos e os misturou para
                    criar um livro de amostras de tipos. Ele sobreviveu não apenas a cinco séculos,
                    mas também à transição para a editoração eletrônica, permanecendo essencialmente inalterado.
                    Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e,
                    mais recentemente, com softwares de editoração eletrônica como o Aldus PageMaker,
                    que incluíam versões de Lorem Ipsum.
                </p>
                <button>FALE COMIGO!</button>
            </Descricao>
        </Inicio>
    )
}
export default SummarySection