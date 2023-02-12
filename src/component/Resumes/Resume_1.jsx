import React, { useState } from "react";

import './Resume_1.css'
import MyData from '../../JsonData.json'
import { PrimaryButton } from "../Button";
function Resume_1() {
  const [Information, SetInformation] = useState(MyData)
  return (<>

    <div className="body border mt-5">
      {/* header */}
      <div className="header bg-gray-200" style={{ height: "180px" }}>
        <div className="" style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
          <div className=" " style={{ marginTop: "auto", marginBottom: "auto", display: "flex" }}>
            <div className="" style={{ flexGrow: "1", marginLeft: "52px" }}>
              <p className="border" style={{ fontSize: "10px" }}>Resume</p>
              <p className="" style={{ fontSize: "20px", fontWeight: "500", letterSpacing: "2px" }}>{Information.PersonalData.FirstName + " " + Information.PersonalData.LastName}</p>
              <p className="" style={{ fontSize: "10px" }}>{Information.PersonalData.Profession}</p>
            </div>
            <div className="" style={{ flexGrow: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
              <div className="" style={{ marginLeft: "auto", marginRight: "25px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <div className="" style={{ display: "flex", letterSpacing: "2px", gap: "3px" }}>
                  <p className="" style={{ fontSize: "8px", fontWeight: "bold" }}>T : </p>
                  <p className="" style={{ fontSize: "8px" }}>{Information.PersonalData.Contact.Phone}</p>
                </div>
                <div className="" style={{ display: "flex", letterSpacing: "2px", gap: "3px" }}>
                  <p className="" style={{ fontSize: "8px", fontWeight: "bold" }}>M : </p>
                  <a href={"mailto:" + Information.PersonalData.Contact.Email} target="_blank" className="" style={{ fontSize: "8px" }}>{Information.PersonalData.Contact.Email}</a>
                </div>
                <div className="" style={{ display: "flex", letterSpacing: "2px", gap: "3px" }}>
                  <p className="" style={{ fontSize: "8px", fontWeight: "bold" }}>W : </p>
                  <a href={Information.PersonalData.Contact.Website} target="_blank" className="" style={{ fontSize: "8px" }}>{Information.PersonalData.Contact.Website}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="" style={{ marginTop: "60px", display: "flex", flexDirection: "column", gap: "20px", marginLeft: "40px", marginRight: "50px" }}>
        <p className="" style={{ marginLeft: "12px", fontWeight: "500", fontSize: "12px", letterSpacing: "2px", borderBottom: "1px solid orange" }}>Welcome to my Resume</p>
        <div className="" style={{ display: "flex", gap: "4px" }}>
          {/* Left */}
          <div className="" style={{ width: "40%", borderRight: "1px solid orange",display:"flex",flexDirection:"column",gap:"40px" }}>
            {/* Education */}
            <div className="">
              <p className="titles">Education</p>
              <div className="left-items" style={{ marginLeft: "12px" }}>
                {Information.Education.map((item, idx) => {
                  return (<div className="item">
                    <div className="item-title  " >
                      <div className="item-dot" ></div>
                      <p className="" key={idx} style={{ fontSize: "10px" }}>{item.Title}</p>
                    </div>
                    <p className="" style={{ fontSize: "8px", marginLeft: "6px", color: "gray" }} >{item.Duration}</p>
                  </div>)
                })}
              </div>
            </div>
            <div className="">
              <p className="titles">Skills</p>
              <div className="left-items" style={{ marginLeft: "12px" }}>
                {Information.Skills.map((item, idx) => {
                  return (<div className="item">
                    <div className="item-title  " >
                      <div className="item-dot" ></div>
                      <p className="" key={idx} style={{ fontSize: "10px" }}>{item.Title}</p>
                    </div>
                    {}
                  </div>)
                })}
              </div>
            </div>
          </div>
          <div className="" style={{ flexGrow: 1 }}>

          </div>
        </div>
      </div>
    </div>

  </>
  );
}

export default Resume_1;
