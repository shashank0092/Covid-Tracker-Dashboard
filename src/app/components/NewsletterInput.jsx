'use client';
import Button from "@mui/material/Button"
import { Formik, useFormik } from "formik";
import { useGlobalContext } from "@/context/Store";


const NewsletterInput = () => {
    const {userDetails,setUserDetails}=useGlobalContext();
    console.log(userDetails.email)

    const formik=useFormik({
        initialValues:{
            email:userDetails.email
        },
        onSubmit:async(values)=>{

            console.log("Runnig mail function")
            const res=await fetch("api/sendmail",{
                method:'POST',
                headers:{ 'Content-Type': "application/json"},
                body:JSON.stringify(values)
            })

            const res2=await res.json();
            alert(res2.message)
        }
    })
    return (
        <>
            <div className="mt-5 flex flex-row gap-5 justify-center items-center" >
                <div className="border-t-2 border-b-2 border-l-2 border-r-2 p-3 rounded-full bg-gray-100"  >
                   <form onSubmit={formik.handleSubmit} method="POST" >
                   <input type="text" className="bg-gray-100 outline-none font-sans font-medium text-sm  " placeholder="abcd@gmail.com" value={formik.values.email} onChange={formik.handleChange} />
                    <Button type="submit" variant="contained"  style={{backgroundColor:'black',color:"orange",textTransform:"none",borderRadius:"20px"}}  size="small" >Subscribe</Button>
                   </form>
                </div>
               
            </div>
        </>
    )
}

export default NewsletterInput;