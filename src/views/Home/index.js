import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { FiTrash2, FiEdit2 } from "react-icons/fi";

import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    await api.get("/user").then((response) => {
      setUsers(response.data);
    });
  }

  async function handleDeleteUser(_id) {
    const res = window.confirm("Deseja realmente remover este usuário?");
    if (res == true) {
      await api.delete(`/user/${_id}`).then(window.location.reload());
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <S.Container>
      <S.Content>
        <section>
          <h1>Lista de Usuários</h1>
          <Link to={'/newuser'}>
          <S.Button>Adicionar Usuário</S.Button>
          </Link>
          </section>
          <ul>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Sobrenome</th>
                  <th>E-mail</th>
                  <th>Telefone</th>
                  <th>CPF</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.cpf}</td>
                    <td>
                      <Link to={`/user/${user._id}`}>
                        <S.ButtonTable>
                          <FiEdit2 syze={20} color="#21ba45" />
                        </S.ButtonTable>
                      </Link>

                      <S.ButtonTable onClick={() => handleDeleteUser(user._id)}>
                        <FiTrash2 syze={20} color="#21ba45" />
                      </S.ButtonTable>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ul>
      </S.Content>
    </S.Container>
  );
}

export default Home;
