# hapi-boilerplate

## Vagrant development box

The Vagrant setup contains a provisioning script in *vagrant-setup/bootstrap.sh* that adds a few backing services to develop against. These include:

  * Node - Version 5 with supporting npm packages *node-gyp* and *bcrypt*
  * g++ & build-essential - required for node-gyp. Useful for common auth functions like signing JWTs
  * Postrges - Edit *vagrant-setup/bootstrap.sh* to setup version and DB info
  * Redis - Available on localhost port 6379 in vagrant box. E.g. `const redisClient = redis.createClient(6379, 'localhost');`

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

Then browse to http://localhost:4000 and begin hacking.
