'use client'
import Button from "@mui/material/Button"
import {useSession} from "next-auth/react"
import {signIn} from 'next-auth/react'
import GoogleIcon from '@mui/icons-material/Google'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const LoginSection = () => {
    return (
        <>
            <div className="ml-40" >
                <div>
                    <div className="w-3/4" >
                        <p className="font-extrabold font-sans text-6xl leading-snug" >Get ready to Login with LIVELIFE</p>
                        <p className="font-extrabold font-sans text-6xl" >Login!</p>
                    </div>
                    <div className="mt-16 flex gap-7" >
                        {/* <ButtonBoi text={"Login with Google"} bgcolor={""} textcolor={"black"} className={'font-sans font-semibold rounded-none  ' }  icon={'google'} /> */}
                        <Button variant="contained"  style={{backgroundColor:'#79addc',color:"black"}} className={'font-sans font-semibold rounded-none ' }  onClick={
                            ()=>{
                                console.log("shuklla boi")
                                signIn("google")
                            }
                        } >
                            <GoogleIcon/> Login with Google
                        </Button>
                        {/* <ButtonBoi text={"Login with Linkedin"} bgcolor={"#ffc09f"} textcolor={"black"} className={'font-sans font-semibold rounded-none  '} icon={'linkedin'} /> */}
                        <Button variant="contained"  style={{backgroundColor:'#ffc09f',color:"black"}} className={'font-sans font-semibold rounded-none ' }  onClick={
                            ()=>{
                                console.log("shuklla boi")
                                signIn("linkedin")
                            }
                        } >
                            <LinkedInIcon/> Login With Linkedin
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSection;