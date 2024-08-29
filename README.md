# 												Projeto HqRestAPIshow



## A Ideia

A ideia foi desenvolver uma API básica de um sistema voltado para cadastro de HQ (História em Quadrinhos), onde contém três tipos de </br> 
entidades, O autor o responsável pela produção da HQ, a revista ou seja a HQ que o autor criou e a Editora onde a mesma é a responsável</br>
pelo cadastro das HQs de vários autores, segue abaixo o modelo criado para o desenvolvimento desta API.

![modeloBD](modeloBD.PNG)



## Dependências Do projeto

#### Tecnologias aplicadas neste projeto:

* <b>express</b>

  * Um Framework para desenvolvimento desta API.

* <b>Knex</b>

  * Conexão com o banco e migrações.

* <b>sqlite3</b>

  * Banco de dados incluso neste projeto. 
    
* <b><i>Nodemon</i></b>

  * Dependência voltada para manter o servidor do ar sem precisar ficar reiniciando a cada feature desenvolvida no projeto.

## Como Executar este Projeto

Execute os seguites comandos:

* 1° $ npm install    *(para instalar os módulos do node)*

* 2° $ npm run start *(para executar esta API localmente)*

  

## URL´s para testar as requisições HTTP  

* <b>autor</b>

  * .get
    * *URL do Localhost: http://localhost:5000/autor*

  * .post
    * *URL do Localhost: http://localhost:5000/autor*

  * .put
    * *URL do Localhost: http://localhost:5000/autor/<nome-autor>*

  * .delete
    * *URL do Localhost: http://localhost:5000/autor/<nome-autor>*
    
* <b>revista</b>
    * *Link do Localhost: http://localhost:5000/revista*
    
  * .post
    * *Link do Localhost: http://localhost:5000/revista*
    
  * .put
    * *Link do Localhost: http://localhost:5000/revista/<nome-revista>*
      
  * .delete
    * *Link do Localhost: http://localhost:5000/revista/<nome-revista>*
    
* <b>editora</b>

  * .get
    * *Link do Localhost: http://localhost:5000/editora*
      
  * .post
    * *Link do Localhost: http://localhost:5000/editora*
      
  * .put
    * *Link do Localhost: http://localhost:5000/editora/<nome-editora>*
      
  * .delete
    * *Link do Localhost: http://localhost:5000/editora/<nome-editora>*
