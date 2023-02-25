import { useState } from "react";
import { Outlet } from "react-router-dom"
import logo from "../logo.svg"
import { Logo } from "./Icons";
const Nav = () => {

    return (<>
        <div className="flex flex-col md:flex-row   gap-5 md:gap-20 m-3">
            <Logo className="w-32 h-20 mx-auto md:m-0" />
            <div className=" md:ml-24 text-2xl flex justify-center align-middle cursor-pointer  hover:text-blue-600 transition-all  ">
                <p className="my-auto">Home</p>
            </div>
            <div className=" text-2xl flex justify-center align-middle cursor-pointer  hover:text-blue-600  transition-all  ">
                <p className="my-auto">Designs</p>
            </div>
            <div className="text-2xl flex justify-center align-middle cursor-pointer hover:text-blue-600 transition-all  ">
                <p className="my-auto">About Us</p>
            </div>
        </div>
    </>
    )
}
export default Nav