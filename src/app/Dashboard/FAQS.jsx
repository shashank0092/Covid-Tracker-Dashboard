

const FAQS=()=>{
    return(
        <>

            <div  className="mt-12 ">
                <div className="p-28   bg-dashboardBg xsm:p-0 xsm:py-16 xsm:rounded-lg" >
                    <div className="ml-32 xsm:ml-4 ">
                        <p className="text-white font-extrabold font-sans text-5xl xsm:text-lg " >Frequently Asked Questions</p>
                    </div>
                    <div className="flex gap-20 mt-8 ml-32  xsm:ml-4 xsm:text-base xsm:flex-col xsm:gap-5 " >
                        <div>
                            <p className="text-white text-2xl font-sans font-semibold tracking-tight xsm:text-base " >How often is data updated?</p>
                            <p className="text-orange-400 mt-2 w-72 font-mono font-bold xsm:w-80 xsm:text-sm " >Our COVID dashboard fetches data from reliable sources every day to provide you with the latest information.</p>
                        </div>
                        <div>
                            <p className="text-white text-2xl font-sans font-semibold tracking-tight xsm:text-base">Can I search by region?</p>
                            <p className="text-orange-400 mt-5 w-72 font-mono font-bold xsm:w-80 xsm:text-sm" >Yes! Simply type a country’s name in the input bar, and our dashboard will display the relevant data.</p>
                        </div>
                        <div>
                            <p className="text-white text-2xl font-sans font-semibold tracking-tight xsm:text-base">Is the data reliable?</p>
                            <p  className="text-orange-400 mt-5 w-72 font-mono font-bold xsm:w-80 xsm:text-sm ">We source data from reputable organizations to ensure accuracy and reliability.</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default FAQS;