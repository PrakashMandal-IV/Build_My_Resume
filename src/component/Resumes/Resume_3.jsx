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
                        <div className="flex flex-col mt-32">
                            <div className=" mx-auto bg-black w-40 ">
                                <p className="text-white text-center font-light text-2xl ">CONTACT</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="">

                                </div>
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
