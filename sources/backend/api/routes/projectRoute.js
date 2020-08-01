const express = require('express')
const router = express.Router()

const projectCtrl = require('../controllers/projectController')

router.post('/', projectCtrl.create)
router.get('/', projectCtrl.findAll)
router.patch('/:contactId', projectCtrl.update)
router.delete('/:contactId', projectCtrl.remove)

module.exports = router