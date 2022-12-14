require('dotenv').config();

module.exports = {
  host: 'localhost',
  port: 3030,
  public: '../public/',
  paginate: {
    default: 10,
    max: 50,
  },
  postgres: {
    client: 'pg',
    connection: 'DATABASE_STRING',
  },
};
