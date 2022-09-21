// - CreatedAt: DateTime
// - Status
// - TimeLimit
const {model,Schema} = require('mongoose')

const adminAttendanceSchema = Schema({
    timeLimit: Number,
    status: String,
    createAt: Date
})

const AdminAttendance = model('AdminAttendance',adminAttendanceSchema)
module.exports = AdminAttendance