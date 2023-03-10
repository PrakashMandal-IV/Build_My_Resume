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
               
            </div>
        )}

    </>
    );
}

export default Resume_8;
