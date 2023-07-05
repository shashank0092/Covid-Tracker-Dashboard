import Image from "next/image"
import News1 from "../../../public/images/NewsImage1.png"
import News2 from "../../../public/images/NewsImage2.png"
import News3 from "../../../public/images/NewsImage3.png"


const NewsImage = () => {
    return (
        <>
            <div className="flex justify-center " >
                <div className="flex ml-32 gap-5 xsm:flex xsm:flex-col  xsm:justify-center xsm:ml-16 " >
                    <div >
                        <div>
                            <div>
                                <Image src={News1} height={200} alt={"Image1"} />
                            </div>
                            <div className="w-72" >
                                <p className="font-semibold font-sans text-lg" >Vaccine Race</p>
                                <p className=" font-light " >The pursuit to create the ultimate defense against the virus.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={News2} height={200} alt={"Image2"} />
                        </div>
                        <div className="w-72" >
                            <p className="font-semibold font-sans text-lg"  >Frontline Heroes</p>
                            <p className="font-light" >Meet the brave souls facing Covid-19 head-on.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={News3} height={200} alt={"Image3"} />
                        </div>
                        <div className="w-72" >
                            <p className="font-semibold font-sans text-lg">Lockdown Tales</p>
                            <p className=" font-light" >How the world has adapted to social distancing measures.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsImage;