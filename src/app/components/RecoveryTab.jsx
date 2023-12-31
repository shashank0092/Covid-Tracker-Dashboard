import Image from "next/image";
import PlayBtn from "../../../public/images/RecoveryPalyBtn.png"

const RecoveryTab=({image,headingText,lightText})=>{
    return(
        <>

            <div className="flex w-11/12 bg-recoveryBg p-4 rounded-2xl mt-8 xsm:p-0 xsm:w-[95vw] xsm:ml-4  " >
                <div>
                    <Image src={image} alt="randomeimage" height={90}    /> 
                </div>
                <div className="flex-1 flex flex-col justify-center ml-5">
                    <p className="font-bold text-xl font-sans" >{headingText}</p>
                    <p className="font-light" >{lightText}</p>
                </div>
                <div className="flex justify-center items-center " >
                    <Image alt="playbtnimage" src={PlayBtn} />
                </div>
            </div>
        
        </>
    )
}

export default RecoveryTab;