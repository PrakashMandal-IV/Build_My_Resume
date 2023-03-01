import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PrimaryButton } from "../component/Button"

const LandingPage = () => {
    const nav = useNavigate()
     const [LoadingAnimation,SetLoadingAnimation] = useState({
        right:"-translate-x-full",
        left:"translate-x-full"
     })
useEffect(()=>{
    SetLoadingAnimation({right:"",left:""})
},[])


const StartBuilding=()=>{
    SetLoadingAnimation({
        right:"-translate-x-full",
        left:"translate-x-full"
     })
     setTimeout(() => {
        nav('/home')
     }, 300);
}
    return (<>
        <div className="  flex flex-col md:flex-row  w-full h-[100vh]">
            <div className={"flex flex-1 bg-gradient-to-r from-sky-500 to-sky-700 shadow-2xl shadow-sky-700 z-50  transition-all duration-300  "+LoadingAnimation.right}>
                <div className="m-auto w-2/3">

                    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"> Build your</h1>
                    <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-lime-400  ">Resume</span></h1>
                    <p class="text-lg font-normal  lg:text-xl text-white">Seamless experience of Creating your resume, choose from various template,upload your own background and get a desried look!! </p>

                </div>
            </div>
            <div className={"flex  flex-1 bg-gray-100 transition-all duration-300 "+LoadingAnimation.left}>
                <div className="m-auto flex flex-col gap-5">

                    <PrimaryButton Name={"Start Building"} className="mx-auto" onClick={()=>StartBuilding()} />
                    <PrimaryButton Name={"View Templates"} />
                </div>
            </div>
        </div>
    </>)
}
export default LandingPage