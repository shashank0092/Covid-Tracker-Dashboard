import keyTrends from "../../../public/images/KeyTrends.png"
import Image from "next/image";

const Trends = () => {

    return (
        <>

            <div className="ml-40 mb-60 xsm:ml-0 xsm:mt-5 xsm:mb-2 " >
                <div>
                    <Image src={keyTrends} alt="keytrend" height={150} />
                </div>
                <div className="mt-4 flex ml-16 gap-32  xsm:ml-0 xsm:flex xsm:flex-col xsm:gap-5  ">
                    <div className="w-1/3 xsm:w-full" >
                        <p className="font-sans text-xl tracking-wide text-keyTrendsText  xsm:leading-6 xsm:tracking-tight xsm:ml-4" >
                            The world has adapted to remote work, digital transformation, and a sustainability focus.
                        </p>
                    </div>
                    <div className="w-1/2 xsm:w-full">
                        <p className="font-sans text-xl tracking-wide text-keyTrendsText xsm:leading-6 xsm:tracking-tight xsm:ml-4">
                            Mental health awareness and prioritizing well-being  have become essential both at work and home.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trends;