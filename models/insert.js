
const mongoose=require('mongoose')
const validator=require('validator')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isEmail){
                throw new Error("Invalid Email id !")
            }
        }
    },
    phone:{
        type:Number,
        min:10
      },
      message:{
        type:String,
        required:true,
        minLength:3
      },
      date:{
        type:Date,
        default:Date.now
      }
})
const User = mongoose.model("User",userSchema)
module.exports=User;