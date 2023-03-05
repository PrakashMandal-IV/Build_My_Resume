
import { useEffect, useRef, useState } from "react"
import { useReactToPrint } from "react-to-print/lib"
import { PrimaryButton } from "../component/Button"
import PreviewList, { ResumePreviewList } from "../component/ResumePreviewList"
import Resume_1 from "../component/Resumes/Resume_1"
const GenerateResume = (props) => {

    const printref = useRef()

    function ImageSelectHandler(imgNumber) {
        handlePrint()
    }
    const handlePrint = useReactToPrint({
        content: () => printref.current,
    });
    return (<>
        <div className="mt-[15vh] lg:mt-[10vh] mb-10ld:h-full">
            <div className="flex flex-col lg:flex-row gap-10  lg:h-[90vh]">

                <div className=" lg:w-1/3 ">
                    <p className="text-center text-lg font-semibold p-2 ">Select Designs</p>
                    <div className="h-full overflow-x-hidden overflow-y-scroll scroll-smooth ImagePrevSlider">
                    <PreviewList ImageSelect={(ImageNumber) => ImageSelectHandler(ImageNumber)} />
                    </div>
                    {/* <ReactToPrint
                         trigger={() => <PrimaryButton Name="Print"/>}
                         content={() => printref.current}
                        /> */}
                </div>
                <div className=" flex-grow flex flex-col gap-10  py-5 overflow-x-hidden overflow-y-scroll">
                    <div className="mx-auto">
                    <PrimaryButton Name="Print" className="w-40" onClick={handlePrint}/>
                      
                       
                    </div>
                    <div className="hidden md:block mx-auto md:w-[50rem] shadow-md" >
                        <Resume_1 printref={printref} />
                    </div>
                </div>

            </div>
        </div>
    </>)
}

export default GenerateResume


