import Resume_1 from "../component/Resumes/Resume_1"
import { InputBox, PrimaryButton } from "../component/Button";
import ReactToPrint from "react-to-print";
import { createRef, useRef } from "react";
import homepageBg from '../Assets/HomepageBG.png';
import ImageSlideshow from "../component/ImageSlider";

const Home = () => {
  const printref = createRef();
  const Images = [
    {
      src: "https://i.pinimg.com/564x/7b/2d/b2/7b2db207c68b2e41717fdf73589a24b6.jpg",
      alt: "Image 1"
    },
    {
      src: "https://i.pinimg.com/564x/27/93/a2/2793a22bd78ba9bd3b8a424bd081c00b.jpg",
      alt: "Image 2"
    }, {
      src: "https://i.pinimg.com/originals/74/05/8f/74058f6c6da02c2abff8260fe339d0e1.jpg",
      alt: "Image 3"
    }, {
      src: "https://i.pinimg.com/564x/d9/61/02/d96102a53a7ff59eb32b0824e41bf0d5.jpg",
      alt: "Image 4"
    }, {
      src: "https://i.pinimg.com/564x/a5/cd/7f/a5cd7f46fbbbc96a3b364fe210a6126d.jpg",
      alt: "Image 5"
    }, {
      src: "https://i.pinimg.com/564x/f1/00/d8/f100d85082e68337873784467660687e.jpg",
      alt: "Image 6"
    }, {
      src: "https://i.pinimg.com/564x/9e/18/9d/9e189d13c54bcdc4a6f659c74f8e3ba1.jpg",
      alt: "Image 7"
    }, {
      src: "https://i.pinimg.com/564x/00/05/39/000539f1920f90ad7fd5f17fb9a966e6.jpg",
      alt: "Image 8"
    },
    {
      src: "https://i.pinimg.com/564x/11/58/07/115807a8cd777fa431b17f9cd3918573.jpg",
      alt: "Image 8"
    }
  ]


  return (<>
    {/* <div className="flex flex-col md:flex-row h-[100vh-3rem]">
      <div className="w-1/3  mt-auto ">
      <ReactToPrint
          trigger={() => <PrimaryButton Name="Print"/>}
          content={() => printref.current}
        />
      </div>
      <div className="w-2/3 pt-5 bg-gray-300">
        <div className="mx-auto md:w-[50rem] shadow-md" >
        <Resume_1 printref={printref}/>
        </div>


      </div>

    </div> */}
    <div className="hidden lg:flex  bg-no-repeat bg-right    bg-transparent h-1/2  md:bg-cover  md:h-[100vh] md:max-h-[1920px] p-4" style={{ backgroundImage: `url(${homepageBg})` }}>
      <div className="my-auto w-1/2  px-10 flex flex-col gap-10 ">
        <p className="w-2/3 ">Elevate your job search with our <b> user-friendly website</b>. With multiple intuitive designs and templates, you can effortlessly create a professional <b>resume for free</b> . Impress potential employers and land your dream job today!</p>
        <div className="flex gap-10">
          <div className="w-2/5">

            <InputBox className="h-10 w-full " placeholder="Tell us your Name" />

          </div>
          <PrimaryButton Name="Get Started" className="h-10 mt-auto font-semibold   " />
        </div>
        <div className="mt-32 flex gap-10 w-2/3">
          <div className="flex-grow aspect-square rounded-md bg-gradient-to-br from-sky-400 to-sky-500 shadow-lg drop-shadow-md    shadow-sky-200 flex justify-center">
            <div className="my-auto">
              <p className="text-lg font-bold text-white text-center">10+</p>
              <p className="text-white ">Designs</p>
            </div>
          </div>
          <div className="flex-grow aspect-square rounded-md bg-gradient-to-br from-sky-400 to-sky-500 shadow-lg drop-shadow-md    shadow-sky-200 flex justify-center align-middle">
            <div className="my-auto">
              <p className="text-lg font-bold text-white text-center">100+</p>
              <p className="text-white ">Creations</p>
            </div>
          </div>
          <div className="flex-grow aspect-square rounded-md bg-gradient-to-br from-sky-400 to-sky-500 shadow-lg drop-shadow-md    shadow-sky-200 flex justify-center align-middle">
            <div className="my-auto">
              <p className="text-lg font-bold text-white text-center">100+</p>
              <p className="text-white ">Users</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div className="flex lg:hidden md:bg-cover h-[50vh]">
      <div className="mt-auto px-10 flex flex-col gap-10">
        <p className=" text-sm text-center mx-auto ">Elevate your job search with our <b> user-friendly website</b>. With multiple intuitive designs and templates, you can effortlessly create a professional <b>resume for free</b> . Impress potential employers and land your dream job today!</p>

        <div className="flex gap-10  mx-auto mb-10">
          <div className="">

            <InputBox className="h-10 w-full text-sm" placeholder="Tell us your Name" />

          </div>
          <PrimaryButton Name="Get Started" className="h-10 mt-auto font-semibold   " />
        </div>


      </div>
    </div>
    <div className="p-6 relative   " id="Designs">
      <p className="text-xl text-center">Checkout our new <b>Designs</b></p>
      <ImageSlideshow images={Images} />
    </div>
    <div className="p-2 md:p-10 " >
      <p className="text-xl text-center mb-10">What makes Resume a  <b> Good Resume ?</b></p>
      <div className="flex">
        {/* left */}
        <div className="w-1/2 border-r-4  border-sky-500 ">
          <div className="flex py-10 ">
            <div className="w-full ml-auto md:w-1/3">
              <p className="text-xs md:text-sm   text-center font-bold ">Clearity</p>
              <p className=" text-xs md:text-sm   text-center">A resume should be easy to read and comprehend. Use clear fonts, spacing, and bullet points to make it easy to scan quickly.</p>

            </div>
            <div className="ml-auto border translate-x-[calc(50%+2px)] my-auto">
              <div className="bg-gradient-to-br from-sky-200 to-sky-300  w-[30px] h-[30px] rounded-full flex shadow-md ring-4    ring-sky-600">
                {/* <div className="w-[10px] h-[10px] m-auto bg-sky-600 rounded-full ring-2 ring-blue-400 "></div> */}
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-1/2 "></div>
      </div>
    </div>

  </>)
}
export default Home

