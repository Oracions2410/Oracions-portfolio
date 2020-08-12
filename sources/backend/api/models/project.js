const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    devDate: { type: Date, required: true, default: Date.now() },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: Date
})

module.exports = mongoose.model('Project', projectSchema)