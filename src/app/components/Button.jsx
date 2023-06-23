'use client'
import Button from "@mui/material/Button"
import Link from "next/link";



const ButtonBoi = ({ text, bgcolor, textcolor, className, icon }) => {
    return (
        <>

            <Link href={text == 'Sign Up' ? '/Login' : ("")}  >
            <Button variant="contained" style={{ backgroundColor: `${bgcolor}`, color: `${textcolor}` }} className={className}>
                {text}
            </Button>
            </Link>

        </>
    )
}

export default ButtonBoi;