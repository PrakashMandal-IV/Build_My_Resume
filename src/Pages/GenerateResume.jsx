import { useEffect, useRef, useState } from "react"
import ReactToPrint from "react-to-print"
import { PrimaryButton } from "../component/Button"
import PreviewList, { ResumePreviewList } from "../component/ResumePreviewList"
import Resume_1 from "../component/Resumes/Resume_1"

const GenerateResume = (props) => {

    const printref = useRef()
 
    return (<>
        <div className="mt-[10vh]">
            <div className="flex flex-col md:flex-row h-[calc(90vh)]">
                <div className="w-1/3 overflow-x-hidden overflow-y-scroll scroll-smooth ImagePrevSlider">
                   
                   <PreviewList />
                    {/* <ReactToPrint
                         trigger={() => <PrimaryButton Name="Print"/>}
                         content={() => printref.current}
                        /> */}
                </div>
                {/* <div className="w-2/3 pt-5 bg-gray-300"> 
                     <div className="mx-auto md:w-[50rem] shadow-md" >
                     <Resume_1 printref={printref}/>
                     </div>
                       </div> */}

            </div>
        </div>
    </>)
}

export default GenerateResume



const ImagePreview=(props)=>{
return (<>
   

</>)
}