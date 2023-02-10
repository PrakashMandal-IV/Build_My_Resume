import React, { useRef, useState } from "react";
import { PrimaryButton } from "../Button";
import ReactToPrint from "react-to-print";
import MyData from '../../JsonData.json'
function Resume_1() {
    const printRef = useRef(null);
    const [Information, SetInformation] = useState(MyData)
    return (<>


        <ReactToPrint
            trigger={() => <PrimaryButton Name="Print" className="mx-auto" />}
            content={() => printRef.current}
        />
        <div id="printable-area" ref={printRef} className="resume-1 w-full h-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <div className="w-full h-full bg-white shadow-md">
                {/* Header */}
                <nav className="bg-gray-300   h-32 md:h-56 flex">
                    <div className="flex flex-col w-full my-auto pl-20">
                        <p className="text-sm  font-light ">Resume</p>
                        <p className="text-2xl ">{Information.PersonalData.FirstName + " " + Information.PersonalData.LastName}</p>
                        <p className="text-sm font-light ">{Information.PersonalData.Profession}</p>
                    </div>
                    <div className="flex w-full my-auto">
                        <div className="ml-auto flex flex-col gap-3 mr-20">
                            <p className="font-light text-sm"> <span className="font-medium  ">T :</span> {Information.PersonalData.Contact.Phone}</p>
                            <p className="font-light text-sm "> <span className="font-medium  ">M :</span> {Information.PersonalData.Contact.Email}</p>
                            <p className="font-light text-sm "> <span className="font-medium  ">W :</span> {Information.PersonalData.Contact.Website}</p>
                        </div>
                    </div>
                </nav>
                <div className="mt-24 mx-40">
                    <p className="">WELCOME TO MY RESUME</p>
                </div>

            </div>
        </div>

    </>
    );
}

export default Resume_1;
