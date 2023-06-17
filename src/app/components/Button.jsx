import Button from "@mui/material/Button"
const ButtonBoi=({text,bgcolor,textcolor})=>{
    return(
        <>
            <Button variant="contained" style={{backgroundColor:`${bgcolor}`,color:`${textcolor}` }} className="font-bold text- text-base font-sans normal-case" > {text} </Button>
        </>
    )
}

export default ButtonBoi;