const {Schema, model} = require('mongoose');

const Myschema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        required: true
    },
    priority: {
        type: String,
        enum: [ "low", "medium", "high" ],
        required: true
    },
    dueDate: {
        type: Date,
        default: Date.now()
    }
})

const TaskModel = model('task', Myschema)

module.exports = TaskModel