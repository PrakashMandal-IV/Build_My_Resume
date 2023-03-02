import { useEffect, useState } from "react"
import { PrimaryButton } from "../component/Button";
import styled from 'styled-components'
const CreateData = () => {
    const searchParams = new URLSearchParams(window.location.search);

    const [Form, SetForm] = useState(3)
    const [Scale, SetScale] = useState('scale-0')
    useEffect(() => {
        SetUserName(searchParams.get('Name'))
        setTimeout(() => {
            SetScale('')
        }, 200);
    }, [])

    //UserData
    const [UserName, SetUserName] = useState('')
    const [Profession, SetProfession] = useState('')
    const [AboutMe,SetAboutMe] = useState('')
    const [Contacts,SetContacts] = useState({Number:"",
    Email:"",
    Link:""})
    function NextClick() {
        SetScale('scale-0')
        setTimeout(() => {
            SetForm(Form + 1)
            SetScale('')
        }, 200);
    }

    function BackClick() {
        SetScale('scale-0')
        setTimeout(() => {
            SetForm(Form - 1)
            SetScale('')
        }, 200);
    }
    function AddContacts(type,value){
        var ContactData={
            Number:Contacts.Number,
            Email:Contacts.Email,
            Link:Contacts.Link
        }
        if(type==='number'){
            ContactData.Number = value
        }else if(type==='email'){
            ContactData.Email = value
        }else if(type==='link'){
            ContactData.Link = value
        }
        SetContacts(ContactData)
    }
    return (<>
        <div className="flex flex-col w-full max-w-[1920px] h-[60vh] md:max-h-[1920px] mt-[30vh]">
            {/* {"Intro"} */}
            <div className={"mx-auto w-full transition-all flex flex-col px-10 h-auto mb-10 " + Scale}>
                {Form === 1 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4 ">
                        <p className=" text-lg">Welcome, <b> {UserName}</b>, Good to see you today</p>
                        <p className=" text-lg">Let's start Building your Resume !!</p>
                        <p className="text-lg font-bold mt-5">Tell us your Profession</p>
                        <InputBox placeholder="Designer,Programmer,Artist etc" value={Profession} onChange={(e) => SetProfession(e.target.value)} />
                        <p className="text-center w-full md:w-[40rem] mt-5">Choosing the right profession name for your resume is important for accurately
                            reflecting your skills and experience. Use industry-standard titles, highlight your skills,
                            avoid exaggeration, be specific, and tailor your title to the job.</p>
                    </div>
                </>)}
                {Form === 2 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4">
                        <p className="text-lg font-bold mt-5">Alright, How will u introduce your self?</p>
                        <textarea placeholder="About Yourself !!" style={{boxShadow:"-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17"}} className="p-2 rounded-md h-36 w-96 outline-none bg-[#f5f5fa]" value={AboutMe} onChange={(e) => SetAboutMe(e.target.value)} />
                    </div>
                </>)}
                {Form === 3 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4">
                        <p className="text-lg font-bold mt-5 mx-32">How to reach you?</p>
                        <InputBox placeholder="Number" value={Contacts.Number} onChange={(e) =>AddContacts("number",e.target.value)} />
                        <InputBox placeholder="Email" value={Contacts.Email} onChange={(e) => AddContacts("email",e.target.value)} />
                        <InputBox placeholder="Your Website" value={Contacts.Link} onChange={(e) => AddContacts("link",e.target.value)} />
                        </div>
                </>)}
            </div>
            <div className="mx-auto mt-auto flex gap-20 mb-10">
                {Form !== 1 && (<PrimaryButton Name="Back" onClick={() => BackClick()} className="w-36" />)}
                <PrimaryButton Name="Next" onClick={() => NextClick()} className="w-36 transition-all" />
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

