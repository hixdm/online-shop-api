import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:Schema.Types.String,
    },
    email:{
        type:Schema.Types.String,
    },
    mobile_number:{
        type:Schema.Types.String,
        unique:true
    },
    password:{
        type:Schema.Types.String,
        allowNull:false
    },
    token:{
        type:Schema.Types.String,
    },
    national_ID:{
        type:Schema.Types.String,
    },
    address:{
        type:Schema.Types.String,
    },
    status:{
        type:Schema.Types.Boolean,
    }
    })
    export const User=mongoose.model("User",userSchema)