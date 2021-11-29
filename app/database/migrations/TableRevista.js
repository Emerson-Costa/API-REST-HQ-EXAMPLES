exports.up = knex => knex.schema.createTable('revista', table => {
    table.text('nome_revista').primary().notNullable()
    table.text('genero_revista').notNullable()


    table.text('nome_autor')
        .references('autor.nome_autor')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = (knex) => knex.schema.dropTable('revista')