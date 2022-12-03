import React, { useState } from 'react'
import {  ethers } from 'ethers';
import ContractABI from "./ContractABI/ABI.json"

function Balance() {
    const [balance, setBalance] = useState();

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
            const Name = await ContractSet.checkBalance();
            // await Name.wait()
              const GetenName = ethers.utils.formatUnits(Name);
            //   const intoNumber = BigNumber.toNumber(GetenName)
            setBalance(GetenName);
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
          <button onClick={Submit} className="btn btn-success">Balance</button>
          <p>{ balance}</p>
    </div>
  )
}

export default Balance