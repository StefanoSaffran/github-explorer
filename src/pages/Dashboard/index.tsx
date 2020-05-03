import React, { useState, useEffect, useContext, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import Toggle from 'react-toggle';
import { ThemeContext } from 'styled-components';

import api from '../../services/api';
import Loading from '../../components/Loading';
import { useTheme } from '../../hooks/theme';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories, Header, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [loading, setLoading] = useState(false);
  const { colors, title } = useContext(ThemeContext);

  const { toggleTheme } = useTheme();

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories'
    );

    if (storagedRepositories) return JSON.parse(storagedRepositories);
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (newRepo === '') {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      setLoading(true);
      const { data } = await api.get<Repository>(`repos/${newRepo}`);

      setRepositories([...repositories, data]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca por esse repositório');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Toggle
          checked={title === 'dark'}
          onChange={toggleTheme}
          className="toggle"
          icons={{
            checked: <FaMoon color="yellow" size={12} />,
            unchecked: <FaSun color="yellow" size={12} />,
          }}
        />
      </Header>
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={({ target }) => setNewRepo(target.value)}
          type="text"
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {!loading ? (
          repositories.map(repository => (
            <Link
              key={repository.full_name}
              to={`repositories/${repository.full_name}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
          ))
        ) : (
          <Loading />
        )}
      </Repositories>
    </>
  );
};

export default Dashboard;
