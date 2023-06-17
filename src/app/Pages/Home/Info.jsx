'use client'
import Image from "next/image"
import Blood from "../../../../public/images/Blood.png"
import ButtonBoi from "@/app/components/Button"


const Info = () => {
    return (
        <>

            <div className="flex flex-col justify-center items-center mb-40 " >
                <div className="flex justify-center items-center" >
                    <div>
                        <Image src={Blood} height={100} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-5 ">
                    <div>
                        <p className="text-keyTrendsText font-sans font-bold text-4xl " >Stay Informed</p>
                    </div>
                    <div className="mt-5 flex flex-col justify-center items-center " >
                        <p className="w-1/2 text-center font-light text-keyTrendsText" >
                        Get the latest insights and updates on the post-COVID world delivered straight to your inbox.
                        </p>
                    </div>
                    <div className="flex gap-5 mt-5" >
                        <div>
                            <ButtonBoi bgcolor={'orange'} textcolor={'black'} text={"Sign Up"}  />
                        </div>
                        <div>
                        <ButtonBoi bgcolor={'black'} textcolor={'orange'} text={"Read More"}  />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Info;