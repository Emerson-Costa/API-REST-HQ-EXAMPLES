exports.seed = function(knex) {
    // Exclui as informações (seeds) que estão na tabela
    return knex('autor').del()
        .then(function() {
            // Insere as Informações (seeds) na Tabela
            return knex('autor').insert([
                { nome_autor: 'Maurício de Souza', data_nasc: '03/04/1960', cidade: 'São Paulo (SP)' },
                { nome_autor: 'Yoshiro Togashi', data_nasc: '02/05/1970', cidade: 'Tókio' },
                { nome_autor: 'Emerson Masterson', data_nasc: '27/09/1985', cidade: 'Belo Horizonte (MG)' }
            ]);
        });
};