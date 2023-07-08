'use client'
import Image from "next/image"
import Blood from "../../../public/images/Blood.png"

import Link from "next/link"
import { Button } from "@mui/material"


const Info = () => {
    
    
    return (
        <>

            <div className="flex flex-col justify-center items-center mb-40 xsm:mt-10 xsm:mb-0" >
                <div className="flex justify-center items-center" >
                    <div>
                        <Image src={Blood} alt="blood" height={100} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-5 ">
                    <div>
                        <p className="text-keyTrendsText font-sans font-bold text-4xl " >Stay Informed</p>
                    </div>
                    <div className="mt-5 flex flex-col justify-center items-center " >
                        <p className="w-1/2 text-center font-light text-keyTrendsText xsm:text-left " >
                            Get the latest insights and updates on the post-COVID world delivered straight to your inbox.
                        </p>
                    </div>
                    <div className="flex gap-5 mt-5" >
                       

                        <div>
                            <Link href="/Login"  >
                                <Button variant="contained"  style={{ backgroundColor: "orange", color: "black" }} className={"font-bold text- text-base font-sans normal-case"}>
                                    Google Login
                                </Button>
                            </Link>
                        </div>
                        <div>
                        <Link href="/Login"  >
                                <Button variant="contained"  style={{ backgroundColor: "black", color: "orange" }} className={"font-bold text- text-base font-sans normal-case"}>
                                    Read News
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Info;