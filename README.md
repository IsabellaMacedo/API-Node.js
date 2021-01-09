CRIAÇÃO DO PROJETO

Criar o arquivo package (dentro da pasta api):
### npm init

Instalar o express para gerenciar requisições, rotas, URLs, etc:
### npm install express

Rodar o projeto:
### node app.js

Sempre que altera o código, para visualizar as alterações é necessário pausar o servidor e executar novamente.
Para que o servidor reinicie sempre que houver alteração no código, instalar o módulo (g significa globalmente):
### npm install -g nodemon

Para rodar o projeto, mas usando o nodemon:
### nodemon app.js

Se nesta parte der o erro: "nodemon : O arquivo C:\Users\isama\AppData\Roaming\npm\nodemon.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema" é por causa da ExecutionPolicy. Para resolver isso eu abri o PowerShell como administrador, e executei: "powershell Set-ExecutionPolicy RemoteSigned". Isso alterou a política de "Restricted" para "RemoteSigned". Aí então executou normalmente o script. ( fontes: https://qastack.com.br/programming/4037939/powershell-says-execution-of-scripts-is-disabled-on-this-system , https://pt.stackoverflow.com/questions/220078/o-que-significa-o-erro-execu%C3%A7%C3%A3o-de-scripts-foi-desabilitada-neste-sistema)

Instalar o banco de dados MongoDB no projeto (instalar a dependência do MongoDB):
### npm install --save mongodb

Instalar o Mongoose (ele traduz os registros do banco de dados para objetos JavaScript para que possam ser utilizados pela aplicação):
### npm install --save mongoose

Incluir a conexão ao mongodb pelo mongoose de 2 formas:
- Se localmente:
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

- Se deploy:
mongoose.connect('mongodb://username:password@host:port/database?options...', {useNewUrlParser: true});

Para simular as requisições, pode ser utilizado o aplicativo "Insomnia Core", criar um Workspace, colocar o endereço do localhost com a rota (nesse caso "/metas"), e simular a requisição para ver o retorno.

Dependência que permite o acesso à API:
### npm install --save cors

