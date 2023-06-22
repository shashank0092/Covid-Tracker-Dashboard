import Image from "next/image";
import Impact1 from "../../../public/images/Impact1.png"
import Impact2 from "../../../public/images/Impact2.png"
import Impact3 from "../../../public/images/Impact3.png"
const Imapct = () => {
    return (
        <>
            <div className="mb-44">
                <div className="ml-64">
                    <p className="font-sans font-bold text-5xl" >Impacts Visualized</p>
                </div>
                <div className="mt-14 flex flex-col justify-center items-center " >
                    <div>
                        <Image src={Impact1} alt="impact1" height={300} width={1050} />
                    </div>
                    <div className="flex flex-row mt-3 gap-2" >
                        <div>
                            <Image src={Impact2}  alt="impact2" height={435} />
                        </div>
                        <div>
                            <Image src={Impact3} alt="impact3" height={425} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Imapct;