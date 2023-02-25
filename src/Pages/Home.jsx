import Resume_1 from "../component/Resumes/Resume_1"
import { InputBox, PrimaryButton } from "../component/Button";
import ReactToPrint from "react-to-print";
import { createRef, useRef } from "react";
import homepageBg from '../Assets/HomepageBG.png';

const Home = () => {
  const printref = createRef();


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
    <div className="flex  bg-no-repeat bg-right bg-contain bg-transparent h-1/2  md:bg-cover  md:h-[100vh] md:max-h-[1920px] p-4" style={{ backgroundImage: `url(${homepageBg})` }}>
      <div className="my-auto w-1/2 text-lg px-10 flex flex-col gap-10">
        <p className="w-2/3">Elevate your job search with our user-friendly website. With multiple intuitive designs and templates, you can effortlessly create a professional resume for free. Impress potential employers and land your dream job today!</p>
        <div className="flex gap-10">
          <div className="w-2/5">
           
           <InputBox className="h-10 w-full " placeholder="Tell us your Name" />
           
          </div>
          <PrimaryButton Name="Get Started" className="h-10 mt-auto font-semibold   "/>
        </div>
      </div>
    </div>

    <div className="h-[60vh]"></div>

  </>)
}
export default Home


const HeroSection = () => {
  return (<>
    <div className="">Home</div>
  </>)
}