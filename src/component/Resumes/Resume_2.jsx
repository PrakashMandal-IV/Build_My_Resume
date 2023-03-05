import React, {useState } from "react";

import './Resume_1.css'
import MyData from '../../JsonData.json'
function Resume_2(props) {
  const [Information, SetInformation] = useState(MyData)
//   useEffect(() => {
//     SetInformation({...props.UserData}) 

//   }, [])


  return (<>
    {Information&&(
    <div id="printable-area" ref={props.printref} className="body bg-white" size="A4">
        
    </div>
    )}

  </>
  );
}

export default Resume_2;
