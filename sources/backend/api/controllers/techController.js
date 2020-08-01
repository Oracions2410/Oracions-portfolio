const Tech = require('../models/tech')

function create(req, res) {
    res.json({ message: 'Tech - Create' })
}

function findAll(req, res) {
    res.json({ message: 'Tech - find All' })
}
function findById(req, res) {
    res.json({ message: 'Tech - find by id' })
}

function update(req, res) {
    res.json({ message: 'Tech - update' })
}

function remove(req, res) {
    res.json({ message: 'Tech - delete' })
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
}

