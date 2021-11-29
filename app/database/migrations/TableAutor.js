exports.up = knex => knex.schema.createTable('autor', table => {
    table.text('nome_autor').primary().notNullable()
    table.text('data_nasc').notNullable()
    table.text('cidade').notNullable()


    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

})

exports.down = (knex) => knex.schema.dropTable('autor')