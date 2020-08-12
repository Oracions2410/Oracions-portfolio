const File = require('../models/file')
const routeConstants = require('../constants/routeContantes')
const textConstants = require('../constants/text')
const { maxLen, minLen } = require('../helpers/validator')

function create(req, res) {
    return res.status(200).json({ files: req.file, body: req.body })
    const { description, filename, type } = req.body

    if (!(description && filename && type)) {
        return res.status(400).json({ error: `${textConstants.ALL_FIELS_MUST_BE_PROVIDE_TEXT_ERROR} (description, filename, type)` })
    }

    //--------------- Validation -------------------------------------------------------
    const MaxLenValidate = maxLen({ description, filename, type })
    if (!MaxLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
    }

    const minLenValidate = minLen({ description, filename, type })
    if (!minLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
    }

    if (!(description || filename || type)) {
        return res.status(400).json({ message: `${textConstants.UNDEFIED_FIELDS_TEXT_ERROR} (description, name)` })
    }
    //-------X------- Validation -----------------X-------------------------------------


    const newFile = new File({ description, filename, type })

    newFile.save()
        .then(result => {

            res.status(201).json({
                message: `File ${textConstants.ENTRY_CREATED_TEXT}`,
                newFile: {
                    description: newFile.description,
                    filename: newFile.filename,
                    name: newFile.type,
                    request: {
                        type: 'GET',
                        url: `${req.protocol}://${req.get('host') + routeConstants.FILE_BASE_END_POINT}`
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
    File.find()
        .then(files => {
            console.log(files)

            if (files.length === 0) {
                return res.status(200).json({
                    count: 0,
                    message: textConstants.NOT_ENTRY_FOUND
                })
            }

            res.status(200).json({
                count: files.length,
                files: files.map(file => {
                    const { _id, description, filename, type, createdAt, updatedAt } = file
                    return {
                        _id, description, filename, type, createdAt, updatedAt, request: {
                            type: 'GET',
                            url: `${req.protocol}://${req.get('host') + routeConstants.FILE_BASE_END_POINT}/${_id}`
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
    res.json({ message: 'File - find by id' })
}

function update(req, res) {
    res.json({ message: 'File - update' })
}

function remove(req, res) {
    res.json({ message: 'File - delete' })
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
}

