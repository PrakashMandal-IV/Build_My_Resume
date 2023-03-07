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
                    <div className="flex-grow  flex flex-col px-8">
                        <div className="border-b-2 border-black my-auto py-4 ">
                            <p className="text-3xl font-light">{Information?.PersonalData?.FirstName}</p>
                            <p className="text-3xl font-light">{Information?.PersonalData?.LastName}</p>
                            <p className="text-xl mt-2 font-light">{Information?.PersonalData?.Profession}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-grow px-10 flex">
                    {/* Left */}
                    <div className="w-[35%] flex flex-col">
                        {/* {Section1} */}
                        <div className="flex flex-col gap-8 mt-32">
                            <div className=" mx-auto bg-black w-40 ">
                                <p className="text-white text-center font-light text-2xl ">CONTACT</p>
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
                                <p className="text-white text-center font-light text-2xl ">SKILLS</p>
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
                                <p className="text-white text-center font-light text-2xl ">Hobbies</p>
                            </div>
                            <div className="flex flex-wrap gap-2 ">
                                {Information?.Hobbies.slice(0, 5).map((item, idx) => (
                                    <div className="px-3 py-1 rounded-full border flex gap-2">
                                        <p target="_blank" className="text-black text-sm font-normal " >{item}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="">

                    </div>
                </div>




                <div className="mt-auto h-[5%] bg-[#f9d6d0]">

                </div>

            </div>
        )}

    </>
    );
}

export default Resume_3;
