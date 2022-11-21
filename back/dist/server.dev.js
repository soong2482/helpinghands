"use strict";

var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var _require = require('./middleware/auth'),
    auth = _require.auth;

var _require2 = require("./models/User"),
    User = _require2.User;

var _require3 = require("./models/Help"),
    Help = _require3.Help;

var _require4 = require("./models/Notice"),
    Notice = _require4.Notice;

var _require5 = require("./models/Repair"),
    Repair = _require5.Repair;

var multer = require('multer'); //application/x-www-form-urlencoded 


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express["static"]('uploads')); //application/json 

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
app.get('/api/help/delete', function (req, res) {
  Help.findOneAndUpdate({
    email: req.email,
    Date: req.Date
  }, {
    success: "end"
  }, function (err, help) {
    if (err) return res.json({
      success: false,
      err: err
    });
    return res.status(200).json({
      success: true
    });
  });
});
app.get('/api/help/list', function _callee(req, res) {
  var list;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Help.find().sort({
            Date: -1
          }));

        case 2:
          list = _context.sent;
          return _context.abrupt("return", res.status(200).json({
            data: list
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.post('/api/help/application', function (req, res) {
  var help = new Help(req.body);
  help.save(function (err, helpInfo) {
    if (err) return res.json({
      success: false,
      err: err
    });
    return res.status(200).json({
      success: true
    });
  });
});
app.post('/api/notice/application', function (req, res) {
  var notice = new Notice(req.body);
  var now = new Date();
  console.log(now);
  notice.save(function (err, noticeInfo) {
    if (err) return res.json({
      success: false,
      err: err
    });
    return res.status(200).json({
      success: true
    });
  });
});
app.get('/api/notice/Home', function _callee2(req, res) {
  var list;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Notice.find().limit(6).sort({
            Date: -1
          }));

        case 2:
          list = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            data: list
          }));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.get('/api/notice/list', function _callee3(req, res) {
  var list;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Notice.find().sort({
            Date: -1
          }));

        case 2:
          list = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            data: list
          }));

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app.get('/api/repair/Home', function _callee4(req, res) {
  var list;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(Repair.find().limit(4).sort({
            Date: -1
          }));

        case 2:
          list = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            data: list
          }));

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});
app.get('/api/repair/list', function _callee5(req, res) {
  var list;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Repair.find().sort({
            Date: -1
          }));

        case 2:
          list = _context5.sent;
          return _context5.abrupt("return", res.status(200).json({
            data: list
          }));

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
});
app.post('/api/users/register', function (req, res) {
  var user = new User(req.body);
  user.save(function (err, userInfo) {
    if (err) return console.log(err), res.json({
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
app.get('/api/users/Session', auth, function (req, res) {
  User.findOne({
    _id: req.user._id
  }, function (err, user) {
    if (err) return res.json({
      success: false,
      err: err
    });
    return res.status(200).json({
      user: req.user.name,
      id: req.user._id
    });
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
var newFilename = "";
var File = "";
var path = "";
var Storage = multer.diskStorage({
  destination: 'uploads',
  filename: function filename(req, file, cb) {
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
    File = newFilename;
    newFilename += file.originalname;
    cb(null, newFilename);
    newFilename = File;
  }
});
var upload = multer({
  storage: Storage
});
app.post('/api/repair/upload', upload.array('file', 2), function (req, res) {
  var image = req.files;
  var path = image.map(function (img) {
    return img.path;
  });

  if (image === undefined) {
    return res.json({
      success: false,
      err: err
    });
  } else {
    var repair = new Repair({
      Img1: req.body.Img1,
      title: req.body.title,
      text: req.body.text,
      address: req.body.address,
      path: path[0].substr(8),
      path1: path[1].substr(8)
    });
    repair.save(function (err, repairInfo) {
      if (err) {
        return console.log(err), res.json({
          success: false,
          err: err
        });
      }

      return res.status(200).send({
        success: true
      });
    });
  }
});
var port = 9000;
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});