import { NextResponse } from "next/server";
import {createTransport} from "nodemailer"

export async function POST(request){
    try{
        console.log("this is mail route")
        const {email}=await request.json();
        console.log(email,"THIS IS MY MAIL ID");
    
        const transport=createTransport({
            service:"gmail",
            auth:{
                user:"shashank0865@gmail.com",
                pass:"vgxfuejaqyermkqt"
            }
        })
    
        const maildata={
            from:"shashank0865@gmail.com",
            to:email,
            subject:"LIVE FREE NEWSLETTER SUBSCRIPTION",
            text:"THIS IS TESTED MESSAGE"
        }
    
        const Sendmail=transport.sendMail(maildata,(err,maildata)=>{
            console.log('sending mail')
            if(err){
                console.log("this error occured during sending mail",err)
            }
        })
    
        return NextResponse.json({ message:"Newsletter Subscribed", data:Sendmail})
    }
    catch(err){
        console.log("this is sendmail api error",err);
    }
}