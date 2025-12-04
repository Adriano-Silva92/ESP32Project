import React from 'react'
import styled from 'styled-components'

const DivAdmin = styled.div `
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

const Admin = ()=>{
    return(
        <DivAdmin>
            <h1> Campo para Administradores </h1>
        </DivAdmin>

    )
}
export default Admin