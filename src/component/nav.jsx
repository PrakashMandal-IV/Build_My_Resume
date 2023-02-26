import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import { Logo } from "./Icons";
const Nav = () => {
    const [navVisible, setNavVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 0 && navVisible) {
            setNavVisible(false);
          } else if (window.pageYOffset === 0 && !navVisible) {
            setNavVisible(true);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [navVisible]);
      
    return (<>
        <div className={`fixed top-0 w-full flex-col md:flex-row flex gap-5 md:gap-20 m-4 transition-all  ${navVisible ? '' : ' -translate-y-[100px]  '}`}>
            <Logo className="h-14 ml-0" />
            <div className="flex gap-20 justify-center ">
                <div className=" text-lg flex justify-center align-middle cursor-pointer hover:text-blue-600 transition-all">
                    <p className="my-auto">Home</p>
                </div>
                <div className="text-lg flex justify-center align-middle cursor-pointer hover:text-blue-600 transition-all">
                    <p className="my-auto">Designs</p>
                </div>
                <div className="text-lg flex justify-center align-middle cursor-pointer hover:text-blue-600 transition-all">
                    <p className="my-auto">About Us</p>
                </div>
            </div>
        </div>

        <Outlet />

    </>
    )
}
export default Nav