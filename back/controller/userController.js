const { Repair } = require("../models/Repair");
const user ={
    uploadProfile: async(req,res)=>{
      const image = req.file.path;
      if(image=== undefined){
        return res.json({success:false,err})
      }
      res.status(200).json({success:true})
    },
    uploadImages : async(req,res) => {
        const image = req.files;
        const path = image.map(img => img.path);
        if(image=== undefined){
          return res.json({success:false,err})
          }
          else{
          const repair = new Repair({
            Img1:{
              data:req.body.Img1,
            },
            title:{
              data:req.body.title,
            },
            text:{
              data:req.body.text,
            },
            address:{
              data:req.body.address,
            },
            path:{
              data:path,
            }
          })
          repair.save((err,repairInfo)=>{
            if(err) return res.json({success:false,err})
            return res.status(200).json({
              success:true
            })
          })
    }
   }
  }
  module.exports =user;