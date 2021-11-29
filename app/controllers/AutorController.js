const knex = require('../database')

module.exports = {

    async index(req, res, next) {

        const resultado = await knex('autor')
        res.json(resultado)

    },

    async create(req, res, next) {

        try {

            await knex('autor').insert(req.body)

            return res.status(201).send({ status: "Autor Cadastrado com Sucesso." })

        } catch (error) {

            next(error)
        }
    },

    async update(req, res, next) {
        try {

            const { nome_autor } = req.params
            const codErro = await knex('autor').update(req.body).where({ nome_autor })

            if (codErro == 1) {
                return res.status(201).send({ status: "Alteração feita com suscesso." })
            } else {
                return res.status(401).send({ status: "Autor Não Encontrado." })
            }

        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { nome_autor } = req.params

            const codErro = await knex('autor').where({ nome_autor }).del()

            if (codErro == 1) {
                return res.send({ status: "Autor Excluído." }) // Satus 200 já é o status padrão
            } else {
                return res.status(401).send({ status: "Autor Não Encontrado." })
            }

        } catch (error) {
            next(error)
        }
    }

}