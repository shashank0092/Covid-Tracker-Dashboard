"use client";
import NewsletterInput from "../components/NewsletterInput";


const Newsletter=()=>{
 
    return(
        <>
            <div className="mt-32 flex flex-col  justify-center items-center" >
                <div>
                    <p className="font-sans font-bold text-4xl" >Stay in the Loop</p>
                </div>
                <div className="mt-5 ml-96 xsm:ml-0" >
                    <p className="font-sans text-sm w-1/2  text-center xsm:w-full " >Subscribe to our newsletter to receive regular updates and exclusive content! Enter your email below and stay informed.</p>
                </div>
                <div>
                    <NewsletterInput/>
                </div>
            </div>
        </>
    )
}

export default Newsletter;