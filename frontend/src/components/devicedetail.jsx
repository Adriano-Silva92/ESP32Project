import React from 'react';
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import {
  StyleCards,
  ConteudoCards
} from "../components/cardstyles";
import semImagem from "../assets/semimagem.png";
import {
  TableWrapper,
  StyledTable,
  Thead,
  Th,
  Tr,
  Td
} from "../components/MedidasTableStyles";
import {
  DetailWrapper,
  CardColumn,
  TableColumn
} from "../components/DeviceDetailLayout";

const formatarData = (dataISO) => {
  return new Date(dataISO).toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short"
  });
};

const DetalhesDevice = () => {
  const { id } = useParams();
  const { data, error } = useApi(`/devices/${id}`);
  const { data: medidasData } = useApi(`/devices/${id}/medidas`);

  if (error) {
    return <p>Erro ao carregar os dados do device.</p>;
  }

  if (!data) {
    return <p>Carregando device...</p>;
  }

  const device = data.message;

  if (!device) {
    return <p>Device não encontrado!</p>;
  }

  const ultimaMedida =
    medidasData?.message?.length > 0
      ? medidasData.message[medidasData.message.length - 1]
      : null;


  return (
    <>
      <DetailWrapper>
        <CardColumn>
          <StyleCards>
            <img
              src={device.imagem || semImagem}
              alt={device.nome}
            />
            <ConteudoCards>
              <h3>Device: {device.nome}</h3>
              <h4>Voltagem: {ultimaMedida ? ultimaMedida.voltagem : "-"}</h4>
              <h4>Corrente: {ultimaMedida ? ultimaMedida.corrente : "-"}</h4>
              <h4>Kwh: {ultimaMedida ? ultimaMedida.kwh : "-"}</h4>
              <h4>
                Criado em:{" "}
                {device.createdAt ? formatarData(device.createdAt) : "Sem Data"}
              </h4>
              <h4>
                Última atualização:{" "}
                {device.updatedAt ? formatarData(device.updatedAt) : "Sem Atualização"}
              </h4>
            </ConteudoCards>
          </StyleCards>
        </CardColumn>

        {medidasData?.message?.length > 0 && (
          <TableColumn>
            <TableWrapper>
              <StyledTable>
                <Thead>
                  <tr>
                    <Th>Data e Hora</Th>
                    <Th>Voltagem (V)</Th>
                    <Th>Corrente (A)</Th>
                    <Th>kWh</Th>
                  </tr>
                </Thead>

                <tbody>
                  {medidasData?.message?.slice(-6).map((m, index) => (
                    <Tr key={index}>
                      <Td>{formatarData(m.createdAt)}</Td>
                      <Td>{m.voltagem}</Td>
                      <Td>{m.corrente}</Td>
                      <Td>{m.kwh}</Td>
                    </Tr>
                  ))}
                </tbody>
              </StyledTable>
            </TableWrapper>
          </TableColumn>
        )}
      </DetailWrapper>
    </>
  );
};

export default DetalhesDevice;
