
import LiveFreeUserData from "@/app/models/fulluser";
import { NextResponse } from "next/server";


export async function POST(request){
    try{
        // console.log(await request.json());

        const{email,feedback}=await request.json();
        console.log(email,feedback)
        const user=await LiveFreeUserData.findOneAndUpdate({"email":email},{"$push":{"feedback":feedback}});
        console.log(user);
        return NextResponse.json({ message: `Your Feedback Stored Succesfully`, data:user})
     
    }
    catch(err){
        console.log("THIS IS AN ERROR",err);
    }
}