

const FAQS=()=>{
    return(
        <>

            <div  className="mt-12">
                <div className="p-28   bg-dashboardBg " >
                    <div className="ml-32 ">
                        <p className="text-white font-extrabold font-sans text-5xl " >Frequently Asked Questions</p>
                    </div>
                    <div className="flex gap-20 mt-8 ml-32 " >
                        <div>
                            <p className="text-white text-2xl font-sans font-semibold tracking-tight" >How often is data updated?</p>
                            <p className="text-orange-400 mt-5 w-72 font-mono font-bold" >Our COVID dashboard fetches data from reliable sources every day to provide you with the latest information.</p>
                        </div>
                        <div>
                            <p className="text-white text-2xl font-sans font-semibold tracking-tight">Can I search by region?</p>
                            <p className="text-orange-400 mt-5 w-72 font-mono font-bold" >Yes! Simply type a country’s name in the input bar, and our dashboard will display the relevant data.</p>
                        </div>
                        <div>
                            <p className="text-white text-2xl font-sans font-semibold tracking-tight">Is the data reliable?</p>
                            <p  className="text-orange-400 mt-5 w-72 font-mono font-bold">We source data from reputable organizations to ensure accuracy and reliability.</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default FAQS;