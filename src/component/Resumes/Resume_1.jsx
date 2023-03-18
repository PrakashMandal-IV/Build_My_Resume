import React, { useEffect, useRef, useState } from "react";

import './Resume_1.css'
import MyData from '../../JsonData.json'
function Resume_1(props) {
  const [Information, SetInformation] = useState(null)
  useEffect(() => {
    if (props.UserData) {
      SetInformation({ ...props.UserData })
    } else {
      SetInformation(MyData)
    }


  }, [])
  useEffect(()=>{
    
    if (props.UserData) {
        SetInformation({ ...props.UserData })
    } 
   },[props.UserData])


  return (<>
    {Information && (<div id="printable-area" ref={props.printref} className="body bg-white" size="A4">
      {/* header */}

      <div className="header bg-gray-200 h-[15%]" >
        <div className="" style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
          <div className=" " style={{ marginTop: "auto", marginBottom: "auto", display: "flex" }}>
            <div className="" style={{ flexGrow: "1", marginLeft: "52px" }}>
              <p className="text-sm">Resume</p>
              <p className="text-2xl" style={{ fontWeight: "500", letterSpacing: "2px" }}>{Information?.PersonalData?.FirstName + " " + Information?.PersonalData?.LastName}</p>
              <p className="text-sm" >{Information?.PersonalData?.Profession}</p>
            </div>
            <div className="my-auto" style={{ flexGrow: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
              <div className="" style={{ marginLeft: "auto", marginRight: "25px", display: "flex", flexDirection: "column", gap: "4px" }}>
                <div className="" style={{ display: "flex", letterSpacing: "2px", gap: "3px" }}>
                  <p className="text-[.6rem]" style={{ fontWeight: "bold" }}>T : </p>
                  <p className="text-[.6rem]" >{Information?.PersonalData?.Contact.Phone}</p>
                </div>
                <div className="" style={{ display: "flex", letterSpacing: "2px", gap: "3px" }}>
                  <p className="text-[.6rem]" style={{ fontWeight: "bold" }}>M : </p>
                  <a href={"mailto:" + Information?.PersonalData?.Contact.Email} target="_blank" className="text-[.6rem]">{Information?.PersonalData?.Contact.Email}</a>
                </div>
                <div className="" style={{ display: "flex", letterSpacing: "2px", gap: "3px" }}>
                  <p className="text-[.6rem]" style={{ fontWeight: "bold" }}>W : </p>
                  <a href={Information?.PersonalData?.Contact.Website} target="_blank" className="text-[.6rem]" >{Information?.PersonalData?.Contact.Website}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="mb-5" style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "20px", marginLeft: "40px", marginRight: "50px", flexGrow: "1" }}>
        <p className="" style={{ marginLeft: "12px", fontWeight: "500", letterSpacing: "2px", borderBottom: "1px solid orange" }}>Welcome to my Resume</p>
        <div className="" style={{ display: "flex", gap: "10px", height: "100%", marginBottom: "5px" }}>
          {/* Left */}
          <div className="" style={{ width: "40%", display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Education */}
            <div className="">
              <p className="titles text-xl">Education</p>
              <div className="left-items" style={{ marginLeft: "12px" }}>
                {Information?.Education?.map((item, idx) => {
                  return (<div className="item" key={idx} >
                    <div className="item-title  " >
                      <div className="item-dot" ></div>
                      <p className="text-[.9rem]">{item.Title}</p>
                    </div>
                    <p className="" style={{ fontSize: "8px", marginLeft: "6px", color: "gray" }} >{item.Year}</p>
                  </div>)
                })}
              </div>
            </div>
            <div className="">
              <p className="titles text-xl">Skills</p>
              <div className="left-items" style={{ marginLeft: "12px" }}>
                {Information?.Skills?.map((item, idx) => {
                  const skillLevel = Math.ceil(item.Level / 20);
                  const coloredBoxes = [];
                  for (let i = 1; i <= 5; i++) {
                    const color = i <= skillLevel ? "orange" : "rgb(212, 212, 212)";
                    coloredBoxes.push(
                      <div
                        className=""
                        style={{ backgroundColor: color, width: "20px", height: "4px" }}
                        key={i}
                      ></div>
                    );
                  }
                  return (
                    <div className="item" style={{ paddingBottom: "4px" }} key={idx}>
                      <div className="item-title">
                        <div className="item-dot"></div>
                        <p className="text-[.9rem]">{item.Name}</p>
                      </div>
                      <div className="" style={{ display: "flex", marginLeft: "6px", gap: "5px" }}>
                        {coloredBoxes}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="">
              <p className="titles text-xl">Hobbies</p>
              <div className="left-items" style={{ marginLeft: "12px" }} >
                {Information?.Hobbies?.map((item, idx) => {
                  return (<div className="item" key={idx}>
                    <div className="item-title  " >
                      <div className="item-dot" ></div>
                      <p className="text-[.9rem]" key={idx}>{item}</p>
                    </div>
                  </div>)
                })}
              </div>
            </div>
            <div className="" style={{ marginTop: "auto" }}>
              <p className="titles">Socials</p>
              <div className="left-items" style={{ marginLeft: "12px", display: "flex", gap: "10px" }}>
                {Information?.Socials?.map((item, idx) => {
                  return (<div className="" key={idx}>
                    {item.Name === "Instagram" && (
                      <a href={item.Link} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" /></svg>
                      </a>
                    )}
                    {item.Name === "Linkedin" && (
                      <a href={item.Link} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 8 3.0117188 C 6.3126093 3.0117188 4.8354789 3.4916328 3.7539062 4.3652344 C 2.6723337 5.238836 2.0117188 6.533218 2.0117188 7.9472656 C 2.0117188 10.690836 4.4687078 12.814467 7.7167969 12.941406 A 0.98809878 0.98809878 0 0 0 8 12.988281 C 9.753566 12.988281 11.246191 12.474267 12.3125 11.564453 C 13.378809 10.654639 13.988281 9.3429353 13.988281 7.9472656 A 0.98809878 0.98809878 0 0 0 13.986328 7.8925781 C 13.832307 5.1316834 11.374781 3.0117187 8 3.0117188 z M 8 4.9882812 C 10.60907 4.9882812 11.895883 6.2693448 12.005859 7.9726562 C 11.998759 8.8049335 11.676559 9.5118991 11.03125 10.0625 C 10.378809 10.619186 9.371434 11.011719 8 11.011719 C 5.3980542 11.011719 3.9882813 9.5991704 3.9882812 7.9472656 C 3.9882812 7.1213132 4.3276663 6.4422421 4.9960938 5.9023438 C 5.6645211 5.3624454 6.6873907 4.9882813 8 4.9882812 z M 3 15 A 1.0001 1.0001 0 0 0 2 16 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 13 46 A 1.0001 1.0001 0 0 0 14 45 L 14 35.664062 L 14 16 A 1.0001 1.0001 0 0 0 13 15 L 3 15 z M 18 15 A 1.0001 1.0001 0 0 0 17 16 L 17 45 A 1.0001 1.0001 0 0 0 18 46 L 28 46 A 1.0001 1.0001 0 0 0 29 45 L 29 29 L 29 28.75 L 29 28.5 C 29 26.555577 30.555577 25 32.5 25 C 34.444423 25 36 26.555577 36 28.5 L 36 45 A 1.0001 1.0001 0 0 0 37 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 28 C 48 23.873476 46.787888 20.604454 44.744141 18.375 C 42.700394 16.145546 39.849212 15 36.787109 15 C 32.882872 15 30.521631 16.426076 29 17.601562 L 29 16 A 1.0001 1.0001 0 0 0 28 15 L 18 15 z M 4 17 L 12 17 L 12 35.664062 L 12 44 L 4 44 L 4 17 z M 19 17 L 27 17 L 27 19.638672 A 1.0001 1.0001 0 0 0 28.744141 20.306641 C 28.744141 20.306641 31.709841 17 36.787109 17 C 39.360007 17 41.615528 17.922268 43.269531 19.726562 C 44.923534 21.530858 46 24.261524 46 28 L 46 44 L 38 44 L 38 28.5 A 1.0001 1.0001 0 0 0 37.916016 28.089844 C 37.694061 25.26411 35.38033 23 32.5 23 C 29.474423 23 27 25.474423 27 28.5 L 27 28.75 L 27 29 L 27 44 L 19 44 L 19 17 z" /></svg>  </a>
                    )}
                    {item.Name === "Twitter" && (
                      <a href={item.Link} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z" /></svg>
                      </a>
                    )}
                    {item.Name === "Facebook" && (
                      <a href={item.Link} target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z" /></svg>
                      </a>
                    )}
                    {item.Name === "Github" && (
                      <a href={item.Link} target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          width="20px" height="20px"
                        >
                          <path
                            d="M25 2C12.311 2 2 12.311 2 25s10.311 23 23 23 23-10.311 23-23S37.689 2 25 2zm0 2c11.607 0 21 9.393 21 21 0 .071-.005.142-.006.213a39.762 39.762 0 0 0-2.318-.149 59.321 59.321 0 0 0-4.903.061c.07-.49.12-.988.122-1.498.096-1.873-.532-3.625-1.555-5.172.247-.854.537-1.94.61-3.172.082-1.404-.04-2.961-1.167-4.013l-.289-.27H36.1c-2.683 0-4.52 1.123-5.643 2.014A15.026 15.026 0 0 0 25 12a15.82 15.82 0 0 0-5.553 1.018C18.325 12.127 16.487 11 13.801 11h-.393l-.289.268c-1.098 1.02-1.2 2.534-1.13 3.931.06 1.233.333 2.353.575 3.248-1.04 1.578-1.664 3.375-1.664 5.153 0 .511.048 1.01.118 1.502-1.806-.084-3.416-.1-4.694-.055-.94.033-1.679.089-2.318.148 0-.065-.006-.13-.006-.195C4 13.393 13.393 4 25 4zm-10.604 9.13c2.018.192 3.536 1.093 4.239 1.718l.469.414.578-.237C21.263 14.375 23.027 14 25 14c1.973 0 3.737.376 5.2 1.016l.585.257.479-.425c.703-.625 2.223-1.526 4.242-1.717.268.445.502 1.078.445 2.035-.067 1.146-.374 2.394-.605 3.135l-.15.482.298.408c.99 1.35 1.494 2.81 1.408 4.354l-.002.027v.028c0 2.495-.898 4.492-2.812 5.972C32.174 31.052 29.153 32 24.9 32c-4.252 0-7.275-.948-9.189-2.428-1.914-1.48-2.81-3.477-2.81-5.972 0-1.465.528-3.076 1.505-4.409l.293-.398-.14-.475c-.232-.788-.516-2.064-.573-3.216-.047-.96.18-1.565.41-1.971zM8.885 26.022a65.21 65.21 0 0 1 2.328.088c.077.312.166.619.273.918-3.307.07-5.781.403-7.306.688-.065-.5-.116-1.005-.145-1.516a44.842 44.842 0 0 1 4.85-.178zm32.23.016a44.94 44.94 0 0 1 4.848.178c-.029.503-.08 1-.143 1.494-1.58-.29-4.12-.622-7.513-.676.105-.293.193-.595.27-.9a64.184 64.184 0 0 1 2.538-.096zM11.912 28.02a9.029 9.029 0 0 0 2.576 3.134c1.54 1.192 3.544 2.024 5.989 2.469-.32.329-.611.69-.87 1.07l-.06-.052c.005-.007-.497.245-1.248.312S16.622 35 15.8 35c-1.225 0-1.765-.579-2.627-1.633a7.098 7.098 0 0 0-1.625-1.56c-.579-.406-1.073-.691-1.684-.793L9.783 31H9.7c-.466 0-.918.034-1.34.516-.21.24-.356.687-.261 1.064.094.378.333.61.547.752 1.366.911 1.608 2.715 2.464 4.318.8 1.594 2.527 2.35 4.291 2.35H18v4.803c-7.032-2.482-12.335-8.598-13.668-16.1 1.53-.288 4.095-.635 7.58-.683zm25.97.007c3.564.03 6.2.377 7.788.67C44.339 36.202 39.034 42.32 32 44.803V39.6c0-1.585-.52-3.332-1.426-4.79a7.52 7.52 0 0 0-.959-1.236c2.315-.457 4.217-1.275 5.698-2.42a9.004 9.004 0 0 0 2.57-3.127zM23.7 34.1H26.5c.813 0 1.68.647 2.375 1.765C29.57 36.983 30 38.485 30 39.6v5.798a21.078 21.078 0 0 1-10 0V39.6c0-1.091.468-2.589 1.209-3.711.741-1.123 1.677-1.79 2.49-1.79zM12.31 35.28C13.174 36.18 14.223 37 15.8 37c.779 0 1.751.028 2.676-.055l.01-.002c-.122.35-.213.703-.29 1.057H15.4c-1.233 0-2.104-.446-2.505-1.248l-.008-.014-.006-.011c-.165-.306-.38-.916-.572-1.446z"
                            transform="scale(5.12)"
                            fill="#000"
                            strokeMiterlimit={10}
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            style={{
                              mixBlendMode: "normal",
                            }}
                          />
                        </svg>
                      </a>
                    )}
                  </div>)
                })}
              </div>
            </div>
          </div>
          <div className="" style={{ width: "40%", display: "flex", flexDirection: "column", gap: "20px", flexGrow: "1" }}>
            {/* Section 1 */}
            <div className="">
              <p className="mainPagetitle text-xl">About Me</p>
              <div className="aboutme text-[.8rem] mt-2 pl-2" dangerouslySetInnerHTML={{ __html: Information?.PersonalData?.AboutMe }}>

              </div>
            </div>
            {/* Section 2 */}
            <div className="" style={{ display: "flex", gap: "10px" }}>
              <div className="" style={{ flexGrow: "1" }}>
                <p className="mainPagetitle text-xl">Experience</p>
                <div className="left-items mt-2" style={{ marginLeft: "12px" }}>
                  {Information?.Experience?.map((item, idx) => {
                    return (<div className="item" key={idx}>
                      <div className="item-title  " style={{ paddingBottom: 0 }} >
                        <div className="item-dot" ></div>
                        <p className="text-[.9rem]" >{item.Job}</p>

                      </div>
                      <p className="text-[.6rem]" style={{ marginLeft: "6px", color: "gray" }}>{item.Company}</p>
                      <p className="" style={{ fontSize: "9px", marginLeft: "6px", color: "gray" }} >{item.Duration}</p>
                    </div>)
                  })}
                </div>
              </div>
              <div className="" style={{ flexGrow: "1" }}>
                <p className="mainPagetitle  text-xl">Cretificates</p>
                <div className="left-items mt-2" style={{ marginLeft: "12px" }}>
                  {Information?.Certificates?.map((item, idx) => {
                    return (
                      <div className="item" key={idx}>
                        <div className="item-title  " >
                          <div className="item-dot" ></div>
                          <p className="" key={idx} style={{ fontSize: ".9rem" }}>{item}</p>
                        </div>
                      </div>)
                  })}
                </div>
              </div>
            </div>
            {/* Section 2 */}
            <div className="">
              <div className="" style={{ display: "flex" }}>
                <p className="mainPagetitle">Projects</p>
                <a href="" className="" style={{ marginLeft: "auto", fontSize: "12px", marginTop: "auto" }}>See more&gt;&gt; </a>
              </div>
              <div style={{ marginTop: "5px", display: "flex", flexDirection: "column", gap: "4px" }}>
                {Information?.Projects?.map((item, idx) => (
                  <a href={item.Link} target="_blank" ><div className="ProjectCard " key={idx}>
                    <p className="text-md" >{item.Title}</p>
                    <p className="text-[.7rem]"  >{item.Details}</p>
                  </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)}

  </>
  );
}

export default Resume_1;
