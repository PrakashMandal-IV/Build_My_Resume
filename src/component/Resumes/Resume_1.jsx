import React, { useRef, useState } from "react";
import { PrimaryButton } from "../Button";
import ReactToPrint from "react-to-print";
import './Resume_1.css '
import MyData from '../../JsonData.json'
function Resume_1() {
    const [Information, SetInformation] = useState(MyData)
    return (<>
          <div className="body"></div>
    </>
    );
}

export default Resume_1;
