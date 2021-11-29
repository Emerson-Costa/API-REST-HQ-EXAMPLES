const knex = require('../database')

module.exports = {

    async index(req, res, next) {

        const resultado = await knex('editora')
        res.json(resultado)

    },

    async create(req, res, next) {

        try {

            await knex('editora').insert(req.body)

            return res.status(201).send({ status: "Editora Cadastrada com Sucesso." })

        } catch (error) {

            next(error)
        }
    },

    async update(req, res, next) {
        try {
            const { nome_editora } = req.params

            const codErro = await knex('editora').update(req.body).where({ nome_editora })

            if (codErro == 1) {
                return res.status(201).send({ status: "Alteração feita com suscesso." })
            } else {
                return res.status(401).send({ status: "Editora Não Encontrada." })
            }

        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { nome_editora } = req.params

            const codErro = await knex('editora').where({ nome_editora }).del()

            if (codErro == 1) {
                return res.send({ status: "Editora Excluída." }) // Satus 200 já é o status padrão
            } else {
                return res.status(401).send({ status: "Editora Não Encontrada." })
            }

        } catch (error) {
            next(error)
        }
    }

}