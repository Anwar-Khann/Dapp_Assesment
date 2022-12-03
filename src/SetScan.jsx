import React, { useState } from "react";
import ContractABI from "./ContractABI/ABI.json";
import { ethers } from "ethers";

function SetScan() {
  const [name, setname] = useState("");

  var Addr = (event) => {
    setname(event.target.value);
  };

  async function submit(e) {
    e.preventDefault();

    if (typeof window.ethereum !== "undefined") {
      console.log("metamask hai");
      try {
        const ContractAddress = "0x0c6f9cb4fe36edee05a013afdd0d55fde3c22041";
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log("signer Done");
        const ContractSet = new ethers.Contract(
          ContractAddress,
          ContractABI,
          signer
        );
        console.log("Contract Integeration");
        //
        const Name = await ContractSet.setname(name);
        console.log("function ErR");
        await Name.wait();
        console.log(Name);
      } catch {
        console.log("catch err");
      }
    } else {
      console.log("install metamask");
    }
  }

  return (
    <>
      <form onSubmit={submit}>
        {/* {name}
                {status} */}

        <div className="d-flex align-items-center mb-3 pb-1">
          <span className="h4 fw-bold mb-0">SetName</span>
        </div>

        {/* <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5> */}

        <div className="form-outline mb-3">
          <input
            name="name"
            value={name}
            onChange={Addr}
            type="text"
            id="form2Example17"
            className="form-control"
            placeholder="Enter User Name"
          />
          {/* <label className="form-label" Htmlfor="form2Example17">Account Address</label> */}
        </div>

        <div className="pt-1 mb-4">
          <button className="btn btn-outline-success" type="submit">
            Add Name
          </button>
        </div>
      </form>
    </>
  );
}

export default SetScan;
