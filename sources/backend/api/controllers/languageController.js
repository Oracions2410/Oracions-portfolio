const Language = require('../models/language')
const routeConstants = require('../constants/routeContantes')
const textConstants = require('../constants/text')
const { maxLen, minLen } = require('../helpers/validator')



function create(req, res) {
    const { description, name } = req.body

    if (!(description && name)) {
        return res.status(400).json({ error: `${textConstants.ALL_FIELS_MUST_BE_PROVIDE_TEXT_ERROR} (description, name)` })
    }

    //--------------- Validation -------------------------------------------------------
    const MaxLenValidate = maxLen({ description, name })
    if (!MaxLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
    }

    const minLenValidate = minLen({ description, name })
    if (!minLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
    }

    if (!(description || name)) {
        return res.status(400).json({ message: `${textConstants.UNDEFIED_FIELDS_TEXT_ERROR} (description, name)` })
    }
    //-------X------- Validation -----------------X-------------------------------------


    const newLanguage = new Language({ description, name })

    newLanguage.save()
        .then(result => {

            res.status(201).json({
                message: `Lien ${textConstants.ENTRY_CREATED_TEXT}`,
                newLang: {
                    description: newLanguage.description,
                    name: newLanguage.name,
                    request: {
                        type: 'GET',
                        url: `${req.protocol}://${req.get('host') + routeConstants.LANGUAGE_BASE_END_POINT}`
                    }
                }
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}

function findAll(req, res) {
    Language.find()
        .then(languages => {
            console.log(languages)

            if (languages.length === 0) {
                return res.status(200).json({
                    count: 0,
                    message: textConstants.NOT_ENTRY_FOUND
                })
            }

            res.status(200).json({
                count: languages.length,
                links: languages.map(language => {
                    const { _id, description, name, createdAt, updatedAt } = language
                    return {
                        _id, description, name, createdAt, updatedAt, request: {
                            type: 'GET',
                            name: `${req.protocol}://${req.get('host') + routeConstants.LANGUAGE_BASE_END_POINT}/${_id}`
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
    const langId = req.params.langId

    Language.findOne({ _id: langId })
        .then(language => {
            if (language) {
                console.log(language)

                const { _id, description, name, createdAt, updatedAt } = language
                res.status(200).json({
                    _id, description, name, createdAt, updatedAt, request: {
                        type: 'GET',
                        url: `${req.protocol}://${req.get('host') + routeConstants.LANGUAGE_BASE_END_POINT}`
                    }
                })

            } else {
                res.status(404).json({
                    message: `${textConstants.NOT_ENTRY_FOUND} - ID: ${langId}`
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}





function update(req, res) {
    const langId = req.params.langId

    const { description, name } = req.body

    //--------------- Validation -------------------------------------------------------
    const MaxLenValidate = maxLen({ description, name })
    if (!MaxLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
    }

    const minLenValidate = minLen({ description, name })
    if (!minLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
    }

    if (!(description || name)) {
        return res.status(400).json({ message: `${textConstants.UNDEFIED_FIELDS_TEXT_ERROR} (description, name)` })
    }
    //-------X------- Validation -----------------X-------------------------------------

    const toUpdate = { updatedAt: Date.now() }
    const keys = Object.keys(req.body)

    if (keys.includes('description')) toUpdate.description = description
    if (keys.includes('name')) toUpdate.name = name


    Language.updateOne({ _id: langId }, { $set: toUpdate })
        .then(result => {
            res.status(200).json({
                message: `${textConstants.ENTRY_UPDATED_TEXT}`,
                request: {
                    type: 'GET',
                    url: `${req.protocol}://${req.get('host') + routeConstants.LANGUAGE_BASE_END_POINT}/${langId}`
                }
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}

function remove(req, res) {
    const langId = req.params.langId
    Language.deleteOne({ _id: langId })
        .then(result => {
            console.log('Language Deleted')
            res.status(200).json({
                message: textConstants.ENTRY_DELTED_TEXT,
                request: {
                    type: 'POST',
                    body: {
                        description: 'String',
                        name: 'String',
                    },
                    url: `${req.protocol}://${req.get('host') + routeConstants.LANGUAGE_BASE_END_POINT}`

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

