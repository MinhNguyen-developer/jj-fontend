const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        min: 8
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'company'],
        default: 'user'
    }
}, {
    timestamps: true
})

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;