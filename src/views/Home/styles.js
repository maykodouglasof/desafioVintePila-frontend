import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  padding: 20px;
  margin: 40px;
  align-items: center;
  justify-content: center;

  section {
    display: flex;
    width: 100%;
    padding: 10px;
    align-items: center;
    margin-bottom: 10px;
  }

  table {
    width: 100%;
    text-align: center;
  }

  th {
    font-size: 14px;
    background-color: rgb(240, 234, 234);
  }

  th,
  td {
    padding: 8px;
  }

  tr:hover {
    background-color: #dad2d2;
  }
`;

export const Button = styled.button`
  background-color: #21ba45;
  font-size: 15px;
  border: 0;
  border-radius: 5px;
  color: #fff;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  margin: 10px;
`;

export const ButtonTable = styled.button`
  cursor: pointer;
  padding: 10px;
  border: 0;
  margin: 2px;
`;
