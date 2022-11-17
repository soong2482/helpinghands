"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var _require = require('./middleware/auth'),
    auth = _require.auth;

var _require2 = require("./models/User"),
    User = _require2.User; //application/x-www-form-urlencoded 


app.use(bodyParser.urlencoded({
  extended: true
})); //application/json 

app.use(bodyParser.json());
app.use(cookieParser());
var dbAddress = "mongodb+srv://pesik:1234@cluster0.dxkx6kp.mongodb.net/?retryWrites=true&w=majority";

var mongoose = require('mongoose');

mongoose.connect(dbAddress, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('MongoDB Connected...');
})["catch"](function (err) {
  return console.log(err);
});
app.get('/api/hello', function (req, res) {
  return res.send('Hello World!~~ ');
});
app.post('/api/users/register', function (req, res) {
  //회원 가입 할떄 필요한 정보들을  client에서 가져오면 
  //그것들을  데이터 베이스에 넣어준다. 
  var user = new User(req.body);
  user.save(function (err, userInfo) {
    if (err) return res.json({
      success: false,
      err: err
    });
    return res.status(200).json({
      success: true
    });
  });
});
app.post('/api/users/login', function (req, res) {
  // console.log('ping')
  //요청된 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({
    email: req.body.email
  }, function (err, user) {
    // console.log('user', user)
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      });
    } //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.


    user.comparePassword(req.body.password, function (err, isMatch) {
      // console.log('err',err)
      // console.log('isMatch',isMatch)
      if (!isMatch) return res.json({
        loginSuccess: false,
        message: "비밀번호가 틀렸습니다."
      }); //비밀번호 까지 맞다면 토큰을 생성하기.

      user.generateToken(function (err, user) {
        if (err) return res.status(400).send(err); // 토큰을 저장한다.  어디에 ?  쿠키 , 로컳스토리지 

        res.cookie("x_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id
        });
      });
    });
  });
}); // role 1 어드민    role 2 특정 부서 어드민 
// role 0 -> 일반유저   role 0이 아니면  관리자 

app.get('/api/users/auth', auth, function (req, res) {
  //여기 까지 미들웨어를 통과해 왔다는 얘기는  Authentication 이 True 라는 말.
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  });
});
app.get('/api/users/logout', auth, function (req, res) {
  // console.log('req.user', req.user)
  User.findOneAndUpdate({
    _id: req.user._id
  }, {
    token: " "
  }, function (err, user) {
    if (err) return res.json({
      success: false,
      err: err
    });
    return res.status(200).send({
      success: true
    });
  });
});
var port = 9000;
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});