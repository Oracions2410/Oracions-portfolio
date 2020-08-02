const express = require('express')
const router = express.Router()

const techCtrl = require('../controllers/techController')

router.post('/', techCtrl.create)
router.get('/', techCtrl.findAll)
router.get('/:techId', techCtrl.findById)
router.patch('/:techId', techCtrl.update)
router.delete('/:techId', techCtrl.remove)

module.exports = router