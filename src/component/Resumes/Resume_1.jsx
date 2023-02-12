import React, { useState } from "react";

import './Resume_1.css'
import MyData from '../../JsonData.json'
import { PrimaryButton } from "../Button";
function Resume_1() {
  const [Information, SetInformation] = useState(MyData)
  return (<>

    <div className="body border mt-5">
      <div className="header bg-gray-200" style={{ height: "180px" }}>
        <div className="" style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
          <div className=" " style={{ marginTop: "auto", marginBottom: "auto", display: "flex" }}>
            <div className="" style={{ flexGrow: "1", marginLeft: "50px" }}>
              <p className="border" style={{ fontSize: "10px" }}>Resume</p>
              <p className="" style={{ fontSize: "20px", fontWeight: "500", letterSpacing: "2px" }}>{Information.PersonalData.FirstName + " " + Information.PersonalData.LastName}</p>
              <p className="" style={{ fontSize: "10px" }}>{Information.PersonalData.Profession}</p>
            </div>
            <div className="" style={{ flexGrow: "1", display: "flex", flexDirection: "column",gap:"2px" }}>
              <div className="" style={{ marginLeft: "auto",marginRight:"25px",display: "flex", flexDirection: "column",gap:"4px" }}>
                <div className="" style={{ display: "flex", letterSpacing: "2px", gap: "3px" }}>
                  <p className="" style={{ fontSize: "8px", fontWeight: "bold" }}>T : </p>
                  <p className="" style={{ fontSize: "8px"}}>{Information.PersonalData.Contact.Phone}</p>
                </div>
                <div className="" style={{ display: "flex", letterSpacing: "2px", gap: "3px" }}>
                  <p className="" style={{ fontSize: "8px", fontWeight: "bold" }}>M : </p>
                  <p className="" style={{ fontSize: "8px"}}>{Information.PersonalData.Contact.Email}</p>
                </div>
                <div className="" style={{ display: "flex", letterSpacing: "2px", gap: "3px" }}>
                  <p className="" style={{ fontSize: "8px", fontWeight: "bold" }}>W : </p>
                  <p className="" style={{ fontSize: "8px"}}>{Information.PersonalData.Contact.Website}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
  );
}

export default Resume_1;
