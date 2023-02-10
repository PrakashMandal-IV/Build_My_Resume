import { useNavigate } from "react-router-dom"
import { PrimaryButton } from "../component/Button"

const LandingPage = () => {
    const nav = useNavigate()
    return (<>
        <div className="flex w-full h-[100vh]">
            <div className="flex flex-1 bg-gradient-to-r from-sky-500 to-sky-700 shadow-2xl shadow-sky-700 z-50">
                <div className="m-auto w-2/3">

                    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"> Build your</h1>
                    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-lime-400  ">Resume</span></h1>
                    <p class="text-lg font-normal  lg:text-xl text-white">Seamless experience of Creating your resume, choose from various template,upload your own background and get a desried look!! </p>

                </div>
            </div>
            <div className="flex  flex-1 bg-gray-100  ">
                <div className="m-auto flex flex-col gap-5 ">
              
                    <PrimaryButton Name={"Start Building"} />
                    <PrimaryButton Name={"View Templates"} />
                </div>
            </div>
        </div>
    </>)
}
export default LandingPage