const router = require('express').Router()
const taskHandler = require('./task')

router.post('/', taskHandler.createTask)
module.exports = router