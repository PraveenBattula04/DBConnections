const router = require('express').Router()
const taskRouter = require('./task/index')

router.use('/task', taskRouter)
module.exports = router