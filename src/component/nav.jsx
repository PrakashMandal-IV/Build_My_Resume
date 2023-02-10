import { Outlet } from "react-router-dom"

const Nav = () => {
    return (<>
        <div className="">sefs</div>
        <div className='flex-fill'>
            <div id='dashboard-header'></div>
            <div id='dashboard-content'>
                <Outlet/>
            </div>
        </div>
    </>)
}
export default Nav