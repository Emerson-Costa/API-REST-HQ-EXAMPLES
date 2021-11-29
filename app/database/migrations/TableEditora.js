exports.up = knex => knex.schema.createTable('editora', table => {
    table.text('nome_editora').primary().notNullable()
    table.text('preco').notNullable()
    table.text('CNPJ').notNullable()


    table.text('nome_revista')
        .references('revista.nome_revista')
        .notNullable()
        .onDelete('CASCADE')


    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})

exports.down = (knex) => knex.schema.dropTable('editora')