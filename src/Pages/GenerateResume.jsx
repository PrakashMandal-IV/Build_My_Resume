
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"
import { useReactToPrint } from "react-to-print/lib"
import { PrimaryButton } from "../component/Button"
import PreviewList, { ResumePreviewList } from "../component/ResumePreviewList"
import Resume_1 from "../component/Resumes/Resume_1"
import Resume_2 from "../component/Resumes/Resume_2"
const GenerateResume = (props) => {

    const printref = useRef()
    const [ImageIndex, SetImageIngex] = useState('')
    const [UserData, SetUserData] = useState(null)
    const nav = useNavigate()
    useEffect(() => {

        SetUserData(props.UserData)
    }, [])


    function ImageSelectHandler(imgNumber) {
        debugger
        SetImageIngex(imgNumber)
        if (UserData) {



            const myDiv = document.querySelector('#top');
            // Scroll to the div with the ID "myDiv"
            myDiv.scrollIntoView({ behavior: "smooth" });
        } else {
            //   SetImageIngex('')
        }
    }
    const handlePrint = useReactToPrint({
       
        content: () => printref.current,
        copyStyles:true,
        documentTitle:"MyResume.pdf"
    });
    return (<>
        <div className="mt-32 lg:mt-20" id="print_button">
            <div className="flex p-2">
                <div className="hidden lg:block lg:w-1/3 mt-auto">
                    <p className="text-lg font-semibold text-center">Select Design</p>
                </div>
                <div className="flex-grow flex">
                    <div className="mt-auto">
                        {!UserData && (
                            <p className="text-sm text-red-500">No Date to create Resume! Click here to <span onClick={() => nav('/createdata')} className="text-gray-600 hover:text-black transition-all cursor-pointer">Create Data</span> </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2 ml-auto lg:mr-10" >
                        <PrimaryButton Name="Print" className="w-20 lg:w-40 h-12 ml-auto" onClick={handlePrint} />
                        <p className="text-[.65rem] lg:text-sm ">On print window, select A4 size if not selected by default </p>
                    </div>
                </div>
            </div>
            <div className="border-t-2 flex flex-col lg:flex-row   lg:h-[95vh]">
                <div className=" lg:w-1/3  lg:h-[90vh] overflow-x-hidden overflow-y-scroll scroll-smooth ImagePrevSlider py-2">
                    <PreviewList ImageSelect={(ImageNumber) => ImageSelectHandler(ImageNumber)} selectedImage={ImageIndex} />
                </div>
                <div className=" border-l-2 flex-grow flex flex-col gap-10  py-5 overflow-x-hidden overflow-y-scroll ImagePrevSlider ">
                    <p className="ml-5  text-sm">
                        Note: The Preview below can be different from the Actual Print
                    </p>
                    <div className="hidden md:block mx-auto md:w-[50rem] shadow-md   " >
                        {ImageIndex === 0 && (
                            <Resume_1 printref={printref} UserData={UserData} />
                        )}
                        {ImageIndex === 2 && (
                            <Resume_2 printref={printref} UserData={UserData} />
                        )}
                    </div>

                </div>

            </div>
        </div>
    </>)
}

export default GenerateResume


