"use strict";

var mongoose = require("mongoose");

var express = require('express'); //익스프레스 모듈 가져오기


var app = express(); //펑션으로 익스프레스앱을 만듬

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var _require = require('./middleware/auth'),
    auth = _require.auth;

var _require2 = require("./models/User"),
    User = _require2.User; //application/x-www-form-urlencoded   body에 url담음


app.use(bodyParser.urlencoded({
  extended: true
})); //application.json

app.use(bodyParser.json());
app.use(cookieParser());
mongoose.connect(dbAddress, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("MongoDB Connected");
})["catch"](function (err) {
  return console.log(err);
});
app.get('/', function (req, res) {
  return res.send('안녕하세요~ 다들 새해복 많이 받으세요!!!');
}); //react.js request!!! 임의로 되는지 확인

app.get('/api/hello', function (req, res) {
  res.send("안녕하세요~");
}); //회원가입

app.post('/api/users/register', function (req, res) {
  //회원가입할때 필요한 정보들을 클라이언트에서 가져오면 그것들을 DB에 넣어줌
  var user = new User(req.body);
  user.save(function (err, userInfo) {
    if (err) return res.json({
      success: false,
      err: err
    });
    return res.status(200).json({
      success: true
    }); //성공했을시
  });
}); //로그인

app.post('/api/users/login', function (req, res) {
  //로그인 라우터
  //요청된 이메일을 데이터베이스에서 있는지 찾음
  User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      });
    } //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인


    user.comparePassword(req.body.password, function (err, isMatch) {
      if (!isMatch) return res.json({
        loginSuccess: false,
        message: "비밀번호가 틀렸습니다."
      }); //비밀번호 까지 맞다면 토큰을 생성

      user.generateToken(function (err, user) {
        if (err) return res.status(400).send(err); //token을 저장 -> 쿠키에

        res.cookie("x_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id
        });
      });
    });
  });
}); // auth라는 미들웨어: req받아서 콜백펑션하기전에 중간에서 처리하는것.
// auth.js에서 user와 id를 req에 저장해놔서 바로 저렇게 밑에서 사용할수있는것.
// 이렇게 라우터를 만들어놓으면 어느페이지에서 user정보와 id를 가지고있어서 사용가능
//role 1 어드민   / role 2 특정 부서 어드민
//role 0 일반유저  / role 0 이 아니면 관리자

app.get('/api/users/auth', auth, function (req, res) {
  //auth라는 미들웨어 추가
  //여기 까지 미들웨어를 통과했다는건  Authentication 이 True !!!!
  res.status(200).json({
    _id: req.user._id,
    //미들웨어 통해서 가져왔기 때문에 사용가능
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
var port = 9000; //마음대로 가능 5000으로 임의로 설정 디폴드값은 3000

app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});