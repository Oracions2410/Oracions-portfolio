const express = require('express')
const router = express.Router()

const techCtrl = require('../controllers/techController')

router.post('/', techCtrl.create)
router.get('/', techCtrl.findAll)
router.patch('/:contactId', techCtrl.update)
router.delete('/:contactId', techCtrl.remove)

module.exports = router