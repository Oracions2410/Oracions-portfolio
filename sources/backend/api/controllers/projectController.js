const Project = require('../models/project')

function create(req, res) {
    res.json({ message: 'Project - Create' })
}

function findAll(req, res) {
    res.json({ message: 'Project - find All' })
}
function findById(req, res) {
    res.json({ message: 'Project - find by id' })
}

function update(req, res) {
    res.json({ message: 'Project - update' })
}

function remove(req, res) {
    res.json({ message: 'Project - delete' })
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
}

