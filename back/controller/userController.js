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
              data:req.Img1.value,
              type:String,
            },
            title:{
              data:req.title.value,
              type:String,
            },
            text:{
              data:req.text.value,
              type:String,
            },
            address:{
              data:req.address.value,
              type:String,
            },
            path:{
              data:path[0],
            },
            path1:{
               data:path[1],
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