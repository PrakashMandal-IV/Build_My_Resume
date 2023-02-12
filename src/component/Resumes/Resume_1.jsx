import React, { useState } from "react";

import './Resume_1.css'
import MyData from '../../JsonData.json'
import { PrimaryButton } from "../Button";
function Resume_1() {
    const [Information, SetInformation] = useState(MyData)
    return (<>
           
          <div className="body border mt-5">

          </div>
          <div className="mt-5">
            <PrimaryButton Name="Print" />
          </div>
    </>
    );
}

export default Resume_1;
