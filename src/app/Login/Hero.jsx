import Image from "next/image";
import LoginpageHeaderImage from "../../../public/images/LoginpageHeaderImage.png"

const Hero = () => {
    return (
        <>
            <div className="xsm:ml-3" >
                <div className="h-[100vh] flex justify-center items-center gap-32 xsm:h-[20vh]" >
                    <div className="" >
                        <p className="font-extrabold font-sans text-8xl text-center xsm:text-5xl" >LIVELIFE</p>
                        <p className="font-semibold font-mono text-9xl line-clamp-6 xsm:text-lg">Login</p>
                    </div>
                    <div className=" ">
                        <Image src={LoginpageHeaderImage} alt="LoginpageHeaderImage" height={500} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;