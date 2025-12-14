import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyleCards = styled.div`
    width: 320px;
    background: #2c3245;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 25px rgba(0,0,0,0.45);
    }

    img {
        width: 120px;
        height: 120px;
        object-fit: cover;
        border-radius: 12px;
        border: 2px solid #ffffff20;
    }
`;

export const ConteudoCards = styled.div`
    text-align: center;

    h3 {
        font-weight: bold;
        font-size: 1.6rem;
        color: #fff;
        margin-bottom: 6px;
    }

    h4 {
        font-size: 1.1rem;
        font-weight: bold;
        color: #ffd84d;
        margin: 2px 0;
    }
`;

export const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: inherit;

    width: 100%;
    height: 100%;
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
`;