'use client'
import Button from "@mui/material/Button"
import { useSession } from "next-auth/react"
import { toast } from "react-toastify";
import { signIn } from 'next-auth/react'
import { signOut } from "next-auth/react"
import GoogleIcon from '@mui/icons-material/Google'
import { useEffect, useState } from "react"
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from "next/navigation"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";

import { useGlobalContext } from "@/context/Store";




const GoogleLoginSection = () => {
    const [googleLoading, setGoogleLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    const { userDetails, setUserDetails, loginType} = useGlobalContext();
    const [login, setLogin] = useState(false);


    const { data } = useSession();



    useEffect(() => {

        data?.user?.name == undefined ? (<></>) : (
            // toast(`Welcome ${data?.user?.name}`, { hideProgressBar: true, autoClose: 2000, type: 'success' }),
            setLogin(true)
        )

        login == false ? (<></>) : (userLoginDetails(data.user.name, data.user.email, data.user.image))
    }, [data])
    console.log(data)
    const userLoginDetails = async (name, email, imageUrl) => {
        console.log("sending request to backend");
        const newUser = {
            name: name,
            email: email,
            imageUrl: imageUrl
        }

        const data = await fetch("api/users", {
            method: 'POST',
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(newUser)
        })

        const data2 = await data.json();
        const details = await data2?.data
        setUserDetails(details);
        toast(`${data2?.message}`, { hideProgressBar: true, autoClose: 2000, type: 'success' })
    }







    return (
        <>
            <div className="ml-40 xsm:ml-4" >

                <div>
                    <div className="w-3/4" >
                        <p className="font-extrabold font-sans text-6xl leading-snug xsm:text-2xl" >
                            {
                                `Get ready to Login with GOOGLE on  LIVELIFE`
                            }
                        </p>
                        <p className="font-extrabold font-sans text-6xl xsm:text-lg" >Login!</p>
                    </div>

                    <div className="mt-16 flex gap-7 xsm:flex xsm:flex-col xsm:mt-4" >
                        <ToastContainer
                            position="bottom-left"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                        />





                        {
                            data?.user?.name == null ? (
                                <>
                                    <LoadingButton variant="contained" loading={googleLoading}
                                        loadingIndicator="Loading…" style={{ backgroundColor: '#79addc', color: "black" }} className={'font-sans font-semibold rounded-none   flex gap-5 xsm:w-full  xsm:rounded-3xl xsm:py-3 xsm:font-bold  '} onClick={
                                            async (e) => {
                                                e.preventDefault();
                                                setGoogleLoading(true)
                                                await signIn("google")

                                                // data?.user?.name==null?(<></>):(toast(`Welocme ${data?.user?.name}`, { hideProgressBar: true, autoClose: 2000, type: 'success' }))


                                            }
                                        } >
                                        {
                                            googleLoading == true ? (<> <span>Loading...</span> </>) : (<><GoogleIcon /> Login with Google</>)
                                        }
                                    </LoadingButton>


                                </>
                            ) : (
                                <>

                                    <LoadingButton variant="contained" loading={googleLoading} type="button"
                                        loadingIndicator="Loading…" style={{ backgroundColor: '#ff3f3f', color: "white" }} className={'font-sans font-semibold rounded-3xl flex gap-5 xsm:w-full  xsm:rounded-3xl xsm:py-3 xsm:font-bold   '} onClick={
                                            async (e) => {
                                                e.preventDefault()
                                                setGoogleLoading(true)
                                                signOut("google")
                                                data == "" ? (<></>) : (setUserData(data))
                                                data.user.name == null ? (<></>) : (toast(`Log Out `, { hideProgressBar: true, autoClose: 2000, type: 'success' }))


                                            }
                                        } >
                                        {
                                            googleLoading == true ? (<> <span>Loading...</span> </>) : (<><GoogleIcon /> Logout with Google</>)
                                        }
                                    </LoadingButton>


                                    <Link href={"/Dashboard"} >
                                        <Button variant="contained" style={{ backgroundColor: '#6f8bf0', color: "white" }} className={'font-sans font-semibold rounded-3xl   flex gap-5 xsm:w-full  xsm:rounded-3xl xsm:py-3 xsm:font-bold '}> Go To Dashboard  <ArrowForwardIcon className="rounded-xl" /></Button>
                                    </Link>

                                </>
                            )
                        }












                    </div>
                </div>
            </div>
        </>
    )
}

export default GoogleLoginSection;
