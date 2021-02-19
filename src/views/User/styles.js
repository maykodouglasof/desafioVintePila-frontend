import styled from "styled-components";

export const Container = styled.div`
  margin: 80px auto 0;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 14px;
    color: #444;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 45px;
    padding: 0 15px;
    font-size: 16px;
  }

  button {
    border: 0;
    border-radius: 2px;
    width: 100%;
    height: 42px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    background: #21ba45;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background: #16ab39;
  }
`;

