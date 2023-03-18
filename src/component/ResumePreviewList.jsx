import { useState } from "react"
import Resume_1 from "../Assets/ResumePrevews/Resume_1.jpg"
import Resume_2 from "../Assets/ResumePrevews/Resume_2.jpg"
import Resume_3 from "../Assets/ResumePrevews/Resume_3.jpg"
import Resume_4 from "../Assets/ResumePrevews/Resume_4.jpg"
import Resume_5 from "../Assets/ResumePrevews/Resume_5.jpg"
import Resume_6 from "../Assets/ResumePrevews/Resume_6.jpg"
import Resume_7 from "../Assets/ResumePrevews/Resume_7.jpg"
import Resume_8 from "../Assets/ResumePrevews/Resume_8.jpg"
const PreviewList = (props) => {
    const [List, SetList] = useState([
        {
            img: Resume_1,
            name: "Minimal Design 1",
            Id:0
        },
        {
            img: Resume_2,
            name: "Styled Design 1",
            Id:1
        },
        {
            img: Resume_3,
            name: "Styled Design 2",
            Id:2
        },
        {
            img: Resume_4,
            name: "Styled Design 3",
            Id:3
        },
        {
            img: Resume_5,
            name: "Minimal Detailed Design",
            Id:4
        },
        {
            img: Resume_6,
            name: "Styled Details Design 1",
            Id:5
        },
        {
            img: Resume_7,
            name: "Styled Details Design 2",
            Id:6
        },
        {
            img: Resume_8,
            name: "Styled Details Design 3",
            Id:7
        }
    ])


    return (<>
        <div className="flex  flex-col gap-5   px-4  ">
           
            {List.map((item,idx)=>(
                        <div onClick={()=>props.ImageSelect(item.Id)} className={" cursor-pointer w-4/5 lg:w-3/5 mx-auto flex flex-col gap-4 p-4 rounded-md  hover:bg-gradient-to-br from-sky-400 to-green-200 transition-all   duration-200 ease-out "+(props.selectedImage===item.Id?"bg-gradient-to-br from-sky-300 to-green-100":"")} key={idx}>
                        <div className="">
                          <img src={item.img} alt="" className="rounded-md w-full" />
                        </div>
                        <p className="text-center">{item.name}</p>
                      </div>
                      
                   ))}

          
        </div>
    </>)
}

export default PreviewList


