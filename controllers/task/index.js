const TaskModel = require('../../models/task')

class TaskController {
    static async createTask (data) {
        try {
            const result = await TaskModel.create(data)
            return result
        } catch (err) {
            throw err
        }
    }
}

module.exports = TaskController