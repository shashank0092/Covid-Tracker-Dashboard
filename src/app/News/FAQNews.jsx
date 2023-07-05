const FAQNews = () => {
    return (
        <>
            <div className="mt-40 ml-64 xsm:ml-5 xsm:mt-12  "  >
                <div>
                    <p className="font-bold font-sans tracking-tighter text-4xl " >Frequently Asked Questions</p>
                </div>
                <div className="flex   gap-16 mt-5 xsm:flex xsm:flex-col  xsm:gap-6" >
                    <div>
                        <div>
                            <p className="font-light text-lg" >Can i get vaccinated?</p>
                        </div>
                        <div className="" >
                            <p className="text-sm tracking-tight font-semibold w-72 text-left " >
                            Check your local vaccination rollout plan to determine your eligibility.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="font-light text-lg" >Are lockdowns necessary?</p>
                        </div>
                        <div>
                            <p className="text-sm tracking-tight font-semibold w-72 text-left">Lockdowns can limit the spread and protect healthcare systems from being overwhelmed.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="font-light text-lg">What are the symptoms?</p>
                        </div>
                        <div>
                            <p className="text-sm tracking-tight font-semibold w-72 text-left">Fever, cough, loss of taste or smell, and shortness of breath are common symptoms.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FAQNews;