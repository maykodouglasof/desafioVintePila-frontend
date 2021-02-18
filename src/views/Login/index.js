import React, { useState } from "react";
import * as S from "./styles";

import api from "../../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <S.Container>
      <S.Title>Login</S.Title>

      <S.Content>
        <form>
          <label>
            <div>E-mail</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <div>Senha</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label>
            <button>Fazer Login</button>
          </label>

          <label>
            <button>Criar Conta</button>
          </label>
        </form>
      </S.Content>
    </S.Container>
  );
}

export default Login;
