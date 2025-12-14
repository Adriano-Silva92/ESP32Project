import React from 'react'
import styled from 'styled-components'
import Cards from '../components/cards'

const DivCards = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    img {
        width: 200px;
        height: 200px;
        border-radius: 12px;
        border: 2px solid #333;
        object-fit: cover;
    }
`;

const DivDevices = styled.div `
    min-height: 30vh;
    overflow: hidden;
    padding: 5rem 10rem;
`;

const Data = ()=>{
    return(
        <DivDevices>
            <DivCards>
                <Cards />
            </DivCards>
        </DivDevices>

    )
}
export default Data