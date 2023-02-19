import Resume_1 from "../component/Resumes/Resume_1"
import { PDFDownloadLink, Document, Page, View, Text } from '@react-pdf/renderer';
import { PrimaryButton } from "../component/Button";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
const Home = () => {
  const printRef = useRef(null);
  return (<>
    <div className="flex h-[95vh]">
      <div className="w-1/3 border border-purple-500 ">
      <ReactToPrint
          trigger={() => <PrimaryButton Name="Print"/>}
          content={() => printRef.current}
        />
      </div>
      <div className="w-2/3  p-5 border border-red-500 flex">
        <div className="h-full mx-auto" >
        <Resume_1 printref={printRef}/>
        </div>


      </div>

    </div>
  </>)
}
export default Home