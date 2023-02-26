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
      </div>
    </div>
    <div className="flex lg:hidden md:bg-cover h-[50vh]">
      <div className="mt-auto px-10 flex flex-col gap-10">
        <p className=" text-sm text-center mx-auto ">Elevate your job search with our <b> user-friendly website</b>. With multiple intuitive designs and templates, you can effortlessly create a professional <b>resume for free</b> . Impress potential employers and land your dream job today!</p>

        <div className="flex gap-10  mx-auto">
          <div className="">

            <InputBox className="h-10 w-full text-sm" placeholder="Tell us your Name" />

          </div>
          <PrimaryButton Name="Get Started" className="h-10 mt-auto font-semibold   " />
        </div>

      </div>
    </div>
    <div className="p-6 relative  " id="Designs">
      <p className="text-xl text-center">Checkout our new <b>Designs</b></p>
      <ImageSlideshow images={Images} />
    </div>
    <div className="p-10  flex h-[60vh] " >
      <div className="w-1/2 flex flex-col justify-center align-middle items-center py-10  px-20 ">
      <div class="h-full flex flex-col justify-center align-middle items-center  w-full rounded-md bg-sky-600  ">
         <p className="text-2xl text-sky-200">What is Resume?</p>
      </div>

      </div>
      <div className="w-1/2 flex p-10">
        <p className=" my-auto w-2/3">
        A resume is a document that summarizes an individual's education, work experience, skills, and achievements in a concise and structured way. It is typically used to apply for job opportunities and is often the first point of contact between the job seeker and potential employer. A well-crafted resume can help job seekers stand out from other applicants and increase their chances of being invited for an interview. A resume should be tailored to the specific job and industry being applied to, and should highlight the job seeker's most relevant skills and accomplishments.
        </p>
      </div>
    </div>

  </>)
}
export default Home


const HeroSection = () => {
  return (<>
    <div className="">Home</div>
  </>)
}