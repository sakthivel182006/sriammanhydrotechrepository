import mongoose from "mongoose";

const appVersionSchema = new mongoose.Schema(
{
    latestVersion:{
        type:Number,
        default:1
    },

    apkUrl:{
        type:String,
        default:""
    },

    message:{
        type:String,
        default:"New Update Available"
    }
},
{
    timestamps:true
}
);

export default mongoose.model(
    "AppVersion",
    appVersionSchema
);