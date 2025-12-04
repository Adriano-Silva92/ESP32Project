import React from 'react'
import styled from 'styled-components'

const DivLogin = styled.div `
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

const Login = ()=>{
    return(
        <DivLogin>
            <h1> Página de Login </h1>
        </DivLogin>

    )
}
export default Login