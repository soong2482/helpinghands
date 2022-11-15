const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10
const jwt = require('jsonwebtoken');
const { JsonWebTokenError } = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, //스페이스를 없애줌
        unique: 1
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role:{          //관리자=1, 사용자=0 
        type: Number,
        default: 0
    },
    image:{
        type: String
    },

    token:{
        type:String  //유효성 검사할때
    },

    tokenExp:{      //토큰을 사용할 수 있는 기간
        type: Number
    }
})

userSchema.pre('save', function (next) {
    var user = this; //스키마를 가르킴

    if (user.isModified('password')) {
        //비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {    //비밀번호 외에 다른걸 바꿀시 next()로 넘어감
        next()
    }
});


userSchema.methods.comparePassword = function(plainPassword, cb){   //cb = callback function

    //plainpassword 1234567     암호화된 비밀번호 "$2b$10$r7VKMZ1LMrgbtCL3/RVlH..Kbq7nGMipwFaBTKT4wPCW7A6aDC4Ja"
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err),
        cb(null, isMatch)
    });
};

userSchema.methods.generateToken = function (cb) {
    var user = this;

    //jsonwebtoken을 이용해서 token을 생성
    var token = jwt.sign(user._id.toHexString(), 'secretToken')

    //user._id + 'secretToken' = token
    //-> 'secretToken' -> user._id

    user.token = token
    user.save(function (err, user) {
        if (err) return cb(err)
        cb(null, user)
    });
};

userSchema.statics.findByToken = function(token, cb) {
    var user = this;
    // user._id + ''  = token
    //토큰을 decode 한다. 
    jwt.verify(token, 'secretToken', function (err, decoded) {
        //유저 아이디를 이용해서 유저를 찾은 다음에 클라이언트에서 가져온 토큰과 DB에 보관된 토큰이 일치하는지 확인
        user.findOne({ "_id": decoded, "token": token }, function (err, user) {
            if (err) return cb(err);
            cb(null, user)
        })
    })
}



const User = mongoose.model('User', userSchema) //모델에 유저스키마를 담음

module.exports = { User }