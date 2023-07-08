
import { ContractABI, ContractAddress } from "@/lib/smartcontract";
import {Web3} from "Web3"
import { useState } from "react"


 const connectWallet=async()=>{
    if(typeof window.ethereum!=='undefined'){
        const web3=new Web3(window.ethereum);
        const AddressArray=await web3.eth.getAccounts()
        const Address=AddressArray[0];

        const getBalance=await web3.eth.getBalance(Address);
        const Amount=await web3.utils.fromWei(getBalance,'ether');
        console.log(Address,Amount);

        return{
            Address,Amount
        }
    }
    else{
        alert("Please Install Metaamask")
    }
}


const getContract=async()=>{

   try{
    const web3=new Web3(window.ethereum);
    const contractFetched=await new web3.eth.Contract(ContractABI.abi,ContractAddress);
    return contractFetched;
   }
   catch(err){
    console.log("THIS ERROR OUCCUER WHILE FETCHING CONTRACT",err)
   }
}


module.exports={
    connectWallet,
    getContract
}