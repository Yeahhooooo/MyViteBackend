const mongoose = require('mongoose')

// 连接数据库，自动新建 ExpressApi 库

mongoose.connect('mongodb+srv://root:123456Aa@cluster0.pfjywer.mongodb.net/').then(() => {
    console.log('connect')
}).catch((error) => {
    console.log(error)
})


module.exports = mongoose
