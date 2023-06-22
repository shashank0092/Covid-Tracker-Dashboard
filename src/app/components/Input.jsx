'use client';
import WestIcon from '@mui/icons-material/West';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { resultOfSearch } from "./useGraph"
import Graph from "./GraphVisulaization"

const Input = ({ setInputBar }) => {
    const [searchValue, setSearchValue] = useState("");
    const [resultValue, setResultValue] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();


        const res = await resultOfSearch(searchValue);
        console.log(res)
        setResultValue(res);
    }
    return (
        <>
            <div className=' mt-8' >
                <div className='flex flex-col gap-5 justify-center items-center' >
                    <div className='flex justify-center items-center gap-5 border-t-2 border-l-2 border-b-2 border-r-2  rounded-full '>
                        <div className='ml-3' >
                            <IconButton onClick={() => { setInputBar(false) }} >
                                <WestIcon fontSize='medium' />
                            </IconButton>
                        </div>
                        <div>
                            <form onSubmit={(e) => submitForm(e)} >
                                <input type="text" placeholder='Enter Country ISO code' value={searchValue} onChange={
                                    (e) => {
                                        setSearchValue(e.target.value);

                                    }
                                } className='outline-none p-4' />
                            </form>
                        </div>
                        <div className='mr-3' >
                            <IconButton onClick={(e) => submitForm(e)}  >
                                <SearchIcon fontSize='medium' />
                            </IconButton>
                        </div>
                    </div>

                </div>

                {
                    resultValue == "" ? (<></>) : (
                        <>
                            <div  >
                                <div className='border-t-2 border-b-2 border-l-2 border-r-2 fixed h-[450px] top-28 bottom-0 left-52 right-52 z-500  rounded-3xl bg-white shadow-modemBox  ' >
                                    <Graph resultValue={resultValue} setResultValue={setResultValue} />
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