import React, { useRef } from "react";
import { PrimaryButton } from "../Button";
import ReactToPrint from "react-to-print";

function Resume_1() {
    const printRef = useRef(null);
    return (<>


            <ReactToPrint
                trigger={() => <PrimaryButton Name="Print" className="mx-auto" />}
                content={() => printRef.current}
            />
            <div id="printable-area" ref={printRef} className="w-full h-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
                <div className="w-full h-full bg-white shadow-md">
                    {/* Header */}
                    <nav className="bg-slate-400 h-32 md:h-52  print:bg-slate-400 flex">
                        <div className="flex flex-col w-full my-auto pl-20">
                           <p className="text-lg font-light ">My Resume</p>
                           <p className="text-4xl ">Your Name</p>
                           <p className="text-lg font-light ">Your Profession</p>
                        </div>
                        <div className="flex border w-full my-auto">
                           
                           </div>
                    </nav>

                </div>
            </div>
       
    </>
    );
}

export default Resume_1;
