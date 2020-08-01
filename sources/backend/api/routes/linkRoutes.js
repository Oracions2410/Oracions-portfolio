const express = require('express')
const router = express.Router()

const linkCtrl = require('../controllers/linkController')

router.post('/', linkCtrl.create)
router.get('/', linkCtrl.findAll)
router.patch('/:contactId', linkCtrl.update)
router.delete('/:contactId', linkCtrl.remove)

module.exports = router