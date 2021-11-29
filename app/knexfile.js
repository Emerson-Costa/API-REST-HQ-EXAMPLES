// Update with your config settings.

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './app/database/db.sqlite3'
        },

        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/app/database/migrations`
        },

        seeds: {
            directory: `${__dirname}/app/database/seeds`
        },
        useNullAsDefault: true
    }
};