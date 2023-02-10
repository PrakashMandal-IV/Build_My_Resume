import { useNavigate } from "react-router-dom"
import { PrimaryButton } from "../component/Button"

const LandingPage = () => {
    const nav = useNavigate()
    return (<>
        <div className="flex w-full h-[100vh]">
            <div className="flex flex-1 bg-gradient-to-r from-sky-500 to-sky-700 shadow-2xl shadow-sky-700">
                <div className="m-auto w-2/3">

                    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"> Build your</h1>
                    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-lime-400  ">Resume</span></h1>
                    <p class="text-lg font-normal  lg:text-xl text-white">Seamless experience of Creating your resume, choose from various template,upload your own background and get a desried look!! </p>

                </div>
            </div>
            <div className="flex  flex-1 bg-gray-100  ">
                <div className="m-auto flex flex-col gap-5 ">
                {/* <button onClick={()=>nav('/home')} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
                        <span class="w-full relative md:text-xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-sky-400 rounded-md group-hover:bg-opacity-0">
                          Start Building
                        </span>
                    </button>
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
                        <span class="w-full relative md:text-xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-sky-400 rounded-md group-hover:bg-opacity-0">
                           View Templates
                        </span>
                    </button> */}
                    <PrimaryButton Name={"Start Building"} />
                </div>
            </div>
        </div>
    </>)
}
export default LandingPage