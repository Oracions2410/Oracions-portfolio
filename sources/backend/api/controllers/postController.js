const Post = require('../models/post')

function create(req, res) {
    res.json({ message: 'Post - Create' })
}

function findAll(req, res) {
    res.json({ message: 'Post - find All' })
}
function findById(req, res) {
    res.json({ message: 'Post - find by id' })
}

function update(req, res) {
    res.json({ message: 'Post - update' })
}

function remove(req, res) {
    res.json({ message: 'Post - delete' })
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
}

