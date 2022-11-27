
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
const FILE_UPLOAD_DIR = "uploads";
app.use(express.static("public"));
const _ = require("lodash");
app.use(require("express-fileupload")());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/files", express.static(FILE_UPLOAD_DIR));
app.use(express.json());
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
            let list= await Repair.find().limit(4).sort({id_count:-1});
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
            app.post('/api/help/list',async(req,res)=>{
              const id = req.body.id;
            let list =await Help.find({helpid:id});
            return res.status(200).json({
              data:list,
              success:true});
             })
             app.post('/api/repair/dataList',async(req,res)=>{
              const address = req.body.address;
              let list =await Repair.find({address:address});
              return res.status(200).json({
                data:list,
                success:true});
             })
             app.post('/api/help/userdatarequire',async(req,res)=>{
              const session = req.body.id;
              const list = await Help.find({repairid:session});
              const arr = new Array();
              var length = list.length;
              for(var i=0; i<length; i++){
              const user= await User.findOne({_id:list[i].helpid});
                arr.push(user);
              }
              return res.status(200).json({
                data:arr,
                success:true,
              });
            })
            app.post('/api/help/success',async(req,res)=>{
              const helpid= req.body.id;
              Help.findOneAndUpdate({helpid:helpid},{success:"완료"},(err,user)=>{
                return res.status(200).send({
                  success:true
                })
              })
            })
app.post('/api/help/require', async(req, res) => {
     const address =req.body.address;
     const user = req.body.user;
     const session = req.body.session;
     const dataa =await Repair.findOne({address:address});
     const datee = dataa.Date;
     User.findOne({_id:user},(err,user)=>{
      const userr = new Help({
          address:address,
          repairid:req.body.user,
          helpid:session,
          name:user.name,
          phone:user.phone,
          email:user.email,
          path:dataa.path,
          Date:datee,
          success:"미완료",
      })
      userr.save();
    })
     Repair.findOneAndUpdate({ address: address },
      { $inc:{people:-1}}
      , (err, user) => {
    if (err) return console.log(err),res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
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
app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);
  console.log(user);
  user.save((err, userInfo) => {
    if (err) return console.log(err),res.json({ success: false, err })
    return res.status(200).json({
      success: true
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
app.post("/file/upload", (req, res) => {
  const file = req.files.file;
  const ext = _.last(file.name.split("."));
  const newFileNm = `${new Date().getTime()}.${ext}`;
  const uploadPath = `${FILE_UPLOAD_DIR}/${newFileNm}`;
  file.mv(uploadPath, (err)=>{
     if(err){
      res.send({code:400,message:"false"});
      throw err;
     }
     res.send({
      path: `/files/${newFileNm}`,
    });
  })
})

app.post('/api/repair/upload',(req,res)=>{    
    Count.findOneAndUpdate({name:'개수'},{$inc:{totalPosts:1}},function(err,result){
      var totalPosts = result.totalPosts;
      var now = new Date();	
      const repair = new Repair({
        Img1:req.body.Img1,
        title:req.body.title,
        text:req.body.text,
        address:req.body.address,
        Date:now,
        path:req.body.path,
        path1:req.body.path1,
        people:4,
        id_count:totalPosts+1,
      })
      repair.save((err,repairInfo)=>{
        if(err) { return console.log(err),res.json({success:false,err})}
        return res.status(200).send({success:true})
      })
    })
});

const port = 9000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))