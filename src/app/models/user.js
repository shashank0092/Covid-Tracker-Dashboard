import { Schema,model,models } from "mongoose";


const UserSchema=new Schema({
   name:String,
   email:String,
   imageUrl:String,
});

// mongoose.model={}

const UserLiveFree=models.LiveFree||model("LiveFree",UserSchema);

export default UserLiveFree;