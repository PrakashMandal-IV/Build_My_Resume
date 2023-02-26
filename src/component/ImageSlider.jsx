import { useState, useRef, useEffect } from 'react';

function ImageSlideshow({ images }) {
    const [Start,SetStart] = useState(0)
    const [second,SetSecond] = useState(0)
    const [MiddleImageIndex, setMiddleImageIndex] = useState(0)
    const [Indexs,SetIndexs] = useState([0,1,2,3,4])
    useEffect(() => {
        ShuffleImage()
    }, [])


    function ShuffleImage() {
        let Index = []
       for (let index = 0; index < images.length; index++) {
        Index.push(index)
       }
     SetIndexs(Index)
    }

    return (
        <>
            <div className="flex gap-10 w-full ">
                <div className="flex-grow  h-auto w-1/5">
                    <img src={images[Indexs[0]]?.src} className='h-full w-full object-contain' alt="" />
                    <p className="">{images[Indexs[0]]?.caption}</p>
                </div>
                <div className="flex-grow h-auto w-1/5">
                    <img src={images[Indexs[1]]?.src} className='h-full w-full object-contain' alt="" />
                    <p className="">{images[Indexs[1]]?.caption}</p>
                </div>
                <div className="flex-grow h-auto w-1/5">
                    <img src={images[Indexs[Indexs[2]]]?.src} className='h-full w-full object-contain scale-110 transition-all -translate-x-[112%] scale-100' alt="" />
                    <p className="mt-5">{images[Indexs[2]].caption}</p>
                </div>
                <div className="flex-grow  h-auto w-1/5">
                    <img src={images[Indexs[3]]?.src} className='h-full w-full object-contain' alt="" />
                    <p className="">{images[Indexs[3]].caption}</p>
                </div>
                <div className="flex-grow  h-auto w-1/5">
                    <img src={images[Indexs[4]]?.src} className='h-full w-full object-contain' alt="" />
                    <p className="">{images[Indexs[4]].caption}</p>

                </div>
            </div>

        </>
    );
}

export default ImageSlideshow;