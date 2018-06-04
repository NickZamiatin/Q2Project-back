const knex = require('../database');

const index = () =>
    knex('cookings')
    .then(rows => rows)
    .catch(error => {
        console.error(error);
    });

const show = id =>
    knex('cookings')
    .where('id', id)
    .then(rows => rows[0])
    .catch(error => {
        console.error(error);
    })

const create = data =>
    knex('cookings')
    .returning('*')
    .insert(data)
    .then(rows => rows[0])
    .catch(error => {
        console.error(error);
    })

const update = (id, data) =>
    knex('cookings')
    .returning('*')
    .where('id', id)
    .update(data)
    .then(rows => rows[0])
    .catch(error => {
        console.error(error)
    })

const destroy = id =>
    knex('cookings')
    .returning('*')
    .where('id', id)
    .del()
    .then(rows => rows[0])
    .catch(error => {
        console.error(error);
    })

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};