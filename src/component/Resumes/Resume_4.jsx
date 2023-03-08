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
            <div id="printable-area" ref={props.printref} className="body bg-white border flex flex-col " size="A4">
        
        
         </div>
        )}

    </>
    );
}

export default Resume_4;
