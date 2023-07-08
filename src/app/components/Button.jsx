'use client'


import Button from "@mui/material/Button"
import Link from "next/link";
import { useEffect } from "react";



const ButtonBoi = ({ text, bgcolor, textcolor, className, icon }) => {
    

    const LoginType=()=>{
       text==='Web2.0 Login'?(setLoginType("Web2.0")):(setLoginType("Web3.0"))
    }
    

    return (
        <>

            <Link href={text == 'Web2.0 Login' ? '/Login' : (text=='Web3.0 Login'?('/Login'):(""))}  >
            <Button variant="contained" style={{ backgroundColor: `${bgcolor}`, color: `${textcolor}` }}  className={className}>
                {text}
            </Button>
            </Link>

        </>
    )
}

export default ButtonBoi;