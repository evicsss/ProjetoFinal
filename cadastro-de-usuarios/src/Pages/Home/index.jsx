import { useEffect, useState } from "react";
import api from '../../services/api'; // Importa a configuração da API
import Header from '../../components/Header';  // Componente de cabeçalho
import UserForm from '../../components/UserForm';  // Formulário para criar/editar usuários
import UserList from '../../components/UserList'; // Lista de usuários
import Footer from '../../components/Footer';  // Componente de rodapé
import Loading from '../../components/Loading'; // Componente de carregamento
import ErrorMessage from '../../components/ErrorMessage'; // Componente para exibir mensagens de erro

function Home() {
  const [users, setUsers] = useState([]); // Estado para armazenar a lista de usuários
  const [loading, setLoading] = useState(true); // Estado para controle de loading
  const [error, setError] = useState(null); // Estado para armazenar mensagens de erro

   // Efeito colateral para buscar usuários ao montar o componente
  useEffect(() => {
    getUsers(); // Chama a função para buscar usuários
  }, []);

   // Função assíncrona para buscar usuários da API
  async function getUsers() {
    try {
      const usersFromApi = await api.get('/usuarios'); // Faz a requisição GET
      setUsers(usersFromApi.data); // Atualiza o estado com os usuários recebidos
    } catch (err) {
      setError("Erro ao buscar usuários."); // Define mensagem de erro
    } finally {
      setLoading(false);  // Finaliza o estado de loading
    }
  }

  // Função assíncrona para criar um novo usuário
  async function createUser(user) {
      try {
        const response = await api.post('/usuarios', user); // Faz a requisição POST
        console.log('Usuário criado:', response.data); // Log da resposta do servidor
        getUsers(); // Atualiza a lista de usuários
      } catch (err) {
        console.error(err); // Log do erro para depuração
        setError(err.response ? err.response.data.error : "Erro ao cadastrar usuário."); // Define mensagem de erro
      }
    }    

    // Função assíncrona para deletar um usuário
  async function deleteUser(id) {
    await api.delete(`/usuarios/${id}`); // Faz a requisição DELETE
    getUsers(); // Atualiza a lista de usuários
  }

  return (
    <div className="container">
      <Header />
      <UserForm onSubmit={createUser} />
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <UserList users={users} onDelete={deleteUser} />
      )}
      <Footer />
    </div>
  );
}

export default Home; // Exporta o componente Home