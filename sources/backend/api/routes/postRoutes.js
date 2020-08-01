const express = require('express')
const router = express.Router()

const postCtrl = require('../controllers/postController')

router.post('/', postCtrl.create)
router.get('/', postCtrl.findAll)
router.patch('/:contactId', postCtrl.update)
router.delete('/:contactId', postCtrl.remove)

module.exports = router