const express = require('express')
const AutorController = require('../controllers/AutorController')
const RevistaController = require('../controllers/RevistaController')
const EditoraController = require('../controllers/EditoraController')
const routes = express.Router()


/*Rotas do Projeto*/

routes

//autor
    .get('/autor', AutorController.index)
    .post('/autor', AutorController.create)
    .put('/autor/:nome_autor', AutorController.update)
    .delete('/autor/:nome_autor', AutorController.delete)

//revista
.get('/revista', RevistaController.index)
    .post('/revista', RevistaController.create)
    .put('/revista/:nome_revista', RevistaController.update)
    .delete('/revista/:nome_revista', RevistaController.delete)

//editora
.get('/editora', EditoraController.index)
    .post('/editora', EditoraController.create)
    .put('/editora/:nome_editora', EditoraController.update)
    .delete('/editora/:nome_editora', EditoraController.delete)


module.exports = routes