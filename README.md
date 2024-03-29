# Criação de um board semelhante ao Trello com autenticação em JWT

O propósito desse desafio é a criação de frontend para um quadro de kanban. Esse quadro possui listas, que contém cards.

## Rodando a API

Uma API de exemplo foi disponibilizada na pasta BACK.

### Para rodá-la, faça:

```console
> cd BACK
> npm install
> npm run server
```

## Rodando o Front

O front foi desenvolvido em React + VITE. Nele foram implementados os seguintes pacotes:

- Axios (para consumo da API)
- Router (para a rota após autenticação)
- React Modal (para gerenciamento de modais para criar/editar cards)
- React Markdown (para interpretação de conteúdo .md)
- Bootstrap -(para estilo de css e diagramação)
- Sass (para usar com css)
- Formik + yup (para fazer a validações de formulário)
- react-icons (biblioteca de ícones)
- toast (usado nas mensagens de retorno das requisições)

### Para rodar o front siga os seguintes passos:

```console
> cd FRONT
> npm install
> npm run dev
```

### A aplicação estará rodando em http://localhost:5173.

## Login e senha para autenticação

| Login    | Senha    |
| -------- | -------- |
| letscode | lets@123 |

## Prints das telas:

![Tela de login](https://github.com/roofranklin/react_trello/raw/main/tela-login.png)
![Tela de login](https://github.com/roofranklin/react_trello/raw/main/tela-board.png)

## To-Do

- Melhorar a componentização
- Escrever os testes unitários
- Configurar Lint
- Desenvolver o Drag and Drop para arrastar os cards
