import { useEffect, useState } from "react"

const CreateData=()=>{
    const searchParams = new URLSearchParams(window.location.search);
  const [UserName,SetUserName] = useState()
  const [Form,SetForm] = useState('')
  const [Scale,SetScale] = useState('scale-0')
useEffect(()=>{
     SetUserName(searchParams.get('Name'))
     setTimeout(() => {
         SetScale('')
     }, 200);
},[])
    return (<>
            <div className="flex flex-col w-full max-w-[1920px] h-full mt-[30vh]">
                {/* {"Intro"} */}
                   <div className={"mx-auto w-full transition-transform "+Scale}>
                       <p className="text-center text-lg">Welcome, <b> {UserName}</b>, Good to see you today</p>
                       <p className="text-center text-lg">Let's start Building your Resume !!</p>
                   </div>
            </div>
    </>)
}

export default CreateData