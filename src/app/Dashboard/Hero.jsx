import Image from "next/image";
import DBMain from "../../../public/images/DashboardHeadImage.png"

const Hero=()=>{
    return(
        <>
            <div className="h-[100vh] mt-20 "  >
                <div className="flex justify-center  " >
                    <Image src={DBMain} alt="heroasectionimage" height={600} />
                </div>
                <div className="relative bottom-1/2 text-center" >
                    <p className="font-extrabold text-8xl font-sans" >COVIDASHBOARD</p>
                </div>
            </div>
        </>
    )
}

export default Hero;