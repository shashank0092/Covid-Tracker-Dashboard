import Image from "next/image";
import RecoveryImage from "../../../public/images/RecoveryImage1.png"
import PlayBtn from "../../../public/images/RecoveryPalyBtn.png"

const RecoveryTab=({image,headingText,lightText})=>{
    return(
        <>

            <div className="flex w-11/12 bg-recoveryBg p-4 rounded-2xl mt-8 " >
                <div>
                    <Image src={image} /> 
                </div>
                <div className="flex-1 flex flex-col justify-center ml-5">
                    <p className="font-bold text-xl font-sans" >{headingText}</p>
                    <p className="font-light" >{lightText}</p>
                </div>
                <div className="flex justify-center items-center" >
                    <Image src={PlayBtn} />
                </div>
            </div>
        
        </>
    )
}

export default RecoveryTab;