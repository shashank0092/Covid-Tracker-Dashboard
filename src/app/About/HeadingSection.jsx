"use client";
import Avtar from "../components/Avtar";
const HeadingSection = () => {
    return (
        <>

            <div className="h-[100vh] bg-[#296EB4] flex justify-center items-center " >
                <div className="fixed top-5 left-[90vw]" >
                    <Avtar/>
                </div>
                <div>
                    <p className="font-bold text-white text-7xl text-center tracking-wide w-[70vw] font-sans xsm:text-lg " >Unveiling the COVID Command Center</p>
                </div>
            </div>

        </>
    )
}

export default HeadingSection;