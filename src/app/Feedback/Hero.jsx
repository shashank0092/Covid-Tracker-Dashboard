'use client';
import Image from "next/image";
import Image1 from "../../../public/images/FeedbackHeroImage.png"
import Avtar from "../components/Avtar";


const Hero=()=>{
    return(
        <>
            <div className="bg-black" >
                <div className="fixed top-8 w-10 left-[90vw]  " >
                    <Avtar/>
                </div>
                <div className="bg-black text-white flex flex-col justify-center items-center" >
                   <div className="flex flex-col justify-center items-center h-[100vh]" >
                   <div className="mt-20 ">
                        <p className="font-sans font-bold text-9xl xsm:text-6xl" >FEEDBACK!</p>
                    </div>
                    <div className="w-1/3 mt-5 xsm:w-full">
                        <p className="text-center " >GOT OPINIONS ON OUR COVID DASHBOARD? WE'RE ALL EARS! DON’T HOLD BACK—LET US KNOW HOW WE CAN IMPROVE YOUR EXPERIENCE.</p>
                    </div>
                   </div>
                    <div className="mb-10  " >
                        <Image src={Image1} height={700}  width={700} className="xsm:w-[80vw]" />
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Hero;