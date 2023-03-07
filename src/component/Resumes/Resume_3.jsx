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
                <div className=" bg-pink-300 h-1/5  flex ">
                       <div className="w-2/5">

                       </div>
                       <div className="flex-grow">
                            <p className="">{Information.PersonalData.FirstName}</p>
                       </div>
                </div>
                
            </div>
        )}

    </>
    );
}

export default Resume_3;
