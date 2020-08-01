const express = require('express')
const router = express.Router()

const languageCtrl = require('../controllers/languageController')

router.post('/', languageCtrl.create)
router.get('/', languageCtrl.findAll)
router.patch('/:contactId', languageCtrl.update)
router.delete('/:contactId', languageCtrl.remove)

module.exports = router