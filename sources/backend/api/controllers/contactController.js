const Contact = require('../models/contact')
const routeConstants = require('../constants/routeContantes')
const textConstants = require('../constants/text')
const { maxLen, minLen, validateEmail } = require('../helpers/validator')



function create(req, res) {
    const { name, email, object, message } = req.body

    if (!(name && email && object && message)) {
        return res.status(400).json({ error: `${textConstants.ALL_FIELS_MUST_BE_PROVIDE_TEXT_ERROR} (name, object, email, message)` })
    }

    //--------------- Validation -------------------------------------------------------
    const MaxLenValidate = maxLen({ name, object, email, message })
    if (!MaxLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
    }

    const minLenValidate = minLen({ name, object, email, message })
    if (!minLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
    }

    if (!(name || object || email || message)) {
        return res.status(400).json({ message: `${textConstants.UNDEFIED_FIELDS_TEXT_ERROR} (name, object, email, message)` })
    }
    //-------X------- Validation -----------------X-------------------------------------


    // --------------------- Email validation -----------------------------------------
    if (!validateEmail(email)) return res.status(400).json({ error: `${textConstants.INVALID_EMAIL_TEXT_ERROR}` })


    const newContact = new Contact({ name, email, object, message })
    newContact.save()
        .then(result => {
            res.status(200).json({
                message: textConstants.ENTRY_CREATED_TEXT,
                newContact: {
                    name: newContact.name,
                    object: newContact.object,
                    email: newContact.email,
                    message: newContact.message,
                    request: {
                        type: 'GET',
                        url: `${req.protocol}://${req.get('host') + routeConstants.CONTACT_BASE_END_POINT}`
                    }
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}




function findAll(req, res) {
    Contact.find()
        .then(contacts => {
            console.log(contacts)

            if (contacts.length === 0) {
                return res.status(200).json({
                    count: 0,
                    message: textConstants.NOT_ENTRY_FOUND
                })
            }

            res.status(200).json({
                count: contacts.length,
                contacts: contacts.map(contact => {
                    const { _id, name, object, email, message, createdAt, updatedAt } = contact
                    return {
                        _id, name, object, email, message, createdAt, updatedAt, request: {
                            type: 'GET',
                            url: `${req.protocol}://${req.get('host') + routeConstants.CONTACT_BASE_END_POINT}/${_id}`
                        }
                    }
                })
            })

        })
        .catch(error => {
            res.status(500).json({ error })
            console.log(error)
        })
}




function findById(req, res) {
    const contactId = req.params.contactId

    Contact.findOne({ _id: contactId })
        .then(contact => {
            if (contact) {
                console.log(contact)

                const { _id, name, object, email, message, createdAt, updatedAt } = contact
                res.status(200).json({
                    _id, name, object, email, message, createdAt, updatedAt, request: {
                        type: 'GET',
                        url: `${req.protocol}://${req.get('host') + routeConstants.CONTACT_BASE_END_POINT}`
                    }
                })

            } else {
                res.status(404).json({
                    message: `${textConstants.NOT_ENTRY_FOUND} - ID: ${contactId}`
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}




function update(req, res) {
    const contactId = req.params.contactId

    const { name, object, email, message } = req.body

    //--------------- Validation -------------------------------------------------------
    const MaxLenValidate = maxLen({ name, object, email, message })
    if (!MaxLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
    }

    const minLenValidate = minLen({ name, object, email, message })
    if (!minLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
    }

    if (!(name || object || email || message)) {
        return res.status(400).json({ message: `${textConstants.UNDEFIED_FIELDS_TEXT_ERROR} (name, object, email, message)` })
    }
    //-------X------- Validation -----------------X-------------------------------------

    const toUpdate = { updatedAt: Date.now() }
    const keys = Object.keys(req.body)

    if (keys.includes('name')) toUpdate.name = name
    if (keys.includes('object')) toUpdate.object = object
    if (keys.includes('message')) toUpdate.message = message

    if (keys.includes('email')) {
        if (validateEmail(email)) toUpdate.email = email
        else return res.status(400).json({ error: `${textConstants.INVALID_EMAIL_TEXT_ERROR}` })
    }


    Contact.updateOne({ _id: contactId }, { $set: toUpdate })
        .then(result => {
            res.status(200).json({
                message: `${textConstants.ENTRY_UPDATED_TEXT}`,
                request: {
                    type: 'GET',
                    url: `${req.protocol}://${req.get('host') + routeConstants.CONTACT_BASE_END_POINT}/${contactId}`
                }
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })

}




function remove(req, res) {
    const { contactId } = req.params
    Contact.deleteOne({ _id: contactId })
        .then(result => {
            console.log('Contact Deleted')
            res.status(200).json({
                message: textConstants.ENTRY_DELTED_TEXT,
                request: {
                    type: 'GET',
                    body: {
                        name: 'String',
                        object: 'String',
                        email: 'String',
                        message: 'String'
                    },
                    url: `${req.protocol}://${req.get('host') + routeConstants.CONTACT_BASE_END_POINT}`

                }
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
}

