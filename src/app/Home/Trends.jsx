import keyTrends from "../../../public/images/KeyTrends.png"
import Image from "next/image";

const Trends = () => {

    return (
        <>

            <div className="ml-40 mb-60" >
                <div>
                    <Image src={keyTrends} alt="keytrend" height={150} />
                </div>
                <div className="mt-4 flex ml-16 gap-32 ">
                    <div className="w-1/3" >
                        <p className="font-sans text-xl tracking-wide text-keyTrendsText " >
                            The world has adapted to remote work, digital transformation, and a sustainability focus.
                        </p>
                    </div>
                    <div className="w-1/2">
                        <p className="font-sans text-xl tracking-wide text-keyTrendsText ">
                            Mental health awareness and prioritizing well-being <br /> have become essential both at work and home.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trends;