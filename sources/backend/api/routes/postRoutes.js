const express = require('express')
const router = express.Router()

const postCtrl = require('../controllers/postController')

router.post('/', postCtrl.create)
router.get('/', postCtrl.findAll)
router.get('/:postId', postCtrl.findById)
router.patch('/:postId', postCtrl.update)
router.delete('/:postId', postCtrl.remove)

module.exports = router