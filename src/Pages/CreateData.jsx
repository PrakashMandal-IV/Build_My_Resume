import { useEffect, useState } from "react"
import { PrimaryButton } from "../component/Button";
import styled from 'styled-components'
const CreateData = () => {
    const searchParams = new URLSearchParams(window.location.search);

    const [Form, SetForm] = useState(4)
    const [Scale, SetScale] = useState('scale-0')
    const [SideBoard, SetSideBaord] = useState(false)
    useEffect(() => {
        SetUserName(searchParams.get('Name'))
        setTimeout(() => {
            SetScale('')
        }, 200);
    }, [])

    //UserData
    const [UserName, SetUserName] = useState('')
    const [Profession, SetProfession] = useState('')
    const [AboutMe, SetAboutMe] = useState('')
    const [Contacts, SetContacts] = useState({
        Number: "",
        Email: "",
        Link: ""
    })
    const [Education, SetEducation] = useState([])
    const [AddEducation,SetAddEducation] = useState({
        Title: "",
        From: "",
        Year: ""
    })
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
    function AddContacts(type, value) {
        var ContactData = {
            Number: Contacts.Number,
            Email: Contacts.Email,
            Link: Contacts.Link
        }
        if (type === 'number') {
            ContactData.Number = value
        } else if (type === 'email') {
            ContactData.Email = value
        } else if (type === 'link') {
            ContactData.Link = value
        }
        SetContacts(ContactData)
    }

    function RemoveEducation(id){
      SetEducation(Education.map((v,idx)=>{if(idx!==id){return v}}).filter(item=>item!==undefined))
    }
    function AddEducationHandler(type, value) {
       
        var TempData = {
            Title: AddEducation.Title,
            From: AddEducation.From,
            Year: AddEducation.Year
        }
        if (type === 'title') {
            TempData.Title = value
        } else if (type === 'from') {
            TempData.From = value
        } else if (type === 'year') {
            TempData.Year = value
        }
        SetAddEducation(TempData)
    }
    function SetAddedEducaton(){
        Education.push(AddEducation)
           SetEducation(Education)
           SetAddEducation({
            Title: "",
            From: "",
            Year: ""
        })
           SetSideBaord(!SideBoard)
    }
    return (<>
        <div className="flex flex-col w-full max-w-[1920px] h-[60vh] md:max-h-[1920px] mt-[20vh]">
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
                        <p className="text-lg font-bold mt-5">Alright, How will you introduce your self?</p>
                        <textarea placeholder="About Yourself !!" style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} className="p-2 mx-auto rounded-md h-36 w-96 outline-none bg-[#f5f5fa]" value={AboutMe} onChange={(e) => SetAboutMe(e.target.value)} />
                        <p className="text-center w-full md:w-[40rem] mt-5">Your "Introduction" section should be brief and highlight your key strengths and experiences that make you a great candidate for the job. Focus on showcasing your relevant skills, experience, and achievements in just a few lines.</p>
                    </div>
                </>)}
                {Form === 3 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4">
                        <p className="text-lg font-bold mt-5 mx-32">How to reach you?</p>
                        <InputBox placeholder="Number" value={Contacts.Number} onChange={(e) => AddContacts("number", e.target.value)} />
                        <InputBox placeholder="Email" value={Contacts.Email} onChange={(e) => AddContacts("email", e.target.value)} />
                        <InputBox placeholder="Your Website" value={Contacts.Link} onChange={(e) => AddContacts("link", e.target.value)} />
                    </div>
                </>)}
                {Form === 4 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4 w-4/5 md:w-2/5  ">
                        <p className="text-lg font-bold mt-5 ">Tell us about your Educations</p>
                        <div className="flex gap-2 ">
                            <div className={"flex flex-col gap-5 transition-all "+(SideBoard?"w-1/2":"w-full")}>
                                {/* Education items */}
                                {Education.map((item, idx) => (
                                    <div className="w-full  p-2 flex bg-[#f5f5fa] hover:bg-[#f8f8ff] rounded-md transition-all  " style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} >
                                        <div className="mr-auto text-left">
                                            <p className="text-lg font-semibold ">{item.Title}</p>
                                            <p className="">{item.From}</p>
                                            <p className="title-xs">{item.Year}</p>
                                        </div>
                                        <div className="ml-auto my-auto transition-all" onClick={()=>RemoveEducation(idx)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                                {/* Button to toggle SideBoard */}
                                <PrimaryButton onClick={() => SetSideBaord(!SideBoard)} Name={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-8 h-8 transition-all  "+(SideBoard?"rotate-45":"")} ><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>} className="w-full transition-all mt-5" />
                            </div>
                            {/* Left div that appears when SideBoard is true */}
                            
                                <div className={"transition-all transform  flex flex-col gap-2 "+(SideBoard?"w-1/2":"hidden w-0")}>
                                <InputBox placeholder="Title" className="h-10" value={AddEducation.Title} onChange={(e) => AddEducationHandler("title", e.target.value)} />
                                <InputBox placeholder="From" className="h-10" value={AddEducation.From} onChange={(e) => AddEducationHandler("from", e.target.value)} />
                                <InputBox placeholder="Complition Year" className="h-10" value={AddEducation.Year} onChange={(e) => AddEducationHandler("year", e.target.value)} />
                                <PrimaryButton onClick={() =>SetAddedEducaton()}  Name="Add" className="h-10 w-full transition-all mt-5" />
                         
                                </div>

                        </div>

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

