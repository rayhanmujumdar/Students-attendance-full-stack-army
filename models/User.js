// - Name - Email - Password - Roles - Account Status
const {model,Schema} = require('mongoose')

const userSchema = new Schema({
    name: String,
    email: String,
    Password: String,
    roles: [String],
    accountStatus: Boolean
})


const User = model('User',userSchema)
module.exports = User