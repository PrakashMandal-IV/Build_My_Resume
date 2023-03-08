import React, { useEffect, useState } from "react";


import MyData from '../../JsonData.json'
function Resume_3(props) {
    const [Information, SetInformation] = useState(MyData)
    useEffect(() => {
        if (props.UserData) {
            SetInformation({ ...props.UserData })
        } else {
            SetInformation(MyData)
        }


    }, [])


    return (<>
        {Information && (
            <div id="printable-area" ref={props.printref} className="body bg-white border flex flex-col " size="A4">
                <div className=" bg-[#f9d6d0] h-1/5  flex  ">
                    <div className="w-[35%]    flex flex-col ">
                        <div className="w-56 h-56 rounded-full ml-auto mt-auto translate-y-[30%] bg-white overflow-hidden">
                            <img src={Information?.PersonalData?.ProfilePic} alt="" />
                        </div>
                    </div>
                    <div className="flex-grow  flex flex-col px-5">
                        <div className="border-b-2 border-black my-auto py-4 ">
                            <p className="text-3xl font-light">{Information?.PersonalData?.FirstName}</p>
                            <p className="text-3xl font-light">{Information?.PersonalData?.LastName}</p>
                            <div className="flex  mt-2">
                                <p className="text-xl font-light">{Information?.PersonalData?.Profession}</p>
                                <div className="ml-auto  flex gap-2 my-auto">
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
                    </div>
                </div>
                <div className="flex-grow px-10 flex gap-5">
                    {/* Left */}
                    <div className="min-w-[15rem]   flex flex-col">
                        {/* {Section1} */}
                        <div className="flex flex-col gap-8 mt-32">
                            <div className=" mx-auto bg-black w-40 ">
                                <p className="text-white text-center font-light text-xl ">CONTACT</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                {Information?.PersonalData?.Contact?.Email !== "" && (<div className="flex gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    <a href={"mailto:" + Information?.PersonalData?.Contact?.Email} className="text-black text-sm  font-normal ">{Information?.PersonalData?.Contact?.Email}</a>
                                </div>)}
                                {Information?.PersonalData?.Contact?.Phone !== "" && (<div className="flex gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>

                                    <p className="text-black text-sm font-normal">{Information?.PersonalData?.Contact?.Phone}</p>
                                </div>)}
                                {Information?.PersonalData?.Contact.Location !== "" && (
                                    <div className="flex gap-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>

                                        <p target="_blank" className="text-black text-sm font-normal" >{Information?.PersonalData?.Contact.Location}</p>
                                    </div>
                                )}
                                {Information?.PersonalData?.Contact.Website !== "" && (
                                    <div className="flex gap-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                        </svg>
                                        <a href={Information?.PersonalData?.Contact.Website} target="_blank" className="text-black text-sm font-normal" >My Portfolio</a>
                                    </div>
                                )}

                            </div>
                        </div>
                        {/* Section 2 */}
                        <div className="flex flex-col gap-8 mt-10">
                            <div className=" mx-auto bg-black w-40 ">
                                <p className="text-white text-center font-light text-xl ">SKILLS</p>
                            </div>
                            <div className="flex flex-col ">
                                {Information?.Skills.slice(0, 5).map((item, idx) => (
                                    <div className="flex gap-2  py-1">
                                        <div className="w-6 flex">
                                            <div className="mx-auto my-auto w-2 h-2 rounded-full bg-black">

                                            </div>
                                        </div>
                                        <p target="_blank" className="text-black text-sm font-normal " >{item.Name}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className="flex flex-col gap-8 mt-10">
                            <div className=" mx-auto bg-black w-40 ">
                                <p className="text-white text-center font-light text-xl ">Hobbies</p>
                            </div>
                            <div className="flex flex-wrap gap-2 pr-2 ">
                                {Information?.Hobbies.slice(0, 5).map((item, idx) => (
                                    <div className="px-3 py-1 rounded-lg   border flex gap-2">
                                        <p target="_blank" className="text-black text-sm font-normal " >{item}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                    {/* divider */}
                    <div className="w-2 h-3/5 rounded-md my-auto bg-black"></div>
                    {/* Right */}
                    <div className="flex-grow flex">
                        

                        <div className="flex-grow flex flex-col gap-5  mt-10">
                            {/* about */}
                            <div className="flex flex-col">
                                <p className="text-2xl font-semibold">Introduction</p>
                                <p className="text-sm">
                                    {Information?.PersonalData?.AboutMe}
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                    </svg>
                                    <div className=" bg-black w-40 flex">
                                        <p className="text-white text-center font-light text-xl my-auto mx-auto">Education</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="">
                                    {Information?.Education?.slice(0, 5).map((item, idx) => (
                                        <div className="flex" key={idx}>
                                            {/* Date */}
                                            <div className="w-1/4  flex">
                                                <p className="ml-auto text-xs font-semibold">{item.Duration}</p>
                                                <div className=" w-4 h-4 rounded-full border-2  border-black translate-x-[calc(50%+1px)] bg-white"></div>
                                            </div>
                                            <div className="w-3/4 border-l-2 border-black pl-5 flex flex-col">
                                                <p className="text-sm font-semibold">{item.Title}</p>
                                                <p className="text-xs">{item.From}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                    </svg>

                                    <div className=" bg-black w-40 flex">
                                        <p className="text-white text-center font-light text-xl my-auto mx-auto">Experience</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="">
                                    {Information?.Experience?.slice(0, 5).map((item, idx) => (
                                        <div className="flex" key={idx}>
                                            {/* Date */}
                                            <div className="w-1/4  flex">
                                                <p className="ml-auto text-xs font-semibold">{item.Duration}</p>
                                                <div className=" w-4 h-4 rounded-full border-2  border-black translate-x-[calc(50%+1px)] bg-white"></div>
                                            </div>
                                            <div className="w-3/4 border-l-2 border-black pl-5 flex flex-col">
                                                <p className="text-sm font-semibold">{item.Job}</p>
                                                <p className="text-xs">{item.Company}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                    </svg>


                                    <div className=" bg-black w-40 flex">
                                        <p className="text-white text-center font-light text-xl my-auto mx-auto">Projects</p>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="">
                                    {Information?.Projects?.slice(0, 5).map((item, idx) => (
                                        <div className="flex" key={idx}>
                                            {/* Date */}
                                            <div className="w-2/5  flex">
                                                <p className=" text-sm font-semibold my-auto">{item.Title}</p>
                                            </div>
                                            <div className="w-3/4 border-l-2 border-black pl-5 flex flex-col pb-2">
                                                <p className="text-xs font-normal">{item.Details}</p>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




                <div className="mt-auto h-[3%] bg-[#f9d6d0] ">

                </div>

            </div>
        )}

    </>
    );
}

export default Resume_3;
