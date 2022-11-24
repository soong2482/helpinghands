
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { auth } = require('./middleware/auth');
const { User } = require("./models/User");
const { Help } = require("./models/Help");
const { Notice } = require("./models/Notice");
const { Repair } = require("./models/Repair");
const { Count } =require("./models/count");
const multer = require('multer');
//application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('uploads'));
//application/json 
app.use(bodyParser.json());
app.use(cookieParser());
const dbAddress= "mongodb+srv://pesik:1234@cluster0.dxkx6kp.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require('mongoose');
mongoose.connect(dbAddress, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/api/help/delete', (req,res)=>{
  Help.findOneAndUpdate({email: req.email,Date:req.Date},{success:"end"},(err,help)=>{
    if(err) return res.json({success:false,err})
    return res.status(200).json({
      success:true
    })
    })
  })



  app.get('/api/help/list', async(req,res)=>{
    let list= await Help.find().sort({Date:-1});
      return res.status(200).json({data:list});
    });
  app.post('/api/help/application', (req,res)=>{
    const help = new Help(req.body)
     
    help.save((err,helpInfo)=>{
      if(err) return res.json({success:false,err})
      return res.status(200).json({
        success:true
      })
      })
    })
    app.post('/api/notice/application', (req,res)=>{
      const notice = new Notice(req.body)
      var now = new Date();	
      console.log(now);
      notice.save((err,noticeInfo)=>{
        if(err) return res.json({success:false,err})
        return res.status(200).json({
          success:true
        })
        })
      })
      app.get('/api/notice/Home', async(req,res)=>{
        let list= await Notice.find().limit(6).sort({Date:-1});
          return res.status(200).json({data:list});
         });
      app.get('/api/notice/list', async(req,res)=>{
        let list= await Notice.find().sort({Date:-1});
          return res.status(200).json({data:list});
        });
          app.get('/api/repair/Home', async(req,res)=>{
            let list= await Repair.find().limit(4).sort({Date:-1});
              return res.status(200).json({data:list});
             });
          app.get('/api/repair/list', async(req,res)=>{
            let list= await Repair.find().sort({Date:-1});
              return res.status(200).json({data:list});
            });     
            app.get('/api/repair/count',async(req,res)=>{
            let list = await Count.findOne();
            return res.status(200).json({data:list});
            })
app.post('/api/help/require', (req, res) => {
     let address =req.body.address;
     Repair.findOneAndUpdate({ address: address },
      { $inc:{people:-1}}
      , (err, user) => {
    if (err) return console.log(err),res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})
app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return console.log(err),res.json({ success: false, err })
    return res.status(200).json({
      Success: true
    })
  })
})
app.post('/api/users/login', (req, res) => {

  // console.log('ping')
  //요청된 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {

    // console.log('user', user)
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }

    //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
    user.comparePassword(req.body.password, (err, isMatch) => {
      // console.log('err',err)

      // console.log('isMatch',isMatch)

      if (!isMatch)
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })

      //비밀번호 까지 맞다면 토큰을 생성하기.
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // 토큰을 저장한다.  어디에 ?  쿠키 , 로컳스토리지 
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id })
      })
    })
  })
})

// role 1 어드민    role 2 특정 부서 어드민 
// role 0 -> 일반유저   role 0이 아니면  관리자 
app.get('/api/users/auth', auth, (req, res) => {
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
  })
})
app.get('/api/users/Session',auth,(req,res)=>{
  User.findOne({_id:req.user._id},(err,user)=>{
    if (err) return res.json({success:false,err});
    return res.status(200).json({
      user:req.user.name,
      id:req.user._id
     })
  })
  
})
app.get('/api/users/logout', auth, (req, res) => {
  // console.log('req.user', req.user)
  User.findOneAndUpdate({ _id: req.user._id },
    { token: " " }
    , (err, user) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true
      })
    })
})

let newFilename ="";
let File="";
let path="";
const Storage = multer.diskStorage({
  destination:'uploads',
  filename:(req,file,cb)=>{
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
    File=newFilename;
    newFilename += file.originalname
    cb(null, newFilename);
    newFilename=File;
  },
});
const upload =multer({
  storage:Storage
});
app.post('/api/repair/upload',upload.array('file',2),(req,res)=>{
  const image = req.files;
  var now = new Date();
  const path = image.map(img => img.path);
  if(image=== undefined){
    return res.json({success:false,err})
    }
    else{
    Count.findOneAndUpdate({name:'개수'},{$inc:{totalPosts:1}},function(err,result){
      var totalPosts = result.totalPosts;
 
      const repair = new Repair({
        Img1:req.body.Img1,
        title:req.body.title,
        text:req.body.text,
        address:req.body.address,
        Date:now,
        path:path[0].substr(8),
        path1:path[1].substr(8),
        people:4,
        id_count:totalPosts+1,
      })
      
      repair.save((err,repairInfo)=>{
        if(err) { return console.log(err),res.json({success:false,err})}
        return res.status(200).send({success:true})
      })
    })
} 
});

const port = 9000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))