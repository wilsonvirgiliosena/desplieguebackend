const mongoose = require("mongoose");
const userModel = new mongoose.Schema(
    {
        nomuser:{
            type: String
        },
        password:{
            type: String
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const ModelUser = mongoose.model("usuarios",userModel);
/*const autheticateUser = async(nomuser, password)=> {
    try {
        const user = await ModelUser.findOne({nomuser});
        if(user && user.password ===password){
            return user;
        } else{
            return null
        }
    } catch (error) {
        throw error;    
    }
}*/
module.exports = ModelUser;