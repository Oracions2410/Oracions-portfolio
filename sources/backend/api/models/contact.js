const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: { type: String, required: true },
    object: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now() },
    updatedAt: Date
})

module.exports = mongoose.model('Contact', contactSchema)