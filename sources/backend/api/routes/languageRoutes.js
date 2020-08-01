const express = require('express')
const router = express.Router()

const languageCtrl = require('../controllers/languageController')

router.post('/', languageCtrl.create)
router.get('/', languageCtrl.findAll)
router.get('/:langId', languageCtrl.findById)
router.patch('/:langId', languageCtrl.update)
router.delete('/:langId', languageCtrl.remove)

module.exports = router