import React, { useEffect, useState } from "react";


import MyData from '../../JsonData.json'
function Resume_4(props) {
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
            <div id="printable-area" ref={props.printref} className="body bg-white " size="A4">
                {/* body */}
                <div className="flex h-full">
                    {/* Left */}
                    <div className="w-1/2 bg-gradient-to-br from-slate-800 to-slate-600  flex flex-col gap-10 pl-10">
                        {/* Section 1 Image */}
                        <div className="flex">
                            <div className="flex flex-col">
                                <div className="w-8 h-5 bg-yellow-500">

                                </div>
                                <div className="flex flex-col mt-auto font-mono">
                                    <div className="text-white text-semibold text-4xl -rotate-90 p-0 m-0 h-5 w-5 text-center">.</div>
                                    <div className="text-white text-semibold text-4xl -rotate-90 p-0 m-0 h-5 w-5 text-center">e</div>
                                    <div className="text-white text-semibold text-4xl -rotate-90 p-0 m-0 h-5 w-5 text-center">m</div>
                                    <div className="text-white text-semibold text-4xl -rotate-90 p-0 m-0 h-5 w-5 text-center">u</div>
                                    <div className="text-white text-semibold text-4xl -rotate-90 p-0 m-0 h-5 w-5 text-center">s</div>
                                    <div className="text-white text-semibold text-4xl -rotate-90 p-0 m-0 h-5 w-5 text-center">e</div>
                                    <div className="text-white text-semibold text-4xl -rotate-90 p-0 m-0 h-5 w-5 text-center">R</div>
                                </div>


                            </div>
                            <div className="w-3/4 max-h-96   overflow-hidden   ml-auto">
                                <img src={Information?.PersonalData?.ProfilePic} alt="" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 pr-10">
                            <p className="text-white font-semibold text-lg"> <span className="border-b">About</span>Me</p>
                            <p className="text-white text-sm font-light">{Information?.PersonalData?.AboutMe}</p>
                        </div>

                        <div className="flex flex-col gap-4 pr-10">
                            <p className="text-white font-semibold text-lg"> <span className="border-b">Skills</span></p>
                            {Information?.Skills.slice(0, 5).map((item, idx) => (
                                <div className="flex" key={idx}>
                                    <p className="text-sm font-medium text-white">{item.Name}</p>
                                    <div className="bg-gray-300 h-2 ml-auto flex-grow max-w-[50%] my-auto  ">
                                        <div className=" h-full bg-yellow-500" style={{ width: `${item.Level}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right */}
                    <div className="w-1/2"></div>
                </div>

            </div>
        )}

    </>
    );
}

export default Resume_4;
