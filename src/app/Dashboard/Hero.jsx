import Image from "next/image";
import DBMain from "../../../public/images/DashboardHeadImage.png"
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import SidebarNav from "../components/SidebarNav";
import Avtar from "../components/Avtar";


const Hero = () => {

    const [sideBar, setSideBar] = useState(false)
    return (
        <>
            <div className="h-[100vh] mt-5 flex gap-14 xsm:gap-0  xsm:mt-0  xsm:w-[98vw]  xsm:h-[50vh]  "  >
                <div className="relative left-[95vw] xsm:left-[90vw] xsm:mt-5 " >
                    <Avtar />
                </div>
                <div className="w-[20%] xsm:w-[10%]  ml-4  xsm:ml-0 " >
                    {
                        sideBar == false ? (<> <IconButton onClick={() => setSideBar(true)} > <MenuIcon fontSize="large" /> </IconButton>  </>) : (
                            <>
                                <SidebarNav sideBar={sideBar} setSideBar={setSideBar} />
                            </>
                        )
                    }
                </div>
                <div className="" >
                    <div className="flex justify-center xsm: " >
                        <Image src={DBMain} alt="heroasectionimage" height={600} />
                    </div>
                    <div className="relative bottom-80 text-center xsm:bottom-1/2" >
                        <p className="font-extrabold text-8xl font-sans xsm:text-lg" >COVIDASHBOARD</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;