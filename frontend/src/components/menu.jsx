import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DivMenu = styled.div`
    background: #58617B;
    color: white;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;

    ul {
        display: flex;
        list-style: none;
        gap: 2rem;
    }

    h1{
        font-weight: bold;
        font-size: 3rem;
        color: white;
        text-align: center;
    }

    a {
        color: white;
        text-decoration: none;
        font-size: 1.1rem;
        transition: 0.3s ease;

        &:hover {
            color: #000;
            background: white;
            padding: 0.3rem 0.5rem;
            border-radius: 5px;
        }
    }
`;

const Menu = () => {
    return (
        <DivMenu>
            <h1>AJS</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Medidas">Devices</Link></li>
                <li><Link to="/Admin">Admin</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </DivMenu>
    )
}

export default Menu
