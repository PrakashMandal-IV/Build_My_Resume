import { useEffect, useState } from "react"
import { PrimaryButton } from "../component/Button";
import styled from 'styled-components'
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
const [UserName,SetUserName] = useState('')
const [Profession,SetProfession] = useState('')

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
                <div className={"mx-auto w-full transition-transform flex flex-col "+Scale}>
                  {Form===1&&(<>
                      <div className="mx-auto text-center flex flex-col gap-4">
                      <p className=" text-lg">Welcome, <b> {UserName}</b>, Good to see you today</p>
                       <p className=" text-lg">Let's start Building your Resume !!</p>
                       <p className="text-lg font-bold mt-5">Tell us your Profession</p>
                       <InputBox placeholder="Designer,Programmer,Artist etc" value={Profession} onChange={(e)=>SetProfession(e.target.value)}/>
                      </div>
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



const InputBox = styled.input`
align-items: center;
background: #f5f5fa;
border: 0;
border-radius: 8px;
box-shadow: -10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17;
box-sizing: border-box;
color: #2a1f62;
display: flex;
font-size: 1rem;
justify-content: center;
padding: 15px;
position: relative;
text-align: left;
transition: .2s;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
white-space: pre;
outline: none;
word-break: normal;
word-spacing: normal;
&:hover {
  background: #f8f8ff;
  box-shadow: -15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17;
}

@media (min-width: 768px) {
  padding: 24px;
}

`