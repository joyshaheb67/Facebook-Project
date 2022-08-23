import mongoose from "mongoose";

//Create a user schema
const userSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    cell : {
        type : String,
        required : true,
        trim : true,
        unique: true
    },
    username : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    age : {
        type : Number,
        required : true,
    },
    gender : {
        type : String,
    },
    photo : {
        type : String
    },
    password : {
        type : String,
        required : true,
        trim : true
    },
    isAdmin : {
        type : Boolean,
        default: false
    },
    status : {
        type : Boolean,
        default : true
    },
    trash : {
        type : String,
        default : false
    },

},{
    timestamps : true
})


//export models
export default mongoose.model('user', userSchema )