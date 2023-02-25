import { useState } from "react";
import { Outlet } from "react-router-dom"
import logo from "../logo.svg"
import { Logo } from "./Icons";
const Nav = () => {

    return (<>
        <div className="fixed top-0 w-full flex-col md:flex-row flex gap-5 md:gap-20 m-4">
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