import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import Test from "./Components/Test";
import Mainpage from "./Pages/Mainpage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import About from "./Pages/About";
import NotePage from "./Pages/NotePage";
import GoalPage from "./Pages/GoalPage";
import CharacterPage from "./Pages/CharacterPage";

function App() {
  const [errorMessage, updateErrorMessage] = useState(null);
  const [isAuth, setIsAuth] = useState(
    () => JSON.parse(localStorage.getItem('auth')) || false
  );

  const setAuth = (value) => {
    setIsAuth(value);
  };

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isAuth));
  }, [isAuth]);
  
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/login" element={<LoginPage setAuth={setAuth} />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/notes" element={ /*isAuth ?*/ <NotePage /> /*: <LoginPage />*/ }></Route>
        <Route path="/goals" element={ /*isAuth ?*/ <GoalPage /> /*: <LoginPage />*/ }></Route>
        <Route path="/characters" element={<CharacterPage />}></Route>
      </Routes>
      
    </div>
  );
  
}

export default App;
