import { useEffect, useState } from "react"
import { PrimaryButton } from "../component/Button";

const CreateData=()=>{
    const searchParams = new URLSearchParams(window.location.search);
  
  const [Form,SetForm] = useState(1)
  const [Scale,SetScale] = useState('scale-0')
useEffect(()=>{
     SetUserName(searchParams.get('Name'))
     setTimeout(() => {
         SetScale('')
     }, 200);
},[])

//UserData
const [UserName,SetUserName] = useState()


function NextClick(){
    SetScale('scale-0')
    setTimeout(() => {
        SetForm(Form+1)
        SetScale('')
    }, 200);
}

function BackClick(){
    SetScale('scale-0')
    setTimeout(() => {
        SetForm(Form-1)
        SetScale('')
    }, 200);
}
    return (<>
            <div className="flex flex-col w-full max-w-[1920px] h-[55vh] mt-[30vh]">
                {/* {"Intro"} */}
                <div className={"mx-auto w-full transition-transform "+Scale}>
                  {Form===1&&(<>
                       <p className="text-center text-lg">Welcome, <b> {UserName}</b>, Good to see you today</p>
                       <p className="text-center text-lg">Let's start Building your Resume !!</p>
                       
                  </>)}
                  {Form===2&&(<>
                       <p className="text-center text-lg">Welcome, <b> {UserName}</b>, Good to see you today</p>
                       <p className="text-center text-lg">Let's start Building your Resume !!</p>
                       
                  </>)}
                  </div>
                  <div className="mx-auto mt-auto flex gap-20">
                    {Form!==1&&(<PrimaryButton Name="Back"  onClick={()=>BackClick()} className="w-36" />)}
                      <PrimaryButton Name="Next" onClick={()=>NextClick()} className="w-36 transition-all" />
                  </div>
            </div>
    </>)
}

export default CreateData