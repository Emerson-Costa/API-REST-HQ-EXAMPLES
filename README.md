# 												Projeto HqRestAPIshow



## A Ideia

A ideia foi desenvolver uma API básica de um sistema voltado para cadastro de HQ (História em Quadrinhos), onde contém três tipos de </br> 
entidades, O autor o responsável pela produção da HQ, a revista ou seja a HQ que o autor criou e a Editora onde a mesma é a responsável</br>
pelo cadastro das HQs de vários autores, segue abaixo o modelo criado para o desenvolvimento desta API.

![modeloBD](modeloBD.PNG)



## Dependências Do projeto

Neste projeto foram utilizados as seguintes libs:

* <b>express</b>

  * Um Framework para desenvolvimento voltado para web, bastante flexível para ajudar no desenvolvimento deste projeto.

* <b>Knex</b>

  * Vai ajudar a fazer a  conexão e a criação da base de dados deste projeto, além, de ajudar nas consultas SQL, o Knex foi 

    projetado para ser bastante flexível, portátil e de fácil utilização para mais detalhe consulte a documentação da ferramenta

    no site (<i>https://knexjs.org/</i>).

* <b>sqlite3</b>

  * Base de dados escolhida para fazer o armazenamento de dados deste projeto, como se trata de um projeto simples onde 

    não vai conter uma grande base de dados, o sqlite3 foi escolho para armazenar os dados das três entidades escolhidas 

    para este projeto.
    
    
  
* <b><i>Nodemon</i></b>

  * Consiste em uma lib que vai manter a execução do server sem precisar reiniciar o mesmo quando for alterado algo no projeto.

     


## Desenvolvimento e Padrões

O padrão de desenvolvimento adotado para a organização este projeto é o MVC (Model View Control), lógico por se tratar de uma API, lado backend do projeto logo não teremos a parte da View, mas enfim, o projeto foi dividido dentro do diretório 'app' contendo a seguinte estrutura:

*  <b>Diretório controllers</b>

  * Aqui foi criado os arquivos responsáveis por fazer o CRUD do nosso projeto, cada controller representa uma entidade do projeto, entidades que

    são o Autor, a Revista e a Editora onde os dados estão armazenados prontos para sofrerem as modificações conforme a necessidade do usuário

    que vai testar esta API. 

    

* <b>Diretório database</b>

  * Aqui foi criado o banco de dados, as tabelas que estão em um sub-diretório desta pasta chamada <b><i>'migrations'</i></b>, as migrações se tratam das tabelas do banco de dados deste projeto, a criação destas migrações foram feitas através da lib 'knex',  onde deixou mais simples a criação de tabela utilizando arquivo '.js' , a ideia foi evitar escrever Query de criação para deixar o código mais legível e evitar possíveis trabalhos na hora da modificação de algum determinado parâmetro, para facilitar no pré-preenchimento desta tabela foi criado um outro sub-diretório chamado <b><i>'seeds'</i></b>, sementes no inglês, também se trata de um arquivo '.js' onde facilita a inserção de dados nas tabelas deste projeto, dentro deste arquivo foram cadastrados dados para que 

    a  API deste projeto tivesse no mínimo algumas linhas de dados cada tabela do banco de dados.  

    

* <b>Diretório routes</b>

  * Aqui foram separadas as rotas de acesso aos dados da API deste projeto. 

    

* <b>Arquivo server.js</b>

  * Um arquivo que vai fazer a criação de um servidor executando em uma determinada porta na web, aqui será a porta de entrada para a execução desta API.

    

* <b>Arquivo knexfile.js</b>

  * Nesta parte que se encontra toda a configuração com o Banco de Dados e os diretórios de armazenamento de dados e criação escolhidos para este projeto.
  
    
  
* <b>Diretório insomnia</b>

  *  onde estão armazenados os documentos do insomnia para fazer a importação das requições para fazer o teste desta API, caso não prefira utilizar deste pacote, pule pra o tópico 'Como executar este Projeto', onde é informado as URLs para fazer as requisições nesta api



## Dificuldades encontradas ao longo do desenvolvimento

​	As dificuldades encontradas durante o desenvolvimento do projeto foi a escolha do driver que faz a conexão com o Banco, pois no início eu tinha optado por fazer com a lib 'sequelize', mas eu estive tendo problema com a conexão coma mesma na base de dados mysql, conseguir conectar com o postegres via 'knex', más eu achei irrelevante utilizar uma base de dados como o postegres em um projeto exemplo como este, mais por conta que eu fazia a ligação do banco com um container puxado via docker, então optei pelo uso do sqlite por tratar de pequenos volumes de dados por ser um projeto de amostra. Uma outra dificuldade foi em fazer o deploy do projeto no firebase, pois os planos que a plataforma dispões são pagos, então optei por implantar o sistema no heroku.

​	

## Como Executar este Projeto

Execute os seguites comandos:

* 1° $ npm install    *(para instalar os módulos do node)*

* 2° $ npm run start *(para executar esta API localmente)*

  

## links para requisição HTTP  

<i>Link do Servidor  :</i> Pode ser requisitado sem o uso deste projeto com a API funcionando direto no Heroku

<i>Link do Localhost:</i> Só pode ser requisitado com a execução deste projeto



* <b>autor</b>

  * .get

    * *link do Servidor   : https://hqrestapishow.herokuapp.com/autor*
    * *Link do Localhost: http://localhost:5000/*

  * .post

    * *link do Servidor   :  https://hqrestapishow.herokuapp.com/autor*
    * *Link do Localhost: http://localhost:5000/*

  * .put

    * *link do Servidor   :  https://hqrestapishow.herokuapp.com/autor/<nome-autor>*
    * *Link do Localhost: http://localhost:5000/*

  * .delete

    * *link do Servidor   :  https://hqrestapishow.herokuapp.com/autor/<nome-autor>*
    * *Link do Localhost: http://localhost:5000/*
    
    

* <b>revista</b>

  * .get
    * *link do Servidor   : https://hqrestapishow.herokuapp.com/revista*
    * *Link do Localhost: http://localhost:5000/revista*
    
  * .post
    * *link do Servidor   : https://hqrestapishow.herokuapp.com/revista*
    * *Link do Localhost: http://localhost:5000/revista*
    
  * .put
    * *link do Servidor   :  https://hqrestapishow.herokuapp.com/revista/<nome-revista>*
    * *Link do Localhost: http://localhost:5000/revista/<nome-revista>*
    
  * .delete
    * *link do Servidor   : https://hqrestapishow.herokuapp.com/revista/<nome-revista>*
    * *Link do Localhost: http://localhost:5000/revista/<nome-revista>*
    
    

* <b>editora</b>

  * .get
    * *link do Servidor   : https://hqrestapishow.herokuapp.com/editora*
    * *Link do Localhost: http://localhost:5000/editora*
  * .post
    * *link do Servidor   :  https://hqrestapishow.herokuapp.com/editora*
    * *Link do Localhost: http://localhost:5000/editora*
  * .put
    * *link do Servidor   : https://hqrestapishow.herokuapp.com/editora/<nome-editora>*
    * *Link do Localhost: http://localhost:5000/editora/<nome-editora>*
  * .delete
    * *link do Servidor   : https://hqrestapishow.herokuapp.com/editora/<nome-editora>* 
    * *Link do Localhost: http://localhost:5000/editora/<nome-editora>*



## Link do Repositório no Heroku

Vale ressaltar que o link para fazer o CRUD é modificado pelo fato do projeto esta hospedado em um outro servidor, portanto ao invés de usar o '[localhost:3000](editora/<nome-editora>)' utilize o 'https://hqrestapishow.herokuapp.com/ '.

por exemplo, para o get na  Entidade do autor basta informa na URL :  ' https://hqrestapishow.herokuapp.com/autor' e assim sucessivamente para todas as demais URLs para a requisição deste projeto. 

Link para o repositório deste projeto: ' https://hqrestapishow.herokuapp.com/ '





