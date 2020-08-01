const express = require('express')
const router = express.Router()

const linkCtrl = require('../controllers/linkController')

router.post('/', linkCtrl.create)
router.get('/', linkCtrl.findAll)
router.get('/:linkId', linkCtrl.findById)
router.patch('/:linkId', linkCtrl.update)
router.delete('/:linkId', linkCtrl.remove)

module.exports = router