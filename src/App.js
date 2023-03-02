import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './component/nav';
import CreateData from './Pages/CreateData';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/' element={<Nav />}>
      <Route path='home' element={<Home/>}/>
      <Route path='createdata' element={<CreateData/>} />
    </Route>
    </Routes>
  );
}

export default App;
