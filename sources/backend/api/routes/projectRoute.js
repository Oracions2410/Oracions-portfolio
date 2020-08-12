const express = require('express')
const router = express.Router()

const projectCtrl = require('../controllers/projectController')

router.post('/', projectCtrl.create)
router.get('/', projectCtrl.findAll)
router.get('/:projectId', projectCtrl.findById)
router.patch('/:projectId', projectCtrl.update)
router.delete('/:projectId', projectCtrl.remove)

module.exports = router