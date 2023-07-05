'use client';
import { Formik, useFormik } from 'formik';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { useGlobalContext } from "@/context/Store";
const FeedbackForm = () => {
    const {userDetails,setUserDetails}=useGlobalContext();
    console.log(userDetails.email);

    const formik = useFormik({
        initialValues: {
           
            feedback: ""
        },
        onSubmit: async(values) => {
            try{

                const submitValue={
                    email:userDetails.email,
                    feedback:values.feedback
                }
                const res=await fetch("api/feedback",{
                    method:"POST",
                    headers:{ 'Content-Type': "application/json"},
                    body:JSON.stringify(submitValue)
                })
    
                const res2=await res.json();
                alert(res2.message);
            }
            catch(err){
                console.log(err,"THIS IS AN ERROR")
            }
        }
    })
    return (
        <>
            <div className="h-[80vh] flex flex-col justify-center items-center " >
                <div >
                    <p className="text-9xl font-sans font-bold tracking-widest xsm:mt-24 xsm:text-5xl" >SPEAK OUT</p>
                </div>
                <div className="w-1/3 mt-5 xsm:w-full " >
                    <p className="text-center font-sans font-thin " >We can’t read minds, so spill the beans! Your feedback will help us make the COVID Dashboard even better. Fill in the form below and make your voice heard.</p>
                </div>
                <div>
                    <form onSubmit={formik.handleSubmit} method='POST' >
                        <div className="bg-white rounded-full flex flex-col justify-center items-center gap-4 "  >
                            <TextField
                                className="w-72 py-4 bg-white  rounded-full text-xl "
                                placeholder="Type Your Feedback Here.."
                                multiline
                                rows={3}
                                variant="outlined"
                                id="feedback"
                                name="feedback"
                                value={formik.values.feedback}
                                onChange={formik.handleChange}
                                sx={{ input: { color: "black", marginLeft: 2, fontFamily: "sans-serif", fontWeight: "bold" }, outlineColor: 'black' }}
                            />
                        <Button variant='contained' type='submit' color='success' className='bg-green-700 rounded-xl text-black font-bold font-sans' >
                            Submit
                        </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FeedbackForm;