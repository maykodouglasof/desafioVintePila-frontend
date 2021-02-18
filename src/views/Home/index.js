import React, { useState } from 'react';
import * as S from './styles';
import { FiTrash2, FiEdit2 } from "react-icons/fi";

import api from '../../services/api';

function Home() {

  const [user, setUser] = useState([]);
  const [cpf, setCpf] = useState([]);

  return (
    <S.Container>

      <S.Content>
        <strong>Pesquise pelo CPF</strong>
        <S.SearchBox>
          <form>
            <input
              type="text"
              name="cpf"
              placeholder="Procure pelo CPF..."
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <S.Button>
              Pesquisar
            </S.Button>
          </form>
        </S.SearchBox>

          <div>
            <strong>Lista de Usuários</strong>

            <ul className="recipe-table">
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
                    <tr>
                      <td>Teste</td>
                      <td>teste</td>
                      <td>teste</td>
                      <td>teste</td>
                      <td>teste</td>
                      <td>
                        <S.ButtonTable>
                          <FiEdit2 syze={20} color="#21ba45" />
                        </S.ButtonTable>
                        <S.ButtonTable>
                          <FiTrash2 syze={20} color="#21ba45" />
                        </S.ButtonTable>
                      </td>
                    </tr>
                  </tbody>
              </table>
            </ul>
          </div>
      </S.Content>

    </S.Container>
  )
}

export default Home;
