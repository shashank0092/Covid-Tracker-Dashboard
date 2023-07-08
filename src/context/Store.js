'use client';

import { ContractAddress,ContractABI } from "@/lib/smartcontract";
import {createContext,useContext,useState} from "react"

const GlobalContext=createContext()

export const GlobalContextProvider=({children})=>{
    const[userDetails,setUserDetails]=useState('shukla');
   
    const[walletAdress,setWalletAdress]=useState("0");
    const[walletAmount,setWalletAmount]=useState("0");


    return(
        <GlobalContext.Provider value={{userDetails,setUserDetails}} >  
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext=()=>useContext(GlobalContext);