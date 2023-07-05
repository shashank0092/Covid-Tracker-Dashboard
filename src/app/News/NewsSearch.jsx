'use client'
import { useState } from "react";
import Button from "@mui/material/Button"
import Input from "../components/Input";



const NewSearch = () => {

    const [inputBar, setInputBar] = useState(false);
    const divClass = "flex flex-col gap-7 justify-center items-center"

    return (
        <>

            <div className="xsm:mt-5">

                <div className="mt-10 mb-28 xsm:mt-5 xsm:ml-4">
                    <div className={inputBar == false ? ("flex flex-col gap-7 justify-center items-center xsm:items-start ") : ("")}  >
                        <div>
                            <p className="font-sans font-bold text-6xl text-dashboardBg text-center xsm:text-3xl" >Search & Update</p>
                        </div>

                        {
                            inputBar == true ? (
                                <>
                                    <div >
                                        <Input inputBar={inputBar} setInputBar={setInputBar} news={"news"} deaths={null} />
                                    </div>

                                </>
                            ) : (
                                <>
                                    <div className="flex flex-col justify-center text-center xsm:text-left  " >
                                        <div>
                                            <p className=" text-dashboardBg text-center w-96 text-base font-sans tracking-tight xsm:w-80 xsm:text-left " >Search Your Country Using Your Country Code And Stay updated What going on in any country.Use this page and stay updated with your country news.</p>
                                        </div>
                                        <div className="flex justify-center  mt-5 gap-5 xsm:ml-0" >

                                            <Button variant="contained"

                                                style={{ backgroundColor: 'orange', color: '#14213d', }}

                                                onClick={() => { setInputBar(true) }}

                                            >
                                                Search News </Button>


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

export default NewSearch;