const mongoose = require('mongoose')

//Schema  定义存储数据的数据类型
const usersSchema =  new  mongoose.Schema({
    username:String, 
    pass:String, 
    checkPass:String,
    age:Number,
    time:String
})

// 以usersSchema为骨架，创建users集合
module.exports = mongoose.model('users', usersSchema)
