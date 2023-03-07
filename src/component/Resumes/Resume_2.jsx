import React, { useState } from "react";

import './Resume_1.css'
import MyData from '../../JsonData.json'
function Resume_2(props) {
    const [Information, SetInformation] = useState(MyData)
    //   useEffect(() => {
    //     SetInformation({...props.UserData}) 

    //   }, [])


    return (<>
        {Information && (
            <div id="printable-area" ref={props.printref} className="body bg-white h-full" size="A4">
                {/* {Body} */}
                <div className="flex gap-5 flex-grow ">
                    <div className="bg-black w-4  ">

                    </div>
                    <div className="flex-grow">
                        <div className="flex h-full">
                            <div className="w-1/2 flex flex-col">
                                <div className="ml-auto h-16 w-4/6 bg-black"></div>
                                <div className="ml-auto w-5/6 h-[28rem] overflow-hidden">
                                    <img src={Information?.PersonalData?.ProfilePic} alt="" className=" object-contain " />
                                </div>
                                <div className="ml-auto pl-4 w-5/6 ">
                                    <div className="mt-20 flex flex-col gap-1">
                                        <p className="text-xl font-semibold mb-2">EDUCATION</p>
                                        {Information?.Education.slice(0,5).map((item, idx) => (
                                            <div className="flex flex-col" key={idx}>
                                                <p className="text-sm font-medium">{item.Title}</p>
                                                <p className="text-sm font-normal text-gray-500">{item.From} | {item.Duration}</p>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <div className="ml-auto pl-4 w-5/6 ">
                                    <div className="mt-5 flex flex-col gap-1">
                                        <p className="text-xl font-semibold mb-2">SKILLS</p>
                                        {Information?.Skills.slice(0,5).map((item, idx) => (
                                            <div className="flex" key={idx}>
                                                <p className="text-sm font-medium">{item.Name}</p>
                                                <div className="bg-gray-200 h-2 rounded-md ml-auto flex-grow max-w-[30%] my-auto  ">
                                                    <div className="rounded-md h-full bg-black" style={{ width: `${item.Level}%` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                
                            </div>
                            {/* Section 1 */}
                            <div className="w-1/2 flex flex-col gap-2">
                                <div className="pl-10 h-2/5  bg-black flex flex-col  ">
                                    <div className="mt-16">
                                        <p className="text-5xl text-white">{Information?.PersonalData?.FirstName.toUpperCase()}</p>
                                        <p className="text-5xl text-white">{Information?.PersonalData?.LastName.toUpperCase()}</p>
                                        <p className="mt-5 text-2xl text-white">{Information?.PersonalData?.Profession}</p>
                                    </div>
                                    <div className="mt-20 flex flex-col gap-5 mb-10">
                                        <div className="flex gap-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10,5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                            <a href={"mailto:"+Information?.PersonalData?.Contact?.Email} className="text-white text-sm  font-light">{Information?.PersonalData?.Contact?.Email}</a>
                                        </div>
                                        <div className="flex gap-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>

                                            <p className="text-white text-sm font-light">{Information?.PersonalData?.Contact?.Phone}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                            </svg>


                                            <a href={Information?.PersonalData?.Contact.Website} target="_blank" className="text-white text-sm font-light" >My Website</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="pr-2">
                                    <p className="px-5 font-semibold">ABOUT ME</p>
                                    <p className="px-5 text-[.75rem]">{Information.PersonalData.AboutMe}</p>
                                </div>
                                <div className="pl-4  w-5/6">
                                    <div className="mt-5 flex flex-col gap-1">
                                        <p className="text-xl font-semibold mb-2">Expreiences</p>
                                        {Information?.Experience.slice(0,5).map((item, idx) => (
                                            <div className="flex flex-col" key={idx}>
                                                <p className="text-sm font-medium">{item.Job}</p>
                                                <p className="text-sm font-normal text-gray-500">{item.Company} | {item.Duration}</p>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <div className="pl-4  w-full flex-grow">
                                    <div className="mt-5 flex flex-col gap-1 h-full">
                                        <p className="text-xl font-semibold mb-2">Projects</p>
                                        <div className="flex flex-col gap-2  w-full pr-2">
                                        {Information?.Projects.slice(0,4).map((item, idx) => (
                                            <div className=" border rounded-md p-1    flex flex-col" key={idx}>
                                                <p className="text-sm font-medium">{item.Title}</p>
                                                <p className="text-[.6rem] font-normal text-gray-500">{item.Details} </p>
                                            </div>
                                        ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}

    </>
    );
}

export default Resume_2;
