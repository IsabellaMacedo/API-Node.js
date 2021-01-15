# API com Node.JS

API criada com Node.JS, que realiza os comandos de GET e POST.
Dessa forma, é uma API de Metas, em que é possível cadastrar metas e listar as metas cadastradas.

### :books: Linguagens e libs utilizadas: 

- Node.JS;
- Express.JS;
- Cors;
- MongoDB;
- Mongoose;
- Visual Studio Code;
- Insomnia Core.


### :pushpin: Como executar esta API (localmente):

#### Pré Requisitos da máquina:

- [x] Instalar o MongoDB;
- [x] Instalar o Node.JS; 
- [x] Instalar o Insomnia Core (para utilizar a API);
- [x] Clonar este repositório e instalar suas dependências no diretório ("npm install" instalará "node_modules").

#### Executar a API:


No terminal da sua máquina, inicie o MongoDb:

```
mongod
```

Depois, abra outro terminal e no diretório execute o comando:

```
nodemon app.js
```

Caso você não tenha o "nodemon" instalado, instale (via "npm install -g nodemon") e execute o comando novamente.

A API estará rodando em http://localhost:8080/metas



#### Cadastrar Metas (POST):

Abra o Insomnia Core, crie o comando POST no formato JSON, com a seguinte estrutura (exemplo):

{
	"name" : "Aprender Node.JS",
	"description": "Estudar todos os dias durante 1 mês.",
	"status": "Pendente"
}

Clique em "Send"



#### Listar Metas (GET):

Enviando o comando GET pelo Insomnia, deverá retornar no formato JSON todas as metas cadastradas.

