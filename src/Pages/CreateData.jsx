import { useEffect, useState } from "react"

const CreateData=()=>{
    const searchParams = new URLSearchParams(window.location.search);
  const [UserName,SetUserName] = useState()
useEffect(()=>{
     SetUserName(searchParams.get('Name'))
},[])
    return (<>
            <div className="flex flex-col w-full md:w-[90vw] max-w-[1920px] h-full my-auto">
                   <div className="mx-auto">
                       <p className="text-center">Welcome {UserName}, Let's start Building your Resume !!</p>
                   </div>
            </div>
    </>)
}

export default CreateData