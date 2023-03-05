import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './component/nav';
import CreateData from './Pages/CreateData';
import GenerateResume from './Pages/GenerateResume';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';

function App() {
  const [UserData,SetUserData] = useState(null)

  return (
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/' element={<Nav />}>
      <Route path='home' element={<Home/>}/>
      <Route path='createdata' element={<CreateData GetUserData={(data)=>SetUserData(data)}/>} />
      {UserData&&(<Route path='generateresume' element={<GenerateResume UserData={UserData} />} />)}
    </Route>
    </Routes>
  );
}

export default App;
