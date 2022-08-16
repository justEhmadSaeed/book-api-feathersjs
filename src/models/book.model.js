/* eslint-disable no-console */

// book-model.js - A KnexJS
//
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'books';
  db.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      db.schema
        .createTable(tableName, (table) => {
          table.increments('id').primary();
          table.string('author');
          table.string('title');
        })
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e) =>
          console.error(`Error creating ${tableName} table`, e)
        );
    }
  });

  return db;
};
