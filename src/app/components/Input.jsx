'use client';
import WestIcon from '@mui/icons-material/West';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { resultOfDeathSearch } from "./useGraph"
import {resultOfNewsSearch} from "./useNews"
import Graph from "./GraphVisulaization"
import CircularIndeterminate from './Loader';
import NewsShow from './NewsShow';


const Input = ({ setInputBar,news,deaths }) => {
    const [searchValue, setSearchValue] = useState("");
    const [DeathResultValue, setDeathResultValue] = useState("");
    const[NewsResultValue,setNewsResultValue]=useState("");
    const[loader,setLoader]=useState(false)

    

    const DataForDeath = async (e) => {
        e.preventDefault();

        
        setLoader(true);
        const res = await resultOfDeathSearch(searchValue);
        console.log(res)
        setDeathResultValue(res);
        setLoader(false);
    }

    const DataForNews=async(e)=>{
        e.preventDefault();

        setLoader(true);
        const res = await resultOfNewsSearch(searchValue);
        console.log(res)
        setNewsResultValue(res);
        setLoader(false);
    }
    return (
        <>
            <div className=' mt-8' >
                <div className='flex flex-col gap-5 justify-center items-center' >
                    <div className='flex justify-center items-center gap-5 border-t-2 border-l-2 border-b-2 border-r-2  rounded-full '>
                        <div className='ml-3 xsm:ml-0' >
                            <IconButton onClick={() => { setInputBar(false) }} >
                                <WestIcon fontSize='medium' />
                            </IconButton>
                        </div>
                        <div>
                            <form onSubmit={ news==null?( (e)=>DataForDeath(e)  ):((e)=>DataForNews(e)) } >
                                <input type="text" placeholder='Enter Country ISO code' value={searchValue} onChange={
                                    (e) => {
                                        setSearchValue(e.target.value);

                                    }
                                } className='outline-none p-4 xsm:p-0 xsm:py-4 ' />
                            </form>
                        </div>
                        <div className='mr-3' >
                            <IconButton onClick={news==null?( (e)=>DataForDeath(e)  ):((e)=>DataForNews(e))}  >
                                <SearchIcon fontSize='medium' />
                            </IconButton>
                        </div>
                        {
                            loader==true?(<CircularIndeterminate/>):(<></>)
                        }
                    </div>

                </div>

                {
                    DeathResultValue == "" ? (<></>) : (
                        <>
                            <div className='  xsm:border-l-4 xsm:border-r-4s'  >
                                <div className='border-t-2 border-b-2 border-l-2 border-r-2 fixed h-[450px] top-28 bottom-0 left-52 right-52 z-500  rounded-3xl bg-white shadow-modemBox xsm:shadow-modemMobileBox  xsm:w-[350px] xsm:left-4 xsm:right-0 xsm:top-24 xsm:bottom-0 ' >
                                    <Graph DeathResultValue={DeathResultValue} setDeathResultValue={setDeathResultValue} />
                                </div>
                            </div>
                        </>
                    )
                }

                {
                    NewsResultValue==""?(<></>):(
                        <>
                           <div className='  xsm:border-l-4 xsm:border-r-4s'  >
                                <div className='border-t-2 border-b-2 border-l-2 border-r-2 fixed h-[620px] top-12 bottom-0 left-28 w-[85vw] right-52 z-500  rounded-3xl bg-white shadow-newsBox xsm:shadow-newsMobileBox  xsm:w-[350px] xsm:left-4 xsm:right-0 xsm:top-5 xsm:bottom-0 ' >
                                    <NewsShow NewsResultValue={NewsResultValue} setNewsResultValue={setNewsResultValue} /> 
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Input;