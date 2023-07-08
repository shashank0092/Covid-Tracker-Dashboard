'use client'
import { useState } from "react";
import SidebarNav from "../components/SidebarNav";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Image1 from "../../../public/images/ProfileHeroImage.png"

import Image from "next/image";
import Avtar from "../components/Avtar";


const Hero = () => {

    const [sideBar, setSideBar] = useState(false);
    return (
        <>
            <div className="h-[100vh] xsm:h-[75vh] bg-[#003554] flex justify-center items-center xsm:flex xsm:flex-col xsm:w-full xsm:justify-start " >
                <div className="relative left-[92vw] bottom-[45vh] xsm:left-[150px]  xsm:bottom-0 xsm:top-5  " >
                    <Avtar />
                </div>
                {/* <div>
                    {
                        sideBar == false ? (<> <IconButton onClick={() => setSideBar(true)} > <MenuIcon fontSize="large" /> </IconButton>  </>) : (
                            <>
                                <SidebarNav sideBar={sideBar} setSideBar={setSideBar} />
                            </>
                        )
                    }
                </div> */}

                <div className="xsm:mt-10">
                    <p className="text-white text-center font-sans text-5xl w-2/3  font-bold xsm:w-full xsm:text-lg  " >Revolutionize your user experience. Join us today!</p>
                </div>

                <div className="xsm:w-1/2" >
                    <Image src={Image1} height={500} alt="image1" />
                </div>
            </div>
        </>
    )
}

export default Hero;