module.exports = {
    async index(req, res, next) {

        res.json({
            "Desenvolvedor": "Emerson Costa",
            "Instruções": "Siga as Instruções Contidas na Documentação Desta API",
            "Link da Documentacao": "https://github.com/Emerson-Costa/API-REST-HQ-EXAMPLES#readme"
        })

    }
}