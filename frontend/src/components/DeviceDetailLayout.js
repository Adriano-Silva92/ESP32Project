import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const CardColumn = styled.div`
  flex: 0 0 320px;
`;

export const TableColumn = styled.div`
  flex: 1;
  overflow-x: auto;
`;