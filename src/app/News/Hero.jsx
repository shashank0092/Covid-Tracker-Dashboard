"use client";
import Image from "next/image";
import HeadImage from "../../../public/images/NewsHeroImage.png";
import Avtar from "../components/Avtar";


const Hero=()=>{
    return(
            <div className="h-full xsm:w-[100vw] mt-[-27px]  " >
                <div className="relative w-0  left-[95vw] top-[10vh] border-l-2 border-red-400 xsm:left-[90vw]" >
                    <Avtar/>
                </div>
                <div >
                    <Image src={HeadImage} alt="haedingnewimage"  className="h-[100vh]"  />
                </div>
                <div className="relative  bottom-80 " >
                    <p className="text-white text-center text-2xl font-sans font-bold " >Covid-19 Chaos Unleashed!</p>
                </div>

            </div>
    )
}

export default Hero;