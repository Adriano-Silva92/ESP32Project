import React from 'react';
import { useEffect, useState } from "react";
import styled from 'styled-components';
import semImagem from "../assets/semimagem.png";
import { useApi } from "../hooks/useApi";
import { Link } from 'react-router-dom';
import {
    StyleCards,
    ConteudoCards,
    StyledLink,
    CardsContainer
} from "../components/cardstyles";




const Cards = () => {
  const { data, error } = useApi("/devices");

  if (error) return <p>Erro ao carregar dados...</p>;
  if (!data) return <p>Carregando...</p>;

  return (
    <CardsContainer>
      {data.message.map((device) => {
        const ultimaMedida =
          device.medidas && device.medidas.length > 0
            ? device.medidas[device.medidas.length - 1]
            : null;

        return (
          <StyleCards key={device._id}>
            <StyledLink to={`/medidas/${device._id}`}>
              <img
                src={device.imagem || semImagem}
                alt={device.nome || "Sem Nome"}
              />

              <ConteudoCards>
                <h3>Device: {device.nome}</h3>
                <h4>Voltagem: {ultimaMedida ? ultimaMedida.voltagem : "-"}</h4>
                <h4>Corrente: {ultimaMedida ? ultimaMedida.corrente : "-"}</h4>
                <h4>Kwh: {ultimaMedida ? ultimaMedida.kwh : "-"}</h4>
              </ConteudoCards>
            </StyledLink>
          </StyleCards>
        );
      })}
    </CardsContainer>
  );
};

export default Cards;
