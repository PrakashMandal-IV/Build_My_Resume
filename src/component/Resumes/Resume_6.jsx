import React, { useEffect, useState } from "react";

import './Resume_1.css'
import MyData from '../../JsonData.json'
function Resume_6(props) {
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
            <div id="printable-area" ref={props.printref} className="body  flex " size="A4">
                {/* body */}
                <div className="w-2/5 h-full bg-gradient-to-b from-[#333a4c]  to-[#495168] border flex flex-col">
                    <div className=" h-60 mt-10 flex justify-center align-middle">
                        <div className="w-48 h-48 rounded-full overflow-hidden">
                            <img src={Information?.PersonalData?.ProfilePic} className="object-contain" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        )}

    </>
    );
}

export default Resume_6;
