# hapi-vagrant-boilerplate

A complete development environment for Hapi based projects.

### Main features

* ES6 Hapi development via Babel
* Configurable Vagrant box with PostgreSQL and Redis

## Vagrant development box

The Vagrant setup contains a provisioning script in *vagrant-setup/bootstrap.sh* that adds a few backing services to develop against. These include:

  * **Node** - Version 5 with supporting npm packages *node-gyp* and *bcrypt*
  * **g++ & build-essential** - Required for node-gyp. Useful for common auth functions like signing JWTs
  * **Postrges** - Edit *vagrant-setup/bootstrap.sh* to setup version and DB info
  * **Redis** - Available on localhost port 6379 in vagrant box. E.g. `const redisClient = redis.createClient(6379, 'localhost');`
  * **Anything you want** - Just add the requisite bash commands to *vagrant-setup/bootstrap.sh* to install anything else you need

### Starting Vagrant box

1. `git clone https://github.com/jgallow/hapi-vagrant-boilerplate.git && cd hapi-vagrant-boilerplate`
2. `npm install`
3. Modify *vagrant-setup/bootstrap.sh* with desired Postgres settings
4. `vagrant up`
5. `vagrant ssh`
6. `cd /mnt/bootstrap && npm start`

If you don't need the Vagrant box you can just:

1. `git clone https://github.com/jgallow/hapi-vagrant-boilerplate.git && cd hapi-vagrant-boilerplate`
2. `npm install`
3. `npm start`

**Note:** Uses nodemon to automatically restart server on changes so if you don't yet have it installed globally do so with `npm install nodemon -g`

Then browse to `http://localhost:4000` and begin hacking.

## Connecting to Postgres

We're using dotenv to manage environment variables so all you have to do is update `DB_CONNECTION_STRING` in the *.env* file to match any modifications you made in *vagrant-setup/bootstrap.sh* above. Once this is done the connection string will be available on `process.env.DB_CONNECTION_STRING`.

```javascript
// requires pg & knex packages to be installed
const db = require('knex')({
  client: 'pg',
  connection: process.env.DB_CONNECTION_STRING,
  searchPath: 'knex,public'
});
```

### Managing Postgres from local machine

Vagrant will pass the Postgres port through to the local machine on port 15432 so you can manage your databases with any local tools (PGAdmin3, ect) using `host: localhost` and `port: 15432`.
