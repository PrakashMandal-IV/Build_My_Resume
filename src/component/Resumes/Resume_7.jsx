import React, { useEffect, useState } from "react";


import MyData from '../../JsonData.json'
function Resume_7(props) {
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
            <div id="printable-area" ref={props.printref} className="body bg-gray-50  flex  " size="A4">
                {/* body */}
                <div className="flex h-full">
                        <div className="w-1/2  flex flex-col">
                             <div className="flex h-64 ">
                                   <div className="w-10 bg-[#d32a2d] ml-auto"></div>
                             </div>
                             <div className="flex-grow flex flex-col ml-5">
                                  <div className="">
                                      <p className="text-4xl font-semibold">{Information?.PersonalData?.FirstName}</p>
                                      <p className="text-4xl text-[#d32a2d] font-semibold">{Information?.PersonalData?.LastName}</p>
                                  </div>
                                  <div className=" max-h-96 max-w-[20rem]     overflow-hidden">
                                      <img src={Information?.PersonalData?.ProfilePic} className="object-contain" alt="" />
                                  </div>
                                  <div className="mt-2 mr-10  ">
                                      <p className="text-lg text-gray-500">{Information?.PersonalData?.Profession}</p>
                                      <p className="text-xs text-gray-500">{Information?.PersonalData?.AboutMe}</p>
                                  </div>
                                 
                             </div>


                             <div className="flex-grow flex   mt-auto">
                                   <div className="w-10 bg-[#d32a2d] ml-auto"></div>
                             </div>
                        </div>
                        <div className="w-1/2  bg-[#d32a2d] ">
                            
                        </div>
                </div>
            </div>
        )}

    </>
    );
}

export default Resume_7;
