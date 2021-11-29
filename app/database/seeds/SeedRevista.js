exports.seed = function(knex) {
    // Exclui as informações (seeds) que estão na tabela
    return knex('revista').del()
        .then(function() {
            // Insere as Informações (seeds) na Tabela
            return knex('revista').insert([
                { nome_revista: 'Turma da Mônica', genero_revista: 'Aventura, Comédia', nome_autor: 'Maurício de Souza' },
                { nome_revista: 'Yu Yu Hakusho', genero_revista: 'Ação, Aventura, Comédia', nome_autor: 'Yoshiro Togashi' },
                { nome_revista: 'Super Emerson', genero_revista: 'Ação, Aventura, Comédia', nome_autor: 'Emerson Masterson' }
            ]);
        });
};