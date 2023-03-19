import { useEffect, useState } from "react"
import { PrimaryButton } from "../component/Button";
import styled from 'styled-components'
import { ProgressBar } from "../component/ProgressBar";
import { useNavigate } from "react-router";
const CreateData = (props) => {
    const searchParams = new URLSearchParams(window.location.search);
    const nav = useNavigate()
    const [Form, SetForm] = useState(0)
    const FinalFormNumber = 9
    const [Scale, SetScale] = useState('scale-0')
    const [SideBoard, SetSideBaord] = useState(false)
    const [DataSaved, SetSavedData] = useState(false)
    useEffect(() => {
        SetUserName(localStorage.getItem('Name'))
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

    const [SkillList, SetSkillList] = useState([])
    const [AddSkill, SetAddSkill] = useState({
        Name: "",
        Level: ""
    })

    const [ExperienceList, SetExperienceList] = useState([])
    const [AddExperience, SetAddExperience] = useState({
        Job: "",
        Company: "",
        Duration: "",
        Details: ""
    })
    const [HobbyList, SetHobbyList] = useState([])
    const [Hobby, SetHobby] = useState('')

    const [CertificatesList, SetCertificatesList] = useState([])
    const [Certificates, SetCertificates] = useState('')

    const [SocialsList, SetSocialsList] = useState([])
    const [Socials, SetSocials] = useState({
        Name: "",
        Link: ""
    })
    const [ProjectList, SetProjectList] = useState([])
    const [AddProject, SetAddProject] = useState({
        Title: "",
        Details: "",
        Link: ""
    })
    useEffect(() => {
        SetSideBaord(false)
    }, [Form])
    function NextClick() {
        if (Form !== FinalFormNumber) {
            SetScale('scale-0')
            setTimeout(() => {
                SetForm(Form + 1)
                SetScale('')
            }, 200);
        }
    }

    function BackClick() {
        if (Form !== 0) {
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

    }
    function RemoveSkill(id) {
        SetSkillList(SkillList.map((v, idx) => { if (idx !== id) { return v } }).filter(item => item !== undefined))
    }
    function AddSkillHandler(type, value) {

        var TempData =
        {
            Name: AddSkill.Name,
            Level: AddSkill.Level
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
            Name: "",
            Level: ""
        })

    }


    function RemoveExperience(id) {
        SetExperienceList(ExperienceList.map((v, idx) => { if (idx !== id) { return v } }).filter(item => item !== undefined))
    }
    function AddExperienceHandler(type, value) {

        var TempData = {
            Job: AddExperience.Job,
            Company: AddExperience.Company,
            Duration: AddExperience.Duration,
            Details:AddExperience.Details
        }
        if (type === 'job') {
            TempData.Job = value
        } else if (type === 'company') {
            TempData.Company = value
        } else if (type === 'duration') {
            TempData.Duration = value
        }
        else if (type === 'details') {
            TempData.Details = value
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

    }

    function RemoveHobby(id) {
        SetHobbyList(HobbyList.map((v, idx) => { if (idx !== id) { return v } }).filter(item => item !== undefined))
    }
    function SetHobbies() {
        HobbyList.push(Hobby)
        SetHobbyList(HobbyList)
        SetHobby('')
        //  SetSideBaord(!SideBoard)
    }
    function RemoveCertificates(id) {
        SetCertificatesList(CertificatesList.map((v, idx) => { if (idx !== id) { return v } }).filter(item => item !== undefined))
    }
    function SetCertificate() {
        CertificatesList.push(Certificates)
        SetCertificatesList(CertificatesList)
        SetCertificates('')
        //  SetSideBaord(!SideBoard)
    }
    function RemoveSocials(id) {

        SetSocialsList(SocialsList.map((v, idx) => { if (idx !== id) { return v } }).filter(item => item !== undefined))
    }

    function SetNewSocial(type, value) {

        var TempData = {
            Name: Socials.Name,
            Link: Socials.Link
        }
        if (type === 'name') {
            TempData.Name = value
        } else if (type === 'link') {
            TempData.Link = value
        }
        SetSocials(TempData)
    }
    function AddSocials() {
        if (Socials.Name !== "none" && Socials.Name !== "") {
            SocialsList.push(Socials)
            SetSocialsList(SocialsList)
            SetSocials({
                Name: "",
                Link: ""
            })
        }

    }

    //Projects
    function RemoveProject(id) {
        SetProjectList(ProjectList.map((v, idx) => { if (idx !== id) { return v } }).filter(item => item !== undefined))
    }
    function AddProjectHandler(type, value) {

        var TempData = {
            Title: AddProject.Title,
            Details: AddProject.Details,
            Link: AddProject.Link
        }
        if (type === 'title') {
            TempData.Title = value
        } else if (type === 'details') {
            TempData.Details = value
        } else if (type === 'link') {
            TempData.Link = value
        }
        SetAddProject(TempData)
    }
    function SetAddedProject() {
        ProjectList.push(AddProject)
        SetProjectList(ProjectList)
        SetAddProject({
            Title: "",
            Details: "",
            Link: ""
        })
    }

    const CreateData = () => {
        const UserData = {
            PersonalData: {
                ProfilePic:"",
                FirstName: UserName.split(" ")[0],
                LastName: UserName.split(" ")[1] ? UserName.split(" ")[1] : "",
                Profession: Profession,
                AboutMe: AboutMe,
                Contact: {
                    Phone: Contacts.Number,
                    Email: Contacts.Email,
                    Website: Contacts.Website
                }
            },
            Education: Education,
            Skills: SkillList,
            Hobbies: HobbyList,
            Socials: SocialsList,
            Experience: ExperienceList,
            Certificates: CertificatesList,
            Projects: ProjectList
        }
        props.GetUserData(UserData)
        SetSavedData(true)
    }
    return (<>

        <div className="flex flex-col w-full max-w-[1920px] h-[85vh] md:max-h-[1920px] mt-[15vh]">
            {/* {"Intro"} */}
            <div className="w-10/12 mx-auto mb-16">
                <ProgressBar FinalFormNumber={FinalFormNumber} Form={Form} />
            </div>
            <div className={"mx-auto w-full transition-all flex flex-col px-10 h-auto mb-10 " + Scale}>
                {Form === 0 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4 ">
                        <p className=" text-lg">Welcome, <b> {UserName}</b>, Good to see you today</p>
                        <p className=" text-lg">Let's start Building your Resume !!</p>
                        <p className="text-lg font-semibold mt-5">Tell us your Profession</p>
                        <InputBox placeholder="Designer,Programmer,Artist etc" value={Profession} onChange={(e) => SetProfession(e.target.value)} />
                        <p className="text-center w-full md:w-[40rem] mt-5">Choosing the right profession name for your resume is important for accurately
                            reflecting your skills and experience. Use industry-standard titles, highlight your skills,
                            avoid exaggeration, be specific, and tailor your title to the job.</p>
                    </div>
                </>)}
                {Form === 1 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4">
                        <p className="text-lg font-semibold mt-5">Alright, How will you introduce your self?</p>
                        <textarea placeholder="About Yourself !!" maxLength={350} style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} className="p-2 mx-auto rounded-md h-36 w-96 outline-none bg-[#f5f5fa]" value={AboutMe} onChange={(e) => SetAboutMe(e.target.value)} />
                        <p className="text-center w-full md:w-[40rem] mt-5">Your "Introduction" section should be brief and highlight your key strengths and experiences that make you a great candidate for the job. Focus on showcasing your relevant skills, experience, and achievements in just a few lines.</p>
                    </div>
                </>)}
                {Form === 2 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4">
                        <p className="text-lg font-semibold mt-5 mx-32">How to reach you?</p>
                        <InputBox placeholder="Number" value={Contacts.Number} onChange={(e) => AddContacts("number", e.target.value)} />
                        <InputBox placeholder="Email" value={Contacts.Email} onChange={(e) => AddContacts("email", e.target.value)} />
                        <InputBox placeholder="Your Website" value={Contacts.Link} onChange={(e) => AddContacts("link", e.target.value)} />
                    </div>
                </>)}
                {Form === 3 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4 w-4/5 md:w-3/5  ">
                        <div className="mt-5">
                            <p className="text-lg font-semibold ">What do you do in your free time?</p>
                            <p className="text-lg font-semibold">Tell us about your hobbies</p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <div className=" ml-auto">
                                <PrimaryButton onClick={() => SetSideBaord(!SideBoard)} Name={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5 transition-all  " + (SideBoard ? "rotate-45" : "")} ><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>} className=" transition-all h-4" />
                            </div>
                        </div>
                        <div className="flex gap-2 ">
                            <div className={"flex flex-wrap  gap-5 transition-all " + (SideBoard ? "w-2/3" : "w-full")}>
                                {HobbyList.map((item, idx) => (
                                    <div className="  p-2 flex gap-5 bg-[#f5f5fa] hover:bg-[#f8f8ff] rounded-md transition-all  h-12 justify-center align-middle items-center" style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} >
                                        <div className="mr-auto text-left">
                                            <p className="font-semibold ">{item}</p>
                                        </div>
                                        <div className="ml-auto my-auto transition-all cursor-pointer" onClick={() => RemoveHobby(idx)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                                {/* Button to toggle SideBoard */}

                            </div>
                            {/* Left div that appears when SideBoard is true */}

                            <div className={"transition-all transform  flex flex-col gap-2 " + (SideBoard ? "w-1/3" : "hidden w-0")}>
                                <InputBox placeholder="Hobby" className="h-10" value={Hobby} onChange={(e) => SetHobby(e.target.value)} />

                                <PrimaryButton onClick={() => SetHobbies()} Name="Add" className="h-10 w-full transition-all mt-5" />

                            </div>

                        </div>

                    </div>
                </>)}
                {Form === 4 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4 w-4/5 md:w-3/5  ">
                        <p className="text-lg font-semibold mt-5 ">Tell us about your Educations</p>
                        <div className="flex flex-col gap-2 ">
                            <div className=" ml-auto">
                                <PrimaryButton onClick={() => SetSideBaord(!SideBoard)} Name={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5 transition-all  " + (SideBoard ? "rotate-45" : "")} ><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>} className=" transition-all h-4" />

                            </div>
                        </div>
                        <div className="flex gap-2 ">

                            <div className={"flex flex-col gap-5 transition-all " + (SideBoard ? "w-2/3" : "w-full")}>
                                {/* Education items */}
                                {Education.map((item, idx) => (
                                    <div key={idx} className="w-full  p-2 flex bg-[#f5f5fa] hover:bg-[#f8f8ff] rounded-md transition-all  " style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} >
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
                            </div>
                            {/* Left div that appears when SideBoard is true */}

                            <div className={"transition-all transform  flex flex-col gap-2 " + (SideBoard ? "w-1/3" : "hidden w-0")}>
                                <InputBox placeholder="Title" className="h-10" value={AddEducation.Title} onChange={(e) => AddEducationHandler("title", e.target.value)} />
                                <InputBox placeholder="From" className="h-10" value={AddEducation.From} onChange={(e) => AddEducationHandler("from", e.target.value)} />
                                <InputBox placeholder="Complition Year" className="h-10" value={AddEducation.Year} onChange={(e) => AddEducationHandler("year", e.target.value)} />
                                <PrimaryButton onClick={() => SetAddedEducaton()} Name="Add" className="h-10 w-full transition-all mt-5" />

                            </div>

                        </div>

                    </div>
                </>)}
                {Form === 5 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4 w-4/5 md:w-3/5  ">
                        <div className="mt-5">
                            <p className="text-lg font-semibold ">Mentioning your skills always</p>
                            <p className="text-lg font-semibold">  give you an edge</p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <div className=" ml-auto">
                                <PrimaryButton onClick={() => SetSideBaord(!SideBoard)} Name={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5 transition-all  " + (SideBoard ? "rotate-45" : "")} ><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>} className=" transition-all h-4" />

                            </div>
                        </div>
                        <div className="flex gap-2 ">
                            <div className={"flex flex-wrap  gap-5 transition-all " + (SideBoard ? "w-2/3" : "w-full")}>

                                {SkillList.map((item, idx) => (
                                    <div key={idx} className="  p-2 flex gap-5 bg-[#f5f5fa] hover:bg-[#f8f8ff] rounded-md transition-all  h-12 justify-center align-middle items-center" style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} >
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

                            </div>
                            {/* Left div that appears when SideBoard is true */}

                            <div className={"transition-all transform  flex flex-col gap-4 p-2 " + (SideBoard ? "w-1/3" : "hidden w-0")}>
                                <InputBox placeholder="Skill" className="h-10" value={AddSkill.Name} onChange={(e) => AddSkillHandler("name", e.target.value)} />
                                <InputBox placeholder="Prof. from 0-100" type="number" className="h-10 appearance-none " value={AddSkill.Level} onChange={(e) => AddSkillHandler("level", e.target.value)} />

                                <PrimaryButton onClick={() => SetAddedSkill()} Name="Add" className="h-10 w-full transition-all mt-5" />

                            </div>

                        </div>

                    </div>
                </>)}
                {Form === 6 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4 w-4/5 md:w-3/5  ">
                        <p className="text-lg font-semibold mt-5 ">Tell us about your Experiences</p>
                        <div className="flex flex-col gap-2 ">
                            <div className=" ml-auto">
                                <PrimaryButton onClick={() => SetSideBaord(!SideBoard)} Name={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5 transition-all  " + (SideBoard ? "rotate-45" : "")} ><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>} className=" transition-all h-4" />

                            </div>
                        </div>
                        <div className="flex gap-2 ">
                            <div className={"flex flex-col gap-5 transition-all " + (SideBoard ? "w-2/3" : "w-full")}>

                                {ExperienceList.map((item, idx) => (
                                    <div key={idx} className="w-full  p-2 flex bg-[#f5f5fa] hover:bg-[#f8f8ff] rounded-md transition-all  " style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} >
                                        <div className="mr-auto text-left">
                                            <p className="text-lg font-semibold ">{item.Job}</p>
                                            <p className="">{item.Company} <span className="text-xs font-semibold ">({item.Duration})</span></p>
                                        </div>
                                        <div className="ml-auto my-auto transition-all cursor-pointer" onClick={() => RemoveExperience(idx)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                                {/* Button to toggle SideBoard */}
                            </div>
                            {/* Left div that appears when SideBoard is true */}

                            <div className={"transition-all transform  flex flex-col gap-2 " + (SideBoard ? "w-1/3" : "hidden w-0")}>
                                <InputBox placeholder="Job" className="h-10" value={AddExperience.Job} onChange={(e) => AddExperienceHandler("job", e.target.value)} />
                                <InputBox placeholder="Company" className="h-10" value={AddExperience.Company} onChange={(e) => AddExperienceHandler("company", e.target.value)} />
                                <InputBox placeholder="From-to (eg :2015-2020,2018-Present)" className="h-10" value={AddExperience.Duration} onChange={(e) => AddExperienceHandler("duration", e.target.value)} />
                                <textarea placeholder="Discribe your Experience" maxLength={350} style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} className="p-2 mx-auto rounded-md h-36 w-96 outline-none bg-[#f5f5fa]" value={AddExperience.Details} onChange={(e) => AddExperienceHandler("details", e.target.value)} />

                                <PrimaryButton onClick={() => SetAddedExperience()} Name="Add" className="h-10 w-full transition-all mt-5" />

                            </div>

                        </div>

                    </div>
                </>)}
                {Form === 7 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4 w-4/5 md:w-3/5  ">
                        <div className=" mt-5">
                            <p className="text-lg font-semibold ">Mentioning your projects will</p>
                            <p className="text-lg font-semibold">Make u stand out from others !!</p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <div className=" ml-auto">
                                <PrimaryButton onClick={() => SetSideBaord(!SideBoard)} Name={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5 transition-all  " + (SideBoard ? "rotate-45" : "")} ><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>} className=" transition-all h-4" />

                            </div>
                        </div>
                        <div className="flex gap-2 ">
                            <div className={"flex flex-col gap-5 transition-all " + (SideBoard ? "w-1/2" : "w-full")}>

                                {ProjectList.map((item, idx) => (
                                    <div key={idx} className="w-full  p-2 flex bg-[#f5f5fa] hover:bg-[#f8f8ff] rounded-md transition-all  " style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} >
                                        <div className="mr-auto text-left">
                                            <p className="text-lg font-semibold ">{item.Title}</p>
                                            <p className="">{item.Details}</p>
                                        </div>
                                        <div className="ml-auto my-auto transition-all cursor-pointer" onClick={() => RemoveProject(idx)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                                {/* Button to toggle SideBoard */}
                            </div>
                            {/* Left div that appears when SideBoard is true */}

                            <div className={"transition-all transform  flex flex-col gap-2 " + (SideBoard ? "w-1/2" : "hidden w-0")}>
                                <InputBox placeholder="Title" className="h-10" value={AddProject.Title} onChange={(e) => AddProjectHandler("title", e.target.value)} />
                                <textarea placeholder="Details of your Project!!" style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} className="p-2 mx-auto rounded-md h-36 w-96 outline-none bg-[#f5f5fa]" value={AddProject.Details} onChange={(e) => AddProjectHandler("details", e.target.value)} />
                                <InputBox placeholder="Link" className="h-10" value={AddProject.Link} onChange={(e) => AddProjectHandler("link", e.target.value)} />
                                <PrimaryButton onClick={() => SetAddedProject()} Name="Add" className="h-10 w-full transition-all mt-5" />

                            </div>

                        </div>

                    </div>
                </>)}
                {Form === 8 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4 w-4/5 md:w-3/5  ">
                        <div className="mt-5">
                            <p className="text-lg font-semibold ">Have u achieved something special ? Or Certificates?</p>
                            <p className="text-lg font-semibold">worth mentioning them as well </p>
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <div className=" ml-auto">
                                <PrimaryButton onClick={() => SetSideBaord(!SideBoard)} Name={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5 transition-all  " + (SideBoard ? "rotate-45" : "")} ><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>} className=" transition-all h-4" />

                            </div>
                        </div>
                        <div className="flex gap-2 ">
                            <div className={"flex flex-wrap  gap-5 transition-all " + (SideBoard ? "w-1/2" : "w-full")}>
                                {CertificatesList.map((item, idx) => (
                                    <div className="  p-2 flex gap-5 bg-[#f5f5fa] hover:bg-[#f8f8ff] rounded-md transition-all  h-12 justify-center align-middle items-center" style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} >
                                        <div className="mr-auto text-left">
                                            <p className="font-semibold ">{item}</p>
                                        </div>
                                        <div className="ml-auto my-auto transition-all cursor-pointer" onClick={() => RemoveCertificates(idx)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                                {/* Button to toggle SideBoard */}

                            </div>
                            {/* Left div that appears when SideBoard is true */}

                            <div className={"transition-all transform  flex flex-col gap-2 " + (SideBoard ? "w-1/2" : "hidden w-0")}>
                                <InputBox placeholder="Certificates" className="h-10" value={Certificates} onChange={(e) => SetCertificates(e.target.value)} />

                                <PrimaryButton onClick={() => SetCertificate()} Name="Add" className="h-10 w-full transition-all mt-5" />

                            </div>

                        </div>

                    </div>
                </>)}
                {Form === 9 && (<>
                    <div className="mx-auto text-center flex flex-col gap-4 w-4/5 md:w-3/5  ">
                        <div className="mt-5">
                            <p className="text-lg font-semibold ">Finally , Everyone has some Social Profiles</p>
                            <p className="text-lg font-semibold">Would u like to share them?</p>
                        </div>
                        <div className="flex flex-col gap-4">

                            <div className="w-full   flex bg-[#f5f5fa] hover:bg-[#f8f8ff] rounded-md transition-all  " style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} >
                                <div className="mr-auto flex  flex-grow">
                                    <select className="outline-none appearance-none w-32 bg-transparent  p-2 border-r-2" value={Socials.Name} onChange={(e) => SetNewSocial("name", e.target.value)}>
                                        <option value="none" >Select</option>
                                        <option value="Linkedin">Linkdn</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="Github">Github</option>
                                    </select>
                                    <input placeholder="Link" className="p-2 bg-transparent outline-none flex-grow" value={Socials.Link} onChange={(e) => SetNewSocial("link", e.target.value)} />
                                </div>
                                <div className="ml-auto my-auto transition-all cursor-pointer p-2" onClick={() => AddSocials()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 transition-all  " ><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                                </div>
                            </div>
                            {SocialsList.map((item, idx) => (
                                <div key={idx} className="w-full   flex bg-[#f5f5fa] hover:bg-[#f8f8ff] rounded-md transition-all  " style={{ boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17" }} >
                                    <div className="mr-auto flex  flex-grow">
                                        <select className="outline-none appearance-none w-32 bg-transparent  p-2 border-r-2" disabled>
                                            <option value="">{item.Name}</option>
                                        </select>
                                        <input placeholder="Link" value={item.Link} className="p-2 bg-transparent outline-none flex-grow" />
                                    </div>
                                    <div className="ml-auto my-auto transition-all cursor-pointer p-2" onClick={() => RemoveSocials(idx)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 transition-all rotate-45 " ><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </>)}
            </div>
            {!DataSaved && (<div className="mx-auto mt-auto flex gap-20 mb-10">
                {Form !== 0 && (<PrimaryButton Name="Back" onClick={() => BackClick()} className="w-36" />)}
                {Form === FinalFormNumber ? <PrimaryButton Name="Finish" onClick={() => CreateData()} className=" transition-all" /> : <PrimaryButton Name="Next" onClick={() => NextClick()} className="w-36 transition-all" />}

            </div>)}

            <div className="mx-auto mt-auto flex gap-20 mb-10">
                {DataSaved && (
                    <PrimaryButton Name="Generate Resume" onClick={() => nav('/generateresume')} className="w-36 transition-all" />
                )}
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

