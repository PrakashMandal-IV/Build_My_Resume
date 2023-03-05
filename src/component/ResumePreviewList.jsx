import { useState } from "react"
import Resume_1 from "../Assets/ResumePrevews/Resume_1.jpg"
import Resume_2 from "../Assets/ResumePrevews/Resume_2.jpg"
import Resume_3 from "../Assets/ResumePrevews/Resume_3.jpg"
import Resume_4 from "../Assets/ResumePrevews/Resume_4.jpg"
import Resume_5 from "../Assets/ResumePrevews/Resume_5.jpg"

 const PreviewList=(props)=>{
    const [List,SetList] = useState([
        {
            img:Resume_1,
            name:"Image Name"
        },
        {
            img:Resume_2,
            name:"Image Name"
        },
        {
            img:Resume_3,
            name:"Image Name"
        },
        {
            img:Resume_4,
            name:"Image Name"
        },
        {
            img:Resume_5,
            name:"Image Name"
        }
    ])


    return (<>
             <div className="flex flex-col gap-5">
                   {List.map((item,idx)=>(
                      <div className="" key={idx}>
                           
                            {item.name}
                      </div>
                   ))}
             </div>
    </>)
 }

export default PreviewList