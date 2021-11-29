exports.seed = function(knex) {
    // Exclui as informações (seeds) que estão na tabela
    return knex('editora').del()
        .then(function() {
            // Insere as Informações (seeds) na Tabela
            return knex('editora').insert([
                { nome_editora: 'Globo', CNPJ: 'XX. XXX. XXX/0001-XX', preco: 'R$ 05,00', nome_revista: 'Turma da Mônica' },
                { nome_editora: 'Shonen Jump', CNPJ: 'XX. XXX. XXX/0002-XX', preco: 'R$ 20,00', nome_revista: 'Yu Yu Hakusho' },
                { nome_editora: 'Capivara', CNPJ: 'XX. XXX. XXX/0003-XX', preco: 'R$ 3,00', nome_revista: 'Super Emerson' }

            ]);
        });
};