import { useEffect, useState } from "react";

function ImageSlideshow({ images }) {
  const [Rem, setRem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
      const newRem = Rem + 80; // adjust this value as needed to control scrolling speed
      setRem({...newRem});
    }, 3000); // adjust this value as needed to control scrolling speed
    return () => clearInterval(interval);
  }, [Rem]);

  return (
    <>
      <div
        className="relative grid place-items-center gap-10 w-full overflow-x-scroll h-[60vh] pt-10 overflow-y-hidden ImageSlider"
        style={{ scrollbarWidth: "none" }}
      >
        <div
          className={"flex transition-transform duration-1000 -translate-x-[" + Rem + "px]"}
        >
          {images.map((item, idx) => (
            <div
              key={idx}
              className="w-80 flex flex-col align-middle justify-center p-4 h-auto transition-all duration-500 hover:scale-110"
            >
              <img src={item.src} className="h-auto w-full object-contain" alt="" />
              <p className="text-center p-2">{item.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageSlideshow;
