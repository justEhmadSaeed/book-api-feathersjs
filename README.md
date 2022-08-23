# book-api-feathers

> A simple Books API, built using feathers.js and postgresql

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Installation

- Clone the repository.
- Install [PostgreSQL App](https://postgresapp.com/downloads.html) and create a database.
- Make an environment variable of `DATABASE_STRING` in .env file and store your connection string inside it.
- Install npm packages

  ```bash
  # npm
  npm install
  # yarn
  yarn
  ```

- Install knex CLI globally.
  ```bash
  npm install -g knex
  # if using yarn
  yarn global add knex
  ```
- Run the following command to migrate the table schema:

  ```bash
  knex migrate:latest
  ```

- Run backend server by the following commands:
  ```bash
  npm run dev
  # if using yarn
  yarn dev
  ```

## API Endpoints

- Post a book

  ```
  book
  body: {title, author}
  ```

- Get All books

  ```
  book
  ```

- Get a book by Id

  ```
  book/:bookId
  ```

- Delete a book

  ```
  book/:bookId
  ```

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

   ```
   cd path/to/book-api-feathers
   npm install
   ```

3. Start your app

   ```bash
   npm start
   ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```bash
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
