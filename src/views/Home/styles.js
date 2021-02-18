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

  strong {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Lato", sans-serif;
    font-style: bold;
    font-size: 25px;
    color: #21ba45;
    margin-top: 20px;
    margin-bottom: 40px;
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

export const SearchBox = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 20px 15px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 0.3px rbga(0, 0, 0, 0.2);
  display: flex;

  form {
    flex: 1;
    display: flex;
  }

  input {
    height: 40px;
    border: 0;
    border-radius: 5px;
    outline: 0;
    font-size: 15px;
    color: #000;
    margin-right: 20px;
    flex: 1;
    padding: 0 10px;
    background: rgb(240, 234, 234);
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
`;

export const ButtonTable = styled.button`
  cursor: pointer;
  padding: 10px;
  border: 0;
  margin: 2px;
`;
