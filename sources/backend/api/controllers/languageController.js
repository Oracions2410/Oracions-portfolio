const Language = require('../models/language')

function create(req, res) {
    res.json({ message: 'Language - Create' })
}

function findAll(req, res) {
    res.json({ message: 'Language - find All' })
}
function findById(req, res) {
    res.json({ message: 'Language - find by id' })
}

function update(req, res) {
    res.json({ message: 'Language - update' })
}

function remove(req, res) {
    res.json({ message: 'Language - delete' })
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
}

