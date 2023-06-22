'use client'
import { useState } from "react";
import ButtonBoi from "../components/Button";
import Button from "@mui/material/Button"
import Input from "../components/Input";


const Data = () => {

    const [inputBar, setInputBar] = useState(false);
    const divClass="flex flex-col gap-7 justify-center items-center"

    return (
        <>

            <div className="">
                <div className="flex justify-around gap-60   p-28   bg-dashboardBg " >
                    <div className="ml-32">
                        <p className="font-bold tracking-wide text-5xl text-white font-sans w-80" >
                            Unveiling the COVID Data Universe
                        </p>
                    </div>
                    <div className=" text-white" >
                        <p className=" font-sans font-normal text-xl " >
                            Dive into the world of COVID-19, armed with insightful visualizations, powerful search options and the latest statistics – all at your fingertips.
                        </p>
                    </div>
                </div>
                <div className="mt-40 mb-28">
                    <div className={inputBar==false?("flex flex-col gap-7 justify-center items-center"):("")}  >
                        <div>
                            <p className="font-sans font-bold text-6xl text-dashboardBg text-center" >Search & Visualize</p>
                        </div>

                        {
                            inputBar == true ? (
                                <>
                                    <div >
                                        <Input inputBar={inputBar} setInputBar={setInputBar} />
                                    </div>
                                   
                                </>
                            ) : (
                                <>
                                    <div className="flex flex-col justify-center text-center  " >
                                        <div>
                                            <p className=" text-dashboardBg text-center w-96 text-base font-sans tracking-tight " >Embark on a journey to explore critical COVID-19 data with our dynamic bar graph and pie chart. Unleash the power of visualization and navigate through the pandemic like a pro.</p>
                                        </div>
                                        <div className="flex ml-14 mt-5 gap-5" >
                                            {/* <ButtonBoi bgcolor={'orange'} textcolor={'#14213d'} text={'Find Data'}  /> */}
                                            <Button variant="contained" style={{ backgroundColor: 'orange', color: '#14213d' }}

                                                onClick={() => { setInputBar(true) }}  >
                                                Find Data </Button>
                                            <ButtonBoi bgcolor={'#14213d'} textcolor={'white'} text={'Learn More'} />

                                        </div>
                                    </div>
                                </>
                            )
                        }


                    </div>
                </div>
            </div>

        </>
    )
}

export default Data;