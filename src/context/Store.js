'use client';

import {createContext,useContext,Dispatch,SetStateAction,useState} from "react"

const GlobalContext=createContext()

export const GlobalContextProvider=({children})=>{
    const[userDetails,setUserDetails]=useState('shukla');

    return(
        <GlobalContext.Provider value={{userDetails,setUserDetails}} >  
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext=()=>useContext(GlobalContext);