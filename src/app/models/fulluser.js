import { Schema,model,models } from "mongoose";


const UserSchema=new Schema({
   name:String,
   email:String,
   imageUrl:String,
   phoneNumber:String,
   age:Number,
   dob:Date,
   issue:Boolean,
   feedback:[String],
});



const LiveFreeUserData=models.LiveFreeUsersData||model("LiveFreeUsersData",UserSchema);

export default LiveFreeUserData;