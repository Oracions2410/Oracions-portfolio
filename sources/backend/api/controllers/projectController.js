const Project = require('../models/project')
const routeConstants = require('../constants/routeContantes')
const textConstants = require('../constants/text')
const { maxLen, minLen } = require('../helpers/validator')


function create(req, res) {
    const { description, name, devDate } = req.body

    if (!(description && name)) {
        return res.status(400).json({ error: `${textConstants.ALL_FIELS_MUST_BE_PROVIDE_TEXT_ERROR} (description, name, devDate)` })
    }

    //--------------- Validation -------------------------------------------------------
    const MaxLenDescValidate = maxLen({ name })
    if (!MaxLenDescValidate.status) {
        return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
    }

    const MaxLenValidate = maxLen({ name }, 1000)
    if (!MaxLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
    }

    const minLenValidate = minLen({ description, name })
    if (!minLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
    }

    if (!(description || name || devDate)) {
        return res.status(400).json({ message: `${textConstants.UNDEFIED_FIELDS_TEXT_ERROR} (description, name, devDate)` })
    }

    if (devDate) {
        const MaxLenValidate = maxLen({ devDate })
        if (!MaxLenValidate.status) {
            return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
        }

        const minLenValidate = minLen({ devDate })
        if (!minLenValidate.status) {
            return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
        }
    }
    //-------X------- Validation -----------------X-------------------------------------


    const newProject = devDate ? new Project({ description, name, devDate }) : new Project({ description, name })

    newProject.save()
        .then(result => {

            res.status(201).json({
                message: `Lien ${textConstants.ENTRY_CREATED_TEXT}`,
                newProject: {
                    description: newProject.description,
                    name: newProject.name,
                    devDate: newProject.devDate,
                    request: {
                        type: 'GET',
                        url: `${req.protocol}://${req.get('host') + routeConstants.PROJECT_BASE_END_POINT}`
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
    Project.find()
        .then(projects => {
            console.log(projects)

            if (projects.length === 0) {
                return res.status(200).json({
                    count: 0,
                    message: textConstants.NOT_ENTRY_FOUND
                })
            }

            res.status(200).json({
                count: projects.length,
                projects: projects.map(project => {
                    const { _id, description, name, devDate, createdAt, updatedAt } = project
                    return {
                        _id, description, name, devDate, createdAt, updatedAt, request: {
                            type: 'GET',
                            url: `${req.protocol}://${req.get('host') + routeConstants.PROJECT_BASE_END_POINT}/${_id}`
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
    const projectId = req.params.projectId

    Project.findOne({ _id: projectId })
        .then(Project => {
            if (Project) {
                console.log(Project)

                const { _id, description, name, devDate, createdAt, updatedAt } = Project
                res.status(200).json({
                    _id, description, name, devDate, createdAt, updatedAt, request: {
                        type: 'GET',
                        url: `${req.protocol}://${req.get('host') + routeConstants.PROJECT_BASE_END_POINT}`
                    }
                })

            } else {
                res.status(404).json({
                    message: `${textConstants.NOT_ENTRY_FOUND} - ID: ${projectId}`
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}





function update(req, res) {
    const projectId = req.params.projectId

    const { description, name, devDate } = req.body

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
        return res.status(400).json({ message: `${textConstants.UNDEFIED_FIELDS_TEXT_ERROR} (description, name, devDate)` })
    }

    if (devDate) {
        const MaxLenValidate = maxLen({ devDate })
        if (!MaxLenValidate.status) {
            return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
        }

        const minLenValidate = minLen({ devDate })
        if (!minLenValidate.status) {
            return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
        }
    }
    //-------X------- Validation -----------------X-------------------------------------

    const toUpdate = { updatedAt: Date.now() }
    const keys = Object.keys(req.body)

    if (keys.includes('description')) toUpdate.description = description
    if (keys.includes('name')) toUpdate.name = name
    if (keys.includes('devDate')) toUpdate.devDate = devDate


    Project.updateOne({ _id: projectId }, { $set: toUpdate })
        .then(result => {
            res.status(200).json({
                message: `${textConstants.ENTRY_UPDATED_TEXT}`,
                request: {
                    type: 'GET',
                    url: `${req.protocol}://${req.get('host') + routeConstants.PROJECT_BASE_END_POINT}/${projectId}`
                }
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}




function remove(req, res) {
    const projectId = req.params.projectId
    Project.deleteOne({ _id: projectId })
        .then(result => {
            console.log('Project Deleted')
            res.status(200).json({
                message: textConstants.ENTRY_DELTED_TEXT,
                request: {
                    type: 'POST',
                    body: {
                        description: 'String',
                        name: 'String',
                        DevDate: 'Date'
                    },
                    url: `${req.protocol}://${req.get('host') + routeConstants.PROJECT_BASE_END_POINT}`

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

