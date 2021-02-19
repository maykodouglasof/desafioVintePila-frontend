import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as S from "./styles";

import api from "../../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

 async function handleLogin(e) {
      e.preventDefault();

      try {
          const response = await api.post('/session', { email, password })
          console.log(response)
          localStorage.setItem('userId', response.data._id);
          localStorage.setItem('userEmail', response.data.email);

          history.push('Home');
      } catch (err) {
          alert('Falha no login, tente novamente.');
      }
  }

  return (
    <S.Container>
      <S.Title>Login</S.Title>

      <S.Content>
        <form onSubmit={handleLogin}>
          <label>
            <div>E-mail</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <div>Senha</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <button>Fazer Login</button>
          </label>

          <label>
          <Link to={"/signup"}>           
            <button>Criar Conta</button>
            </Link>

          </label>
        </form>
      </S.Content>
    </S.Container>
  );
}

export default Login;
