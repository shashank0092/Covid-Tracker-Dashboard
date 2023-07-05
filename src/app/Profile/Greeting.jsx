import Image from "next/image";
import Image2 from "../../../public/images/ProflleGreetImage.png"

const Greeting = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-10 xsm:mt-0" >
                <div className="xsm:w-1/2" >
                    <Image src={Image2} />
                </div>
                <div className="flex justify-center items-center gap-40 xsm:gap-5 xsm:flex-col " >
                    <div>
                        <p className="text-lg font-semibold font-sans" >
                            Unleash Your Potential
                        </p>
                    </div>
                    <div className="w-2/5 xsm:w-full " >
                        <p className="text-[#003554] text-xl font-sans font-bold xsm:ml-4  " >
                            Welcome to the realm of untapped possibilities! Don’t settle for mundane registrations; make your mark and stand out from the crowd.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Greeting;