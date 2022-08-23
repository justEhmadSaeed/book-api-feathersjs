/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const tableName = 'books';

exports.up = function (knex) {
  return knex.schema
    .createTable(tableName, (table) => {
      table.increments('id').primary();
      table.string('author');
      table.string('title');
    })
    .then(() => console.log(`Created ${tableName} table`))
    .catch((e) =>
      console.error(`Error creating ${tableName} table`, e)
    );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
