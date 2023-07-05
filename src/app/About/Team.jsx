import Image from "next/image";

import  Member1 from "../../../public/images/TeamImage1.png"
import  Member2 from "../../../public/images/TeamImage2.png"
import  Member3 from "../../../public/images/TeamImage3.png"
const Team=()=>{
    return(
        <>
            <div className="mt-10 flex flex-col justify-center items-center " >
                <div className="mb-10">
                    <p className="text-3xl font-sans font-bold" >Meet Our Team</p>
                </div>
                <div className="flex gap-5" >
                    <div>
                        <Image src={Member1} /> 
                    </div>
                    <div className="flex flex-col gap-5" >
                        <div>
                            <Image src={Member2} />
                        </div>
                        <div>
                            <Image src={Member3} /> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;