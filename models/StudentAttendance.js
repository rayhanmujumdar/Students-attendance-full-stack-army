
// - userId
// - CreatedAt: DateTime
// - AdminAttendanceID
const {model,Schema} = require('mongoose')
const studentAttendanceSchema = Schema({
      createAt: Date,
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      adminAttendance: {
        type: Schema.Types.ObjectId,
        ref: "AdminAttendance"
      }
})

const studentAttendance = model("StudentAttendance",studentAttendanceSchema)
module.exports = studentAttendance