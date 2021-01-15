mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password: String,
    confirmPassword: String
})
var user = mongoose.model('user',UserSchema)
module.exports = user