'use client';
import Image from "next/image";
import MyImage from "../../../public/images/MY-IMAGE.png"
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { use, useContext, useState } from "react";
import SidebarNav from "../components/SidebarNav";
import { useFormik } from 'formik';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import Filter9PlusIcon from '@mui/icons-material/Filter9Plus';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { useGlobalContext } from "@/context/Store";
import Avtar from "../components/Avtar";



const validationSchema = yup.object({
    name: yup.string(),
    email: yup.string().email(),
    phoneNumber: yup.number().positive().max(10),
    // address:yup.string(),
    age: yup.number().positive().integer(),
    dob: yup.date().default(() => new Date()),
    // medicalCondition:yup.string(),
    issue: yup.boolean()

})

const ProfilePage = () => {
    const [sideBar, setSideBar] = useState(false);
    const {userDetails,setUserDetails}=useGlobalContext();
    console.log(userDetails,"this is global value")
    


    const formik = useFormik(
        {
            initialValues: {
                name: userDetails.name,
                email: userDetails.email,
                phoneNumber:"",
                
                age: "",
                dob: "",
              
                issue: false
            },
            onSubmit: async (values) => {
                try {
                    const saveDetails=await fetch("api/fulldetails",{
                        method:"POST",
                        headers:{ 'Content-Type': "application/json" },
                        body:JSON.stringify(values)
                    })
                    
                    const res=await saveDetails.json();
                    alert(res.message);
                   
                }
                catch (err) {
                    console.log(err)
                }
            },
            // validationSchema:validationSchema
        },)


    return (
        <>
            <div className="bg-[#003554] py-10 mt-5">
               
                <div className="ml-10" >
                    <p className="text-white font-sans font-bold text-3xl " >
                        Fill Your All Details Here:
                    </p>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-96 mt-5 " >
                        {/* <div>
                    {
                        sideBar == false ? (<> <IconButton onClick={() => setSideBar(true)} > <MenuIcon fontSize="large" /> </IconButton>  </>) : (
                            <>
                                <SidebarNav sideBar={sideBar} setSideBar={setSideBar} />
                            </>
                        )
                    }
                </div> */}
                        <div className="flex flex-row xsm:flex-col  justify-center items-center gap-20 xsm:gap-10 " >
                            <div className="mb-[90px] xsm:mb-[10px]" >
                                <Image src={userDetails.imageUrl} width={100} height={100} className="rounded-full" />
                            </div>
                            <div className="" >
                                <form onSubmit={formik.handleSubmit} method="POST" className="flex flex-col gap-5" >
                                    <div className="flex gap-5 xsm:flex-col ">
                                        <div className="flex flex-col  gap-5 " >
                                            <div className="bg-white rounded-full" >
                                                <TextField
                                                    className="w-72 py-4 bg-white  rounded-full text-xl "
                                                    placeholder="Enter Name"

                                                    variant="standard"
                                                    id="name"
                                                    name="name"

                                                    value={formik.values.name}
                                                    onChange={formik.handleChange}
                                                    sx={{input:{color:"black",marginLeft:2,fontFamily:"sans-serif",fontWeight:"bold"}}}

                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="end" >
                                                                <AccountCircleIcon className="text-black" />
                                                            </InputAdornment>
                                                        ),
                                                        disableUnderline: true
                                                    }}
                                                />
                                            </div>
                                            <div className="bg-white rounded-full">
                                                <TextField
                                                    className="w-72  py-4 bg-white  rounded-full text-xl"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Enter Email"
                                                    sx={{input:{color:"black",marginLeft:2,fontFamily:"sans-serif",fontWeight:"bold"}}}
                                                    variant="standard"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="end" >
                                                                <EmailIcon className="text-black" />
                                                            </InputAdornment>
                                                        ),
                                                        disableUnderline: true
                                                    }}
                                                />
                                            </div>
                                            <div className="bg-white rounded-full">
                                                <TextField
                                                    className="w-72 py-4 bg-white  rounded-full text-xl"
                                                    id="phoneNumber"
                                                    type="number"
                                                    name="phoneNumber"
                                                    placeholder="Enter Phone Number"
                                                    sx={{input:{color:"black",marginLeft:2,fontFamily:"sans-serif",fontWeight:"bold"}}}
                                                    variant="standard"
                                                    value={formik.values.phoneNumber}
                                                    onChange={formik.handleChange}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="end"  >
                                                                <PhoneIcon className="text-black" />
                                                            </InputAdornment>
                                                        ),
                                                        disableUnderline: true
                                                    }}
                                                />
                                            </div>
                                            {/* <TextField
                                        className="w-72 "
                                        id="address"
                                        name="adress"
                                        label="Address"

                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        multiline
                                        rows={3}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment>
                                                    <HomeIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    /> */}
                                        </div  >
                                        <div className="flex flex-col gap-5" >
                                            <div className="bg-white rounded-full" >
                                                <TextField
                                                    className="w-72 py-4 bg-white  rounded-full text-xl"
                                                    id="age"
                                                    name="age"
                                                    placeholder="Enter Age"
                                                    sx={{input:{color:"black",marginLeft:2,fontFamily:"sans-serif",fontWeight:"bold"}}}
                                                    variant="standard"
                                                    value={formik.values.age}
                                                    onChange={formik.handleChange}
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="end" >
                                                                <Filter9PlusIcon  className="text-black" />
                                                            </InputAdornment>
                                                        ),
                                                        disableUnderline:true
                                                    }}
                                                />
                                            </div>
                                            <div className="bg-white rounded-full" >
                                            <TextField
                                                className="w-72 py-4 bg-white  rounded-full text-xl"
                                                id="dob"
                                                name="dob"
                                                placeholder="Enter Birth Date"
                                                sx={{input:{color:"black",marginLeft:2,fontFamily:"sans-serif",fontWeight:"bold"}}}
                                                variant="standard"
                                                type="date"
                                                value={formik.values.dob}
                                                onChange={formik.handleChange}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="end" >
                                                            <CalendarTodayIcon className="text-black"  />
                                                        </InputAdornment>
                                                    ),
                                                    disableUnderline:true
                                                }}
                                            />
                                            </div>
                                            {/* <TextField
                                        className="w-72 "
                                        id="address"
                                        name="adress"
                                        label="Address"

                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        multiline
                                        rows={3}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment>
                                                    <MedicalServicesIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                    /> */}
                                            <FormControlLabel control={<Switch color="warning"  />} onChange={()=>formik.values.issue=!formik.values.issue} value={formik.values.issue} label="Currently facing any problems" sx={{color:'white'}}   />

                                        </div>
                                    </div>
                                    <div className="flex justify-center" >
                                        <Button variant="contained" style={{ backgroundColor: 'green' }} className="font-sans text-black font-bold" type="submit"   >
                                            Submit
                                        </Button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;