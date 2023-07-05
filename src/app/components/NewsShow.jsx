'use client';
import { useState } from "react";
import Input from "./Input";
import NewsLogo from "../../../public/images/NewsSearchLogo.png"
import Image from "next/image";
import WestIcon from '@mui/icons-material/West';
import IconButton from '@mui/material/IconButton';


const NewsShow = ({ NewsResultValue, setNewsResultValue }) => {
    console.log(NewsResultValue, "THIS IS NEWS PAGE")

    const [NewsArray, setNewsArray] = useState([])
    console.log(NewsResultValue?.news, "THIS IS TARGET")

    const setValue = (arr) => {
        setNewsArray([...NewsArray, arr])
    }
    for (let i = 1; i <= NewsResultValue?.news?.length; i = i + 10) {
        const arr=NewsResultValue?.news?.slice(i,i+10)
        // console.log(arr,"THIS IS AN ARRAY");
        {
            () => {
                setNewsArray([...NewsArray, arr])
            }
        }

        // setNewsArray([...NewsArray,NewsArray.push(NewsResultValue?.news?.slice(i,i+10))])
    }



    console.log(NewsArray)
    return (
        <>
            <div>
                <div className="flex gap-[550px] xsm:gap-14 " >
                    <div>
                        <IconButton onClick={() => { setNewsResultValue("") }} className=" border-red-500 " >
                            <WestIcon className='text-3xl' />
                        </IconButton>
                    </div>
                    <div  >
                        <Image src={NewsLogo} height={150} alt="news" />
                    </div>
                </div>
                <div className='h-1 w-full] bg-gray-200 xsm:hidden ' ></div>
                <div className="overflow-scroll overflow-x-hidden  h-[65vh] ml-6 xsm:h-[70vh]" >
                    {
                        NewsResultValue?.news?.map((news) => {
                            return (
                                <div className="mt-5 mb-5 xsm:mb-0 ">
                                    <p className="  font-sans font-bold text-black text-3xl tracking-tight  xsm:text-lg " >  {news?.title}  </p>
                                    <div className="ml-10 xsm:ml-2" >
                                        <p className="text-xs text-blue-500 underline mt-1" ><a href={news?.webUrl} target="_link" >{news?.webUrl}</a></p>
                                        <p className="w-1/2 text-left font-serif text-base tracking-tight mt-1 xsm:w-full " >"{news?.excerpt}"</p>
                                        <div className="flex gap-64 xsm:gap-0 " >
                                            <div className="" >
                                                <p className="font-serif xsm:flex xsm:w-full " >Source: <a href={news?.provider?.domain} target="_blank"  className="text-blue-500 underline"   >{news?.provider?.name}</a> </p>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default NewsShow;