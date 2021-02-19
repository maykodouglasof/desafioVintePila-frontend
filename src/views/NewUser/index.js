import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import * as S from "./styles";

import api from "../../services/api";

function NewUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function newUser() {
    if(!firstName)
      return alert("Você precisa informar o Nome")
    else if(!lastName)
      return alert("Você precisa informar o Sobrenome")
      else if(!email)
      return alert("Você precisa informar o Email")
      else if(!password)
      return alert("Você precisa informar a senha")

    await api
      .post('/user', {
        firstName,
        lastName,
        phone,
        cpf,
        password,
        email,
      })
      .then(alert("Usuário Cadastrado com sucesso!"));
  }

  return (
    <S.Container>
      <S.Title>Cadastrar novo usuário</S.Title>

      <S.Content>
        <form>
          <label>
            <div>Nome</div>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            <div>Sobrenome</div>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
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
            <div>Telefone</div>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
          <label>
            <div>CPF</div>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </label>
          <label>
            <button onClick={() => newUser()}>Cadastrar Usuário</button>
          </label>

          <label>
          <Link to={"/"}>
            <button>Voltar</button>
            </Link>
          </label>
        </form>
      </S.Content>
    </S.Container>
  );
}

export default NewUser;
