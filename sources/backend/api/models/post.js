const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: Date
})

module.exports = mongoose.model('Post', postSchema)