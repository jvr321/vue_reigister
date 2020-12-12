const express = require('express')
const bodyParse = require('body-parser')
const mongoose = require('mongoose')
const moment = require('moment');
const app = express()

const Users = require('./schema/users')

app.use(bodyParse.urlencoded({
    extended:false
}))
app.use(bodyParse.json())
app.post('/login', (req,res)=>{
   
    const {username, pass, checkPass} = req.body;
    Users.findOne({username, pass, checkPass}).then(user=>{
    
        if(user){//从数据库找到用户，登录成功 返回0
            res.send({err:0})
        }
        //从数据库没找到用户 返回null 登录失败  返回1
        res.send({err:1})

    }) 
   

  
        // let obj = {
        //     name:'cne',
        //     age:10,
        //     like1:'cycle'
        // }
        // console.log(req.query)
        // const callback = req.query.callback
        // res.send(`${callback}(${JSON.stringify(obj)})`)

     //  node   use方式 
    // res.setHeader("Access-Control-Allow-Origin","*");
    // res.setHeader("Access-Control-Allow-Headers","Content-type,Content-Length,Authorization,Accept,X-Requested-Width");
    // res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // // res.header("Access-control-max-age", 1000);
    // if(req.method == "OPTIONS"){return res.end();}
  

    // res.send('var x =3 ')
    // var obj = {
    //     name:'chen',
    //     age:10
    // }
    // let {callback } = req.query 
    // res.send(`${callback}(${JSON.stringify(obj)})`)
    })


app.post('/register', (req,res)=>{
    const {username, pass, checkPass} = req.body;
    Users.findOne({username}).then(user=>{
       
        if(user){//从数据库找到用户，该用户已存在 返回1
            res.send({err:1})
        }
        //从数据库没找到用户 注册成功  返回0
       if(pass===checkPass){
               //保存注册成功的用户
                new Users({
                    username,
                    pass, 
                    checkPass,
                    age:Math.floor(Math.random()*20+20),
                    time:moment().format("YYYY年, MM月 DD日 星期d, HH:mm:ss")
                }).save()
            res.send({err:0})
       }else{
           res.send({err:2})
       }
        
    

    }) 
   
})    


app.get('/userlist', (req,res)=>{
    Users.find().then(userList=>{
        res.send(userList)
    })
})

mongoose.connect('mongodb://localhost:27019/vuex',{ useNewUrlParser: true },err=>{
    if(err){
        console.log('数据库链接失败')
        return
    }
    console.log('数据库链接成功')
    app.listen(3001, ()=>{
        console.log('3001成功监听')
    })
})