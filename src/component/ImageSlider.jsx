import { useEffect, useState } from "react";

import Resume_1 from "../Assets/ResumePrevews/Resume_1.jpg"
import Resume_2 from "../Assets/ResumePrevews/Resume_2.jpg"
import Resume_3 from "../Assets/ResumePrevews/Resume_3.jpg"
import Resume_4 from "../Assets/ResumePrevews/Resume_4.jpg"
import Resume_5 from "../Assets/ResumePrevews/Resume_5.jpg"
import Resume_6 from "../Assets/ResumePrevews/Resume_6.jpg"
import Resume_7 from "../Assets/ResumePrevews/Resume_7.jpg"
import Resume_8 from "../Assets/ResumePrevews/Resume_8.jpg"
function ImageSlideshow() {

    const [images, SetList] = useState([
        {
            img: Resume_1,
            name: "Image Name",
            Id:0
        },
        {
            img: Resume_2,
            name: "Image Name",
            Id:1
        },
        {
            img: Resume_3,
            name: "Image Name",
            Id:2
        },
        {
            img: Resume_4,
            name: "Image Name",
            Id:3
        },
        {
            img: Resume_5,
            name: "Image Name",
            Id:4
        },
        {
            img: Resume_6,
            name: "Image Name",
            Id:5
        },
        {
            img: Resume_7,
            name: "Image Name",
            Id:6
        },
        {
            img: Resume_8,
            name: "Image Name",
            Id:7
        }
    ])
    return (
        <>

            <div className="relative  grid place-items-center gap-10 w-full overflow-x-scroll  h-[60vh] pt-10  overflow-y-hidden ImageSlider">
                <div className={"flex transition-transform duration-1000  "}>
                    {images.map((item, idx) => (
                        <div key={idx} className="w-80   flex flex-col align-middle justify-center p-4 h-auto transition-all duration-500     hover:scale-110">
                            <img src={item.img} className="h-auto w-full object-contain pointer-events-none" alt="" />
                            <p className="text-center p-2">{item.alt}</p>
                        </div>
                    ))}
                </div>
            </div>




        </>
    );
}

export default ImageSlideshow;