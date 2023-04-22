const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorhandler");

const User = require("../models/userModel");

//Register a user

exports.registerUser =  catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password} = req.body; 
    const user = await User.create({
        name,email,password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilePicUrl1"
        }
    });

    res.send(201).json({
        success:true,
        user
    })
})

