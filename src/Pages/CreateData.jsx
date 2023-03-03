import { useEffect, useState } from "react"
import { PrimaryButton } from "../component/Button";
import styled from 'styled-components'
import { ProgressBar } from "../component/ProgressBar";
const CreateData = () => {
    const searchParams = new URLSearchParams(window.location.search);

    const [Form, SetForm] = useState(0)
    const FinalFormNumber=6
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
    const [AddEducation, SetAddEducation] = useState({
        Title: "",
        From: "",
        Year: ""
    })

    const [SkillList,SetSkillList] = useState([])
    const [AddSkill,SetAddSkill] = useState({
        Name:"",
        Level:""
    })

    const [ExperienceList, SetExperienceList] = useState([])
    const [AddExperience, SetAddExperience] = useState({
        Job: "",
        Company: "",
        Duration: ""
    })
    function NextClick() {
        if(Form!==FinalFormNumber){
            SetScale('scale-0')
        setTimeout(() => {
            SetForm(Form + 1)
            SetScale('')
        }, 200);
        }
    }

    function BackClick() {
        if(Form!==1){
            SetScale('scale-0')
            setTimeout(() => {
                SetForm(Form - 1)
                SetScale('')
            }, 200);
        }
      
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

    function RemoveEducation(id) {
        SetEducation(Education.map((v, idx) => { if (idx !== id) { return v } }).filter(item => item !== undefined))
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
    function SetAddedEducaton() {
        Education.push(AddEducation)
        SetEducation(Education)
        SetAddEducation({
            Title: "",
            From: "",
            Year: ""
        })
        SetSideBaord(!SideBoard)
    }
    function RemoveSkill(id) {
        SetSkillList(SkillList.map((v, idx) => { if (idx !== id) { return v } }).filter(item => item !== undefined))
    }
    function AddSkillHandler(type, value) {

        var TempData = 
            {
                Name:AddSkill.Name,
                Level:AddSkill.Level
            }
        
        if (type === 'name') {
            TempData.Name = value
        } else if (type === 'level') {
            TempData.Level = value
        } 
        SetAddSkill(TempData)
    }
    function SetAddedSkill() {
       
        SkillList.push(AddSkill)
        SetSkillList(SkillList)
        SetAddSkill({
            Name:"",
            Level:""
        })
        SetSideBaord(!SideBoard)
    }


    function RemoveExperience(id) {
        SetExperienceList(ExperienceList.map((v, idx) => { if (idx !== id) { return v } }).filter(item => item !== undefined))
    }
    function AddExperienceHandler(type, value) {
        
        var TempData = {
            Job: AddExperience.Job,
            Company:AddExperience.Company,
            Duration: AddExperience.Duration
        }
        if (type === 'job') {
            TempData.Job = value
        } else if (type === 'company') {
            TempData.Company = value
        } else if (type === 'duration') {
            TempData.Duration= value
        }
        SetAddExperience(TempData)
    }
    function SetAddedExperience() {
       
        ExperienceList.push(AddExperience)
        SetExperienceList(ExperienceList)
        SetAddExperience({
            Job: "",
            Company: "",
            Duration: ""
        })
        SetSideBaord(!SideBoard)
    }
    return (<>

        <div className="flex flex-col w-full max-w-[1920px] h-[60vh] md:max-h-[1920px] mt-[15vh]">
            {/* {"Intro"} */}
          <div className="w-10/12 mx-auto mb-16">
          <ProgressBar FinalFormNumber={FinalFormNumber} Form={Form} />
          </div>
            <div className={"mx-auto w-full transition-all flex flex-col px-10 h-auto mb-10 " + Scale}>
                {Form === 0 && (<>
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
                {Form === 1 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4">
                        <p className="text-lg font-bold mt-5">Alright, How will you introduce your self?</p>
                        <textarea placeholder="About Yourself !!" style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} className="p-2 mx-auto rounded-md h-36 w-96 outline-none bg-[#f5f5fa]" value={AboutMe} onChange={(e) => SetAboutMe(e.target.value)} />
                        <p className="text-center w-full md:w-[40rem] mt-5">Your "Introduction" section should be brief and highlight your key strengths and experiences that make you a great candidate for the job. Focus on showcasing your relevant skills, experience, and achievements in just a few lines.</p>
                    </div>
                </>)}
                {Form === 2 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4">
                        <p className="text-lg font-bold mt-5 mx-32">How to reach you?</p>
                        <InputBox placeholder="Number" value={Contacts.Number} onChange={(e) => AddContacts("number", e.target.value)} />
                        <InputBox placeholder="Email" value={Contacts.Email} onChange={(e) => AddContacts("email", e.target.value)} />
                        <InputBox placeholder="Your Website" value={Contacts.Link} onChange={(e) => AddContacts("link", e.target.value)} />
                    </div>
                </>)}
                {Form === 3 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4 w-4/5 md:w-2/5  ">
                        <p className="text-lg font-bold mt-5 ">Tell us about your Educations</p>
                        <div className="flex gap-2 ">
                            <div className={"flex flex-col gap-5 transition-all " + (SideBoard ? "w-1/2" : "w-full")}>
                                {/* Education items */}
                                {Education.map((item, idx) => (
                                    <div className="w-full  p-2 flex bg-[#f5f5fa] hover:bg-[#f8f8ff] rounded-md transition-all  " style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} >
                                        <div className="mr-auto text-left">
                                            <p className="text-lg font-semibold ">{item.Title}</p>
                                            <p className="">{item.From}</p>
                                            <p className="title-xs">{item.Year}</p>
                                        </div>
                                        <div className="ml-auto my-auto transition-all cursor-pointer" onClick={() => RemoveEducation(idx)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                                {/* Button to toggle SideBoard */}
                                <PrimaryButton onClick={() => SetSideBaord(!SideBoard)} Name={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-8 h-8 transition-all  " + (SideBoard ? "rotate-45" : "")} ><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>} className="w-full transition-all h-12" />
                            </div>
                            {/* Left div that appears when SideBoard is true */}

                            <div className={"transition-all transform  flex flex-col gap-2 " + (SideBoard ? "w-1/2" : "hidden w-0")}>
                                <InputBox placeholder="Title" className="h-10" value={AddEducation.Title} onChange={(e) => AddEducationHandler("title", e.target.value)} />
                                <InputBox placeholder="From" className="h-10" value={AddEducation.From} onChange={(e) => AddEducationHandler("from", e.target.value)} />
                                <InputBox placeholder="Complition Year" className="h-10" value={AddEducation.Year} onChange={(e) => AddEducationHandler("year", e.target.value)} />
                                <PrimaryButton onClick={() => SetAddedEducaton()} Name="Add" className="h-10 w-full transition-all mt-5" />

                            </div>

                        </div>

                    </div>
                </>)}
                {Form === 4 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4 w-4/5 md:w-2/5  ">
                        <div className="mt-5">
                            <p className="text-lg font-bold ">Mentioning your skills always</p>
                            <p className="text-lg font-bold">  give you an edge</p>
                        </div>
                        <div className="flex gap-2 ">
                            <div className={"flex flex-wrap  gap-5 transition-all " + (SideBoard ? "w-1/2" : "w-full")}>
                               
                                {SkillList.map((item, idx) => (
                                    <div className="  p-2 flex gap-5 bg-[#f5f5fa] hover:bg-[#f8f8ff] rounded-md transition-all  h-12 justify-center align-middle items-center" style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} >
                                        <div className="mr-auto text-left">
                                        <p className="font-semibold ">{item.Name} <span className="font-normal ml-2 ">{item.Level}%</span> </p>
                                           
                                          
                                        </div>
                                        <div className="ml-auto my-auto transition-all cursor-pointer" onClick={() => RemoveSkill(idx)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                                {/* Button to toggle SideBoard */}
                                <PrimaryButton onClick={() => SetSideBaord(!SideBoard)} Name={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5 transition-all  " + (SideBoard ? "rotate-45" : "")} ><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>} className=" transition-all h-4" />
                           
                            </div>
                            {/* Left div that appears when SideBoard is true */}

                            <div className={"transition-all transform  flex flex-col gap-2 " + (SideBoard ? "w-1/2" : "hidden w-0")}>
                                <InputBox placeholder="Skill" className="h-10" value={AddSkill.Name} onChange={(e) => AddSkillHandler("name", e.target.value)} />
                                <InputBox placeholder="Prof. from 0-100" type="number" className="h-10 appearance-none " value={AddSkill.Level} onChange={(e) => AddSkillHandler("level", e.target.value)} />
                                
                                <PrimaryButton onClick={() => SetAddedSkill()} Name="Add" className="h-10 w-full transition-all mt-5" />

                            </div>

                        </div>

                    </div>
                </>)}
                {Form === 5 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4 w-4/5 md:w-2/5  ">
                        <p className="text-lg font-bold mt-5 ">Tell us about your Experiences</p>
                        <div className="flex gap-2 ">
                            <div className={"flex flex-col gap-5 transition-all " + (SideBoard ? "w-1/2" : "w-full")}>
                                {/* Education items */}
                                {ExperienceList.map((item, idx) => (
                                    <div className="w-full  p-2 flex bg-[#f5f5fa] hover:bg-[#f8f8ff] rounded-md transition-all  " style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} >
                                        <div className="mr-auto text-left">
                                            <p className="text-lg font-semibold ">{item.Job}</p>
                                            <p className="">{item.Company} <span className="text-xs font-bold ">({item.Duration})</span></p>
                                        </div>
                                        <div className="ml-auto my-auto transition-all cursor-pointer" onClick={() => RemoveExperience(idx)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                                {/* Button to toggle SideBoard */}
                                <PrimaryButton onClick={() => SetSideBaord(!SideBoard)} Name={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-8 h-8 transition-all  " + (SideBoard ? "rotate-45" : "")} ><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>} className="w-full transition-all h-12" />
                            </div>
                            {/* Left div that appears when SideBoard is true */}

                            <div className={"transition-all transform  flex flex-col gap-2 " + (SideBoard ? "w-1/2" : "hidden w-0")}>
                                <InputBox placeholder="Job" className="h-10" value={AddExperience.Job} onChange={(e) => AddExperienceHandler("job", e.target.value)} />
                                <InputBox placeholder="Company" className="h-10" value={AddExperience.Company} onChange={(e) => AddExperienceHandler("company", e.target.value)} />
                                <InputBox placeholder="From-to (eg :2015-2020,2018-Present)" className="h-10" value={AddExperience.Duration} onChange={(e) => AddExperienceHandler("duration", e.target.value)} />
                                <PrimaryButton onClick={() => SetAddedExperience()} Name="Add" className="h-10 w-full transition-all mt-5" />

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

