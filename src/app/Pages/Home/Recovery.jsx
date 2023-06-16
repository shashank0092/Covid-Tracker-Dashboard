import Image from "next/image"
import circle from "../../../../public/images/Group1.jpg"
import RecoveryTab from "@/app/components/RecoveryTab"
import RecoveryImage1 from "../../../../public/images/RecoveryImage1.png"


const Recovery = () => {
    return (
        <>
            <div className="p-36">
                <div className="flex " >
                    <div className="mb-20" >
                        <div>
                            <Image src={circle} />
                        </div>
                        <div className="mt-5 w-2/4 ml-16   ">
                            <p className="text-black font-extrabold font-sans text-5xl -tracking-tighter
                        " >From lockdowns to a transformed society, let’s dive into the post-pandemic world.</p>
                        </div>
                    </div>
                </div>
                <div className="ml-16 mt-20" >
                    <RecoveryTab headingText={"Economy Rebound"} lightText={"Thriving Markets"} image={RecoveryImage1}  />
                    <RecoveryTab headingText={"Travel Reboot"} lightText={"Rediscovering Adventures"} image={RecoveryImage1} />
                    <RecoveryTab headingText={"Innovation Surge"} lightText={"Tech-Powered Future"} image={RecoveryImage1} />
                </div>
            </div>

        </>
    )
}
export default Recovery;