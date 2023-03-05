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
            <div id="printable-area" ref={props.printref} className="body bg-white" size="A4">
                {/* {Body} */}
                <div className="flex gap-5 h-full">
                    <div className="bg-black w-4 h-full ">

                    </div>
                    <div className="flex-grow">
                        <div className="flex h-full">
                            <div className="w-1/2 flex flex-col">
                                <div className="ml-auto h-20 w-4/6 bg-black"></div>
                            </div>
                            <div className="w-1/2">
                                <div className=" h-2/5 bg-black  ">

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
