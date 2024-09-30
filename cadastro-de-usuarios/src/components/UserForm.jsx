import { useRef } from "react"; // Importa o hook useRef do React
import '../components/styles/UserForm.css';  // Importa o CSS para o estilo do formulário

const UserForm = ({ onSubmit }) => {
// Cria referências para os inputs
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário
  // Chama a função onSubmit passando os dados do formulário
    onSubmit({
      name: inputName.current.value, // Obtém o valor do input de nome
      age: inputAge.current.value, // Obtém o valor do input de idade
      email: inputEmail.current.value, // Obtém o valor do input de email
    });
  // Limpa os campos após o envio
    inputName.current.value = "";
    inputAge.current.value = "";
    inputEmail.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nome" type="text" ref={inputName} />
      <input placeholder="Idade" type="number" ref={inputAge} />
      <input placeholder="E-mail" type="email" ref={inputEmail} />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default UserForm; // Exporta o componente UserForm
