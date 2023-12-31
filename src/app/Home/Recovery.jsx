import Image from "next/image"
import circle from "../../../public/images/Group1.png"
import RecoveryTab from "@/app/components/RecoveryTab"
import RecoveryImage1 from "../../../public/images/RecoveryImage1.jpg"
import RI1 from  "../../../public/images/RecoveryLogo1.png"
import RI2 from "../../../public/images/RecoveryLogo2.png"
import RI3 from "../../../public/images/RecoveryLogo3.png"
import RI4 from "../../../public/images/RecoveryLogo4.png"
import RI5 from "../../../public/images/RecoveryLogo5.png"


const Recovery = () => {
    return (
        <>
            <div className="p-36  xsm:p-0 mt-5">
                <div className="flex " >
                    <div className="mb-20   xsm:justify-center xsm:items-center " >
                        <div className="xsm:flex xsm:justify-center  xsm:w-80" >
                            <Image src={circle} alt="circle" width={200} height={80} />
                        </div>
                        <div className="mt-5 w-2/4 ml-16  xsm:ml-0 xsm:w-96 xsm:mt-10">
                            <p className="text-black font-extrabold font-sans text-5xl -tracking-tighter xsm:text-xl xsm:ml-4 xsm:tracking-normal 
                        " >From lockdowns to a transformed society, let’s dive into the post-pandemic world.</p>
                        </div>
                    </div>
                </div>
                <div className="ml-16 mt-20 xsm:mt-0 xsm:ml-0" >
                    <RecoveryTab headingText={"Economy Rebound"} lightText={"Thriving Markets"} image={RecoveryImage1}  />
                    <RecoveryTab headingText={"Travel Reboot"} lightText={"Rediscovering Adventures"} image={RecoveryImage1} />
                    <RecoveryTab headingText={"Innovation Surge"} lightText={"Tech-Powered Future"} image={RecoveryImage1} />
                </div>
                <div className="flex mt-32 ml-9 justify-between xsm:mt-6 xsm:ml-0">
                    <div >
                        <Image src={RI1} alt="rt1"  height={90} />
                    </div>
                    <div>
                        <Image src={RI2} alt="rt2" height={90}  />
                    </div>
                    <div>
                        <Image src={RI3} alt="rt3"   height={90}  />
                    </div>
                    <div>
                        <Image src={RI2} alt="rt2" height={90}  />
                    </div>
                    <div>
                        <Image src={RI4} alt="rt4" height={90}  />
                    </div>
                    <div>
                        <Image src={RI5} alt="rt5" height={90}  />
                    </div>
                    
                </div>
            </div>

        </>
    )
}
export default Recovery;