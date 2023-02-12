import React, { useState } from "react";

import './Resume_1.css'
import MyData from '../../JsonData.json'
import { PrimaryButton } from "../Button";
function Resume_1() {
  const [Information, SetInformation] = useState(MyData)
  return (<>

    <div className="body border mt-5">
      <div className="header bg-gray-200" style={{ height: "200px" }}>
        <div className="" style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
          <div className=" " style={{ marginTop: "auto", marginBottom: "auto", display: "flex" }}>
                <div className="" style={{flexGrow:"1",marginLeft:"50px"}}>
                          <p className="border" style={{fontSize:"14px"}}>Resume</p>
                          <p className="" style={{fontSize:"26px",fontWeight:"500",letterSpacing:"2px"}}>{Information.PersonalData.FirstName+" "+Information.PersonalData.LastName}</p>
                          <p className="" style={{fontSize:"14px"}}>{Information.PersonalData.Profession}</p>
                </div>
                <div className="" style={{flexGrow:"1"}}>
                  
                  </div>
          </div>
        </div>
      </div>
    </div>

  </>
  );
}

export default Resume_1;
