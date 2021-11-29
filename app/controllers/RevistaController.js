const knex = require('../database')

module.exports = {

    async index(req, res, next) {

        const resultado = await knex('revista')
        res.json(resultado)

    },

    async create(req, res, next) {

        try {

            await knex('revista').insert(req.body)

            return res.status(201).send({ status: "Revista Cadastrada com Sucesso." })

        } catch (error) {

            next(error)
        }
    },

    async update(req, res, next) {
        try {
            const { nome_revista } = req.params

            const codErro = await knex('revista').update(req.body).where({ nome_revista })

            if (codErro == 1) {
                return res.status(201).send({ status: "Alteração feita com suscesso." })
            } else {
                return res.status(401).send({ status: "Revista Não Encontrada." })
            }

        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { nome_revista } = req.params

            const codErro = await knex('revista').where({ nome_revista }).del()

            if (codErro == 1) {
                return res.send({ status: "Revista Excluída." }) // Satus 200 já é o status padrão
            } else {
                return res.status(401).send({ status: "Revista Não Encontrada." })
            }

        } catch (error) {
            next(error)
        }
    }

}