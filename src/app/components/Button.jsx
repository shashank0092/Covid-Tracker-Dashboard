'use client'
import Button from "@mui/material/Button"
import Link from "next/link";



const ButtonBoi=({text,bgcolor,textcolor,className,icon})=>{
    return(
        <>
            <Button variant="contained" style={{backgroundColor:`${bgcolor}`,color:`${textcolor}` }} className={className} 
            >
                <Link href={
                    text=='Sign Up'?'/Login':("")
                }
                    
                 >{text}</Link>
             </Button>
        </>
    )
}

export default ButtonBoi;