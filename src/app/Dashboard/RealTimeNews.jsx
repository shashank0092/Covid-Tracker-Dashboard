import Image from "next/image";
import RT1 from "../../../public/images/DashboardRT1.png"
import RT2 from "../../../public/images/DashboardRT2.png"
import RT3 from "../../../public/images/DashboardRT3.png"

const RealTimeNews = () => {
    return (
        <>
            <div className="flex flex-col  justify-center items-center" >
                <div className="bg-recoveryBg p-8 rounded-3xl" >
                    <div>
                        <p className="text-dashboardBg font-extrabold text-3xl font-sans" >Real Time</p>
                    </div>
                    <div>
                        <p>Up-to-date COVID data</p>
                    </div>
                    <div>
                        <Image src={RT1} alt="rt1" height={350} />
                    </div>
                </div>
                <div className="flex gap-5 mt-5" >
                    <div className="bg-recoveryBg p-10 rounded-3xl" >
                        <div>
                            <p className="text-dashboardBg font-extrabold text-3xl font-sans" >Country-specification</p>
                        </div>
                        <div>
                            <p>Search by nation</p>
                        </div>
                        <div>
                            <Image src={RT2} alt="rt2" height={200} />
                        </div>
                    </div>
                    <div className="bg-recoveryBg p-10 rounded-xl" >

                        <div>
                            <p className="text-dashboardBg font-extrabold text-3xl font-sans" >Visual</p>
                        </div>
                        <div>
                            <p>Bar graphs & pie charts</p>
                        </div>
                        <div>
                            <Image src={RT3} alt='rt3' height={200} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RealTimeNews;