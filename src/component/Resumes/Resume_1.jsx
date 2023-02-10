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
                <nav className="bg-gray-300   h-32 md:h-56 flex">
                    <div className="flex flex-col w-full my-auto pl-10">
                        <p className="text-sm  font-light ">Resume</p>
                        <p className="text-2xl ">Your Name</p>
                        <p className="text-sm font-light ">Your Profession</p>
                    </div>
                    <div className="flex w-full my-auto">
                            <div className="ml-auto flex flex-col gap-3 mr-10">
                                <p className="font-light text-sm"> <span className="font-medium  ">T :</span> +91 999 8888 000</p>
                                <p className="font-light text-sm "> <span className="font-medium  ">M :</span> prakashmandal.iv@gmail.com</p>
                                <p className="font-light text-sm "> <span className="font-medium  ">W :</span> https://larainfo.com/blogs</p>
                            </div>
                    </div>
                </nav>

            </div>
        </div>

    </>
    );
}

export default Resume_1;
