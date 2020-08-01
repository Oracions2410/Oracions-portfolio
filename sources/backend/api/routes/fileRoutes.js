const express = require('express')
const router = express.Router()

const fileCtrl = require('../controllers/fileController')

router.post('/', fileCtrl.create)
router.get('/', fileCtrl.findAll)
router.patch('/:contactId', fileCtrl.update)
router.delete('/:contactId', fileCtrl.remove)

module.exports = router