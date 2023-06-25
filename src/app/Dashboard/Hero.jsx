import Image from "next/image";
import DBMain from "../../../public/images/DashboardHeadImage.png"

const Hero=()=>{
    return(
        <>
            <div className="h-[100vh] mt-20  xsm:mt-0  xsm:w-[98vw]  xsm:h-[50vh]  "  >
                <div className="flex justify-center xsm: " >
                    <Image src={DBMain} alt="heroasectionimage" height={600} />
                </div>
                <div className="relative bottom-1/2 text-center xsm:bottom-1/2" >
                    <p className="font-extrabold text-8xl font-sans xsm:text-lg" >COVIDASHBOARD</p>
                </div>
            </div>
        </>
    )
}

export default Hero;