const Tech = require('../models/tech')
const routeConstants = require('../constants/routeContantes')
const textConstants = require('../constants/text')
const { maxLen, minLen } = require('../helpers/validator')



function create(req, res) {
    const { description, name, experience, language } = req.body

    if (!(description && name && experience && language)) {
        return res.status(400).json({ error: `${textConstants.ALL_FIELS_MUST_BE_PROVIDE_TEXT_ERROR} (description, name, experience, language)` })
    }

    //--------------- Validation -------------------------------------------------------
    const MaxLenValidate = maxLen({ description, name, experience, language })
    if (!MaxLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
    }

    const minLenValidate = minLen({ description, name, experience, language })
    if (!minLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
    }

    if (!(description || name || experience || language)) {
        return res.status(400).json({ message: `${textConstants.UNDEFIED_FIELDS_TEXT_ERROR} (description, name, experience, language)` })
    }
    //-------X------- Validation -----------------X-------------------------------------


    const newTech = new Tech({ description, name, experience, language })

    newTech.save()
        .then(result => {

            res.status(201).json({
                message: `Technologie ${textConstants.ENTRY_CREATED_TEXT}`,
                newTechnologie: {
                    name: newTech.name,
                    description: newTech.description,
                    language: newTech.language,
                    experience: newTech.experience,
                    request: {
                        type: 'GET',
                        url: `${req.protocol}://${req.get('host') + routeConstants.TECH_BASE_END_POINT}`
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
    Tech.find()
        .populate('language', '_id name description createdAt')
        .then(techs => {
            console.log(techs)

            if (techs.length === 0) {
                return res.status(200).json({
                    count: 0,
                    message: textConstants.NOT_ENTRY_FOUND
                })
            }

            res.status(200).json({
                count: techs.length,
                technologies: techs.map(tech => {
                    const { _id, description, name, language, experience, createdAt, updatedAt } = tech
                    return {
                        _id, name, description, language, experience, createdAt, updatedAt, request: {
                            type: 'GET',
                            name: `${req.protocol}://${req.get('host') + routeConstants.TECH_BASE_END_POINT}/${_id}`
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
    const techId = req.params.techId

    Tech.findOne({ _id: techId })
        .populate('language', '_id name description createdAt')
        .then(tech => {
            if (tech) {
                console.log(tech)

                const { _id, name, description, language, experience, createdAt, updatedAt } = tech
                res.status(200).json({
                    _id, name, description, language, experience, createdAt, updatedAt, request: {
                        type: 'GET',
                        url: `${req.protocol}://${req.get('host') + routeConstants.TECH_BASE_END_POINT}`
                    }
                })

            } else {
                res.status(404).json({
                    message: `${textConstants.NOT_ENTRY_FOUND} - ID: ${tecgId}`
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}





function update(req, res) {
    const techId = req.params.techId

    const { description, name, language, experience } = req.body

    //--------------- Validation -------------------------------------------------------
    const MaxLenValidate = maxLen({ description, name, language, experience })
    if (!MaxLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
    }

    const minLenValidate = minLen({ description, name, language, experience })
    if (!minLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
    }

    if (!(description || name || experience || language)) {
        return res.status(400).json({ message: `${textConstants.UNDEFIED_FIELDS_TEXT_ERROR} (description, name, language, experience)` })
    }
    //-------X------- Validation -----------------X-------------------------------------

    const toUpdate = { updatedAt: Date.now() }
    const keys = Object.keys(req.body)

    if (keys.includes('description')) toUpdate.description = description
    if (keys.includes('name')) toUpdate.name = name
    if (keys.includes('language')) toUpdate.language = language
    if (keys.includes('experience')) toUpdate.experience = experience


    Tech.updateOne({ _id: techId }, { $set: toUpdate })
        .then(result => {
            res.status(200).json({
                message: `${textConstants.ENTRY_UPDATED_TEXT}`,
                request: {
                    type: 'GET',
                    url: `${req.protocol}://${req.get('host') + routeConstants.TECH_BASE_END_POINT}/${techId}`
                }
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}





function remove(req, res) {
    const techId = req.params.techId
    Tech.deleteOne({ _id: techId })
        .then(result => {
            console.log('Technology Deleted')
            res.status(200).json({
                message: textConstants.ENTRY_DELTED_TEXT,
                request: {
                    type: 'POST',
                    body: {
                        description: 'String',
                        name: 'String',
                        experience: 'Number',
                        language: 'Language _id'
                    },
                    url: `${req.protocol}://${req.get('host') + routeConstants.TECH_BASE_END_POINT}`

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