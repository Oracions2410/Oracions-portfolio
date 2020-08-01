const Link = require('../models/link')
const routeConstants = require('../constants/routeContantes')
const textConstants = require('../constants/text')
const { maxLen, minLen } = require('../helpers/validator')




function create(req, res) {
    const { description, url } = req.body

    if (!(description && url)) {
        return res.status(400).json({ error: `${textConstants.ALL_FIELS_MUST_BE_PROVIDE_TEXT_ERROR} (description, url)` })
    }

    //--------------- Validation -------------------------------------------------------
    const MaxLenValidate = maxLen({ description, url })
    if (!MaxLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
    }

    const minLenValidate = minLen({ description, url })
    if (!minLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
    }

    if (!(description || url)) {
        return res.status(400).json({ message: `${textConstants.UNDEFIED_FIELDS_TEXT_ERROR} (description, url)` })
    }
    //-------X------- Validation -----------------X-------------------------------------


    const newLink = new Link({ description, url })
    newLink.save()
        .then(result => {
            res.status(201).json({
                message: `Lien ${textConstants.ENTRY_CREATED_TEXT}`,
                newLink: {
                    description: newLink.description,
                    url: newLink.url,
                    request: {
                        type: 'GET',
                        url: `${req.protocol}://${req.get('host') + routeConstants.LINK_BASE_END_POINT}`
                    }
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}





function findAll(req, res) {
    Link.find()
        .then(links => {
            console.log(links)

            if (links.length === 0) {
                return res.status(200).json({
                    count: 0,
                    message: textConstants.NOT_ENTRY_FOUND
                })
            }

            res.status(200).json({
                count: links.length,
                links: links.map(link => {
                    const { _id, description, url, createdAt, updatedAt } = link
                    return {
                        _id, description, url, createdAt, updatedAt, request: {
                            type: 'GET',
                            url: `${req.protocol}://${req.get('host') + routeConstants.LINK_BASE_END_POINT}/${_id}`
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
    const linkId = req.params.linkId

    Link.findOne({ _id: linkId })
        .then(link => {
            if (link) {
                console.log(link)

                const { _id, description, url, createdAt, updatedAt } = link
                res.status(200).json({
                    _id, description, url, createdAt, updatedAt, request: {
                        type: 'GET',
                        url: `${req.protocol}://${req.get('host') + routeConstants.LINK_BASE_END_POINT}`
                    }
                })

            } else {
                res.status(404).json({
                    message: `${textConstants.NOT_ENTRY_FOUND} - ID: ${linkId}`
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}

function update(req, res) {
    const linkId = req.params.linkId

    const { description, url } = req.body

    //--------------- Validation -------------------------------------------------------
    const MaxLenValidate = maxLen({ description, url })
    if (!MaxLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
    }

    const minLenValidate = minLen({ description, url })
    if (!minLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
    }

    if (!(description || url)) {
        return res.status(400).json({ message: `${textConstants.UNDEFIED_FIELDS_TEXT_ERROR} (description, url)` })
    }
    //-------X------- Validation -----------------X-------------------------------------

    const toUpdate = { updatedAt: Date.now() }
    const keys = Object.keys(req.body)

    if (keys.includes('description')) toUpdate.description = description
    if (keys.includes('url')) toUpdate.url = url


    Link.updateOne({ _id: linkId }, { $set: toUpdate })
        .then(result => {
            res.status(200).json({
                message: '',
                request: {
                    type: 'GET',
                    url: `${req.protocol}://${req.get('host') + routeConstants.LINK_BASE_END_POINT}/${linkId}`
                }
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}

function remove(req, res) {
    const { linkId } = req.params
    Link.deleteOne({ _id: linkId })
        .then(result => {
            console.log('Link Deleted')
            res.status(200).json({
                message: textConstants.ENTRY_DELTED_TEXT,
                request: {
                    type: 'POST',
                    body: {
                        description: 'String',
                        url: 'String',
                    },
                    url: `${req.protocol}://${req.get('host') + routeConstants.LINK_BASE_END_POINT}`

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

