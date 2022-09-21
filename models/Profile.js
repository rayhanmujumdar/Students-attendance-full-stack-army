// - First Name
// - Last Name
// - Phone no
// - Profile picture
// - UserId
const {model,Schema} = require('mongoose')

const profileSchema = Schema({
    firstName: String,
    lastName: String,
    phoneNo: String,
    avatar: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})
console.log(profileSchema.tree)
const Profile = model("Profile",profileSchema)
module.exports = Profile