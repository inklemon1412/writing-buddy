import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function LoginPage({setAuth}) {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    /*const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const found = users.some(user => user.username === username && user.password === password);
    



    if (found) {
        setAuth(found);
        navigate("/notes", {replace: true});
    } else{
        alert("You need to be logged in to view this page!");
    }*/
   
   

    const logInUser = () => {
        if(username.length === 0) {
            alert("Come up with a username!");
        }
        else if(password.length === 0) {
            alert("Must have a password!");
        }
        else{
            axios.post('http://127.0.0.1:5000/login', {
                username: username,
                password: password
            })
            .then(function (response) {
                console.log(response);
                navigate("/");
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid Credentials");
                }
            });
        }
    }
    return (
        <>
            
            <div className="personal-top">
               <p className="lead fw-normal mb-0 me-3">Log Into Your Account</p>
               </div>
               <br />
                 
                  <div className="login-form">
                    <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid username" />
                    <label className="form-label" for="form3Example3">Username</label>
                  </div>
                  <div className="login-form">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                    <label className="form-label" for="form3Example4">Password</label>
                  </div>
                  <div className="login-form-bottom">
                    <button onClick={logInUser} >Login</button>
                  </div>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register" className="link-danger">Register</a></p>
                
                       
                    </>
                
                
           
    );
}

export default LoginPage