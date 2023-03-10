import React, { useEffect, useState } from "react";


import MyData from '../../JsonData.json'
function Resume_8(props) {
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
                    {/* Right */}
                     <div className="w-1/2  flex">
                               <div className="w-3/4 mx-auto flex flex-col ">
                                  {/* Image */}
                                   <div className="h-2/6 rounded-b-full flex p-5 bg-pink-300">
                                         <div className="w-full  aspect-square  mt-auto  rounded-full overflow-hidden">
                                            <img src={Information?.PersonalData?.ProfilePic} alt="" className=" object-contain"/>
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

export default Resume_8;
