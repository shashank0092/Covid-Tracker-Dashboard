const { NextResponse } = require("next/server");
import LiveFreeUserData from "@/app/models/fulluser";
import connectDB from "@/lib/connectDb";


connectDB();

export async function GET() {

    const userData = {
        id: 1,
        firstName: 'Jhon',
        lastName: 'Doe',
        email: "johndoe@example.com",
    };

    return NextResponse.json({ data: userData }, { status: 200 })
}

export async function POST(request){
    try{
        // console.log(await request.json());
        const{name,email,phoneNumber,age,dob,issue}=await request.json();
        const user=await LiveFreeUserData.findOneAndUpdate({"email":email},{"$set":{"phoneNumber":phoneNumber,"age":age,"issue":issue}});
        console.log(user);
        return NextResponse.json({ message: `Your Details update succesfully`, data:user})
     
    }
    catch(err){
        console.log("THIS IS AN ERROR",err);
    }
}