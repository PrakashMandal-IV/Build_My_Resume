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
                

            </div>
        )}

    </>
    );
}

export default Resume_6;
