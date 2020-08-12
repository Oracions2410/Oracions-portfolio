const express = require('express')
const router = express.Router()

const fileCtrl = require('../controllers/fileController')
const multer = require('../middlewares/multer')

router.post('/', multer, fileCtrl.create)
router.get('/', fileCtrl.findAll)
router.get('/:fileId', fileCtrl.findById)
router.patch('/:fileId', fileCtrl.update)
router.delete('/:fileId', fileCtrl.remove)

module.exports = router