var express = require('express');
const {User} = require("../src/model/User");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',async function (req, res) {
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    desc: '',
    roles: [],
    buttons: [],
    routes: [],
    token: 'Admin Token'
  })
  res.send({
    code: 200,
    data: {
      token: user.username
    }
  })
})

router.post('/login',async (req, res) => {
  const user = await User.findOne({
    username: req.body.username  })
  if(user !== null && user.password === req.body.password){
    console.log(user)
    res.send({
      code: 200,
      data: {
        token: user.username
      }
    })
  } else {
    res.send({
      code: 201,
      data: {
        message: '账号或者密码不正确'
      }
    })
  }
})

router.get('/info', async (req, res, next) => {
  const user = await User.findOne({
    username: req.headers.token  })
  res.send({
    code: 200,
    data: user
  })
})

// 获取用户列表
router.get('/list', async(req, res, next)=>{
  const user = await User.find()
  res.send({
    code: 200,
    msg: '获取成功',
    data: user
  })
})

module.exports = router;
