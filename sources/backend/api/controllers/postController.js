const Post = require('../models/post')
const routeConstants = require('../constants/routeContantes')
const textConstants = require('../constants/text')
const { maxLen, minLen } = require('../helpers/validator')


function create(req, res) {
    const { title, content, image } = req.body

    if (!(title && content && image)) {
        return res.status(400).json({ error: `${textConstants.ALL_FIELS_MUST_BE_PROVIDE_TEXT_ERROR} (title, content, image)` })
    }

    //--------------- Validation -------------------------------------------------------
    const MaxLenValidate = maxLen({ title, content, image })
    if (!MaxLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
    }

    const minLenValidate = minLen({ title, content, image })
    if (!minLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
    }

    if (!(title || content || image)) {
        return res.status(400).json({ message: `${textConstants.UNDEFIED_FIELDS_TEXT_ERROR} (title, content, image)` })
    }
    //-------X------- Validation -----------------X-------------------------------------


    const newPost = new Post({ title, content, image })

    newPost.save()
        .then(result => {

            res.status(201).json({
                message: `Lien ${textConstants.ENTRY_CREATED_TEXT}`,
                newPost: {
                    title: newPost.title,
                    content: newPost.content,
                    image: newPost.image,
                    request: {
                        type: 'GET',
                        url: `${req.protocol}://${req.get('host') + routeConstants.POST_BASE_END_POINT}`
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
    Post.find()
        .then(posts => {
            console.log(posts)

            if (posts.length === 0) {
                return res.status(200).json({
                    count: 0,
                    message: textConstants.NOT_ENTRY_FOUND
                })
            }

            res.status(200).json({
                count: posts.length,
                posts: posts.map(post => {
                    const { _id, title, content, image, createdAt, updatedAt } = post
                    return {
                        _id, title, content, image, createdAt, updatedAt, request: {
                            type: 'GET',
                            name: `${req.protocol}://${req.get('host') + routeConstants.POST_BASE_END_POINT}/${_id}`
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
    const postId = req.params.postId

    Post.findOne({ _id: postId })
        .then(post => {
            if (post) {
                console.log(post)

                const { _id, title, content, image, createdAt, updatedAt } = post
                res.status(200).json({
                    _id, title, content, image, createdAt, updatedAt, request: {
                        type: 'GET',
                        url: `${req.protocol}://${req.get('host') + routeConstants.POST_BASE_END_POINT}`
                    }
                })

            } else {
                res.status(404).json({
                    message: `${textConstants.NOT_ENTRY_FOUND} - ID: ${postId}`
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}





function update(req, res) {
    const postId = req.params.postId

    const { title, content, image } = req.body

    //--------------- Validation -------------------------------------------------------
    const MaxLenValidate = maxLen({ title, content, image })
    if (!MaxLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MAX_LENGTH_TEXT_ERROR}`, fileds: MaxLenValidate.fields })
    }

    const minLenValidate = minLen({ title, content, image })
    if (!minLenValidate.status) {
        return res.status(400).json({ error: `${textConstants.MIN_LENGTH_TEXT_ERROR}`, fileds: minLenValidate.fields })
    }

    if (!(title || content || image)) {
        return res.status(400).json({ message: `${textConstants.UNDEFIED_FIELDS_TEXT_ERROR} (title, content, image)` })
    }
    //-------X------- Validation -----------------X-------------------------------------

    const toUpdate = { updatedAt: Date.now() }
    const keys = Object.keys(req.body)

    if (keys.includes('title')) toUpdate.title = title
    if (keys.includes('content')) toUpdate.content = content
    if (keys.includes('image')) toUpdate.image = image


    Post.updateOne({ _id: postId }, { $set: toUpdate })
        .then(result => {
            res.status(200).json({
                message: `${textConstants.ENTRY_UPDATED_TEXT}`,
                request: {
                    type: 'GET',
                    url: `${req.protocol}://${req.get('host') + routeConstants.POST_BASE_END_POINT}/${postId}`
                }
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error })
        })
}





function remove(req, res) {
    const postId = req.params.postId
    Post.deleteOne({ _id: postId })
        .then(result => {
            console.log('Post Deleted')
            res.status(200).json({
                message: textConstants.ENTRY_DELTED_TEXT,
                request: {
                    type: 'POST',
                    body: {
                        title: 'String',
                        content: 'String',
                        image: 'String',
                    },
                    url: `${req.protocol}://${req.get('host') + routeConstants.POST_BASE_END_POINT}`

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

