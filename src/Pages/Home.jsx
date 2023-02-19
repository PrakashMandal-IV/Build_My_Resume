import Resume_1 from "../component/Resumes/Resume_1"
import { PrimaryButton } from "../component/Button";
import ReactToPrint from "react-to-print";
import { createRef, useRef } from "react";


const Home = () => {
  const printref = createRef();


  return (<>
    <div className="flex flex-col md:flex-row h-[95vh]">
      <div className="w-1/3 border border-purple-500 ">
      <ReactToPrint
          trigger={() => <PrimaryButton Name="Print"/>}
          content={() => printref.current}
        />
     
     
  
      </div>
      <div className="md:w-2/3">
        <div className="md:w-[48%]  mx-auto" >
        <Resume_1 printref={printref}/>
        </div>


      </div>

    </div>
  </>)
}
export default Home