const File = require('../models/file')

function create(req, res) {
    res.json({ message: 'File - Create' })
}

function findAll(req, res) {
    res.json({ message: 'File - find All' })
}
function findById(req, res) {
    res.json({ message: 'File - find by id' })
}

function update(req, res) {
    res.json({ message: 'File - update' })
}

function remove(req, res) {
    res.json({ message: 'File - delete' })
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
}

