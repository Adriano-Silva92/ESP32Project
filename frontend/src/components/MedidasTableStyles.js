import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  margin-top: 0px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
`;

export const Thead = styled.thead`
  background-color: #009879;
  color: #ffffff;
`;

export const Th = styled.th`
  padding: 14px 16px;
  text-align: center;
  font-weight: 600;
`;

export const Tr = styled.tr`
  background-color: #ffffff;
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:last-of-type {
    border-bottom: 3px solid #009879;
  }
`;

export const Td = styled.td`
  padding: 14px 16px;
  text-align: center;
  color: #333;
  font-weight: 500;
`;
