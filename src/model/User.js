// 引入mongodb
const mongoose = require('../db/mongodb')
// 建立用户表
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    userId: {
        type: Number,
        unique: true,
        autoIncrement: true,
        isPrimary: true
    },
    avatar: {
        type: String,
    },
    desc: {
        type: String,
    },
    roles: {
        type: Array
    },
    buttons: {
        type: Array,
    },
    routes: {
        type: Array,
    },
    token: {
        type: String
    }
})

// 建立用户数据库模型
const User = mongoose.model('User', UserSchema)
module.exports = { User }