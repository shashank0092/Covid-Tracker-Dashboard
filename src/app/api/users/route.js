import { NextResponse } from "next/server"
import connectDB from "@/lib/connectDb";
import UserLiveFree from "../../models/user";
import LiveFreeUserData from "@/app/models/fulluser";





connectDB();



export async function POST(request) {
    try {

        // console.log(request)
        const { name, email, imageUrl } = await request.json();
        console.log(name, email, imageUrl)
        const UserDetails = await UserLiveFree.findOne({ email: email })

        if (UserDetails) {
            // console.log("Details Are stored")
            // console.log(UserDetails, "THIS IS USERDETAILS")
            return NextResponse.json({ message: `Welocme Back ${UserDetails?.name}`, data: UserDetails })
        }
        else {
            const newUser = UserLiveFree({ name, email, imageUrl })
            const data = await newUser.save();

            const fullDetails=LiveFreeUserData({name,email,imageUrl})
            const fulldata=await fullDetails.save();
            console.log(fulldata,"this is full data");
            return NextResponse.json({ message: `Welcome ${name}`, data: data })
        }

    }

    catch (err) {
        console.log("this is error", err)
    }
}