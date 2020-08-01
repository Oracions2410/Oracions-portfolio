const express = require('express')
const router = express.Router()

const contactCtrl = require('../controllers/contactController')

router.post('/', contactCtrl.create)
router.get('/', contactCtrl.findAll)
router.get('/:contactId', contactCtrl.findById)
router.patch('/:contactId', contactCtrl.update)
router.delete('/:contactId', contactCtrl.remove)

module.exports = router