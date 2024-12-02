const TaskController = require('../../controllers/task')
async function createTask (req, res, next) {
    try {
        const result = await TaskController.createTask(req.body)
        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            task: result
        })
    } catch(err) {
        res.status(400).json({
            success: false,
            message: err
        })
    }
}

module.exports = {
    createTask
}