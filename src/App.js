import Navbar from './components/Navbar';
import Home from './Pages/HomePage/Home';
import About from './Pages/About';
import Login from './Pages/Login/';
import Signup from './Pages/Signup';
import LogOut from './Pages/LogOut';
import UserPage from './Pages/UserPage';
import ContactUs from './Pages/ContactUs';
import LocationPage from './Pages/LocationPage';
import StagePage from './Pages/StagePage';
import Footer from './Pages/Footer/footer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { tokenFetch } from './utils';
import { getLocationData } from "./utils/getContent";

function App() {
  const [user, setUser] = useState();
  const [locationData, setLocationData] = useState();
  const [locationID,setLocationID] =useState(0);
  const [stageID,setStageID] = useState (1);
  const [isLoading, setIsLoading] = useState(false);

useEffect(()=>{
  tokenFetch(setUser);
 // setStageID(1);
 // setLocationID(0);
},[])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route 
            exact path="/"
            element={<Home />}
          />
          <Route
            exact path="/about"
            element={<About />}
          />
          <Route
            exact path="/login"
            element={<Login user={user} setUser={setUser} />}
            />
          <Route exact path="/signup"
            element={<Signup />}
            />
          <Route exact path="/logout"
            element={<LogOut />}
            />
          <Route exact path="/userPage"
            element={<UserPage
            user={user} />}
            />
          <Route
            exact path="/contactUs" 
            element={<ContactUs />} 
            />
          <Route
            exact path="/locationPage"
            element={<LocationPage user={user} locationIDParam={locationID} locationSetter={setLocationID} />}
            />
          <Route exact path="/stagepage"
            element={<StagePage user={user} stageID={stageID} setStageID={setStageID} locationIDParam={locationID} locationSetter={setLocationID} />}
            />
        </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
