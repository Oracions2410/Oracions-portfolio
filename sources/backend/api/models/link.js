const mongoose = require('mongoose')

const linkSchema = mongoose.Schema({
    url: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: Date
})

module.exports = mongoose.model('Link', linkSchema)