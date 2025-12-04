import React from 'react'
import styled from 'styled-components'

const DivData = styled.div `
    flex: 1;
    padding-right: 5rem;
    h1{
        font-weight: bold;
        font-size: 3rem;
        color: white;
        text-align: center;
    }
    h2{
        font-weight: bold;
        font-size: 2rem;
        color: white;
        text-align: center;
    }
`;

const Data = ()=>{
    return(
        <DivData>
            <h1> Dados do Dispositivo </h1>
        </DivData>

    )
}
export default Data