import { useEffect, useState } from "react";


function ImageSlideshow({ images }) {
const  [Rem,SetRem] = useState(0)

  
    return (
        <>

            <div className="relative  grid place-items-center gap-10 w-full overflow-x-scroll  h-[60vh] pt-10  overflow-y-hidden ImageSlider">
                <div className={"flex transition-transform duration-1000  "}>
                    {images.map((item, idx) => (
                        <div key={idx} className="w-80   flex flex-col align-middle justify-center p-4 h-auto transition-all duration-500     hover:scale-110">
                            <img src={item.src} className="h-auto w-full object-contain pointer-events-none" alt="" />
                            <p className="text-center p-2">{item.alt}</p>
                        </div>
                    ))}
                </div>
            </div>




        </>
    );
}

export default ImageSlideshow;