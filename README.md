# Cadastro de Usuários

Este projeto é uma aplicação em React que permite gerenciar usuários, incluindo operações de criação, listagem e exclusão. Utiliza uma API para realizar as operações e exibe uma interface amigável.

## Tecnologias Utilizadas

- React
- Axios (para chamadas à API) 
- CSS (estilização)

## Funcionalidades

- **Listar Usuários**: Exibe todos os usuários cadastrados.
- **Cadastrar Usuário**: Permite o cadastro de novos usuários com nome, idade e e-mail.
- **Excluir Usuário**: Permite a exclusão de usuários já cadastrados.
- **Tratamento de Erros**: Exibe mensagens de erro em caso de falhas nas requisições.

## Estrutura do Projeto

- `src/`
  - `components/`
    - `Header.jsx` - Componente do cabeçalho.
    - `UserForm.jsx` - Formulário para cadastrar usuários.
    - `UserList.jsx` - Lista de usuários cadastrados.
    - `Footer.jsx` - Componente do rodapé.
    - `Loading.jsx` - Componente de carregamento.
    - `ErrorMessage.jsx` - Componente para exibir mensagens de erro.
  - `services/`
    - `api.js` - Configuração da API.
  - `styles/`
    - `UserForm.css` - Estilos para o formulário de usuários.
    - `index.css` - Estilos globais da aplicação.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/evicsss/cadastro-de-usuarios.git

2. Navegue até o diretório do projeto:
    ```bash  
    cd cadastro-de-usuarios

3. Instale as dependências:
    ```bash
    npm install

## Execução

Para iniciar o projeto em modo de desenvolvimento, execute:
    ```bash
    npm start
 A aplicação estará disponível em http://localhost:3000.

 ## Licença

 Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
