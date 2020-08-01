const Link = require('../models/link')

function create(req, res) {
    res.json({ message: 'Link - Create' })
}

function findAll(req, res) {
    res.json({ message: 'Link - find All' })
}
function findById(req, res) {
    res.json({ message: 'Link - find by id' })
}

function update(req, res) {
    res.json({ message: 'Link - update' })
}

function remove(req, res) {
    res.json({ message: 'Link - delete' })
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
}

