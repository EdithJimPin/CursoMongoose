const{ Schema, model} = require('mongoose')

const userSchema = new Schema({
    //propiedad unica, un solo nickname
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    date: {
        type: Date,
        default: new Date()
    },
    name: String
})
//en mongodb se guarda en plural
module.exports = model('User', userSchema);