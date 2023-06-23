import Image from "next/image";
import RT1 from "../../../public/images/DashboardRT1.png"
import RT2 from "../../../public/images/DashboardRT2.png"
import RT3 from "../../../public/images/DashboardRT3.png"

const RealTimeNews = () => {
    return (
        <>
            <div className="flex flex-col  justify-center items-center xsm:border-l-4 xsm:border-r-4" >
                <div className="bg-recoveryBg p-8 rounded-3xl xsm:p-0  xsm:rounded-lg" >
                    <div className="xsm:text-center" >
                        <p className="text-dashboardBg font-extrabold text-3xl font-sans xsm:text-lg " >Real Time</p>
                    </div>
                    <div>
                        <p className="xsm:text-sm xsm:text-center ">Up-to-date COVID data</p>
                    </div>
                    <div>
                        <Image src={RT1} alt="rt1" height={350} />
                    </div>
                </div>
                <div className="flex gap-5 mt-5 xsm:flex-col" >
                    <div className="bg-recoveryBg p-10 rounded-3xl xsm:p-0" >
                        <div>
                            <p className="text-dashboardBg font-extrabold text-3xl font-sans xsm:text-lg xsm:text-center  " >Country-specification</p>
                        </div>
                        <div>
                            <p className="xsm:text-sm xsm:text-center " >Search by nation</p>
                        </div>
                        <div>
                            <Image src={RT2} alt="rt2" height={200} />
                        </div>
                    </div>
                    <div className="bg-recoveryBg p-10 rounded-xl xsm:p-0" >

                        <div>
                            <p className="text-dashboardBg font-extrabold text-3xl font-sans xsm:text-lg  xsm:text-center  " >Visual</p>
                        </div>
                        <div>
                            <p className="xsm:text-sm  xsm:text-center " >Bar graphs & pie charts</p>
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