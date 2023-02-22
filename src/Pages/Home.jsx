import Resume_1 from "../component/Resumes/Resume_1"
import { PrimaryButton } from "../component/Button";
import ReactToPrint from "react-to-print";
import { createRef, useRef } from "react";


const Home = () => {
  const printref = createRef();


  return (<>
    <div className="flex flex-col md:flex-row h-[100vh-3rem]">
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

    </div>
  </>)
}
export default Home