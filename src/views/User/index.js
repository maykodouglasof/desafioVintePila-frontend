import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import * as S from "./styles";

import api from "../../services/api";

function User() {
  const { id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function LoadUserDetails() {
    await api.get(`/user/${id}`).then((response) => {
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setPhone(response.data.phone);
      setCpf(response.data.cpf);
      setEmail(response.data.email);
      setPassword(response.data.password);
    });
  }

  useEffect(() => {
    LoadUserDetails();
  }, []);

  return (
    <S.Container>
      <S.Title>Usuário</S.Title>

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
            <button>Atualizar Usuário</button>
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

export default User;
