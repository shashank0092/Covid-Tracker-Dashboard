import Image from "next/image"
import circle from "../../../../public/images/Group1.jpg"

const Recovery = () => {
    return (
        <>
            <div className="flex p-36" >
                <div className=" border-green-600 mb-20" >
                    <div>
                        <Image src={circle}   />
                    </div>
                    <div className="mt-5 w-2/4 ml-16   ">
                        <p className="text-black font-extrabold font-sans text-5xl -tracking-tighter
                        " >From lockdowns to a transformed society, let’s dive into the post-pandemic world.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Recovery;