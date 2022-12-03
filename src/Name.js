import React, { useState } from "react";
// import React from 'react'
import ContractABI from "./ContractABI/ABI.json"
import { ethers } from "ethers";

export default function Name() {
  const [nam, setNam] = useState();
  async function Submit() {
    if (typeof window.ethereum !== "undefined") {
      try {
        console.log("try rr")
        const ContractAddress = "0x0c6f9cb4fe36edee05a013afdd0d55fde3c22041";
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const ContractSet = new ethers.Contract(ContractAddress, ContractABI, signer);
        // 
        console.log("contract integeration")
        const Name = await ContractSet.name();
        // await Name.wait()
        const GetenName = Name;
        setNam(GetenName);
        console.log(Name);
        
      } catch { 
        console.log("catch err")
      }
    } else {
      console.log("metamask")
    }
  }
  return (
    <div>
        <button onClick={Submit} type="button" class="btn btn-outline-primary">Name</button>
      <p>{ nam}</p>
    </div>
  )
}
