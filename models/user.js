const mongoose = require('mongoose');

//  schema  - field
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    username: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    phone: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    gender: {
        type: String,
        require: true
    },

    image: {
        public_id: {
            type: String,
            require: true
        },
        url: {
            type: String,
            require: true
        }
    },
    role: {
        type: String,
        default: "student"
    },

    is_verified: {
        type: Number,
        default: 0
    },
    token: {
        type: String
    }

})
const UserModel = mongoose.model('user', UserSchema)
module.exports = UserModel