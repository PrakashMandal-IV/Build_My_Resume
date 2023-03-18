
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"
import { useReactToPrint } from "react-to-print/lib"
import { PrimaryButton } from "../component/Button"
import PreviewList, { ResumePreviewList } from "../component/ResumePreviewList"
import styled from 'styled-components';
import Resume_1 from "../component/Resumes/Resume_1"
import Resume_2 from "../component/Resumes/Resume_2"
import Resume_3 from "../component/Resumes/Resume_3"
import Resume_4 from "../component/Resumes/Resume_4"
import Resume_5 from "../component/Resumes/Resume_5"
import Resume_6 from "../component/Resumes/Resume_6"
import Resume_7 from "../component/Resumes/Resume_7"
import Resume_8 from "../component/Resumes/Resume_8"
const GenerateResume = (props) => {

    const printref = useRef()
    const [ImageIndex, SetImageIngex] = useState('')
    const [UserData, SetUserData] = useState(null)
    const nav = useNavigate()
    useEffect(() => {
        SetUserData(props.UserData)
    }, [])


    function ImageSelectHandler(imgNumber) {

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
        documentTitle: "MyResume"
    });

    const SetImageUpload = (event) => {
     
        if (UserData) {
            var img = URL.createObjectURL(event.target.files[0])
            UserData.PersonalData.ProfilePic = img
            SetUserData({ ...UserData })
        }
    }
    return (<>
        <div className="mt-32 lg:mt-14" id="print_button" >
            <div className="flex p-1 px-2">
                <div className="hidden lg:block lg:w-1/4  mt-auto">
                    <p className="text-lg font-semibold text-center">Select Design</p>
                </div>
                <div className="flex-grow flex flex-col gap-2 ">
                    <div className="flex gap-4">
                        <PrimaryButton Name="New" className="  h-12" onClick={() => nav('/home')} />
                        <Avatar className=''>
                            <div className="avatar-upload mx-auto">
                                <div className="avatar-edit">
                                    <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" onChange={(e) => SetImageUpload(e)} />
                                    <label htmlFor="imageUpload" >
                                        Upload Image
                                    </label>
                                </div>
                            </div>
                        </Avatar>
                        {/* <PrimaryButton Name="Edit" className="  h-12" /> */}
                        {/* {!UserData && (
                            <p className="text-sm text-red-500">No Date to create Resume! Click here to <span onClick={() => nav('/createdata')} className="text-gray-600 hover:text-black transition-all cursor-pointer">Create Data</span> </p>
                        )} */}
                        <PrimaryButton Name="Print" className="w-20 lg:w-40 h-12 ml-auto" onClick={handlePrint} />
                    </div>
                    <div className="flex" >

                        <p className="text-[.65rem] lg:text-xs ml-auto">On print window, select A4 size if not selected by default </p>
                    </div>
                </div>
            </div>
            <div className="border-t-2 flex flex-col lg:flex-row   lg:h-[95vh]">
                <div className=" lg:w-1/4  lg:h-[90vh] overflow-x-hidden overflow-y-scroll scroll-smooth ImagePrevSlider py-2">
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
                        {ImageIndex === 1 && (
                            <Resume_2 printref={printref} UserData={UserData} />
                        )}
                        {ImageIndex === 2 && (
                            <Resume_3 printref={printref} UserData={UserData} />
                        )}
                        {ImageIndex === 3 && (
                            <Resume_4 printref={printref} UserData={UserData} />
                        )}
                        {ImageIndex === 4 && (
                            <Resume_5 printref={printref} UserData={UserData} />
                        )}
                        {ImageIndex === 5 && (
                            <Resume_6 printref={printref} UserData={UserData} />
                        )}
                        {ImageIndex === 6 && (
                            <Resume_7 printref={printref} UserData={UserData} />
                        )}
                        {ImageIndex === 7 && (
                            <Resume_8 printref={printref} UserData={UserData} />
                        )}
                    </div>

                </div>

            </div>
        </div>
    </>)
}

export default GenerateResume


const Avatar = styled.div`
.avatar-upload {
  position: relative;
 

}

.avatar-upload .avatar-edit input {
  display: none;
}
.avatar-upload .avatar-edit input + label {
    align-items: center;
    background: #f5f5fa;
    border: 0;
    border-radius: 8px;
    box-shadow: -10px -10px 30px 0 #fff,10px 10px 30px 0 #1d0dca17;
    box-sizing: border-box;
    color: #2a1f62;
    cursor: pointer;
    display: flex; 
    font-size: 1rem;
    justify-content: center;
    line-height: 1.5rem;
    padding: 12px;
    position: relative;
    text-align: left;
    transition: .2s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: pre;
    word-break: normal;
    word-spacing: normal;
    
    &:hover {
      background: #f8f8ff;
      box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17;
    }
  
  
}
.avatar-upload .avatar-edit input + label:hover {
    background: #f8f8ff;
    box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17;
}
`