"use client";
import Image from "next/image"
import HeroImage1 from "../../../public/images/About Hero Image1.png"
import HeroImage2 from "../../../public/images/About Hero Image2.png"

import { useGlobalContext } from "@/context/Store";

const Hero = () => {
    const {userDetails,setUserDetails}=useGlobalContext();
    console.log(userDetails)
    return (
        <>
            <div>
                <div className="mt-20 ml-32 py-32 xsm:ml-4 xsm:mt-5 xsm:py-10 "  >
                    <div>
                        <p className="font-bold font-sans text-7xl tracking-wide xsm:text-lg " >Welcome to Viral Vigilance!</p>
                    </div>
                    <div className="mt-10 flex gap-10 xsm:flex xsm:flex-col " >
                        <div>
                            <p className="w-[40vw] font-sans text-left text-xl xsm:text-lg xsm:w-full" >We’re the ultimate COVID dashboard, tracking the latest data to keep you informed and safe during these challenging times. From new cases to vaccination updates, we’ve got you covered.</p>
                        </div>
                        <div>
                            <p className="w-[40vw] font-san text-left text-xl xsm:w-full  xsm:text-lg" >Our expert team is constantly updating our system to ensure you have access to real-time information and accurate insights. Get ready to unlock a world of knowledge on the virus that changed the world!</p>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-600 p-10 py-20 flex flex-col justify-center item-center" >
                    <div className="flex justify-center items-center gap-32 ml-32 xsm:flex-col xsm:ml-0 xsm:gap-10  " >
                        <div>
                            <Image src={HeroImage1} alt="image1" height={600} />
                        </div>
                        <div>
                            <div>
                                <p className="font-sans font-bold  text-4xl w-1/2 xsm:text-lg xsm:w-full " >Vaccine Tracker: Stay ahead of the curve</p>
                            </div>
                            <div className="mt-5" >
                                <p className="font-sans  text-xl w-1/2 font-semibold xsm:text-sm xsm:w-full " >We're monitoring global vaccination efforts, so you know where you stand and what’s on the horizon.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-32 mt-16 xsm:flex-col xsm:gap-10" >
                        <div className="w-[20vw] xsm:w-full" >
                            <div>
                                <p className="font-sans font-bold  text-4xl xsm:text-sm  " >Data-Driven Insights: The power is in your hands</p>
                            </div>
                            <div className="mt-5" >
                                <p className="font-sans text-xl  font-semibold xsm:text-sm  " >We process complex datasets to make them easily digestible, empowering you to navigate this pandemic with confidence.</p>
                            </div>
                        </div>
                        <div>
                            <Image src={HeroImage2} alt="image2" height={600} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero